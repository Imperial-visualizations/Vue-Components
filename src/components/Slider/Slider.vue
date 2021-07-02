<template>
    <label for="slider">{{sliderName}}
    <div ref="sliderContainer" id="slider">
        <div class = "sliderGroup">
            <iv-bubble v-if="bubble" :sliderValue="value" :min="min" :max="max" :thumb_width="thumb_width" :value_marker_width="value_marker_width" :colorBubble="color.dark"/>            
            <input type="range" :style="cssColor" :class="[(playSlider)? 'iv-range-play' : 'iv-range']"  v-model.number="value" :min="min" :max="max" :step="step" @mousedown="startDrag"  @mousemove="emitSlider" @mouseup="stopDrag" @change="emitSliderAgain">
            <iv-line-ticks v-if="lineTick" :sliderTicksList="tick_list" :thumb_width="thumb_width" :min="min" :max="max" :key="tick_line_key" />
            <iv-num-ticks v-if="numTick" :sliderTicksList="tick_list" :thumb_width="thumb_width" :min="min" :max="max" :key="tick_num_key"/>
            <iv-button v-if="resetButton" style="height:100%" @click="reset">Reset</iv-button>
            <iv-button v-if="playButton" style="height:100%" @click="togglePlay">
                <span v-if="isPlaying">Pause</span>
                <span v-if="!isPlaying">
                    <span v-if="value>=max">Reset</span>
                    <span v-else>Play</span>
                    </span>
                </iv-button>
        </div>
        <iv-input-button v-if="sliderButtons" :sliderValue="value" :playSlider="playSlider" :buttonInput="buttonInput" :min="min" :max="max" :button_step_init="button_step_init" @inputButtonClicked="update_val_button"/>
    </div>
    </label>
</template>
<script>
import lineTicksComp from './lineTicks.vue';
import NumTicksComp from './numTicks.vue';
import BubbleComp from './bubble.vue';
import InputButton from './inputButton.vue';
import Theme from '@/Theme.js';
import Button from '../Button/Button.vue';
import {eventBus} from "@/buses/eventBus";
export default {
    name:"iv-slider",
    components: {
        "iv-line-ticks":lineTicksComp,
        "iv-num-ticks":NumTicksComp,
        "iv-bubble":BubbleComp,
        "iv-input-button":InputButton,
        "iv-button":Button
    },
    props:{
        name:{
            type:String,
            default: "Slider Name"
        },
        bubble:{
            type:Boolean,
            default:true
        },
        sliderButtons:{
            type:Boolean,
            default:false
        },
        buttonInput:{
            type:Boolean,
            default:false
        },
        lineTick:{
            type:Boolean,
            default:false
        },
        numTick:{
            type:Boolean,
            default:true
        },
        playSlider:{
            type:Boolean,
            default:false
        },
        min:{
            type:Number,
            default:-1
            },
        max:{
            type:Number,
            default:1
            },
        step:{
            type:Number,
            default:0.01
            },
        init_val:{
            type:Number,
            default:-1
            },
        button_step_init:{
            type:Number,
            default:0.01
        },
        tick_decimals:{
            type:Number,
            default:0
        },
        tick_step:{
            type:Number,
            default:1
        },
        theme:{
            type:String,
            default:"Blue"
        },
        resetButton:{
            type:Boolean,
            default:false, 
        },
        playButton:{
            type:Boolean,
            default:false,
        },
        time_step: {
            type: Number,
            default: 100,
        }
    },
    data(){
        return {
            color: Theme[this.theme],
            id: null,
            value: this.init_val,
            current_step: this.step,
            smallStep:null,
            tick_list: null,
            tick_line_key: null,
            tick_num_key: null,
            dragging: false,
            value_marker_width: 25,//same as the width of the marker showing the value
            thumb_width: 18,//same as the width of the range slider thumb 
            sliderName: this.name,
            playButtonState: "Play",
            isPlaying: false,
            timer: null,
        }
    },
    methods:{  
        update_val_button(e){
            //console.log(e);
            this.value = e;
        },
        calc_ticks(){
            let tick_list = [];
            for(let i=this.min; i <= this.max; i+=this.tick_step){
                tick_list.push({id: this.id.toString() + "_" + i.toString(), value: i.toFixed(this.tick_decimals)});
            }
            console.log(tick_list)
            return tick_list
        },
        startDrag(){
            this.dragging = true;
        },
        emitSlider(){
            if (this.dragging){
                this.$emit("sliderChangedbyDragging",this.value);
            }
        },
        stopDrag(){
            this.dragging = false;
        },
        reset(){
            this.value = this.min;
            this.$emit("click",this.value);
        },
        emitSliderAgain(){
            this.$emit("sliderChangedbyClick",this.value);

        },
        togglePlay() {
            this.isPlaying = !this.isPlaying;
        },
        startSlider() {
            this.timer = setInterval(() => {
                if (this.value < this.max) {
                    this.value += this.step;
                    this.value = Math.round(this.value * 100) / 100;
                    this.$emit("sliderChangedbyPlay",this.value);
                }              
            }, this.time_step);
        },
        stopSlider() {
            clearInterval(this.timer);
            this.isPlaying = false;
        }       
    },
    computed:{
        cssColor(){
            return {'--primary-color': this.color.main,
                    '--secondary-color': this.color.dark
            }
        },
    },

    mounted () {
        this.id = this._uid;
        //this.min_step_size();
        this.tick_list = this.calc_ticks(); 
        this.tick_line_key = "tick_line_" + this._uid;
        this.tick_num_key = "tick_num_" + this._uid;


        eventBus.$on("reset-data", data => {
            console.log(data);
            
            this.value=this.init_val;
        })
    },
    watch:{
        current_step:function(){
            this.tick_list = this.calc_ticks();
        },
        tick_decimals:function(){
            this.tick_list = this.calc_ticks();
        },
        min:function(){
            //this.min_step_size();
            this.tick_list = this.calc_ticks();
        },
        max:function(){
            //this.min_step_size();
            this.tick_list = this.calc_ticks();
        },
        isPlaying:function(){
            // console.log(`${this.isPlaying}`);
            if (this.isPlaying) {
                if (this.value >= this.max) {
                    this.reset();
                    this.isPlaying = !this.isPlaying;
                }
                this.startSlider();
            } else {
                this.stopSlider();
            }            
        },
        value:function(){
            if (this.value >= this.max) {
                this.stopSlider();
            }
        }
    }
}
</script>

<style lang="scss">
@import "src/globals.scss";
.sliderGroup{
    position: relative;
    width:90%;
    margin:auto;
}
.iv-range{
    -webkit-appearance: none;
    margin: 0px;
    width: 100%;
    height: 20px;
    border-radius: 10px;
    outline:none;
}
.iv-range-play{
    -webkit-appearance: none;
    margin: 0px;
    width: 100%;
    height: 20px;
    border-radius: 10px;
    outline:none;
}
/* removing input range track defualt for chrome, mozilla and IE - NON PLAY*/
.iv-range::-webkit-slider-runnable-track{
    -webkit-appearance: none;
    height: 20px;
    border-radius: 10px;
    background-color: var(--primary-color);
}
.iv-range::-moz-range-track{
    height: 20px;
    border-radius: 10px;
    background-color: var(--primary-color);
}
.iv-range::-ms-track{
    height: 20px;
    border-radius: 10px;
    background-color: var(--primary-color);
}
/* removing input range track defualt for chrome, mozilla and IE - PLAY*/
.iv-range-play::-webkit-slider-runnable-track{
    -webkit-appearance: none;
    height: 20px;
    border-radius: 10px;
    background-color: var(--primary-color);
}
.iv-range-play::-moz-range-track{
    height: 20px;
    border-radius: 10px;
    background-color: var(--primary-color);
}
.iv-range-play::-ms-track{
    height: 20px;
    border-radius: 10px;
    background-color: var(--primary-color);
}
/* slider thumb css - NON PLAY */
.iv-range::-webkit-slider-thumb{
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: var(--secondary-color);
  overflow: visible;
  cursor: pointer;
}
.iv-range::-moz-range-thumb{
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: var(--secondary-color);
  overflow: visible;
  cursor: pointer;
}
.iv-range::-ms-thumb{
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color:  var(--secondary-color);
  overflow: visible;
  cursor: pointer;
}
/* slider thumb css - PLAY */
.iv-range-play::-webkit-slider-thumb{
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color:  var(--secondary-color);
  overflow: visible;
  cursor: pointer;
}
.iv-range-play::-moz-range-thumb{
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color:  var(--secondary-color);
  overflow: visible;
  cursor: pointer;
}
.iv-range-play::-ms-thumb{
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color:  var(--secondary-color);
  overflow: visible;
  cursor: pointer;
}
</style>
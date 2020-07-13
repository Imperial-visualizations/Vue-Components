<template>
    <div class = "sliderContainer" ref="sliderContainer">
        <resize-observer @notify="update_step" />

        <div class = "sliderGroup">
            <iv-bubble v-if="bubble" :sliderValue="value" :min="min" :max="max" :thumb_width="thumb_width" :value_marker_width="value_marker_width" />
            <input type="range" :class="[(playSlider)? 'iv-range-play' : 'iv-range']"  v-model.number="value" :min="min" :max="max" :step="step"  @change="emitSlider">

            <iv-line-ticks v-if="lineTick" :sliderTicksList="tick_list" :thumb_width="thumb_width" :min="min" :max="max" :key="tick_line_key" />
            <iv-num-ticks v-if="numTick" :sliderTicksList="tick_list" :thumb_width="thumb_width" :min="min" :max="max" :key="tick_num_key"/>
        </div>

        <iv-input-button v-if="sliderButtons" :sliderValue="value" :playSlider="playSlider" :buttonInput="buttonInput" :min="min" :max="max" :button_step_init="button_step_init" @inputButtonClicked="update_val_button"/>

    </div>
</template>
<script>
import lineTicksComp from './lineTicks.vue'
import NumTicksComp from './numTicks.vue'
import BubbleComp from './bubble.vue'
import InputButton from './inputButton.vue'

import 'vue-resize/dist/vue-resize.css'
import Vue from 'vue'
import VueResize from 'vue-resize'
Vue.use(VueResize)

export default {
    name:"iv-slider",
    components: {
        "iv-line-ticks":lineTicksComp,
        "iv-num-ticks":NumTicksComp,
        "iv-bubble":BubbleComp,
        "iv-input-button":InputButton
    },
    props:{
        bubble:{
            type:Boolean,
            default:false
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
            default:0.0
            },
        max:{
            type:Number,
            default:100.0
            },
        step:{
            type:Number,
            default:10.0
            },
        init_val:{
            type:Number,
            default:50.0
            },
        button_step_init:{
            type:Number,
            default:10.0
        },
        tick_decimals:{
            type:Number,
            default:0
            }
        },
    data(){
        return {
            id: null,
            value: this.init_val,
            current_step: this.step,
            smallStep:null,
            tick_list: null,
            tick_line_key: null,
            tick_num_key: null,
            value_marker_width: 25,//same as the width of the marker showing the value
            thumb_width: 18,//same as the width of the range slider thumb 
            minDiv: [
                {
                    width: 400,
                    ticks: 5,
                    step_size:0
                },
                {
                    width: 300,
                    ticks: 4,
                    step_size:0
                },
                {
                    width: 200,
                    ticks: 3,
                    step_size:0
                },
                {
                    width: 100,
                    ticks: 2,
                    step_size:0
                }
            ],
            maxTicks:{
                ticks: 20,
                step_size:0
            }
        }
    },
    methods:{  
        update_val_button(e){
            console.log(e);
            this.value = e;
        },
        min_step_size(){
            for(let i=0;i< this.minDiv.length; i++){
                this.minDiv[i].step_size = ((this.max - this.min)/this.minDiv[i].ticks);
            }
            this.maxTicks.step_size = ((this.max - this.min)/this.maxTicks.ticks);
        },
        update_step(){

            if(this.$refs.sliderContainer.clientWidth > this.minDiv[0].width){
                this.smallStep = this.maxTicks.step_size
            }
            else{
                for(let i=0;i<this.minDiv.length;i++){
                    if(this.$refs.sliderContainer.clientWidth < this.minDiv[i].width){
                        this.smallStep = this.minDiv[i].step_size
                    } 
                }
            }

            if(this.step < this.smallStep){
                this.current_step = this.smallStep
            }
            else{
                this.current_step = this.step
            }

        },
        calc_ticks(){
            let tick_list = [];
            for(let i=this.min; i <= this.max; i+=this.current_step){
                tick_list.push({id: this.id.toString() + "_" + i.toString(), value: i.toFixed(this.tick_decimals)});
            }
            return tick_list
        },
        emitSlider(){
            this.$emit("sliderChanged",this.value);
        }
    },
    mounted () {
        this.id = this._uid;
        this.min_step_size();
        this.tick_list = this.calc_ticks(); 
        this.tick_line_key = "tick_line_" + this._uid;
        this.tick_num_key = "tick_num_" + this._uid;
    },
    watch:{
        step:{
            handler:"update_step"
        },
        current_step:function(){
            this.tick_list = this.calc_ticks();
        },
        tick_decimals:function(){
            this.tick_list = this.calc_ticks();
        },
        min:function(){
            this.min_step_size();
            this.tick_list = this.calc_ticks();
        },
        max:function(){
            this.min_step_size();
            this.tick_list = this.calc_ticks();
        }
    }
}
</script>

<style>

/* div stuff*/

.sliderContainer{
    position:relative;
    display:flex;
    flex-direction: column;
    height:30vh;
}
.sliderGroup{
    position: relative;
    height:20vh;
}

.iv-range{
    -webkit-appearance: none;
    margin: 0px;
    width: 100%;
    height: 18px;
}
.iv-range-play{
    -webkit-appearance: none;
    margin: 0px;
    width: 100%;
    height: 18px;
}

/* removing input range track defualt for chrome, mozilla and IE - NON PLAY*/
.iv-range::-webkit-slider-runnable-track{
    -webkit-appearance: none;
    height: 20px;
    border: 1px solid black;
    border-radius: 9px;
    background-color:moccasin;
}

.iv-range::-moz-range-track{
    height: 20px;
    border: 1px solid black;
    border-radius: 9px;
    background-color:moccasin;
    
}

.iv-range::-ms-track{
    height: 20px;
    border: 1px solid black;
    border-radius: 9px;
    background-color:moccasin;
}

/* removing input range track defualt for chrome, mozilla and IE - PLAY*/
.iv-range-play::-webkit-slider-runnable-track{
    -webkit-appearance: none;
    height: 20px;
    border: 1px solid black;
    border-radius: 9px;
    background-color:cornsilk;
}

.iv-range-play::-moz-range-track{
    border: 1px solid black;
    height: 20px;
    border-radius: 9px;
    background-color:cornsilk;
}

.iv-range-play::-ms-track{
    border: 1px solid black;
    height: 20px;
    border-radius: 9px;
    background-color:moccasin;
}

/* slider thumb css - NON PLAY */
.iv-range::-webkit-slider-thumb{
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: orange;
  overflow: visible;
  cursor: pointer;
}

.iv-range::-moz-range-thumb{
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: orange;
  overflow: visible;
  cursor: pointer;
}

.iv-range::-ms-thumb{
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: orange;
  overflow: visible;
  cursor: pointer;
}

/* slider thumb css - PLAY */
.iv-range-play::-webkit-slider-thumb{
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: teal;
  overflow: visible;
  cursor: pointer;
}

.iv-range-play::-moz-range-thumb{
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: teal;
  overflow: visible;
  cursor: pointer;
}

.iv-range-play::-ms-thumb{
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: teal;
  overflow: visible;
  cursor: pointer;
}

</style>
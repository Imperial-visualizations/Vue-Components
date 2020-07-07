<template>
    <div class = "sliderContainer" ref="sliderContainer">
        <resize-observer @notify="update_step" />
        <div class = "titleGroup">
            <p v-if="description_val">{{description}}</p>
            <p v-if="sliderValue">{{value}}</p>
        </div>

        <div class = "sliderGroup">
            <iv-bubble v-if="bubble" :sliderValue="value" :min="min" :max="max" :thumb_width="thumb_width" :value_marker_width="value_marker_width" />
            <input type="range" :class="[playSlider ? 'iv-range-play' : 'iv-range']"  v-model.number="value" :min="min" :max="max" :step="step"  @change="emitSlider">

            <iv-line-ticks v-if="lineTick" :sliderTicksList="tick_list" :thumb_width="thumb_width" :key="tick_line_key" />
            <iv-num-ticks v-if="numTick" :sliderTicksList="tick_list" :thumb_width="thumb_width" :key="tick_num_key" />

        </div>

        <div v-if="sliderButtons">
            <template v-if="playSlider">
                <button  class = "minusStep" @click="decreaseValue">Prev</button>
                <button class = "addStep" @click="increaseValue">Next</button>
            </template>
            <template v-else>
                <button class = "minusStep" @click="decreaseValue">- {{button_step}}</button>
                <button class = "addStep" @click="increaseValue">+ {{button_step}}</button>
                <input v-if="buttonInput" type="text" class = "buttonInput" v-model.number="button_step">
            </template>
        </div>

    </div>
</template>
<script>
import lineTicksComp from './line-ticks.vue'
import NumTicksComp from './num-ticks.vue'
import BubbleComp from './bubble-comp.vue'

import 'vue-resize/dist/vue-resize.css'
import Vue from 'vue'
import VueResize from 'vue-resize'
Vue.use(VueResize)

export default {
    name:"iv-slider",
    components: {
        "iv-line-ticks":lineTicksComp,
        "iv-num-ticks":NumTicksComp,
        "iv-bubble":BubbleComp
    },
    props:{
        sliderValue:{
            type:Boolean,
            default:false
        },
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
        description_val:{
            type:Boolean,
            default:false
        },
        description:{
            type:String,
            default:"helloWorld"
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
            button_step: this.step,
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
            ]
        }
    },
    methods:{  
        decreaseValue(){
            if(this.value - this.button_step >= this.min){
                this.value = this.value - this.button_step;
            }
            else{
                this.value = this.min;
            }
        },
        increaseValue(){
            if(this.value + this.button_step <= this.max){
                this.value = this.value + this.button_step;
            }
            else{
                this.value = this.max;
            }
        },
        min_step_size(){
            for(let i=0;i< this.minDiv.length; i++){
                this.minDiv[i].step_size = ((this.max - this.min)/this.minDiv[i].ticks);
            }
        },
        update_step(){
            if(this.$refs.sliderContainer.clientWidth > this.minDiv[0].width){
                this.current_step = this.step
                return
            }
            for(let i=0;i< this.minDiv.length; i++){

                if(this.$refs.sliderContainer.clientWidth < this.minDiv[i].width){
                    this.smallStep = this.minDiv[i].step_size
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
            this.tick_list = this.calc_ticks();
        },
        max:function(){
            this.tick_list = this.calc_ticks();
        }
    }
}
</script>

<style>

/* div stuff*/
.titleGroup{
    display:flex;
    flex-direction: row;
}

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

/* actual slider colours */
.iv-range{
    -webkit-appearance: none;
    margin: 0px;
    width: 100%;
    height: 18px;
}
.iv-range-play{
    margin: 0px;
    width: 100%;
    height: 18px;
}

.iv-range::-webkit-slider-runnable-track{
    -webkit-appearance: none;
    border: 1px solid black;
    border-radius: 9px;
    background-color:moccasin;
}

.iv-range-play::-webkit-slider-runnable-track{
    -webkit-appearance: none;
    border: 1px solid black;
    border-radius: 9px;
    background-color:cornsilk;
}

/* thumb css (dont know if this needs to be specified)*/
.iv-range::-webkit-slider-thumb{
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 10px;
  background-color: hsl(50, 100%, 50%);
  overflow: visible;
  cursor: pointer;
}

.iv-range-play::-webkit-slider-thumb{
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border:none;
  border-radius: 9px;
  background: #FFAC4D;
  overflow: visible;

  
}



/* stylying for ticks */
datalist{
    background-color: black;
    width: 100%;
    height: 20px;
    top: 20px;
}

option{
    background-color: black;
    height: 20px;
    top: 20px;
}

/* Special styling for firefox to get the ticks*/
.iv-range::-moz-range-track, .iv-range-play::-moz-range-track {
  padding: 0 10px;
  background: repeating-linear-gradient(to right, 
    #ccc, 
    #ccc 10%, 
    #000 10%, 
    #000 11%, 
    #ccc 11%, 
    #ccc 20%);
}

</style>
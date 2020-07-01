<template>
    <div class = "sliderContain">
        <div class = "titleGroup">
            <p v-if="description_val">{{description}}</p>
            <p v-if="sliderValue">{{value}}</p>
        </div>

        <div class = "sliderGroup">
            <iv-bubble v-if="bubble" :sliderValue="value" :min="min" :max="max" :thumb_width="thumb_width" :value_marker_width="value_marker_width" />
            <input type="range" :class="[playSlider ? 'iv-range-play' : 'iv-range']"  v-model.number="value" :min="min" :max="max" :step="step" :disabled="disabled" @change="emitSlider">

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

export default {
    name:"iv-slider",
    components: {
        "iv-line-ticks":lineTicksComp,
        "iv-num-ticks":NumTicksComp,
        "iv-bubble":BubbleComp
    },
    props:{
        disabled:{
            type:Boolean,
            default:false
        },
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
        minNumTick:{
            type:Number,
            default:5.0
            },
        minWindowWidth:{
            type:Number,
            default:600.0
        },
        init_val:{
            type:Number,
            default:50.0
            }
        },
    data(){
        return {
            id: null,
            value: this.init_val,
            current_step: this.step,
            button_step: this.step,
            tick_list: null,
            tick_line_key: null,
            tick_num_key: null,

            value_marker_width: 25,//same as the width of the marker showing the value
            thumb_width: 18//same as the width of the range slider thumb 
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
        update_step(){
            console.log("BRUHH",this.step, this.smallStep,this.current_step);
            if((window.innerWidth < this.minWindowWidth) && (this.step < this.smallStep)){
                this.current_step = this.smallStep
                console.log("SICKK");

            }
            else{
                this.current_step = this.step
            } 
        },
        calc_ticks(){
            console.log(window.innerWidth);
            console.log("hey",this.smallStep,this.step,this.current_step);
            let tick_list = [];
            for(let i=this.min; i <= this.max; i+=this.current_step){
                tick_list.push({id: this.id.toString() + "_" + i.toString(), value: i});
            }
            return tick_list
        },
        emitSlider(){
            this.$emit("sliderChanged",this.value);
        }
    },
    mounted () {
        this.id = this._uid;
        this.smallStep = (this.max-this.min)/this.minNumTick;

        this.tick_list = this.calc_ticks();
        window.addEventListener("resize",this.update_step);    

        this.tick_line_key = "tick_line_" + this._uid;
        this.tick_num_key = "tick_num_" + this._uid;
    },
    watch:{
        current_step:function(){
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

.sliderContain{
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
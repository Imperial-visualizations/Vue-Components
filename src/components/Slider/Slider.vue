<template>
    <div class = "sliderContain">

        <p v-if="sliderValue">{{value}}</p>
        
        <div class = "sliderGroup">
            <div v-if="bubble" ref="SliderValueMarkerRef" class="sliderValueMarker" :style="moveLabel" ><p>{{value}}</p></div>
            <input type="range" class = "iv-range"  v-model.number="value" :min="min" :max="max" :step="step" list="steplist" :disabled="disabled" @change="emitSlider"> 
            <datalist v-if="sliderTicks" id="steplist">
                <option v-for="tick in tick_list" :key="tick.id">{{tick.value}}</option>
            </datalist>

        </div>

        <div v-if="sliderButtons">
            <button class = "minusStep" @click="decreaseValue">- {{button_step}}</button>
            <button class = "addStep" @click="increaseValue">+ {{button_step}}</button>
            <input v-if="buttonInput" type="text" class = "buttonInput" v-model.number="button_step">
        </div>

    </div>
</template>
<script>
export default {
    name:"iv-discrete-slider-fixed",
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
        sliderTicks:{
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
            }
        },
    data(){
        return {
            id: null,
            value: this.init_val,
            button_step: this.step,
            tick_list: null
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
        calc_ticks(){
            let tick_list = [];
            console.log("YOO",this.min)
            for(let i=this.min; i <= this.max; i+=this.step){
                console.log(toString(this.id) + "_" + toString(i));
                tick_list.push({id: toString(this.id) + "_" + toString(i), value: i});
            }
            return tick_list
        },
        emitSlider(){
            this.$emit("sliderChanged",this.value);
        }
    },
    computed:{
        moveLabel(){
            let ratio = (this.value - this.min)/(this.max - this.min);
            let value_marker_width = 25;//same as the width of the marker showing the value
            let thumb_width = 15;//same as the width of the range slider thumb 
            return {
                left: `calc(${ratio*100}% - ${value_marker_width/2}px + ${(0.5 - ratio)*thumb_width}px)`
            }
        }
    },
    watch: { 
        "step": {
            handler: "calc_ticks",
            immediate: true
        }
    },
    mounted () {
        this.id = this._uid,
        console.log("heeyy")
        this.tick_list = this.calc_ticks();
    }
}
</script>

<style>
.sliderContain{
    display:flex;
    flex-direction: column;
    height:30vh;
}
.sliderGroup{
    position: relative;
    height:20vh;
}
.iv-range{
    width: 100%;
    margin: 0px;
}

.sliderValueMarkerDisabled{
  pointer-events: none;
  margin: 0;

  width: 25px;
  height: 25px;
  
  border-radius: 50% 50% 0 50%;
  background-color:#999;

  text-align: center;
  line-height: 0px;

  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  
  position: absolute;
  top: -35px;
}

.sliderValueMarker {
  pointer-events: none;
  margin: 0;

  width: 25px;
  height: 25px;
  
  border-radius: 50% 50% 0 50%;
  background-color:aquamarine;

  text-align: center;
  line-height: 0px;

  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  
  position: absolute;
  top: -35px;
}

.sliderValueMarker p {
  font-size: 14px;
  text-align: center;

  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.sliderValueMarkerDisabled p {
  font-size: 14px;
  text-align: center;

  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

/* Special styling for WebKit/Blink */

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
}
/* Special styling for firefox to get the ticks*/
input[type="range"]::-moz-range-track {
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
<template>
  <div id="sliderblock" class="slider-wrapper" :color="color" :style="colorStyling">
    <div class="title">{{sliderName}}</div>
    <iv-slider :style="{top: '40px', left: '10px', width: '330px', height:'70px'}" :bubble="bubble" :max="max" :min="min" :step="step" :init_val="init_val" :tick_decimals="tick_decimals" :lineTick="true" :numTick="true" :playSlider="playSlider" :colors="color"/>
    <button v-if="helpButtonActivated" class="helpButton" @click="buttonClick"> ? </button>
    <p class="unit">Unit</p>
    <div class="unitBlock">{{unit}}</div>
  </div>
</template>

<script>
import guidanceBus from "buses/guidanceBus.js"
import Slider from "../Slider/Slider.vue"
export default {
  name: 'iv-slider-block',
  components:{
      "iv-slider": Slider
  },
  props: {
    bubble:{
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
    tick_decimals:{
      type:Number,
      default:0
    },
    color: {
      type: Array,
      required: true,
      default: ['#133f6f','#022b57','#80aad1']
    },
    sliderName: {
      type: String,
      required: true,
      default: 'Slider Name'
    },
    unit:{
      type: String,
      required: true,
      default: 'Kg'
    },
    guidanceIdentifier:{
      type:String
    },
    helpButtonActivated:{
      type:Boolean,
      default: true
    }
  },
  computed: {
    colorStyling(){
      return{
        '--prim-color': this.color[0],
        '--sec-color': this.color[1],
        '--tert-color': this.color[2]
      }
    }
  },
  methods:{
        buttonClick(){
           guidanceBus.$emit("guidance-button-click", this.guidanceIdentifier);
        },
  },
}
</script>

<style>
.slider-wrapper{
  position: relative;
  display: block;
  width:350px;
  height: 125px;
  border: 4px solid;
  border-color: var(--prim-color);
  background-color: var(--tert-color);
}
.title{
  position: absolute;
  color: var(--prim-color);
  font-family: sans-serif;
  font-size: 15px;
  text-align:left;
  top: 1px;
  left: 3px;
  width: 100px;
  height: 20px;
}
.helpButton{
  position:absolute;
  top: 1px;
  left: 310px;
  padding:0;
  cursor: pointer;
  background-color: var(--prim-color);
  color: white;
  border: 2px solid;
  border-color: var(--tert-color);
  border-radius: 15px 15px 15px 15px;
  width: 30px;
  height: 30px;
  outline: none;
  font: bold;
  font-size: 25px;
  text-align: center;
}
.unitBlock{
  position:absolute;
  width: 40px;
  height: 15px;
  background-color: var(--prim-color);
  bottom: 0px;
  right: 0px;
  color: white;
  font: bold;
  font-size: 10px;
  text-align: center;
  line-height: 10px;
}
.unit{
  position:absolute;
  bottom: 5px;
  left:310px;
  color: var(--prim-color);
  font-size: 8px;
}

</style>
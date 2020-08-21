<template>
    <div id="sliderblock" class="slider-wrapper" :color="color" :style="colorStyling">

      <div class = "iv-slider-block-header" >
        <div class="iv-slider-block-title">{{sliderName}}</div>
        <div v-if="helpButtonActivated" class="iv-slider-block-helpButton" @click="buttonClick"><div class="iv-slider-block-helpButton-text">?</div> </div>
      </div>

      <div class = "iv-slider-block-body">
        <iv-slider :bubble="bubble" :max="max" :min="min" :step="step" :init_val="init_val" :tick_decimals="tick_decimals" :lineTick="true" :numTick="true" :playSlider="playSlider" :colorSlider="colorBlock"/>
      </div>

      <div class = "iv-slider-block-footer">
        <p class="iv-slider-block-unit">Unit</p>
        <div class="iv-slider-block-unitBlock"><div class = "iv-slider-block-unitBlock-text">{{unit}}</div></div>
      </div>

    </div>
</template>

<script>
import guidanceBus from "@/buses/guidanceBus";
import Slider from "../Slider/Slider.vue";
import colorStore from "@/buses/colorStore";
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
    colorBlock: {
      type: String,
      required: true,
      default: "green"
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
  data(){
    return{
        color: colorStore.color_full_list[this.colorBlock],
    };
  },
  computed: {
    colorStyling(){
      return{
        '--prim-color': this.color.shade_500,
        '--sec-color': this.color.shade_200,
        '--tert-color': this.color.shade_900
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

<style lang="scss">
@import "src/globals.scss";
.slider-wrapper{
  box-sizing: border-box; 
  position: relative;
  width:100%;
  height:100%;

  max-width: 800px;
  min-width: 200px;
  border: 4px solid;
  border-color: var(--prim-color);
  background-color: var(--tert-color);
}

.iv-slider-block-header{
    position: relative;
    margin: 2px 2px 4px 2px;
    min-height: 1.2rem;
    top:0;
}
.iv-slider-block-body{
    position:relative;
    //padding: 0px 7px 0px 7px;
    //margin: 0px 2px 0px 2px;
}
.iv-slider-block-footer{
    position: absolute;
    bottom:0;
    right:0;
    min-height: 1.2rem;
}

.iv-slider-block-title{
  position:relative;
  float:left;
  color: white;
  padding: 2px 0px 0px 5px;
  color: var(--sec-color);
  font-family: sans-serif;
  font-size: 15px;
  text-align: center;
}
.iv-slider-block-helpButton{
  position:absolute;
  top: 0px;
  right: 0px;
  cursor: pointer;
  background-color: var(--prim-color);
  color: white;
  border: 1px solid;
  border-color: var(--tert-color);
  border-radius: 100% 100% 100% 100%;
  width: 24px;
  height: 24px;
}
.iv-slider-block-helpButton-text{
  font-size: 24px;
  text-align: center;
  transform:translateY(-1px);
}

.iv-slider-block-unit{
  position: absolute;
  bottom:0px;
  right:35px;
  color: var(--prim-color);
  font-size: 14px;
  margin:0px 0px 0px 0px;
  padding:0px 0px 0px 0px;
}

.iv-slider-block-unitBlock{
  position:absolute;
  bottom:0px;
  right:0px;
  margin:0px 0px 0px 0px;
  padding:2px 0px 0px 0px;
  width: 30px;
  background-color: var(--prim-color);
}
.iv-slider-block-unitBlock-text{
  font-size: 14px;
  text-align: center;
  color: white;
}


</style>
<template>
    <div class="sliderGroup">
        <div ref="SliderValueMarker" class="sliderValueMarker" :style="moveLabel"><p>{{value}}</p></div>
        <input type="range" ref="ValueSlider" class = "iv-range-value-slider"  v-model="value" :min="min" :max="max" :step="step">
    </div>
</template>
<script>
export default {
    name:"iv-range-value-slider",
    props:{
        min:{
            type:Number,
            default:0
            },
        max:{
            type:Number,
            default:10
            },
        step:{
            type:Number,
            default:0.1
            },
        init_val:{
            type:Number,
            default:5
            }
        },
    data(){
        return {
            value: this.init_val,
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
    }
}

</script>

<style>
.sliderGroup{

    position: relative;
}
.iv-range-value-slider{
    width: 100%;
    margin: 0px;
}

.sliderValueMarker {
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

.sliderValueMarker p {
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

</style>
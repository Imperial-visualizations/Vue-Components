<template>
    <div>
        <div  ref="SliderValueMarkerRef" class="sliderValueMarker" :style="moveLabel" ><p>{{sliderValue}}</p></div>
    </div>
</template>
<script>
export default {
    name:"iv-bubble",
    props:["sliderValue","thumb_width","value_marker_width","min","max","colors"],
    computed:{
        moveLabel(){
            let ratio = (this.sliderValue - this.min)/(this.max - this.min);
            return {
                left: `calc(${ratio*100}% - ${this.value_marker_width/2}px + ${(0.5 - ratio)*this.thumb_width}px)`,
                '--secondary-color': this.colors[1]
            }
        }
    }
}
</script>
<style>
/*Marker ie bubble */
.sliderValueMarker {
  margin: 0;
  width: 25px;
  height: 25px;
  border-radius: 50% 50% 0 50%;
  background-color: var(--secondary-color);
  text-align: center;
  line-height: 0px;
  transform: rotate(45deg);
  position: absolute;
  top: -35px;
}
.sliderValueMarker p{
  font-size: 14px;
  text-align: center;
  transform: rotate(-45deg);
}
</style>

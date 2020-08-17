<template>
    <div class="hi-line">
        <span v-for="(tick,index) in sliderTicksList" :key="tick.id" class="tick_line" :style="moveLineTick(tick.value,index)"></span>
    </div>
</template>

<script>
export default {
    name:"iv-line-ticks",
    props:["sliderTicksList","thumb_width","min","max"],
    data(){
        return{
            number_width: 1//needs to be the same as the width of the span
        }
    },
    methods:{
        moveLineTick(tick_value,index){
            let ratio = (tick_value - this.min)/(this.max - this.min);
            return{
                left:`calc(${ratio*100}% - ${index*this.number_width + this.number_width/2}px + ${(0.5 - ratio)*this.thumb_width}px)`
            }
        }
    }
}
</script>

<style>
.hi-line{
position:relative;
height:10px;
}
.tick_line{
    display: inline-block;
    position: relative;
    text-align: center;
    background: gray;
    height: 10px;
    width: 1px;
    margin-bottom: 10px;
    margin-top: -10px;
}
</style>
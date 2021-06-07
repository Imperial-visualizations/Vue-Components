<template>
    <div style="position:relative">
        <span v-for="(tick,index) in sliderTicksList" :key="tick.id" class="tick_num" :style="moveTick(tick.value,index)">{{tick.value}}</span>
    </div>
</template>

<script>
export default {
    name:"iv-num-ticks",
    props:["sliderTicksList","thumb_width","min","max"],
    data(){
        return{
            number_width: 14//needs to be the same as the width of the span
        }
    },
    methods:{
        moveTick(tick_value,index){
            let ratio = (tick_value - this.min)/(this.max - this.min);
            return{
                left:`calc(${ratio*100}% - ${index*this.number_width + this.number_width/2}px + ${(0.5 - ratio)*this.thumb_width}px)`
            }
        }
    }
}
</script>

<style lang="scss">
@import "src/globals.scss";
.tick_num{
    display: inline-block;
    position: relative;
    text-align: center;
    //height: 10px;
    width: 14px;
    font-size: 14px;
    //margin-bottom: 10px;
}
</style>
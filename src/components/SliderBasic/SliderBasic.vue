<template>
    <div class = "basicSlider">
        <input type="range" class = "iv-range-slider"  v-model="value" :min="min" :max="max" :step="step">
        <div class = valueText>{{value}} </div>
    </div>
</template>
<script>
export default {
    name:"iv-range",
    props:{
        min:{
            type:Number,
            default:0
            },
        max:{
            type:Number,
            default:100
            },
        step:{
            type:Number,
            default:1
            },
        init_val:{
            type:Number,
            default:50
            },
        },
    data(){
        return {
            value: this.init_val
        }
    }
}
</script>

<style>
.basicSlider{
    width: 100%;
}
.valueText{
    display:inline-block;
    width: 1vw;
    left: 1vw;
    border: 1px solid black;
    text-align: center;
}
.iv-range-slider{
    display:inline-block;
    width: 30vw;
    left: 10vw;
    right: 10vw;
}
</style>
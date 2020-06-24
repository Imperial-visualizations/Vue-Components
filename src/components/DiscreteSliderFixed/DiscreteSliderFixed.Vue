<template>
    <div class = "basicSlider">
        <p>{{value}} </p>
        <input type="range" class = "iv-discrete-slider-fixed"  v-model="value" :min="min" :max="max" :step="step">
    </div>
</template>
<script>
export default {
    name:"iv-discrete-slider-fixed",
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
    display:flex;
}
</style>
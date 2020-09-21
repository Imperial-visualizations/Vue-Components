<template>
    <div class="iv-meter">
        <span class="iv-meter-bar" :style="{'width':widthPercentage}"></span>
    </div>
</template>
<script>
export default {
    name:'iv-meter',
    props:{
        min:{
            type:Number,
            required:true
        },
        max:{
            type:Number,
            required:true
        },
        value:{
            type:Number,
            required:true
        }
    },
    mounted(){
        if(this.max < this.min) throw RangeError('The minimum value may not exceed the maximum value')
    },
    computed:{
        boundedValue(){
            return (this.value > this.min)? ((this.value < this.max)? this.value : this.max) : this.min
        },
        widthPercentage(){
            return `${100*(this.boundedValue - this.min)/(this.max - this.min)}%`
        }
    }
}
</script>
<style lang="scss">
.iv-meter{
    width:100%;
    min-height:5px;
    background:#aaa;
    .iv-meter-bar{
        min-height:5px;
        height:100%;
        background:#ff1447;
        display: block;
        text-indent: -9999px;
    }
}
</style>
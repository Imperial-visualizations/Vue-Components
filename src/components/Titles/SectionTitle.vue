<template>
    <div class="iv-section-title" :class="alignmentClass">
        <hr>
        <h2 :class="{'iv-bold':this.bold}"><slot>Default Title</slot></h2>
        <hr>
    </div>
</template>
<script>
export default {
    name:"iv-section-title",
    props:{
        bold:Boolean,
        align:{
            type:String,
            default:'center',
            validator:(value) => ['left','center','right'].indexOf(value) > -1
        }
    },
    computed:{
        alignmentClass(){
            return ['iv-'+this.align];
        }
    }
}
</script>
<style lang="scss">
@import 'src/globals.scss';
.iv-section-title{
    color:$primaryImperialBlue;
    &.iv-left{
        text-align:left;
    }
    &.iv-center{
        text-align:center;
    }
    &.iv-right{
        text-align:right;
    }
    h2 {
        font-weight: 600;
    }
    h2.iv-bold{
        font-weight: 700;
    }
}
</style>
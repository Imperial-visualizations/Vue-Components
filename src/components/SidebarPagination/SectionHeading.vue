<template>
    <div class="iv-section-heading">
        <hr/>
        <div class="iv-section-icon"></div>
        <h2 :class="[`iv-section-heading-${theme}`]">
            <slot/>
        </h2>
        <div class="iv-heading-highlight" v-if="highlight"></div>
    </div>
</template>
<script>
export default {
    name:'iv-section-heading',
    props:{
        icon:{
            type:String
        },
        theme:{
            type:String,
            required:true
        },
        highlight:{
            type:Boolean,
            default:false
        }
    }    
}
</script>
<style lang="scss">
$fontSize:1.25rem;
$circleRadius:1.6rem;
$hPadding:0.35rem;
.iv-section-heading{
    position:relative;
    padding:  $circleRadius - $fontSize/2 0;
    hr {
        border: 5px solid red;
        box-sizing: border-box;
        padding:0;
        margin:0;
        position:absolute;
        width:100%;
        top:calc(50% - 5px);
    }
    .iv-section-icon{
        border-radius: 2rem;
        width:$circleRadius*2;
        height:$circleRadius*2;
        background:red;
        position:absolute; 
        top:calc(50% - #{$circleRadius});
        left: 1rem;
    }
    h2{
        background:lightcoral;
        color:white;
        height:auto;
        width: 50%;
        text-align: center;
        font-size: $fontSize;
        margin:0;
        position:relative;
        left:25%;
        line-height:$fontSize;
        padding: $hPadding 0.2rem;
    }
    .iv-heading-highlight{
        width:100%;
        height:50%;
        top:50%;
        background:lightcoral;
        opacity:0.5;
        z-index:-1;
        position:absolute;
    }
}
</style>
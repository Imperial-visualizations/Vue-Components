<template>
    <div class="iv-section-heading" :style="themeStyling">
        <hr/>
        <div class="iv-section-icon"><v-icon :name="icon" scale="2" /></div>
        <h2 :class="[`iv-section-heading-${theme}`]">
            <slot/>
        </h2>
        <div class="iv-heading-highlight" v-if="highlight"></div>
    </div>
</template>
<script>
import Theme from '@/Theme.js'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
export default {
    name:'iv-section-heading',
    components:{
        'v-icon':Icon
    },
    props:{
        icon:{
            type:String,
            default:"question"
        },
        theme:{
            type:String,
            required:true
        },
        highlight:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            themer:Theme[this.theme] 
        }
    },
    computed:{
        themeStyling(){
            return {
                '--primary-color':this.themer.main,
                '--dark-color':this.themer.dark,
                '--light-color':this.themer.light,
                '--highlight':this.themer.highlight
            }
        }
    }
}
</script>
<style lang="scss">
@import 'src/globals.scss';
$fontSize:1.25rem;
$circleRadius:1.6rem;
$hPadding:0.35rem;
.iv-section-heading{
    position:relative;
    padding:  $circleRadius - $fontSize/2 0;
    hr {
        border: 5px solid var(--dark-color);
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
        background:var(--primary-color);
        position:absolute; 
        top:calc(50% - #{$circleRadius});
        left: 1rem;
        line-height: $circleRadius*2  + 0.2rem;
        text-align: center;
        color:white;
    }
    h2{
        background:var(--primary-color);
        color:$white;
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
        background:var(--highlight);
        z-index:-1;
        position:absolute;
    }
}
</style>
<template>
    <section class="iv-sidebar-section" :class="[`iv-section-${theme}`,{'iv-fill-space':isLast}]" :style="themeStyling">
        <section-heading :icon="icon" :theme="theme" :highlight="highlight">{{title}}</section-heading>
        <div class="iv-sidebar-section-content" :class="{'iv-section-highlight':highlight}">
            <slot>Default text</slot>  
        </div>
    </section>    
</template>
<script>
import SectionHeading from './SectionHeading.vue'
import Theme from "@/Theme.js"
export default {
    name:'iv-sidebar-section',
    components:{
        SectionHeading
    },
    props:{
        theme:{
            type:String,
            default:'Blue'
        },
        title:{
            type:String,
            required:true
        },
        icon:{
            type:String,
            required:true,
            default:'star'
        },
        highlight:{
            type:Boolean,
            default:false
        }
    },
    inject:['addToMenu','sections'],
    data(){
        return {
            position:0,
            themer: Theme[this.theme]
        }
    },
    computed:{
        isLast(){
            if(typeof this.sections !== 'undefined'){
                return this.position === this.sections.length  -1 
            }
            return false;
        },
        themeStyling(){
            return {
                '--primary-color':this.themer.main,
                '--dark-color':this.themer.dark,
                '--light-color':this.themer.light,
                '--highlight':this.themer.highlight
            }
        }
    },
    mounted(){
        this.addToMenu(this.icon,this.title,this.theme,this.$el).then(
            (res) => this.position = res
        )
    }
}
</script>
<style lang="scss">
.iv-sidebar-section{
    position: relative;
    &.iv-fill-space{
        min-height:100%;
        .iv-sidebar-section-content{
            min-height: 100%;
        }
    }
}
.iv-sidebar-section-content{
    padding: 0 1.5rem;
    padding-bottom: 1rem;  

    &.iv-section-highlight{
        background: var(--highlight);
    }
    font-size:1rem;
    line-height: 1.4rem;
}

</style>
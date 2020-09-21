<template>
    <section class="iv-sidebar-section" :class="[`iv-section-${theme}`,{'iv-fill-space':isLast}]">
        <section-heading :icon="icon" :theme="theme" :highlight="highlight">{{title}}</section-heading>
        <div class="iv-sidebar-section-content" :class="{'iv-section-highlight':highlight}">
            <slot>Default text</slot>  
        </div>
  
    </section>    
</template>
<script>
import SectionHeading from './SectionHeading.vue'
export default {
    name:'iv-sidebar-section',
    components:{
        SectionHeading
    },
    props:{
        theme:{
            type:String,
            default:'blue'
        },
        title:{
            type:String,
            required:true
        },
        icon:{
            type:String,
            required:false
        },
        highlight:{
            type:Boolean,
            default:false
        }
    },
    inject:['addToMenu','sections'],
    data(){
        return {
            position:0
        }
    },
    computed:{
        isLast(){
            if(typeof this.sections !== 'undefined'){
                return this.position === this.sections.length  -1 
            }
            return false;
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
    }
}
.iv-sidebar-section-content{
    padding: 1rem;
    &.iv-section-highlight{
        background: lightcoral;
        opacity:0.5;
    }
    font-size:1.2rem;
}

</style>
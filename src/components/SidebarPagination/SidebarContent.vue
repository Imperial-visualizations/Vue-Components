<template>
    <div class="iv-sidebar-content">
        <div class="iv-progress-container">
                <button v-for="(section, i) in sectionTitles" :key="section.title"
                :class="{'iv-active-button':currentTitle===i,'iv-overlay-button':currentTitle!==i}"
                @click="scrollTo(i)" >
                <iv-meter
                    :min="section.min()" :max="section.max()" :value="scrollPos" />
                    {{getCurrentRepr(i)}}
                </button>
        </div>
        <div class="iv-sidebar-content-body" ref="body">
            <slot/>
        </div>
    </div>
</template>
<script>
import Meter from '../Meter'
export default {
    name:'iv-sidebar-content',
    components:{
        'iv-meter':Meter
    },
    provide(){
        return {
            addToMenu: async (icon,title,theme,el) => {
                await this.$nextTick()
                this.sectionTitles.push({
                    icon,
                    title,
                    theme,
                    el,
                    min: () => el.offsetTop,
                    max: () => el.offsetTop + el.offsetHeight
                })
                return this.sectionTitles.length - 1
            },
            sections:this.sectionTitles
        }
    },
    data(){
        return {
            sectionTitles:[],
            scrollPos:0
        }
    },
    methods:{
        getCurrentRepr(i){
            return (this.currentTitle === i) ? this.sectionTitles[i].title : this.sectionTitles[i].icon
        },
        scrollTo(i){
            return this.sectionTitles[i].el.scrollIntoView({behavior:'smooth'})
        }
    },
    computed:{
        currentTitle(){
            for(let i =0; i < this.sectionTitles.length; i++){
                if(this.scrollPos >= this.sectionTitles[i].min() && this.scrollPos < this.sectionTitles[i].max()){
                    return i
                }  
            }
            return -1;
        }
    },
    mounted(){
        this.$refs.body.addEventListener('scroll',() => {
            this.scrollPos = this.$refs.body.scrollTop
        })
    }
}
</script>
<style lang="scss">
.iv-sidebar-content-body{
    flex:1 1 auto;
    overflow-y:scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    position: relative;
    box-shadow: inset 0 20px 20px -20px #aaaaaa;
}
.iv-progress-container{
    height:100px;
    flex: 0 0 auto;
    z-index: 1;
    display: flex;
    width: 100%;
    left: 0;
    top: 0;
    border:none;
    button{
        padding:0;        
        transition: flex-grow 450ms ease;
        visibility: visible;
        flex-basis: auto;
        flex-grow: 1;
        border: none;
        min-width: 30px;
        margin: 1rem 0.5rem;
        font-size:1rem;
        font-weight: 600;
        position:relative;
        opacity:0.5;
        &.iv-active-button{
            flex-grow:6;
        }
        &:active,&:focus,&.iv-active-button{
            border:none;
            outline:none;
            opacity:1;
        }
    }
    .iv-meter{
        position:absolute;
        left:0;
        top:0;
    }
    
}
.iv-sidebar-content{
    display:flex;
    flex-direction: column;
    height:100%;

}

</style>
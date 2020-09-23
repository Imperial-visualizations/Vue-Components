<template>
    <div class="iv-sidebar-content">
        <div class="iv-progress-container">
                <button v-for="(section, i) in sectionTitles" :key="section.title"
                :class="{'iv-active-button':currentTitle===i,'iv-overlay-button':currentTitle!==i}"
                @click="scrollTo(i)" :style="themeVars(section.theme)">
                <iv-meter
                    :min="section.min()" :max="section.max()" :value="scrollPos" />
                    <v-icon v-if="currentTitle !==i" :name="section.icon"/>
                    <template v-else>
                        {{section.title}}
                    </template>
                   
                </button>
        </div>
        <div class="iv-sidebar-content-body" ref="body">
            <slot/>
        </div>
        <iv-pane-navigator/>
    </div>
</template>
<script>
import Meter from '../Meter'
import PaneNavigator from '../PaneNavigation';
import Theme from '@/Theme.js'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
export default {
    name:'iv-sidebar-content',
    components:{
        'iv-meter':Meter,
        'v-icon':Icon,
        'iv-pane-navigator':PaneNavigator
    },
    props:{
        showPagination:{
            type:Boolean,
            default:true
        }
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
        scrollTo(i){
            return this.sectionTitles[i].el.scrollIntoView({behavior:'smooth'})
        },
        themeVars(theme){
            return {
                '--primary-color':Theme[theme].main,
                '--dark-color':Theme[theme].dark,
                '--light-color':Theme[theme].light,
                '--highlight':Theme[theme].highlight
            }
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
@import 'src/globals.scss';
.iv-sidebar-content-body{
    flex:1 1 auto;
    overflow-y:scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    position: relative;

}
.iv-progress-container{
    height:4rem;
    flex: 0 0 auto;
    z-index: 1;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    left: 0;
    top: 0;
    border:none;
    box-sizing: border-box;
    background:$lightgray;
    button{
        padding:0;        
        transition: flex-grow 450ms ease;
        visibility: visible;
        flex-basis: auto;
        flex-grow: 1;
        border: none;
        background:var(--primary-color);
        color:$white;
        min-width: 30px;
        margin: 0.5rem 0.5rem;
        font-size:1rem;
        font-weight: 600;
        position:relative;
        opacity:0.75;
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
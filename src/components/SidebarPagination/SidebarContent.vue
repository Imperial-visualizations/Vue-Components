<template>
    <div class="iv-sidebar-content">
        <div class="iv-progress-container">
            <div class="iv-section-overlay">
                <button v-for="(section, i) in sectionTitles" :key="section.title"
                :class="{'iv-active-button':currentTitle===i,'iv-overlay-button':currentTitle!==i}"
                @click="scrollTo(i)" >
                    {{getCurrentRepr(i)}}
                </button>
            </div>
            <meter v-for="(section,i) in sectionTitles" :key="i" :class="{'iv-active-meter': currentTitle ===i}"
            :min="section.min()" :max="section.max()" :value="scrollPos"></meter>
        </div>
        <div class="iv-sidebar-content-body" ref="body">
            <slot/>
        </div>
    </div>
</template>
<script>
export default {
    name:'iv-sidebar-content',
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
}
.iv-sidebar-content{
    display:flex;
    flex-direction: column;
    height:100%;

}
</style>
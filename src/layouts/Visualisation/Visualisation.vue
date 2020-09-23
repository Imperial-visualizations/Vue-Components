<template>
    <div class="iv-visualisation" id="visualisation">
        <div class="iv-visualisation-flow" id="iv-visualisation-flow">
            <title-bar>{{title}}</title-bar>
            <div class="iv-main-stage">
                <div class="hotspot-manager" v-if="showSpots" :style="gridStyle">
                    <hotspot v-for="hotspot in hotspots" :key=hotspot :ref="hotspot" :position="hotspot"/>
                 </div>          
                <resize-observer @notify="updateDims"/>
                <slot />
            </div>
        </div>
        <div class="iv-overflow"> 
            <slot name="hotspots" />
        </div>
    </div>
</template>
<script> 
import TitleBar from '../TitleBar'
import Hotspot from '../Hotspot'
export default {
    name:"iv-visualisation",
    components:{
        Hotspot,
        TitleBar
    },
    props:{
        corners:{
            type:Array,
            default: () => ['topleft','topright','bottomleft','bottomright']
        },
        edges:{
            type:Array,
            default: () => ['left','right','top','bottom']
        },
        hotspotColumnWidth:{
            type:String,
            default:"250px"
        },
        hotspotColumnHeight:{
            type:String,
            default:"250px"
        },
        title:{
            type:String,
            required:true,
            default:"Default Title"
        }
    },
    data(){
        return{
            mainStageWidth:0,
            mainStageHeight:0
        }
    },
    provide(){
        return {
            getElement:this.getElement,
            checkElement:this.checkElement
        }
    },
    computed:{
        gridStyle(){
            return {
                'grid-template-columns': `${this.hotspotColumnWidth} 1fr ${this.hotspotColumnWidth}`,
                'grid-template-rows': `${this.hotspotColumnHeight} 1fr ${this.hotspotColumnHeight}`
            }
        },
        showSpots(){
            return typeof this.$slots.hotspots !== 'undefined';
        },
        hotspots(){
            return this.corners.concat(this.edges)
        }
    },
    methods:{
        updateDims({width,height}){
            this.mainStageWidth = width;
            this.mainStageHeight = height;
        },
        getElement(position){
            if(typeof this.$refs[position] !== 'undefined') {
                return this.$refs[position][0];
            }
        },
        checkElement(position,large){
            //Return true if hotspot is available to have item merged in
            if(typeof this.$refs[position] !== 'undefined'){
                return this.$refs[position][0].isSpace(large)
            }
        }
    },
    mounted(){
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh',`${vh}px`)
        window.addEventListener('resize',()=>{ // May need to debounce this
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh',`${vh}px`)
        })
    }
}
</script>
<style lang="scss">
@import "src/globals.scss";
.iv-visualisation {
    margin-top:$titleBarHeight;
    height:calc(var(--vh,1vh) * 100 - #{$titleBarHeight});
    // z-index:0;
    //height:100%;
}

.iv-visualisation-flow{
    display:flex;
    flex-direction: row;
    width:100%;
    height:100%;
    position:relative;
    > .iv-main-stage{ 
        flex: 1 1 auto;
        order:0;
        position:relative;
        background-color: white;
        overflow-y:auto;
        z-index:0;
        transition: width 0.5s ease-in-out;
    }  
}
.hotspot-manager{
    display:grid;
    grid-template-areas: "topleft top topright" "left . right" "bottomleft bottom bottomright";
    height:100%;
    width:100%;
    pointer-events: none;
    position:absolute;
}
.iv-overflow{
    display:none;
}
.iv-main-stage{
    position:relative;
}
.iv-main-stage::after{
    content:"";
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
    pointer-events: none;
}
</style>
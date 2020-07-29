<template>
    <div class="iv-main-stage">
        <div class="hotspot-manager" :style="gridStyle">
            <hotspot v-for="pos in hotspots" :key=pos :position=pos :content="getHotspotContent(pos)"/>
        </div>
        <resize-observer @notify="updateDims"/>
        <slot>Insert your main content here!</slot>
    </div>
</template>
<script>
import Hotspot from '../Hotspot'
export default {
    name:"iv-main-stage",
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
            type:Number,
            default:250
        }
    },
    components:{
        Hotspot
    },
    data(){
        return {
            width:0,
            height:0,
        }
    },
    mounted(){
        this.width = this.$el.clientWidth;
        this.height = this.$el.clientHeight;
    },
    provides(){
        return {
            hotspotBounds:{
                x: 200,
                y: this.height/3
            }
        }
    },
    computed:{
        gridStyle(){
            return {
                'grid-template-columns': `${this.hotspotColumnWidth}px 1fr ${this.hotspotColumnWidth}px`,
                'grid-template-rows': `1fr 1fr 1fr`
            }
        },
        hotspots(){
            let concated = this.corners.concat(this.edges)
            for(let i=0; i < this.$parent.reservedSlots.length; i++){
                if(concated.indexOf(this.$parent.reservedSlots[i]) !== -1){
                    concated.splice(concated.indexOf(this.$parent.reservedSlots[i]),1)
                }
            }
            return concated
        }
    },
    methods:{
        updateDims({width,height}){
            this.width = width;
            this.height = height;
        },
        getHotspotContent(pos){ 
            return this.$slots.hotspots.filter( (vnode) => {
                if(typeof vnode.componentOptions.propsData.position !== 'undefined'){
                    return vnode.componentOptions.propsData.position == pos
                }
                return false;
            });
        }
    }
}
</script>
<style>
.hotspot-manager{
    display:grid;
    grid-template-areas: "topleft top topright" "left . right" "bottomleft bottom bottomright";
    height:100%;
    width:100%;
    pointer-events: none;
    position:absolute;
}
.iv-main-stage{
    position:relative;
}
</style>

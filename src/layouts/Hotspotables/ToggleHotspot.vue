<template>
    <div class="iv-hotspotable iv-toggle-hotspot" :class=toggleClass :style="toggleSize">
        <div v-if="showHotspot" class="hotspot-content" :class="[positionalClass('iv'),{'no-wasted-space':noWastedSpace}]">
            <slot> DEFAULT SLOT CONTENT. Position:{{position_}} </slot>
        </div>
        <div :class="['iv-hotspot-button',positionalClass('iv')]" @click="showHotspot = !showHotspot">{{title}}</div>
    </div>
</template>
<script>
import Hotspotable from "mixins/Hotspotable"
export default {
    name:"iv-toggle-hotspot",
    mixins:[Hotspotable],
    props:{
        show:{ //If on edge set size to this
            type:Boolean,
            default:true
        },
        title:{ 
            type:String,
            required:false,
            default:""
        },
        noWastedSpace:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            showHotspot:this.show,
        }
    },
    computed:{
        toggleClass(){
            if(!this.showHotspot){
                return [this.positionalClass('iv-toggled')]
            }else{
                return []
            }
        },
        toggleSize(){
            if(this.spotType === 'edge' && this.size > 0){
                switch(this.position_){
                    case 'left':
                    case 'right':
                        return {'height':`${this.size}px`,'flex':'0 0 auto'}
                    case 'top':
                    case 'bottom':
                        return {'width':`${this.size}px`,'flex':'0 0 auto'}
                    default:
                        return {}
                }
            }else{
                return {}
            }
        }
    }
}
</script>
<style lang="scss">
$curvatureRadius:20px;
.iv-toggle-hotspot{
    position:relative;
    width:100%;
    height:100%;
    &.iv-toggled-left,&.iv-toggled-right{
        width:0;
    }
    &.iv-toggled-top,&.iv-toggled-bottom{
        height:0;
    }
    &.iv-toggled-bottomleft{
        width:0;
        height:0;
        >.iv-hotspot-button{
            transform: translateY(-100%);
        }
    }
    &.iv-toggled-bottomright{
        width:0;
        height:0;
        >.iv-hotspot-button{
            transform: translate(-100%,-100%);
        }
    }
    &.iv-toggled-topleft{
        width:0;
        height:0;
        >.iv-hotspot-button{
            transform: translateX(0%)
        }
    }
    &.iv-toggled-topright{
        width:0;
        height:0;
        >.iv-hotspot-button{
            transform: translateX(-100%);
        }
    }
}
.hotspot-content{
    width:100%;
    height:100%;
    background-color: red;
    word-wrap: break-word;
    display:flex;
    &.no-wasted-space{
        width:auto;
        height:auto;
    }
    &.iv-bottomleft{
        border-radius: 0 $curvatureRadius 0 0;
    }
    &.iv-bottomright{
        border-radius: $curvatureRadius 0 0 0;
        padding-left:$curvatureRadius;
        padding-top:$curvatureRadius;
        box-sizing: border-box;
    }
    &.iv-topright{
        padding-left:$curvatureRadius;
        padding-bottom: $curvatureRadius;
        box-sizing: border-box;
        border-radius: 0 0 0 $curvatureRadius;
    }
    &.iv-topleft{
        padding-right:$curvatureRadius;
        padding-bottom: $curvatureRadius;
        box-sizing: border-box;
        border-radius: 0 0 $curvatureRadius 0;
    }
    &.iv-top{
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    &.iv-bottom{
        flex-direction: column-reverse;
        justify-content:flex-start;
        align-items:center;
    }
    &.iv-left{
        flex-direction: row;
        justify-content: flex-start;
        align-items:center;
    }
    &.iv-right{
        flex-direction: row-reverse;
        justify-content: flex-start;
        align-items:center;
    }
}
.iv-hotspot-button{
    margin: 0px;
    min-width: 20px;
    min-height:20px;
    box-sizing: border-box;
    padding: 5px 15px;
    color:white;
    font-weight: bold;
    background-color: blue; 
    position:absolute;
    &.iv-left{
        border-radius: 0 $curvatureRadius $curvatureRadius 0;
        top: calc(50%);
        transform:translateY(-50%);
        left:100%;
    }
    &.iv-right{
        top: 50%;
        transform:translate(-100%,-50%);
        border-radius: $curvatureRadius 0 0 $curvatureRadius;
    }
    &.iv-top{
        left:50%;
        transform:translateX(-50%);
        border-radius: 0 0 $curvatureRadius $curvatureRadius;
    }
    &.iv-bottom{
        left: 50%;
        top: 0;
        transform:translate(50%,-100%);
        border-radius: $curvatureRadius $curvatureRadius 0 0;
    }
    &.iv-bottomleft{
        top:0;
        left:100%;
        transform:translateX(-100%);
        border-radius: 0 $curvatureRadius 0 0;
    }
    &.iv-bottomright{
        top:0;
        left:0;
        border-radius: $curvatureRadius 0 0 0;
    }
    &.iv-topleft{
        border-radius: 0 0 $curvatureRadius 0;
        left:100%;
        transform:translate(-100%,-100%);
    }
    &.iv-topright{
        transform:translateY(-100%);
        border-radius: 0 0 0 $curvatureRadius;
    }

}
</style>

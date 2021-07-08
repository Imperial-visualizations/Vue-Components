<template>
    <div class="iv-hotspotable iv-toggle-hotspot" :class=toggleClass :style="toggleSize" v-if="ifClosed">
        <div v-show="showHotspot" class="hotspot-content" :class="[positionalClass('iv'),{'no-wasted-space':noWastedSpace},{'iv-transparent':transparent},{'iv-glass-effect':glass}]">
            <slot :setPosition="setPosition"> DEFAULT SLOT CONTENT. Position:{{position_}}</slot>
        </div>
        <div v-if="draggable" :class="['iv-hotspot-button',positionalClass('iv')]" @click="openControlPanel"><span v-if="title !== ''" class = "title-text">{{title}}</span></div>
        <div v-else :class="['iv-hotspot-button',positionalClass('iv')]" @click="showHotspot=!showHotspot"><span v-if="title !== ''" class = "title-text">{{title}}</span></div>  
    </div>
</template>
<script>
import Hotspotable from "@/mixins/Hotspotable"
import {hotspotBus} from "@/buses/hotspotBus"
export default {
    name:"iv-toggle-hotspot",
    mixins:[Hotspotable],
    props:{
        show:{ //If on edge set size to this
            type:Boolean,
            default:false
        },
        title:{ 
            type:String,
            required:false,
            default:""
        },
        noWastedSpace:{
            type:Boolean,
            default:false
        },
        glass:{
            type:Boolean,
            default:false
        },
        transparent:{
            type:Boolean,
            default:false
        },
        idName: {
        type:String,
        required:true,
        default: 'Name_1',
        },
        draggable:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            showHotspot:this.show,
            ifClosed: true
        }
    },
    methods:{
        openControlPanel(){
            this.ifClosed = false;
            hotspotBus.$emit("openControlPanel", this.idName)
        },
    },
    mounted(){
        hotspotBus.$on("closeControlPanel", data => {
        if (data===this.idName){
            this.ifClosed=true;
        }
    });
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
        },
    }
}
</script>
<style lang="scss">
@import "src/globals.scss";

.iv-toggle-hotspot{
    position:absolute;
    width:auto;

    height:auto;
    &.iv-toggled-left{
        width:0;
        >.iv-hotspot-button{
            left:0;
            >.title-text{
                top: 50%;
                transform:  translateX(-50%) translateY(-50%) rotate(90deg);
            }
        }
    }
    &.iv-toggled-right{
        width:0;
        >.iv-hotspot-button{
            right:0;
            >.title-text{
                top: 50%;
                transform:  translateX(-50%) translateY(-50%) rotate(-90deg);
            }
        }
    }
    &.iv-toggled-top,&.iv-toggled-bottom{
        height:0;
    }
    &.iv-toggled-bottomleft{
        width:0;
        height:0;
        >.iv-hotspot-button{
            left:0;
            border-radius: 0 $curvatureRadius 0 0;
            transform: translateY(-100%);
        }
    }
    &.iv-toggled-bottomright{
        width: 0;
        height:0;
        >.iv-hotspot-button{
            right:0;
            border-radius: $curvatureRadius 0 0 0;
            transform: translate(100/3 * 1%,-100%);
        }
    }
    &.iv-toggled-topleft{
        width:0;
        height:0;
        >.iv-hotspot-button{
            border-radius: 0 0 $curvatureRadius 0;
            left:0;
            transform: translateY(100%);
        }
    }
    &.iv-toggled-topright{
        width:0;
        height:0;
        >.iv-hotspot-button{
            border-radius: 0 0 0 $curvatureRadius;
            right:0;
            transform: translate(100/3 * 1%,100%);
        }
    }
}
.hotspot-content{
    //border: 2px solid black;
    width:100%;

    background-color:white;
    word-wrap: break-word;
    display:flex;
    z-index:2;
    box-sizing: border-box;
    padding:0.5rem;
    &.no-wasted-space{
        width:auto;
        height:auto;
    }
    &.iv-bottomleft{
        //box-shadow: $hotspotShadow $hotspotShadow black;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: flex-start;
        box-shadow: 2px -2px 5px #e2e2e2;
    }
    &.iv-bottomright{
        //box-shadow: -$hotspotShadow $hotspotShadow black;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: flex-start;
        box-shadow: -2px -2px 5px #e2e2e2;
    }
    &.iv-topright{
        //box-shadow: -$hotspotShadow -$hotspotShadow black;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: flex-start;
        box-shadow: -2px 2px 5px #e2e2e2;
    }
    &.iv-topleft{
        //box-shadow: $hotspotShadow -$hotspotShadow black;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: flex-start;
        box-shadow: 2px 2px 5px #e2e2e2;
    } 
    &.iv-top{
        flex-direction: column;
        justify-content: flex-start;
        box-shadow: 0px 2px 5px #e2e2e2;
        min-height:100%;
        max-height: 50vh;
        overflow-y:auto;
    }
    &.iv-bottom{
        flex-direction: column-reverse;
        justify-content:flex-start;
        box-shadow: 0px -2px 5px #e2e2e2;
        min-height:100%;
        max-height: 50vh;
        overflow-y:auto;
    }
    &.iv-left{
        flex-direction: row;
        justify-content: flex-start;
        box-shadow: 2px 0px 5px #e2e2e2;
    }
    &.iv-right{
        flex-direction: column;
        justify-content: flex-start;
        box-shadow: -2px 0px 5px #e2e2e2;
    }
    &.iv-transparent{
    background: none;
    box-shadow: none !important;
    }
}
.iv-hotspot-button{
    cursor:pointer;
    text-align: center;
    position:absolute;
    margin: 0px;
    //min-width: 20px;
    //min-height: 20px;
    box-sizing: border-box;
    font-weight: bold;
    background-color: $yellow;
    color: white;
    z-index: 1; 
    
    &.iv-left,&.iv-right{
        min-height: $minButtonWidth;
        min-width: $minButtonHeight;
    }
    &.iv-topleft,&.iv-top,&.iv-top-right,&.iv-bottomright,&.iv-bottom,&.iv-bottomright{
        min-width: $minButtonWidth;
        min-height: $minButtonHeight;
    }

    &.iv-left{
        box-shadow: 2px 0px 5px #e2e2e2;
        border-radius: 0 $curvatureRadius $curvatureRadius 0;
        top: 50%;
        transform: translateY(-50%);
        left:100%;
        height: 50%;
        width: $hotpotTextHeight;
        >.title-text{
            position: absolute;
            top: 50%;
            left: 50%;
            transform-origin: center center;
            transform:  translateX(-50%) translateY(-50%) rotate(90deg);
        }
    }
    &.iv-right{
        box-shadow: -2px 0px 5px #e2e2e2;
        border-radius: $curvatureRadius 0 0 $curvatureRadius;
        top: 50%;
        transform: translateY(-50%);
        right:100%;
        height: 50%;
        width: $hotpotTextHeight;
        >.title-text{
            position: absolute;
            top: 50%;
            left: 50%;
            transform-origin: center center;
            transform:  translateX(-50%) translateY(-50%) rotate(-90deg);
        }
    }
    &.iv-top{
        box-shadow: 0px 2px 5px #e2e2e2;
        width: 25%;
        transform:translateX(-50%);
        left:50%;
        border-radius: 0 0 $curvatureRadius $curvatureRadius;
    }
    &.iv-bottom{
        box-shadow: 0px -2px 5px #e2e2e2;
        left: 50%;
        width: 25%;
        top: 0;
        transform:translate(-50%,-100%);
        border-radius: $curvatureRadius $curvatureRadius 0 0;
    }
    &.iv-bottomleft{
        box-shadow:2px -2px 5px #e2e2e2;
        top:0;
        right:0;
        border-radius: 0 0 0 $curvatureRadius;
        width: 75%;
    }
    &.iv-bottomright{
        box-shadow: -2px -2px 5px #e2e2e2;
        top:0;
        left:0;
        border-radius: 0 0 $curvatureRadius 0;
        width: 75%;
    }
    &.iv-topleft{
        box-shadow: 2px 2px 5px #e2e2e2;
        bottom:0;
        right:0;
        border-radius: $curvatureRadius 0 0 0;
        width: 75%;
    }
    &.iv-topright{
        box-shadow:-2px 2px 5px #e2e2e2;
        bottom:0;
        left:0;
        border-radius: 0 $curvatureRadius 0  0;
        width: 75%;
    }
}
</style>

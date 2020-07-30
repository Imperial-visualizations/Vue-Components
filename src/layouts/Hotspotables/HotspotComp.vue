<template>
    <div class="fixed-blob">
        <div class="hotspot-content">
            <slot>INSERT HOTSPOT CONTENT</slot>
        </div>
        <button  :class="positionalClass('iv-hotspot-button')" @click="showHotspot = !showHotspot" :style="buttonLeft">{{paneText}}</button>
        
    </div>
</template>
<script>
import Hotspotable from "./Hotspotable"
export default {
    name:"iv-hotspot",
    mixins:[Hotspotable],
    methods:{
        positionalClass(base){
            return [`${base}-${this.position}`]
        }
    },
    computed:{
        paneText(){
            return (this.showPane)? "⬇️":"⬆️"
        },
        buttonMove(){
            switch(this.position){
                case"left":
                    return {'left':  this.showPane ? "100%" : 0}
                case"right":
                    return {'right':  this.showPane ? "100%" : 0}
                case"top":
                    return {'top':  this.showPane ? "100%" : 0}
                case"bottom":
                    return {'bottom':  this.showPane ? "100%" : 0}
                case"topleft":
                    return {'left':  this.showPane ? "100%" : 0,
                            'top':  this.showPane ? "100%" : 0
                           }
                case"topright":
                    return {'right':  this.showPane ? "100%" : 0,
                            'top':  this.showPane ? "100%" : 0
                           }
                case"bottomleft":
                    return {'left':  this.showPane ? "100%" : 0,
                            'bottom':  this.showPane ? "100%" : 0
                           }
                case"bottomright":
                    return {'right':  this.showPane ? "100%" : 0,
                            'bottom':  this.showPane ? "100%" : 0
                           }
                default:
                    throw Error("Pane may only have position left or position right");
            }
        },
    }
}
</script>
<style>
.fixed-blob{
    width:200px;
    height:100%;
    background-color: red;
}
.iv-hotspot-button{
    position: absolute;
    top:50%;
}
.iv-hotspot-button-left{
    transform-origin: left;
    transform: translate(25%,-50%) rotate(90deg);  
}
.iv-hotspot-button-right{
    transform-origin: left;
    transform: translate(-25%,-50%) rotate(90deg);  
}
.iv-hotspot-button-top{
    transform-origin: top;
    transform: translate(25%,-50%) rotate(90deg);  
}
.iv-hotspot-button-bottom{
}
.iv-hotspot-button-topleft{
    transform-origin: left;
    transform: translate(25%,-50%) rotate(90deg);  
}
.iv-hotspot-button-topright{
    transform-origin: left;
    transform: translate(-25%,-50%) rotate(90deg);   
}
.iv-hotspot-button-bottomleft{
}
.iv-hotspot-button-bottomright{
}
</style>
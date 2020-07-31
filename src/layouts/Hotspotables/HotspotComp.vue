<template>
    <div class="iv-hotspotable">
        <div v-if="showHotspot" class="hotspot-content">
            <slot>INSERT HOTSPOT CONTENT</slot>
        </div>
        <div :class="positionalClass('iv-hotspot-button')" @click="showHotspot = !showHotspot" :style="buttonMove"></div>
    </div>
</template>
<script>
import Hotspotable from "mixins/Hotspotable"
export default {
    name:"iv-hotspot",
    mixins:[Hotspotable],
    props:{
        defaultShowHotspot:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            showHotspot:this.defaultShowHotspot,
        }
    },
    methods:{
        positionalClass(base){
            return [`${base}-${this.position}`]
        }
    },
    computed:{
        paneText(){
            return (this.showHotspot)? "⬆️":"⬇️";
        },
        buttonMove(){
            switch(this.position){
                case"left":
                    return {'left':  this.showHotspot ? "calc(100% - 20px)" : 0,
                            "transform": this.showHotspot ? `scaleX(-1)`:`scaleX(1)` 
                    }
                case"right":
                    return {'right':  this.showHotspot ? "calc(100% - 20px)": 0,
                            "transform": this.showHotspot ? `scaleX(-1)`:`scaleX(1)`
                    }
                case"top":
                    return {'top':  this.showHotspot ? "calc(100% - 20px)" : 0,
                            "transform": this.showHotspot ? `scaleY(-1)`:`scaleY(1)`
                    }
                case"bottom":
                    return {'bottom':  this.showHotspot ? "calc(100% - 20px)" : 0,
                            "transform": this.showHotspot ? `scaleY(-1)`:`scaleY(1)`
                    }
                case"topleft":
                    return {'left': this.showHotspot ? "calc(100% - 20px)" : 0,
                            'top': this.showHotspot ? "calc(100% - 20px)" : 0,
                            "transform": this.showHotspot ? `scale(-1, -1)`:`scale(1, 1)` ,
                           }
                case"topright":
                    return {'right':  this.showHotspot ? "calc(100% - 20px)" : 0,
                            'top':  this.showHotspot ? "calc(100% - 20px)" : 0,
                            "transform": this.showHotspot ? `scale(-1, -1)`:`scale(1, 1)` 
                           }
                case"bottomleft":
                    return {'left':  this.showHotspot ? "calc(100% - 20px)" : 0,
                            'bottom':  this.showHotspot ? "calc(100% - 20px)" : 0,
                            "transform": this.showHotspot ? `scale(-1, -1)`:`scale(1, 1)` 
                           }
                case"bottomright":
                    return {'right':  this.showHotspot ?"calc(100% - 20px)" : 0,
                            'bottom':  this.showHotspot ? "calc(100% - 20px)" : 0,
                            "transform": this.showHotspot ? `scale(-1, -1)`:`scale(1, 1)` 
                           }
                default:
                    throw Error("Pane may only have position left or position right");
            }
        },
    }
}
</script>
<style>
.iv-hotspotable{
    width:100%;
    height:100%;
    position: relative;
}
.hotspot-content{
    position: relative;
    z-index: -1;
    width:100%;
    height:100%;
    background-color: red;
}
.iv-hotspot-button-left{
    margin: 0px;
    position: absolute;
    z-index: 1;
    width: 20px;
    height:40px;
    border-radius: 0 20px 20px 0;
    background-color: blue; 
    top: calc(50% - 20px);
}

.iv-hotspot-button-right{
    margin: 0px;
    z-index: 1;
    position: absolute;
    top: calc(50% - 20px);
    width: 20px;
    height:40px;
    border-radius: 20px 0 0 20px;
    background-color: blue; 
}

.iv-hotspot-button-top{
    margin: 0px;
    z-index: 1;
    left: calc(50% - 20px);
    position: absolute;
    width: 40px;
    height:20px;
    border-radius: 0 0 20px 20px;
    background-color: blue; 
}

.iv-hotspot-button-bottom{
    margin: 0px;
    z-index: 1;
    position: absolute;
    left: calc(50% - 20px);
    width: 40px;
    height:20px;
    border-radius: 20px 20px 0 0;
    background-color: blue; 
}

.iv-hotspot-button-topleft{
    margin: 0px;
    z-index: 1;
    position: absolute;
    width: 20px;
    height:20px;
    border-radius: 0 0 20px 0;
    background-color: green;
}

.iv-hotspot-button-topright{
    margin: 0px;
    z-index: 1;
    position: absolute;
    width: 20px;
    height:20px;
    border-radius: 0 0 0 20px;
    background-color: green;
}
.iv-hotspot-button-bottomleft{
    margin: 0px;
    z-index: 1;
    position: absolute;
    width: 20px;
    height:20px;
    border-radius: 0 20px 0 0;
    background-color: green;
}
.iv-hotspot-button-bottomright{
    margin: 0px;
    z-index: 1;
    position: absolute;
    width: 20px;
    height:20px;
    border-radius: 20px 0 0 0;
    background-color: green;
}
</style>

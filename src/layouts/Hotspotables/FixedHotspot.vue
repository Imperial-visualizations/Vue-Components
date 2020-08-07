<template>
    <div class="iv-hotspotable iv-fixed-hotspot">
        <div class="hotspot-content" :class="[positionalClass('iv'),{'no-wasted-space':noWastedSpace}]">
            <slot :setPosition="setPosition"> DEFAULT SLOT CONTENT. Position:{{position_}}</slot>
        </div>
    </div>
</template>
<script>
import Hotspotable from "mixins/Hotspotable"
export default {
    name:"iv-fixed-hotspot",
    mixins:[Hotspotable],
    props:{
        noWastedSpace:{
            type:Boolean,
            default:false
        }
    },
}
</script>
<style lang="scss">
@import "src/globals.scss";
.iv-fixed-hotspot{
    position:relative;
    width:100%;
    height:100%;
}
.hotspot-content{
    //border: 2px solid black;
    width:100%;
    height:100%;
    background-color:white;
    word-wrap: break-word;
    display:flex;
    &.no-wasted-space{
        width:auto;
        height:auto;
    }
    &.iv-bottomleft{
        box-shadow: $hotspotShadow $hotspotShadow black;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        box-shadow: 1px -1px 5px -2px;
    }
    &.iv-bottomright{
        box-shadow: -$hotspotShadow $hotspotShadow black;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        box-shadow: -1px -1px 5px -2px;
    }
    &.iv-topright{
        box-shadow: -$hotspotShadow -$hotspotShadow black;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        box-shadow: -1px 1px 5px -2px;
    }
    &.iv-topleft{
        box-shadow: $hotspotShadow -$hotspotShadow black;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        box-shadow: 1px 1px 5px -2px;
    } 
    &.iv-top{
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        box-shadow: 1px 1px 5px -2px;
    }
    &.iv-bottom{
        flex-direction: column-reverse;
        justify-content:flex-start;
        align-items:center;
        box-shadow: 1px -1px 5px -2px;
    }
    &.iv-left{
        flex-direction: row;
        justify-content: flex-start;
        align-items:center;
        box-shadow: 1px 1px 5px -2px;
    }
    &.iv-right{
        flex-direction: row-reverse;
        justify-content: flex-start;
        align-items:center;
        box-shadow: -1px 1px 5px -2px;
    }
}

</style>

<template>
    <div class="iv-hotspotable iv-fixed-hotspot">
        <div class="hotspot-content" :class="[positionalClass('iv'),{'no-wasted-space':noWastedSpace},{'iv-transparent':transparent},{'iv-glass-effect':glass}]">
            <slot :setPosition="setPosition"> DEFAULT SLOT CONTENT. Position:{{position_}}</slot>
        </div>
    </div>
</template>
<script>
import Hotspotable from "@/mixins/Hotspotable"
export default {
    name:"iv-fixed-hotspot",
    mixins:[Hotspotable],
    props:{
        noWastedSpace:{
            type:Boolean,
            default:false
        },
        transparent:{
            type:Boolean,
            default:false
        },
        glass:{
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

    &.iv-transparent{
        background: none;
        box-shadow: none !important;
    }
    &.no-wasted-space{
        width:auto;
        height:auto;
    }
    
}

</style>

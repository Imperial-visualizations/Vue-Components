<template>
    <div class="iv-hotspotable iv-toggle-hotspot" :class=toggleClass>
        <div v-if="showHotspot" class="hotspot-content" :class="[positionalClass('iv')]">
            <slot> DEFAULT SLOT CONTENT. Position:{{position_}} </slot>
        </div>
        <div :class="['iv-hotspot-button',positionalClass('iv')]" @click="showHotspot = !showHotspot"></div>
    </div>
</template>
<script>
import Hotspotable from "mixins/Hotspotable"
export default {
    name:"iv-toggle-hotspot",
    mixins:[Hotspotable],
    props:{
        show:{
            type:Boolean,
            default:true
        },
        label:{
            type:String,
            required:false,
            default:""
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
}
.hotspot-content{
    width:100%;
    height:100%;
    background-color: red;
    word-wrap: break-word;
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

    

}
.iv-hotspot-button{
    margin: 0px;
    width: 20px;
    height:20px;
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
    }
    &.iv-topright{
        transform:translateY(-100%);
        border-radius: 0 0 0 $curvatureRadius;
    }

}
</style>

<template>
    <div>
        <iv-modal :positionModal="guidance_item.positionModal" >
            <template #header style="positon:relative" >
                <iv-button v-if="homeButton" @click="goHome" class="home-button" >Home</iv-button>
                <div>{{guidanceHeaderText}}</div>
                <iv-button @click="closeWindow" class="close-button" >X</iv-button>
            </template>
            <template>
                <div>{{guidance_item.text}}</div>
            </template>
            <template #footer>
                <iv-button v-if="prevButton" @click="prevGuidance">PREV</iv-button>
                <iv-button v-if="nextButton" @click="nextGuidance">NEXT</iv-button>
            </template>
        </iv-modal>
    </div>
</template>

<script>

import Button from "../../components/Button";
import windowModal from "../WindowComp";

import Vue from 'vue';
const guidanceBus = new Vue();
export {guidanceBus};

export default {
    name:"iv-guidance-modal",
    components:{
        "iv-modal":windowModal,
        "iv-button":Button
    },
    props:{
        guidanceHeaderText:{
            type: String,
            default: "Help!"
        },
        guidance_item:{
            type:Object
        },
        prevButton:{
            type:Boolean,
            default:false
        },
        nextButton:{
            type:Boolean,
            default:false
        },
        homeButton:{
            type:Boolean,
            default:false
        },
    },
    methods:{
        prevGuidance(){
            guidanceBus.$emit("prev-guidance", this._uid);
        },
        nextGuidance(){
            guidanceBus.$emit("next-guidance", this._uid);
        },
        closeWindow(){
            guidanceBus.$emit("close-window", this._uid);
        },
        goHome(){
            guidanceBus.$emit("go-home", this._uid);
        }
    },
    mounted(){
        console.log("positionModalGUIDANCE: ",this.guidance_item);
        this.guidance_item.indentifier.style.zIndex = 997;
        //guidanceBus.$emit(`${this.guidanceIdentifier}-show`, this._uid);
    },

}
</script>
<style>

.home-button{
    position:relative;
    left: 5px
}

.close-button{
    position: relative;
    right: 5px;
}

</style>
<template>
    <div>
        <iv-modal :positionModal="guidanceInput.positionModal" >
            <template #header style="positon:relative" >
                <iv-button v-if="homeButton" @click="goHome" class="home-button" >Home</iv-button>
                <div>{{guidanceHeaderText}}</div>
                <iv-button @click="closeWindow" class="close-button" >X</iv-button>
            </template>
            <template>
                <div>{{guidanceInput.text}}</div>
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
        guidanceInput:{
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
            document.getElementById(this.guidanceInput.highlightDiv).style.zIndex = 0;
            document.getElementById(this.guidanceInput.highlightDiv).style.pointerEvents = "auto";
            guidanceBus.$emit("prev-guidance", this._uid);
        },
        nextGuidance(){
            document.getElementById(this.guidanceInput.highlightDiv).style.zIndex = 0;
            document.getElementById(this.guidanceInput.highlightDiv).style.pointerEvents = "auto";
            guidanceBus.$emit("next-guidance", this._uid);
        },
        closeWindow(){
            document.getElementById(this.guidanceInput.highlightDiv).style.zIndex = 0;
            document.getElementById(this.guidanceInput.highlightDiv).style.pointerEvents = "auto";
            guidanceBus.$emit("close-window", this._uid);
        },
        goHome(){
            document.getElementById(this.guidanceInput.highlightDiv).style.zIndex = 0;
            document.getElementById(this.guidanceInput.highlightDiv).style.pointerEvents = "auto";
            guidanceBus.$emit("go-home", this._uid);
        }
    },
    mounted(){
        document.getElementById(this.guidanceInput.highlightDiv).style.zIndex = 2;
        document.getElementById(this.guidanceInput.highlightDiv).style.pointerEvents = "none";
    },
    watch:{
        guidanceInput:function(){
            document.getElementById(this.guidanceInput.highlightDiv).style.zIndex = 2;
            document.getElementById(this.guidanceInput.highlightDiv).style.pointerEvents = "none";
        }
    }
}
</script>
<style>
</style>
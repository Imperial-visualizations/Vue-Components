<template>
    <button :class="{guidanceButton: buttonStyle}"  @click="buttonClick">
        <slot>?</slot>
    </button>
</template>

<script>
import guidanceBus from "@/buses/guidanceBus.js"

export default {
    name: "iv-guidance-button",
    props:{
        guidanceIdentifier:{
            type:String
        },
        buttonStyle:{
            type: Boolean,
            default: true
        }
    },
    methods:{
        buttonClick(){
           guidanceBus.$emit("guidance-button-click", this.guidanceIdentifier);
        },
    },
}
</script>

<style>
.guidanceButton{
    position: relative;
    z-index: 1;
    cursor: pointer;
    background-color: white;
    color: black;
    border: 2px solid black;
    border-radius: 14px 14px 14px 14px;
    width: 28px;
    height: 28px;
    outline: none;
    font: bold;
    font-size: 20px;
    text-align: center;
    line-height: 20px;
}
</style>
<template>
    <button class="iv-reset-button iv-drop-shadow-medium" style="height:100%" @mouseover="mouseOn" @mouseleave="mouseOff" @click="buttonClick(e)" :disabled="disabled">
        <slot>Default text</slot></button>
</template>

<script>
import { eventBus } from "@/buses/eventBus";
export default {
    name: "iv-reset-button",
    methods:{
        mouseOn(e){
            this.$emit("mouseover",e)
        },
        mouseOff(e){
            this.$emit("mouseleave",e)
        },
        buttonClick(e){
            this.$emit("click", e)
            eventBus.$emit("reset-data", this.resetChoice)
        },
    },
    props:{
      disabled: {
        type:Boolean,
        required: false,
        default: false
      },
      resetChoice: {
        type:Boolean,
        required: false,
        default: true,
      }

    }  
}
</script>

<style lang="scss">
@import "src/globals";
$green:#19CF86;
$greenHover:#1BDE90;
$greenClick:#139C65;
$disabledColor:#D3D3D3;
.iv-reset-button{
    cursor: pointer;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2rem;
    height:1.45rem;
    padding: 0.25em 0.5em;
    background-color: $green;
    color:$white;
    font-weight:500;
    transition: all 0.2s;
    &:focus{
        outline:0;
    }

    &:hover{
        background-color:$greenHover;
    }
    &:active{
        background:$greenClick;
        color:#F0FFF0;
    }


    &:disabled{
        background-color:$disabledColor;
        color:#a3a3a3;
    }
}


</style>
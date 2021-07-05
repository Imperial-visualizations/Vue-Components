<template>
    <!-- <button class="iv-increment-button iv-drop-shadow-medium" style="height:100%" @mouseover="mouseOn" @mouseleave="mouseOff" @click="buttonClick" :disabled="disabled">
        <slot>Default text</slot></button> -->

    <div class="iv-increment-button iv-drop-shadow-medium" style="height:100%" >
        <button class="iv-button" style="height:100%" @click="minusClick" >-</button>
        <span class="text">{{current}}</span>
        <button class="iv-button" style="height:100%" @click="plusClick"  >+</button>
    </div>

</template>

<script>
import {eventBus} from "@/buses/eventBus";
export default {
    name: "iv-increment-button",
    props:{
      disabled: {
        type:Boolean,
        required: false,
        default: false
      },

      initialValue:{
          type:Number,
          required:false,
          default:1
      },

      increment:{
          type:Number,
          required:false,
          default:1
      }

    },
    data(){
      return {
        current: this.initialValue
      }
    },
    methods:{
        mouseOn(e){
            this.$emit("mouseover",e)
        },
        mouseOff(e){
            this.$emit("mouseleave",e)
        },
        minusClick(){
            this.current = this.current-this.increment;
            this.$emit("change", this.current)
        },
        plusClick(){
            this.current = this.current+this.increment;
            this.$emit("change", this.current)
        },
    },
    mounted(){
      eventBus.$on("reset-data", data => {
        console.log(data);
        this.current = this.initialValue;
      });
    }
  
}
</script>

<style lang="scss">
@import "src/globals";
$green:#19CF86;
$greenHover:#1BDE90;
$greenClick:#139C65;
$disabledColor:#D3D3D3;


.iv-increment-button{
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2rem;
    height:1.45rem;
    padding: 0.25em 0.5em;
    font-weight:500;
}

.text{
    padding-right:0.5em;
    padding-left:0.5em;
}


.iv-button{
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
<template>
    <div class="iv-circle-button iv-drop-shadow-medium" @click="buttonClick" :class="['iv-' + size]">
        <img :src="symbolIcon" :alt="symbol"/>
    </div>
</template>
<script>
import Symbols from "./Symbols.js"
export default {
    name:"iv-symbol-button",
    props:{
        symbol:{
            type:String,
            required:true,
            validator: (value) => Object.keys(Symbols).indexOf(value) > -1
        },
        size:{
            type:String,
            required:false,
            default:""
        }
    },
    methods:{
        buttonClick(){
           this.$emit("click", true);
        },
    },
    computed:{
        symbolIcon(){
            return Symbols[this.symbol]
        }
    }
}
</script>
<style lang="scss">
$brick-red:#C72E2C;
$brick-red-darker:#AD2826;
$brick-red-lighter:#D63330;
.iv-circle-button {
    width:5rem;
    height:5rem;
    color:white;
    border-radius: 200px;
    background-color:$brick-red;
    width:3.5rem;
    height:3.5rem;
    transition: background-color 0.2s;

    &.iv-small{
        width:2rem;
        height:2rem;
    }
    &.iv-large{
        width:5rem;
        height:5rem;
    }
    img{
        width: 50%;
        height:50%;
        color:white;
        padding: 25%;
    }

    &:hover{
        background-color:$brick-red-lighter;
    }
    &:active{
        background-color: $brick-red-darker;
    }
}
</style>
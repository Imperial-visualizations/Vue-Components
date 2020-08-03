<template>
    <button style="position:relative" @click="buttonClick">
        <slot>?</slot>
    </button>
</template>

<script>
import guidanceBus from "buses/guidanceBus.js"

export default {
    name: "iv-guidance-button",
    props:{
        guidanceIdentifier:{
            type:String
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
</style>
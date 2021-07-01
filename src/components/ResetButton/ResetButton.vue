<template>
    <iv-button @click="reset()">Reset All</iv-button>
</template>
<script>
// import Theme from '@/Theme.js';
import Button from '../Button/Button.vue';
import { EventBus } from "@/buses/EventBus";
export default {
    name:"iv-reset-button",
    components: {
        "iv-button":Button
    },
    methods: {
        reset(){
            EventBus.$emit("ResetAllValues");
        }
    }
}
</script>
<style lang="scss">

</style>
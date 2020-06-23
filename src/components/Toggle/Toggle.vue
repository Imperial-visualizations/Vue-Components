<template>
    <toggle type="checkbox" class="impvis-toggle"><slot>Toggle</slot></toggle>
</template>
<script>
export default {
    name:"iv-toggle"
}
</script>
<style>
.impvis-toggle{
    color:white;
    background-color:darkblue;
}
</style>
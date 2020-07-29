<template>
    <div class="fixed-blob">
        <slot />
    </div>
</template>
<script>
import Hotspotable from "./Hotspotable"
export default {
    name:"iv-fixed-blob",
    mixins:[Hotspotable]
}
</script>
<style>
.fixed-blob{
    width:200px;
    height:100%;
    background-color: red;
}
</style>
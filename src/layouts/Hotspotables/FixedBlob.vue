<template>
    <div class="fixed-blob">
        <slot />
    </div>
</template>
<script>
export default {
    name:"iv-fixed-blob"
}
</script>
<style>
.fixed-blob{
    width:200px;
    height:100%;
    background-color: red;
}
</style>
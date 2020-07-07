<template>
    <svg width=600 height=300>
        <slot></slot>
    </svg>
</template>

<script>
export default {
    name: "iv-drag-and-drop",
}
</script>

<style scoped>
svg{
  border: 5px solid black;
}
</style>
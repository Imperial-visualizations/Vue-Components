<template>
    <div class="main-stage">
        <slot>Insert your main content here!</slot>
    </div>
</template>
<script>
export default {
    name:"iv-main-stage"
}
</script>
<style>

.main-stage {
    margin-top:2rem;
    height:calc(100vh - 2rem);
}
</style>
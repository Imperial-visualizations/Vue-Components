<template>
    <button class="impvis-button">{{hello}}<slot>Button</slot></button>
</template>
<script>
export default {
    name:"iv-button",
    computed:{
        hello(){
            return "Hello world "
        }
    }
}
</script>
<style>
.impvis-button{
    color:white;
    background-color:darkblue;
}
</style>
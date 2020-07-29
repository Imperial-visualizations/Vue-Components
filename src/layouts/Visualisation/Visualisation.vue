<template>
    <div class="iv-visualisation" ref ="visulisation_container">
        <slot ></slot>
    </div>
</template>
<script>
//Potentially at some point this should be renamed to something like visulaisation manager? Or something to make it explicit that this object manages the state of the panels and dropouts etc...
export default {
    name:"iv-visualisation",
    data(){
        return{
            reservedSlots:[]
        }
    }
}
</script>
<style>
.iv-visualisation {
    display:flex;
    flex-direction: row;
    height:100%;
}
.iv-visualisation > .iv-main-stage{ 
    flex: 1 1 auto;
}
</style>
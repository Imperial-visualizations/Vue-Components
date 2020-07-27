<template>
    <div class="iv-visualisation">
        <slot></slot>
    </div>
</template>
<script>

//Potentially at some point this should be renamed to something like visulaisation manager? Or something to make it explicit that this object manages the state of the panels and dropouts etc...
export default {
    name:"iv-visualisation",
    // props:{


    // },
    // created(){
    //     this._layout_ = new this.layout();
    // },
    // data(){
    //     return {
    //         _layout_: null
    //     }
    // },
    // provides(){
    //     return {
    //         layout:this._layout_
    //     }
    // }
}
</script>
<style>
.iv-visualisation {
    display:flex;
    flex-direction: row;
    margin-top:2rem;
    height:calc(100vh - 2rem);
}
.iv-visualisation > .iv-main-stage{ 
    flex: 1 1 auto;
}
</style>
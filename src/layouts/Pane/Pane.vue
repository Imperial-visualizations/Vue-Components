<template>
    <div class="iv-pane-wrapper" :style="widthObj">
        <div class="iv-pane"  v-show=showPane>
            <slot>Default pane</slot>
        </div>
        <button class="iv-pane-button" @click="showPane = !showPane" :style="buttonLeft">{{paneText}}</button>
    </div>
</template>
<script>
export default {
    name:"iv-pane",
    data(){
        return{
            widthFraction:25,
            showPane:true
        }
    },
    computed:{
        widthObj(){
            return {width:(this.showPane)? `${this.widthFraction}%` : '0%'};
        },
        paneText(){
            return (this.showPane)? "⬇️":"⬆️";
        },
        buttonLeft(){
            return {'left': (this.showPane)? `${this.widthFraction}%` : 0}
        }
    }
}
</script>
<style>
.iv-pane {
    height:100%;
    width:100%;
    margin:0;
    box-shadow: -5px 0px 10px 5px #aaa;
}
.iv-pane-wrapper{
    height:100%;
    
}
.iv-pane-button{
    position: absolute;
    top:50%;
    transform-origin: bottom;
    transform:translate(-50%,-25%) rotate(90deg);
    
}
</style>
<template>
    <div class="iv-pane-wrapper" :style="widthObj" :class="positionalClass('iv-pane-wrapper')">
        <div class="iv-pane"  v-show=showPane>
            <div class="iv-pane-content" :class="positionalClass('iv-pane-content')">
                <slot>Default pane</slot>
            </div>
            <div class="iv-drag-selector" :class="positionalClass('iv-drag-selector')" @mousedown="mouseDown"  ></div>
        </div>
        <button class="iv-pane-button" :class="positionalClass('iv-pane-button')" @click="showPane = !showPane" :style="buttonLeft">{{paneText}}</button>
    </div>
</template>
<script>
import HotspotMixin from "../HotspotMixin.js"
export default {
    name:"iv-pane",
    mixins:[HotspotMixin],
    data(){
        return{
            widthFraction:25,
            showPane:true,
            resizer:{
              adjusting:false,
              initPageX:null
            }
        }
    },
    computed:{
        widthObj(){
            return {width:(this.showPane)? `${this.widthFraction}%` : '0%'};
        },
        paneText(){
            return !(this.showPane ^ this.position == "left")? "⬇️":"⬆️";
        },
        buttonLeft(){
            if(this.position == "left"){
                return {'left':  this.showPane ? `${this.widthFraction}%` : 0}
            } else if(this.position == "right"){
                return {'left':  this.showPane ? `${100 - this.widthFraction}%` : '100%'}
            }else{
                throw Error("Pane may only have position left or position right");
            }
        },
    },
    methods:{
        positionalClass(base){
            return [`${base}-${this.position}`]
        },
        mouseDown(e){
            this.resizer.adjusting=true;
            this.resizer.initPageX=e.pageX;
            window.addEventListener("mousemove",this.resize);
            window.addEventListener("mouseup",this.mouseUp);  
            document.body.style.userSelect="none"; 
        },
        mouseUp(){
            this.resizer.adjusting=false;
            document.body.style.userSelect="auto";
            window.removeEventListener("mouseup",this.mouseUp);
            window.removeEventListener("mousemove",this.resize);
        },
        resize(e){
            if(this.resizer.adjusting){
                let deltaX = (e.pageX - this.resizer.initPageX) * ((this.position == "left")? 1:-1);
                let deltaFrac = 100*deltaX/window.innerWidth;
                this.widthFraction += deltaFrac;
                this.resizer.initPageX = e.pageX;
            }   
        }
    }
}
</script>
<style>
.iv-pane-content{
    height:100%;
    width:calc(100% - 0.5em);
}
.iv-drag-selector{
    padding:0;
    height:100%;
    width:0.5em;

    cursor: col-resize;
}
.iv-pane-content-left{
    float:left;
}
.iv-drag-selector-left{
    float:right;
    transform:translateX(50%);
}
.iv-pane-content-right{
    float:right;
}
.iv-drag-selector-right{
    float:left;
    transform:translateX(-50%);
}
.iv-pane {
    height:100%;
    width:100%;
    margin:0;
    box-shadow: -5px 0px 10px 5px #aaa;
}
.iv-pane-wrapper-left{
    order:-1;
}
.iv-pane-wrapper-right{
    order:1;
}
.iv-pane-wrapper{
    height:100%;
    flex:0 0 auto;
    
}
.iv-pane-button{
    position: absolute;
    top:50%;
     
}
.iv-pane-button-left{
    transform-origin: left;
    transform: translate(25%,-50%) rotate(90deg);  
}
.iv-pane-button-right{
    transform-origin: left;
    transform: translate(-25%,-50%) rotate(90deg);  
}
</style>
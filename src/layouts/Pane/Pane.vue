<template>
    <div class="iv-pane-wrapper" ref="paneWrapper" :style="widthObj">
        <div class="iv-pane"  v-show=showPane>
            <slot>Default pane</slot>
        </div>
        <button class="iv-pane-button" ref="paneButton" @click="handleButton" :style="buttonMove">{{paneText}}</button>
        <button class="iv-pane-drag-button" ref="dragButton" @mousedown="drag($event)" @mouseup="drop()" :style="buttonMove">
            
                    <svg width=10 height=10>
                        <circle r=5 fill="#7E5AA2" opacity=0.5 stroke="black" stroke-width="3" />
                    </svg> 
            </button>
    </div>
</template>
<script>
export default {

    name:"iv-pane",
    data(){ 
        return{
            widthFraction:4,
            widthFractionPixel:null,
            widthFractionMin:10,
            widthFractionPixelMin:null,
            currentWidth: null,
            x_mouse_positon: null,
            showPane:true,
            initDragPos:null,
        }
    },
    methods:{
        drag(e){
            this.showPane = true;
            this.initDragPos = e.clientX;
            this.$parent.$el.addEventListener('mousemove', this.move);
        },
        drop(){
            this.$parent.$el.removeEventListener('mousemove', this.move);
        },
        move(e) {
            this.x_mouse_positon = e.clientX;

            if((this.x_mouse_positon < this.widthFractionPixelMin) && (this.initDragPos > this.widthFractionPixelMin)){
                this.$parent.$el.removeEventListener('mousemove', this.move);
                this.handleButton();
            }
            else{
                this.currentWidth = this.x_mouse_positon;
                this.$refs.paneWrapper.width = `${this.currentWidth}px`;
                this.$refs.paneButton.left = `${this.currentWidth}px`;
                this.$refs.dragButton.left = `${this.currentWidth}px`;
            }
        },
        handleButton(){
            this.showPane = !this.showPane;

            if(!this.showPane){
                this.currentWidth = 0;
            }
            else{
                this.currentWidth = this.widthFractionPixel;
            }
        }
    },
    computed:{
        widthObj(){
            return {width:`${this.currentWidth}px`};
        },
        paneText(){
            if(this.currentWidth == 0){
                return "⬆️";
            }
            else{
                return "⬇️";
            }
        },
        buttonMove(){
            return {'left': `${this.currentWidth}px`}
        }
    },
    mounted(){  
        this.widthFractionPixel = Math.round(this.$parent.$el.clientWidth/this.widthFraction);
        this.widthFractionPixelMin = Math.round(this.$parent.$el.clientWidth/this.widthFractionMin);
        this.currentWidth = this.widthFractionPixel;
    }
}
</script>
<style>
.iv-pane-wrapper{
    height:100%;
    border: 3px solid black;
}
.iv-pane {
    height:100%;
    width:100%;
    margin:0;
    box-shadow: -5px 0px 10px 5px #aaa;
}
.iv-pane-button{
    position: absolute;
    top:45%;
    transform-origin: bottom;
    transform:translate(-50%,-25%) rotate(90deg);
}
.iv-pane-drag-button{
    height: 50px;
    margin:0;
    width: 50px;
    position: absolute;
}
</style>
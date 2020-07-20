<template>
    <div class="iv-rhs-pane-wrapper" :style="widthObj">
        <button class="iv-rhs-pane-button" ref="paneButton" @click="handleButton" :style="buttonMove">{{paneText}}</button>
        <button class="iv-rhs-pane-drag-button" ref="dragButton" @mousedown="drag($event)" @mouseup="drop()" :style="buttonMove">
                <svg width=10 height=10>
                    <circle r=5 fill="#7E5AA2" opacity=0.5 stroke="black" stroke-width="3" />
                </svg> 
        </button>
        <div class="iv-rhs-pane"  v-show=showPane>
            <slot>Default pane</slot>
        </div>

    </div>
</template>
<script>
export default {
    //<img width="30" src="../../assets/drag.png" />
    //<svg  width=10 height=10 src="../drag_test.svg" />
    name:"iv-rhs-pane",
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
            //this.x_mouse_positon = e.clientX;
            this.x_mouse_positon = e.clientX;

            if((this.x_mouse_positon > this.widthFractionPixelMin) && (this.initDragPos < this.widthFractionPixelMin)){
                this.$parent.$el.removeEventListener('mousemove', this.move);
                this.handleButton();
            }
            else{
                this.currentWidth = this.$parent.$el.clientWidth - this.x_mouse_positon;
                this.$refs.paneWrapper.width = `${this.currentWidth}px`;
                this.$refs.paneButton.right = `${this.currentWidth}px`;
                this.$refs.dragButton.right = `${this.currentWidth}px`;
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
                return "⬇️";
            }
            else{
                return "⬆️";
            }
        },
        buttonMove(){
            return {'right': `${this.currentWidth}px`}
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
.iv-rhs-pane-wrapper{
    height:100%;
    border: 3px solid black;
}
.iv-rhs-pane {
    height:100%;
    width:100%;
    margin:0;
}
.iv-rhs-pane-button{
    position: absolute;
    top:45%;
    transform-origin: bottom;
    transform:translate(50%,-25%) rotate(90deg);
}
.iv-rhs-pane-drag-button{
    height: 50px;
    margin:0;
    width: 50px;
    position: absolute;
    transform-origin: bottom;
    transform:translate(50%,-25%);
}
</style>
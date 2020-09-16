<template>
    <div class="iv-pane-wrapper" :style="widthObj" :class="ivPaneClass">
        <div class="iv-pane" :class="[positionalClass('iv-pane')]" v-show=showPane>
            <div class="iv-drag-selector" :class="[positionalClass('iv-drag-selector')]" @mousedown="mouseDown" @touchstart="touchdown"  ></div>
            <div class="iv-pane-content" :class="[positionalClass('iv-pane')]">
                <slot :toggle="togglePos" :position="position_">Default pane</slot>
            </div>

        </div>
        <button class="iv-pane-button" :class="[positionalClass('iv-pane-button')]" @click="showPane = !showPane" :style="buttonLeft"> 
                <img v-if="pointLeft" class="navImage" src="./assets/right.svg" />
                <img v-else class="navImage"  src="./assets/left.svg" />
        </button>
    </div>
</template>
<script>
import guidanceBus from "@/buses/guidanceBus.js";
import Hotspotable from '@/mixins/Hotspotable.js';
import LTMode from "@/mixins/LTMode.js";
const minWidth = 350;
const maxWidthRatio = 50;
export default {
    name:"iv-pane",
    mixins:[Hotspotable,LTMode],
    props:{
        width:{
            type:Number,
            required:false,
            default:400,
        },
        format:{
            type:String,
            required:false,
            default:'push',
            validator: (value) => ['push','full','overlay'].indexOf(value) > -1
        },
        opacity:{ //Be aware that this might break Dan's stuff.
            type:Number,
            required:false,
            default:0
        }
    },
    created(){
        this.large = true;

        guidanceBus.$on("show-component",function(guidanceIdentifier){
            //console.log("show", guidanceIdentifier,this.$el.id )
            if(this.$el.id == guidanceIdentifier){
                this.showPane=true
            }
            
        }.bind(this));

        //guidanceBus.$on("hide-component",function(guidanceIdentifier){
            //console.log("close", guidanceIdentifier, this.$el.id)
            //if(this.$el.id == guidanceIdentifier){
            //    this.showPane=false
            //}
        //}.bind(this));

        this.showPane = this.mode === 'learn';
    },
    mounted(){
        this.windowWidth = window.innerWidth;
        window.addEventListener('resize',() => {
            this.windowWidth = window.innerWidth;
            if(this.widthPx > this.maxWidth){
                this.widthPx = this.maxWidth
            }
        })
    },
    data(){
        return{
            widthPx:this.width,
            showPane:true,
            windowWidth:0,
            resizer:{
              adjusting:false,
              initPageX:null
            }
        }
    },
    computed:{
        maxWidth(){
            return (this.format === 'push')? this.windowWidth * maxWidthRatio/100: this.windowWidth;
        },
        widthObj(){
            return {width:`${ this.showPane? this.widthPx:0}px`};
        },
        pointLeft(){
            return !(this.showPane ^ this.position_ == "left");
        },
        buttonLeft(){
            if(this.position_ == "left"){
                return {'left':  this.showPane ? `${this.widthPx}px` : 0}
            } else if(this.position_ == "right"){
                return {'right':  this.showPane ? `${this.widthPx}px` : '0%'}
            }else{
                throw Error("Pane may only have position left or position right");
            }
        },
        ivPaneClass(){
            if (this.format === 'overlay'){
               return [this.positionalClass('iv-pane-wrapper'),'iv-pane-overlay',`iv-pane-overlay-${this.position_}`]
            }
            return [this.positionalClass('iv-pane-wrapper')]
        },
    },
    methods:{
        togglePos(){
            if(this.position_ == 'left'){
                this.setPosition('right')
            }else{
                this.setPosition('left')
            }
        },
        mouseDown(e){
            this.resizer.adjusting=true;
            this.resizer.initPageX=e.pageX;
            window.addEventListener("mousemove",this.resize);
            window.addEventListener("mouseup",this.mouseUp);  
            document.body.style.userSelect="none"; 
        },
        touchdown(e){
            this.resizer.adjusting = true;
            this.resizer.initPageX = e.touches[0].pageX;
            window.addEventListener("touchmove",this.resize);
            window.addEventListener("touchend",this.touchup);
        },
        touchup(){
            this.resizer.adjusting = false;
            window.removeEventListener("touchend",this.touchup);
            window.removeEventListener("touchmove",this.resize);
        },
        mouseUp(){
            this.resizer.adjusting=false;
            document.body.style.userSelect="auto";
            window.removeEventListener("mouseup",this.mouseUp);
            window.removeEventListener("mousemove",this.resize);
        },
        resize(e){
            let pageX = (e.constructor.name === "TouchEvent")? e.touches[0].pageX : e.pageX;
            if(this.resizer.adjusting){
                let deltaX = (pageX - this.resizer.initPageX) * ((this.position_ == "left")? 1:-1);
                this.widthPx += (this.widthPx + deltaX > minWidth && this.widthPx + deltaX < this.maxWidth)? deltaX : 0;
                this.resizer.initPageX = pageX;
            }   
        }
    }
}
</script>
<style lang="scss">
@import "src/globals.scss";
.iv-pane-content{
    height:100%;
    overflow-y:auto;
    padding: 0rem 1.25rem;
    box-sizing: border-box;
}
.iv-drag-selector{
    padding:0;
    height:100%;
    width:15px;
    cursor: col-resize;
}
.iv-pane-content-left{
    float:left;
}
.iv-drag-selector-left{
    left:100%;
    transform:translateX(-50%);
    position:absolute;
}
.iv-pane-content-right{
    float:right;
}
.iv-drag-selector-right{
    left:0%;
    position:absolute;
    transform:translateX(-50%);
}
.iv-pane{
    height:100%;
    width:100%;
    margin:0;
    position:relative;
    background-color:#ededed;
}
.iv-pane-left{
    box-shadow: 2px 0px 20px -7px #aaa;
}
.iv-pane-right{
    box-shadow: -2px 0px 20px -7px #aaa;
}
.iv-pane-wrapper-left{
    order:-1;
}
.iv-pane-wrapper-right{
    order:1;
}
.iv-pane-wrapper{
    position:relative;
    background-color: white;
    height:100%;
    flex:0 0 auto;
    z-index: $sidebarZLevel;
}
.iv-pane-button{
    position: absolute;
    cursor: pointer;
    top:50%;
    transform: translateY(-50%);
    background-color: $hotspotButtonColor;
    border:none;
    outline:none;
    width: 40px;
    height: 80px;
}
.iv-pane-button-left{
    border-radius: 0 40px 40px 0;
    box-shadow: 2px 2px 20px -7px #aaa;
}
.iv-pane-button-right{
    border-radius: 40px 0  0 40px;
    box-shadow: -2px 2px 20px -7px #aaa;
}
.iv-pane-overlay{
    position:absolute;
}
.iv-pane-overlay-left{
    left:0;
}
.iv-pane-overlay-right{ 
    right:0;
}
.navImage{
  width: 1.2rem;
  height: 2.5rem;
  transition: 0.5s;
}
@media screen and (max-height: 450px) {
  .navMenu {
    padding-top: 15px;
  }
  .navMenu   a {
    font-size: 18px;
  }
}

</style>

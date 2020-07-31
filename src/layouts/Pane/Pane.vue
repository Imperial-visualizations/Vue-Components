<template>
    <div class="iv-pane-wrapper" :style="widthObj" :class="ivPaneClass">
        <div class="iv-pane"  v-show=showPane>
            <div class="iv-drag-selector" :class="positionalClass('iv-drag-selector')" @mousedown="mouseDown"  ></div>
            <div class="iv-pane-content" :class="positionalClass('iv-pane')">
                <slot>Default pane</slot>
            </div>

        </div>
        <button class="iv-pane-button" :class="positionalClass('iv-pane-button')" @click="showPane = !showPane" :style="buttonLeft"> 
                  <img v-if="pointLeft" class="navImage"  src="./assets/right.svg" />
                <img v-else class="navImage"  src="./assets/left.svg" />

        </button>
    </div>
</template>
<script>
import {guidanceBus} from "../Guidance/guidanceModal.vue";
import Hotspotable from 'mixins/Hotspotable.js';
import LTMode from "mixins/LTMode.js";
export default {
    name:"iv-pane",
    mixins:[Hotspotable,LTMode],
    props:{
        width:{
            type:Number,
            required:false,
            default:250,
        },
        format:{
            type:String,
            required:false,
            default:'overlay',
            validator: (value) => ['push','full','overlay'].indexOf(value) > -1
        },
        opacity:{ //Be aware that this might break Dan's stuff.
            type:Number,
            required:false,
            default:0
        }
    },
    created(){
        this.$parent.reservedSlots.push(this.position);
        guidanceBus.$on("show-component",function(guidanceIdentifier){
            console.log("show", guidanceIdentifier,this.$el.id )
            if(this.$el.id == guidanceIdentifier){
                this.showPane=true
            }
            
        }.bind(this));
        guidanceBus.$on("hide-component",function(guidanceIdentifier){
            console.log("close", guidanceIdentifier, this.$el.id)
            //if(this.$el.id == guidanceIdentifier){
            //    this.showPane=false
            //}
        }.bind(this));
        this.showPane = this.mode === 'learn';
    },
    destroyed(){
        if(this.$parent.reservedSlots.indexOf(this.position) !== -1){
            this.$parent.reservedSlots.splice(this.$parent.reservedSlots.indexOf(this.position),1)
        }
        
    },
    data(){
        return{
            widthPx:this.width,
            showPane:true,
            resizer:{
              adjusting:false,
              initPageX:null
            }
        }
    },
    computed:{
        widthObj(){
            return {width:`${ this.showPane? this.widthPx:0}px`};
        },
        pointLeft(){
            return !(this.showPane ^ this.position == "left");
        },
        buttonLeft(){
            if(this.position == "left"){
                return {'left':  this.showPane ? `${this.widthPx}px` : 0}
            } else if(this.position == "right"){
                return {'right':  this.showPane ? `${this.widthPx}px` : '0%'}
            }else{
                throw Error("Pane may only have position left or position right");
            }
        },
        ivPaneClass(){
            if (this.format === 'overlay'){
               let arr = this.positionalClass('iv-pane-wrapper');
               arr.push('iv-pane-overlay',`iv-pane-overlay-${this.position}`)
               return arr
            }
            return this.positionalClass('iv-pane-wrapper')
        }
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
                this.widthPx += deltaX;
                this.resizer.initPageX = e.pageX;
            }   
        }
    },
}
</script>
<style lang="scss">
@import "src/globals.scss";
.iv-pane-content{
    height:100%;
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
    background-color:white;
}
.iv-pane-wrapper-left{
    order:-1;
}
.iv-pane-wrapper-right{
    order:1;
}
.iv-pane-wrapper{
    background-color: white;
    height:100%;
    flex:0 0 auto;
    z-index: $sidebarZLevel;
    
}
.iv-pane-button{
    position: absolute;
    top:50%;
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
.navIcon{
  position: relative;
  z-index: 1;
  top:250px;
  background-color: rgb(163, 223, 124);
  border:none;
  box-shadow: 0px 0px 4px $secondaryGreen;
  outline:none;
  transition: 0.5s;
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

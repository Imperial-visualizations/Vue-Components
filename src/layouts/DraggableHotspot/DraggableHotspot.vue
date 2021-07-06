<template>

  <div ref="draggableContainer" id="draggable-container" v-if="isOpen">
    <div id="draggable-header" @mousedown="dragMouseDown">
      drag me 
    </div>
    <div id="close-button">
    <iv-button class="iv-close-button" @click="closeControlPanel">x</iv-button>
    </div>
    <div id="draggable-content" :class="[{'iv-transparent':transparent},{'iv-glass-effect':glass}]"> 
    <slot></slot>
    </div>
  </div>

</template>

<script>
import {hotspotBus} from "@/buses/hotspotBus";
export default {
  name: 'iv-DraggableDiv',
  props:{
    idName:{
      type: String,
      required: true,
      default:"Name_1"
    },
    glass:{
    type:Boolean,
    default:true
    },
    transparent:{
      type:Boolean,
      default:false
    },
  },
  data: function () {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
      },
      isOpen:false,
      //isClosed:true,
      buttonName: this.name
    }
  },
  methods: {
    dragMouseDown: function (event) {
      event.preventDefault()
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      document.onmousemove = this.elementDrag
      document.onmouseup = this.closeDragElement
    },
    elementDrag: function (event) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX - event.clientX
      this.positions.movementY = this.positions.clientY - event.clientY
      this.positions.clientX = event.clientX
      this.positions.clientY = event.clientY
      // set the element's new position:
      this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
      this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'
    },
    closeDragElement () {
      document.onmouseup = null
      document.onmousemove = null
    },
    closeControlPanel(){
      this.isOpen =false;
      hotspotBus.$emit("closeControlPanel", this.idName)
    },
    openControlPanel(){
      this.isOpen =true;
      //this.isClosed = false 
    },
  },
  mounted(){
    hotspotBus.$on("openControlPanel", data => {
     if (data === this.idName){
          this.isOpen=true;
     }
    });
  }
}
</script>

<style lang="scss">
@import "src/globals.scss";
#draggable-container {
  position: absolute;
  z-index: 999;
  width: 500px;
  height: 500px;
}
#close-button{
  cursor:pointer;
  float: right;
  transform:translateY(-100%);
  box-sizing: border-box;
  font-weight: bold;
  box-shadow: 0px 2px 5px #e2e2e2;
  z-index: 10;
  color: white;
  background-color: #fcd916
}
#draggable-header {
  cursor:pointer;
  text-align: center;
  position:absolute;
  margin: 0px;
  box-sizing: border-box;
  font-weight: bold;
  background-color: #fcd916;
  color: white;
  z-index: 10;
  box-shadow: 0px 2px 5px #e2e2e2;
  width: 25%;
  transform:translateX(-50%) translateY(-100%);
  left:50%;
}
#draggable-content{
  background-color: white;
  z-index: 11;
  //width: 500px;
  //height: 100px;
  display: flex;
  flex-direction: column;
}
.iv-close-button{
    cursor: pointer;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2rem;
    height:1.45rem;
    padding: 0.25em 0.5em;
    background-color: #fcd916;
    color:white;
    font-weight:500;
    transition: all 0.2s;

}
.iv-close-button :focus{
        outline:0;
    }

.iv-close-button:hover{
        background-color:#e6c615;
    }
.iv-close-button:active{
        background:#bda20d;
        color:#F0FFF0;
    }


</style>
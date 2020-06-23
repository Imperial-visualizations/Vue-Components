<template>
    <button v-bind:class="impvis-button" style="vertical-align:middle"><slot>Button</slot></button>
</template>
<script>
export default {
    name:"iv-button",
    data() {
      return{
        color: "rgba(20, 102, 224, 0.8)"
      }
    },
    
    // methods:
    //     mouseOverFunc() {
    //         this.color =  rgba(20, 102, 224, 0.8)
    //         return(){

    //         }
    //     }
    }
            


//      <h2><iv-button class="button" style="vertical-align:middle"><span>Hover </span></iv-button> </h2>

</script>
<style>
.impvis-button{
    color:white;
    background-color:darkblue;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0 8px 16px 0 rgba(20, 102, 224, 0.8), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition: 0.5s;
}

.impvis-button span {
  cursor: crosshair;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.impvis-button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.impvis-button:hover span {
  padding-right: 25px;
}

.impvis-button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
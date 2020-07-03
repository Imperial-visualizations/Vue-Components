<template>
    <button class="iv-hoverbutton" :class="on_off" @mouseover="changeState" @mouseleave="changeState" v-on:click="buttonClick">
        {{text}}</button>
</template>

<script>
export default {
    name: "iv-hoverbutton",
    data(){
        return {
            hovering:false,
            text:"Button",
            on_off:"mouseoffbutton",
            depressed:false
        }
    },
    methods:{
        changeState(){
            this.hovering = !this.hovering
            if (this.hovering) {
              this.text="Button"
                this.on_off="iv-hoverbutton-on"
                this.$emit("mouseonbutton", this.hovering)
            } else {
                this.text="Button"
                this.on_off="iv-hoverbutton-off"
                this.$emit("mouseoffbutton", this.hovering)
            }
        },
        buttonClick(){
          this.depressed = !this.depressed
          this.$emit("buttonclicked")
        }
    }
}
</script>

<style>
.iv-hoverbutton{
    color:white;
    background-color:darkblue;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0 8px 16px 0 rgba(20, 102, 224, 0.8), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition: 2s;
}

.iv-hoverbutton-off{
    color:white;
    background-color:darkblue;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0 8px 16px 0 rgba(20, 102, 224, 0.8), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition: 2s;
}

.iv-hoverbutton-on{
    color:white;
    background-color:darkblue;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0 8px 16px 0 rgba(209, 18, 18, 1), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition: 0.2s;
}

.iv-hoverbutton span {
  cursor: crosshair;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  
}

.iv-hoverbutton span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.impvis-hoverbutton:hover span {
  padding-right: 25px;
}

.impvis-hoverbutton:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
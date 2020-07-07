<template>
    <button class="iv-button" @mouseover="changeState" @mouseleave="changeState" @click="buttonClick" :disabled="buttonDisabled">
        <slot>Default text</slot></button>
</template>

<script>
export default {
    name: "iv-button",
    data(){
        return {
            hovering:false
        }
    },
    methods:{
        changeState(){
            this.hovering = !this.hovering
            if (this.hovering) {
                this.$emit("mouseonbutton", this.hovering)
            } else {
                this.$emit("mouseoffbutton", this.hovering)
            }
        },
        buttonClick(event){
          this.$emit("click", event)
        },
    },
    props:{
      initialMode:{
        type: Boolean,
        default: true
      },
      buttonDisabled: {
        type:Boolean,
        required: false,
        default: false
      }
    }
    
}
</script>

<style>
.iv-button{
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

.iv-button:hover{
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

.iv-button:disabled{
    color:white;
    background-color:#ccc;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0 8px 16px 0 rgba(209, 18, 18, 0), 0 6px 20px 0 rgba(0,0,0,0);
    transition: 2s;
}


.iv-button:hover:disabled{
    color:white;
    background-color:#ccc;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    box-shadow: 0 8px 16px 0 rgba(209, 18, 18, 0), 0 6px 20px 0 rgba(0,0,0,0);
    transition: 2s;
}

</style>
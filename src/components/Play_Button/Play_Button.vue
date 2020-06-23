<template>
    <button class="impvis-play-button" :class="text" @click="changeState">{{text}}</button>
</template>

<script>
export default {
    name: "iv-play-button",
    data(){
        return {
            play:false,
            text:"Play",
        }
    },
    methods:{
        changeState(){
            this.play = !this.play
            if (this.play) {
                this.text="Pause"
                this.$emit("playevent")
            } else {
                this.text="Play"
                this.$emit("pauseevent")
            }
        }
    }
}
</script>

<style>
.impvis-play-button{
    background-color: #0F8291;
    color: white;
    font-family:Arial, Helvetica, sans-serif;
    font-size: 1.5vw;
    border:none;
    width:8vw;
    padding-top: 0.5vw;
    padding-bottom: 0.5vw;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.25);
    border-radius: 0.2vw;
    transition: 0.5s;
}

.Pause{
    /* This class is active when this.play is true (when the button is showing the option to pause) */
    background-color: #0a6d7a;
}

.impvis-play-button:focus{
   outline: 0;
}
</style>
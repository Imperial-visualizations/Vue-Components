<template>
    <button class="iv-play-button" :class="dyn_class" @click="changeState">
        <img v-if="!play" class="play-icon" :src="playImg" />
        <img v-else class="play-icon" :src="pauseImg" />
        <span>{{text}}</span>
    </button>
</template>

<script>
// TODO: Fix this!
import PlayButton from "@/assets/play.svg"
import PauseButton from "@/assets/pause.svg"
export default {
    name: "iv-play-button",
    data(){
        return {
            play:false,
            text:"Play",
            dyn_class:"iv-button-play",
            playImg:PlayButton,
            pauseImg:PauseButton
        }
    },
    methods:{
        changeState(){
            this.play = !this.play
            if (this.play) {
                this.text="Pause"
                this.dyn_class="iv-button-pause"
                this.$emit("play")
            } else {
                this.text="Play"
                this.dyn_class="iv-button-play"
                this.$emit("pause")
            }
        }
    }
}
</script>

<style>
.iv-play-button{
    background-color: #0F8291;
    color: white;
    border:none;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.25);
    padding: 0.2rem 0.4rem;
    width:5rem;
    white-space:nowrap;
}
.iv-play-button span{
    display:inline-block;
    line-height: 1.2rem;
    font-size:1rem;
    text-align: left;
}
.iv-button-pause{
    /* This class is active when this.play is true (when the button is showing the option to pause) */
    background-color: #0a6d7a;
}
.iv-play-button:focus{
   outline: 0;
}
.play-icon{
    float:left;
    height:1rem;
    padding-top: 0.1rem;
    padding-bottom:0.1rem;
    transition: 0.5s;
    padding-right: 0.25rem;
    transform: translateY(0.1vw);
}
</style>
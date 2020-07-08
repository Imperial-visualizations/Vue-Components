<<<<<<< HEAD
<template>
    <button class="iv-play-button" :class="dyn_class" @click="changeState">
        <img v-if="!play" class="play-icon" src="@/components/Play_Button/assets/play.svg" />
        <img v-else class="play-icon" src="@/components/Play_Button/assets/pause.svg" />
        {{text}}
    </button>
</template>

<script>
export default {
    name: "iv-play-button",
    data(){
        return {
            play:false,
            text:"Play",
            dyn_class:"iv-button-play",
        }
    },
    methods:{
        changeState(){
            this.play = !this.play
            if (this.play) {
                this.text="Pause"
                this.dyn_class="iv-button-pause"
                this.$emit("iv-played")
            } else {
                this.text="Play"
                this.dyn_class="iv-button-play"
                this.$emit("iv-paused")
            }
        }
    }
}
</script>

<style lang="scss">
.iv-play-button{
    background-color: #0F8291;
    color: white;
    font-size: 1.5vw;
    border:none;
    width:7.8vw;
    padding-top: 0.4vw;
    padding-bottom: 0.4vw;
    text-align: left;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.25);
    border-radius: 0.2vw;
    transition: 0.5s;
}

.iv-button-pause{
    /* This class is active when this.play is true (when the button is showing the option to pause) */
    background-color: #0a6d7a;
}

.iv-play-button:focus{
   outline: 0;
}

.play-icon{
    float:left bottom;
    width:1.25vw;
    padding-right:0.5vw;
    transition: 0.5s;
    transform: translateY(0.1vw);
}
=======
<template>
    <button class="iv-play-button" :class="dyn_class" @click="changeState">
        <img v-if="!play" class="play-icon" src="./assets/play.svg" />
        <img v-else class="play-icon" src="./assets/pause.svg" />
        {{text}}
    </button>
</template>

<script>
export default {
    name: "iv-play-button",
    data(){
        return {
            play:false,
            text:"Play",
            dyn_class:"iv-button-play",
        }
    },
    methods:{
        changeState(){
            this.play = !this.play
            if (this.play) {
                this.text="Pause"
                this.dyn_class="iv-button-pause"
                this.$emit("iv-played")
            } else {
                this.text="Play"
                this.dyn_class="iv-button-play"
                this.$emit("iv-paused")
            }
        }
    }
}
</script>

<style lang="scss">
.iv-play-button{
    background-color: #0F8291;
    color: white;
    font-size: 1.5vw;
    border:none;
    width:7.8vw;
    padding-top: 0.4vw;
    padding-bottom: 0.4vw;
    text-align: left;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.25);
    border-radius: 0.2vw;
    transition: 0.5s;
}

.iv-button-pause{
    /* This class is active when this.play is true (when the button is showing the option to pause) */
    background-color: #0a6d7a;
}

.iv-play-button:focus{
   outline: 0;
}

.play-icon{
    float:left bottom;
    width:1.25vw;
    padding-right:0.5vw;
    transition: 0.5s;
    transform: translateY(0.1vw);
}
>>>>>>> upstream/dev
</style>
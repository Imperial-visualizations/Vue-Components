<template>
    <div>
        <basic-plotly
         v-if="plotType=='plotly'"
         v-bind:animate="animate">

        </basic-plotly>
        <div id="button-container">
            <play-button v-if="showPlayButton" 
            @iv-played="play" @iv-paused="pause">
            </play-button>
            <button v-for="button in buttons" :key="button.message">
                {{button.message}}
            </button>
        </div>
    </div>
    
</template>

<script>
import BasicPlotly from './BasicPlotly';
import Play_Button from '../Play_Button';

export default {
    name:"iv-plot-container",
    components:{
        "basic-plotly": BasicPlotly,
        "play-button": Play_Button,
    },
    props: {
        plotType:{
            type: String,
            default: "plotly",
        },
        showPlayButton:{
            type: Boolean,
            default: true,
        },
        buttons:{
            default: [
                {message: 'next Button' },
                {message: 'another Button' },
                ],
        },
    },
    data(){
        return{animate: false,}
    },
    methods: {
        play: function(){
            this.animate = true;
        },
        pause: function(){
            this.animate = false;
        }
    }
}
</script>

<style scoped>

#plotly-div{
    width:60vw;
    height: 50vh;
}

#button-container{
    margin: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

button{
    margin-right: 0.5rem;
}
</style>
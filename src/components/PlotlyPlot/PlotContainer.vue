<template>
    <div>
        <basic-plotly
         v-if="plotType=='plotly'"
         v-bind:animate="animate"
         v-bind:input0="this.buttons[0].bool"> <!-- Just an example of how to bind the button/slider to the plot -->

        </basic-plotly>

        <div id="button-container">
            <play-button v-if="showPlayButton" 
            @iv-played="play" @iv-paused="pause">
            </play-button>
            <button v-for="button in buttons" :key="button.message" @click="buttonPress(button)" id="plot-button">
                {{button.message}}
            </button>
        </div>
        <div id="slider-container" v-for="slider in sliders" :key="slider.message">
            <input type="range" :min="slider.min" :max="slider.max" :step="slider.step" :value="slider.value">
            <label>{{slider.message}}</label>
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
                {
                    message: 'Next Button',
                    bool: false,
                },
                {
                    message: 'Another Button',
                    bool: true
                },
                ],
        },
        sliders:{
            default: [
                {
                    message: 'First Slider',
                    step: 5,
                    max: 10,
                    min: 0,
                    value: 5,
                },
                {
                    message: 'Second Slider',
                    step: 1,
                    max: 10,
                    min: 0,
                    value: 1,
                }
            ]
            
        }
    },
    data(){
        return{
            animate: false,
        }
    },
    methods: {
        play: function(){
            this.animate = true;
        },
        pause: function(){
            this.animate = false;
        },
        buttonPress: function(button){
            button.bool = !button.bool; 
        }
    }
}
</script>

<style>

#slider-container{
    margin-bottom: 1vh;
}

#button-container{
    margin: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}

#plot-button{
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
    margin-right: 0.5rem;
}

button:focus{
    outline: 0;
}
</style>
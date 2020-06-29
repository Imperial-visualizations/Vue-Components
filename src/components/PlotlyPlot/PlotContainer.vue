<template>
    <div>
        <basic-plotly
         v-if="plotType=='plotly'"
         v-bind:animate="animate"
         v-bind:input0="this.buttons[0].bool">

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
            <input type="range" :min="slider.min" :max="slider.max" :step="slider.step">
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
                }
            ]
            
        }
    },
    data(){
        return{
            animate: false,
            inputBools: []
            // inputBools: [true, true] //should have length of number of buttons
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
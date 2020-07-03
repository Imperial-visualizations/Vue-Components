<template>
    <div>    
        <div ref="container" id="plotly-div"></div>
    </div>
</template>

<script>
import Plotly from 'plotly.js';

export default {
    name:"iv-basic-plotly",
    props: {
        xData:{ 
            type: Array,
            default: function() {return[1,2,3,4]}
        },
        yData:{
            type: Array,
            default: function() {return[-1,4,-9,16]}
        },
        animate:{
            type: Boolean,
        },
    },
    methods:{
        updatePlot() {
            console.log('updated Plot');
            // Plotly Animate called when data is changed
        },
        input0(){
            console.log('Button 1 Pressed')
        },
        input1(){
            console.log('Button 2 Pressed')
        },
        slider1(currentValue){
            console.log('Slider 1 Changed to ', currentValue)
        },
        slider2(currentValue){
            console.log('Slider 2 Changed to ', currentValue)
        },
        animation(){
             if (this.animate){
                Plotly.animate('plotly-div', {
                    data: [{y:[2*(Math.random()-0.5), 8*(Math.random()-0.5), 18*(Math.random()-0.5), 32*(Math.random()-0.5)]}],
                    traces: [0],
                    layout: {}
                }, {
                    frame: {
                        duration: 0,
                        redraw: false,
                        mode: "immediate",
                    }
                });
                requestAnimationFrame(this.animation);
            }
        },

    },
    watch: {
        animate: function(){this.animation();},
        xData: function(){this.updatePlot()},
        yData: function(){this.updatePlot()},
    },
    mounted(){
         let plot = {
            x: this.xData,
            y: this.yData,
            type:"scatter"
        };

        Plotly.newPlot("plotly-div",[plot]);
    },
}

</script>

<style>
#plotly-div{
    width:60vw;
    height: 50vh;

}
</style>
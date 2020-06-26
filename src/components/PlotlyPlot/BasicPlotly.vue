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
        }
    },
    methods:{
        updatePlot() {
            console.log('upda');
            // Plotly Animate called when data is changed
        },
        animation(){
             if (this.animate){
                Plotly.animate('plotly-div', {
                    data: [{y:[Math.random(), 4*Math.random(), 9*Math.random(), 16*Math.random()]}],
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
    },
    mounted(){
         let plot = {
            x: this.xData,
            y: this.yData,
            type:"scatter"
        };

        Plotly.newPlot("plotly-div",[plot]);
    },
    // watch:{
    //     xData: this.updatePlot(),
    //     yData: this.updatePlot()
    // }
}

</script>

<style>
#plotly-div{
    width:60vw;
    height: 50vh;

}
</style>
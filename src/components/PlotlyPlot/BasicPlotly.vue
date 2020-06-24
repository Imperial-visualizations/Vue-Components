<template>
    <div>    
        <div ref="container" id="plotly-div2"></div>
    </div>
</template>

<script>
import Plotly from 'plotly.js';

export default {
    name:"iv-basic-plotly",
    props: {
        xData:{ 
            default: [1,2,3,4]
            },
        yData:{
            default: [-1,4,-9,16]
            }
    },
    // methods:{
    //     updatePlot() {
    //         console.log('updated');
    //         // Plotly Animate called when data is changed
    //     }
    // },
    mounted(){
        console.log('creating');
         let plot = {
            x: this.xData,
            y: this.yData,
            type:"scatter"
        };
        console.log('plotting');
        Plotly.newPlot("plotly-div2",[plot]);
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
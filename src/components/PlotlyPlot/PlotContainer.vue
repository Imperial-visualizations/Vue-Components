<template>
    <div>
        <basic-plotly></basic-plotly>
        <button v-if="button1Text" type="button">{{button1Text}}</button>
        <button v-if="button2Text" type="button">{{button2Text}}</button>
        <button v-if="button3Text" type="button">{{button3Text}}</button>
    </div>
    
</template>

<script>
import BasicPlotly from './BasicPlotly';

export default {
    name:"iv-plot-container",
    components:{
        "basic-plotly": BasicPlotly
    },
    props: {
        button1Text: {
            type:String,
            default: "Play",
        },
        button2Text: String,
        button3Text: String,
    },
}
</script>

<style scoped>

#plotly-div{
    width:60vw;
    height: 50vh;

}
</style>
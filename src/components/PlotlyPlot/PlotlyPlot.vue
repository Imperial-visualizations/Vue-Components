<template>
    <div>
        <div id="plotly-div"></div>
        <button type="button">{{buttonText}}</button>
    </div>
    
</template>

<script>
export default {
    name:"iv-plotly-plot",
    data(){
        return{
            buttonText:"Play",
        }
    }

}
</script>

<style scoped>

#plotly-div:{
    width:40vw;
    height: 30vh;

}
</style>
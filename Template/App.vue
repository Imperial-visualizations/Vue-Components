<template>
    <div>
        <iv-visualisation :title="projectName">
            <div class="iv-welcome-message">
                <!-- <img src='./assets/ImpVis-logo.png' alt="ImpVisLogo" height="50"/> -->
                <h1> Welcome to Imperial Visualisations!</h1>
                <p> Your project, {{projectName}} has succesfully been set up using the NodeJS template!</p>
            </div>
            

            <template #hotspots>
                <iv-pane position='left' format='push' :glass=true></iv-pane>

                <iv-toggle-hotspot position='top' title='' :glass="false" :transparent="false">
                    I am in a toggle hotspot
                    <iv-slider time_step=10 step=0.01 playButton="true"></iv-slider>

                    <iv-reset-button> Reset </iv-reset-button>

                    <iv-toggle-basic> </iv-toggle-basic>
                    <iv-toggle-advance @toggleswitched="toggleChange"></iv-toggle-advance>
                    <iv-toggle-advance :togglesDisabled=disableList></iv-toggle-advance>
                    <iv-tickbox></iv-tickbox>
                </iv-toggle-hotspot>


                <iv-fixed-hotspot position='topright' :glass="true" :transparent="true">
                    I am in a fixed hotspot
                </iv-fixed-hotspot>
            </template>
        </iv-visualisation>

        
    </div>
</template>
<script>
import {name} from '../package.json';
export default {
    name:"App",
    data(){
        return {
            projectName: name,
            disableList: [false, true, false]
        }
    },
    methods: {
        toggleChange(e){
            console.log('event', e);
            if(e == 1){
                this.disableList = [false, true, false];
            }
            if(e == 2){
                this.disableList = [false, false, true];
            }
        }
    }
}
</script>
<style>
.iv-welcome-message{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}
html{
    overflow: hidden;
}
</style>
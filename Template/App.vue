<template>
    <div>
        <iv-visualisation :title="projectName">
            <div class="iv-welcome-message">
                <!-- <img src='./assets/ImpVis-logo.png' alt="ImpVisLogo" height="50"/> -->
                <h1> Welcome to Imperial Visualisations!</h1>
                <p> Your project, {{projectName}} has succesfully been set up using the NodeJS template!</p>
                <iv-hover-text></iv-hover-text>
            </div>
            

            <template #hotspots>
                <iv-pane :allowResize=false position='left' format='push' :glass=true></iv-pane>

                <iv-toggle-hotspot position='top' title='Toggle Hotspot' :glass=true>
                    I am in a toggle hotspot
                    <iv-slider></iv-slider>

                    <iv-reset-button> Reset </iv-reset-button>

                    <iv-toggle-basic> </iv-toggle-basic>

                    <!-- <iv-resetbutton> Reset </iv-resetbutton> -->

                </iv-toggle-hotspot>


                

                <iv-fixed-hotspot position='topright'>
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
            projectName: name
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
</style>
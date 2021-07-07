<template>
    <div>
        <iv-DraggableDiv idName="Control Panel 1">
            <iv-slider></iv-slider>
            <iv-toggle-basic> </iv-toggle-basic>
            <iv-toggle-advance></iv-toggle-advance>
            <iv-reset-button> Reset </iv-reset-button>
        </iv-DraggableDiv>
        <iv-visualisation :title="projectName">
            <div class="iv-welcome-message">
                <!-- <img src='./assets/ImpVis-logo.png' alt="ImpVisLogo" height="50"/> 
                <h1> Welcome to Imperial Visualisations!</h1>
                <p> Your project, {{projectName}} has succesfully been set up using the NodeJS template!</p>
                
            </div>           

              <template #hotspots>
                <iv-pane position='left' format='push' :glass=true></iv-pane>

                <iv-toggle-hotspot :draggable=true position='top' title='Toggle Hotspot' idName="Control Panel 1">
                </iv-toggle-hotspot>
                <iv-toggle-hotspot position='bottom' title='Toggle Hotspot'>                   
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
            projectName: name,
            disableList: [false, true, false]
        }
    },
    methods: {
        toggleChange(e){
            console.log('event', e);
            if(e == 0){
                this.disableList = [false, false, false];
            }
            if(e == 1){
                this.disableList = [false, true, false];
            }
            if(e == 2){
                this.disableList = [true, false, true];
            }
        },

        sliderChanged(e){
            console.log("recieved slider change")
            console.log(e)
        },

        incrementChange(e){
            console.log("received value")
            console.log(e)
        }
    }
}
</script>
<style>
.iv-welcome-message{
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-top: 50px;
}
html{
    overflow: hidden;
}
</style>
<template>
    <div>
        <iv-DraggableDiv idName="Control Panel 1">
            <iv-slider :min="0" :max="6" :step="1" @sliderChanged="sliderChanged"></iv-slider>
            <iv-toggle-basic> </iv-toggle-basic>
            <iv-toggle-advance :width=ToggleWidth :modes=ModeNames></iv-toggle-advance>
            <iv-reset-button> Reset </iv-reset-button>
            <iv-increment-button @change="changeInc1" :initialValue="10" :increment="1" :minimum="0" :maximum="10"> </iv-increment-button>
            <iv-increment-button :initialValue="2" :increment="1" :minimum="min" :maximum="max"> </iv-increment-button>
        </iv-DraggableDiv>
        <iv-visualisation :title="projectName">
            <div class="iv-welcome-message">
                <!-- <img src='./assets/ImpVis-logo.png' alt="ImpVisLogo" height="50"/> -->
                <h1> Welcome to Imperial Visualisations!</h1>
                <p> Your project, {{projectName}} has succesfully been set up using the NodeJS template!</p>
            </div>           

              <template #hotspots>
                <iv-pane position='left' format='push' :glass=true></iv-pane>
                <iv-toggle-hotspot :draggable=true position='top' title='Toggle Hotspot' idName="Control Panel 1">
                </iv-toggle-hotspot>
                <iv-toggle-hotspot position='right' title='Toggle Hotspot'>                   
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
    props:{
        ModeNames:{default: ["0","1","2","Testing testing 1233323"]},
        ToggleWidth:{default: "30px"},
        max:{default: 6},
        min:{default: -8},
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
            this.max=e;
            this.min=-e;
        },

        incrementChange(e){
            console.log("received value")
            console.log(e)
        },
        
        changeInc1(e){
            this.min=e;
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
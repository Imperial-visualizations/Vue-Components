<template>
    <div>
        <iv-button @click="toggleGuidance" >{{buttonElement}}</iv-button>
        <iv-guidance-modal v-if="isGuidanceVisible" :guidance_item="guidance_item"/>
    </div>
</template>
<script>
import guidanceModal from './guidanceModal.vue'
import {guidanceBus} from "./guidanceModal.vue"
import Button from "../../components/Button";

export default {
    name:"iv-guidance-box",
    components:{
        "iv-guidance-modal":guidanceModal,
        "iv-button":Button
    },
    props:{
        guidance_item:{
            type:Object
        }
    },
    data(){ 
        return{
            buttonElement:"?",
            isGuidanceVisible: false,
        }
    },
    methods:{
        toggleGuidance(){
            this.isGuidanceVisible = !this.isGuidanceVisible;
        },
    },
    created(){
        guidanceBus.$on("close-window",function(){
            this.isGuidanceVisible = false;
            this.guidance_item.identfier.style.zIndex = 0;
        }.bind(this));
    },
    mounted(){
         //console.log("positionModalBOX: ",this.guidance_item);
    }
}
</script>
<style>
</style>
<template>
    <div>
        <button @click="toggleGuidance" >{{buttonElement}}</button>
        <iv-guidance-modal v-if="isGuidanceVisible" :guidanceText="guidanceText"/>
    </div>
</template>
<script>
import guidanceModal from './guidanceModal.vue'
import {guidanceBus} from "./guidanceModal.vue"

export default {
    name:"iv-guidance-box",
    components:{
        "iv-guidance-modal":guidanceModal
    },
    props:{
        guidanceText:{
            type:String,
            default:"hey guys its ya boi"
        }
    },
    data(){ 
        return{
            buttonElement:"?",
            isGuidanceVisible: false
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
      }.bind(this));
    }
}
</script>
<style>
</style>
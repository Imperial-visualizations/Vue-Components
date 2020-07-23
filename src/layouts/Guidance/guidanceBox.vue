<template>
    <div>
        <button @click="toggleGuidance" >{{buttonElement}}</button>
        <iv-guidance-modal v-if="isGuidanceVisible" :guidanceText="guidanceText" :window_pos_left="modalPositionLeft" :window_pos_right="modalPositionRight" :window_pos_top="modalPositionTop" :window_pos_bottom="modalPositionBottom" />
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
        },
        modalPostionVertical:{
            type:String,
            default:"top" 
        },
        modalPostionHorizontal:{
            type:String,
            default:"right" 
        },
        modalDivRelative:{
            default: null
        }
    },
    data(){ 
        return{
            buttonElement:"?",
            isGuidanceVisible: false,
            window_pos_top:null,
            window_pos_bottom:null,
            window_pos_left:null,
            window_pos_right:null,
        }
    },
    methods:{
        toggleGuidance(){
            this.isGuidanceVisible = !this.isGuidanceVisible;
        },
    },
    computed:{
        modalPositionTop(){
            if(this.modalPostionVertical == "top"){
                this.window_pos_top = `${this.modalDivRelative.getBoundingClientRect().top}px`;
            }
            return this.window_pos_top
        },
        modalPositionBottom(){
            if(this.modalPostionVertical == "bottom"){
                this.window_pos_bottom = `${this.modalDivRelative.getBoundingClientRect().bottom}px`;
            }
            return this.window_pos_bottom
        },
        modalPositionLeft(){
            if(this.modalPostionHorizontal == "right"){
                this.window_pos_left = `${this.modalDivRelative.getBoundingClientRect().right}px`;
            }
            return this.window_pos_left 
        },
        modalPositionRight(){
            if(this.modalPostionHorizontal == "left"){
                this.window_pos_right = `${this.modalDivRelative.getBoundingClientRect().left}px`;
            }
            return this.window_pos_right
        },
    },
    created(){
      guidanceBus.$on("close-window",function(){
          this.isGuidanceVisible = false;
      }.bind(this));
    },
    mounted(){
        if(this.modalDivRelative == null){
            throw Error("Must set relative div for window position")
        }
    }
}
</script>
<style>
</style>
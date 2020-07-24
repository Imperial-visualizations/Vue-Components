<template>
    <div>
        <button @click="toggleGuidance" >{{buttonElement}}</button>
        <iv-guidance-modal v-if="isGuidanceVisible" :guidanceText="guidanceText" :window_pos_left="window_pos_left" :window_pos_right="window_pos_right" :window_pos_top="window_pos_top" :window_pos_bottom="window_pos_bottom" />
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
        window_pos_top:{
            type:String,
        },
        window_pos_bottom:{
            type:String,
        },
        window_pos_left:{
            type:String,
        },
        window_pos_right:{
            type:String,
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
    /*
    computed:{
        modalPositionTop(){
            if(this.modalPostionVertical == "top"){
                this.window_pos_top = `${this.$refs[this.modalDivRelative].getBoundingClientRect().top}px`;
            }
            return this.window_pos_top
        },
        modalPositionBottom(){
            if(this.modalPostionVertical == "bottom"){
                this.window_pos_bottom = `${this.$refs[this.modalDivRelative].getBoundingClientRect().bottom}px`;
            }
            return this.window_pos_bottom
        },
        modalPositionLeft(){
            if(this.modalPostionHorizontal == "right"){
                this.window_pos_left = `${this.$refs[this.modalDivRelative].getBoundingClientRect().right}px`;
            }
            return this.window_pos_left 
        },
        modalPositionRight(){
            if(this.modalPostionHorizontal == "left"){
                this.window_pos_right = `${this.$refs[this.modalDivRelative].getBoundingClientRect().left}px`;
            }
            return this.window_pos_right
        },
    },
    */
    created(){
      guidanceBus.$on("close-window",function(){
          this.isGuidanceVisible = false;
      }.bind(this));
    }
}
</script>
<style>
</style>
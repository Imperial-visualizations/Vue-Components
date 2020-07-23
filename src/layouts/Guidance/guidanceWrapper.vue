<template>
    <div class="iv-guidance-wrapper" ref ="iv-guidance-wrapper">
        <iv-guidance-modal :guidanceText="returnText" :guidanceHeaderText="progressCount" :prevButton="currentPrevButton" :nextButton="currentNextButton" :homeButton="true" :window_pos_left="modalPositionLeft" :window_pos_right="modalPositionRight" :window_pos_top="modalPositionTop" :window_pos_bottom="modalPositionBottom" />
    </div>
</template>
<script>
import guidanceModal from './guidanceModal.vue';
import {guidanceBus} from './guidanceModal.vue';
export default {
    name:"iv-guidance-wrapper",
    components:{
        "iv-guidance-modal":guidanceModal
    },
    props:{
        guidance_texts_list:{
            type:Array
        }
    },
    data(){
        return{
            indexModal:0,
            currentPrevButton:false,
            currentNextButton:true,
            currentWindowPosTop:null,
            currentWindowPosBottom:null,
            currentWindowPosLeft:null,
            currentWindowPosRight:null,
        }
    },
    computed:{
        progressCount(){
            return `${this.indexModal +1}/${this.guidance_texts_list.length}`
        },
        returnText(){
            return this.guidance_texts_list[this.indexModal].text
        },
        
        modalPositionTop(){
            console.log("TOP PLACE", this.guidance_texts_list[this.indexModal].element.getBoundingClientRect().top)
            if(this.guidance_texts_list[this.indexModal].modalPostionVertical == "top"){
                this.currentWindowPosTop = `${this.guidance_texts_list[this.indexModal].element.getBoundingClientRect().top}px`;
            }
            return this.currentWindowPosTop
        },
        modalPositionBottom(){
            if(this.guidance_texts_list[this.indexModal].modalPostionVertical == "bottom"){
                this.currentWindowPosBottom = `${this.guidance_texts_list[this.indexModal].element.getBoundingClientRect().bottom}px`;
            }
            return this.currentWindowPosBottom
        },
        modalPositionLeft(){
            if(this.guidance_texts_list[this.indexModal].modalPostionHorizontal == "right"){
                this.currentWindowPosLeft = `${this.guidance_texts_list[this.indexModal].element.getBoundingClientRect().right}px`;
            }
            return this.currentWindowPosLeft 
        },
        modalPositionRight(){
            if(this.guidance_texts_list[this.indexModal].modalPostionHorizontal == "left"){
                this.currentWindowPosRight = `${this.guidance_texts_list[this.indexModal].element.getBoundingClientRect().left}px`;
            }
            return this.currentWindowPosRight
        }
    },

    created(){
        guidanceBus.$on("prev-guidance",function(){
            this.indexModal = this.indexModal - 1
            if(this.indexModal == 0){
                this.currentPrevButton=false;   
            }
            else{
                this.currentPrevButton=true;
                this.currentNextButton=true;
            }
        }.bind(this));

        guidanceBus.$on("next-guidance",function(){
            this.indexModal = this.indexModal + 1
            if(this.indexModal == (this.guidance_texts_list.length -1)){
                this.currentNextButton=false;
            }
            else{
                this.currentPrevButton=true;
                this.currentNextButton=true;
            }
        }.bind(this));
    }
}
</script>
<style>
</style>
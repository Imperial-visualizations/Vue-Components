<template>
    <div class="iv-guidance-wrapper" ref ="iv-guidance-wrapper">
        <iv-guidance-modal :guidanceText="returnText" :guidanceHeaderText="progressCount" :prevButton="currentPrevButton" :nextButton="currentNextButton" :homeButton="true"/>
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
        }
    },
    computed:{
        progressCount(){
            return `${this.indexModal +1}/${this.guidance_texts_list.length}`
        },
        returnText(){
            return this.guidance_texts_list[this.indexModal]
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
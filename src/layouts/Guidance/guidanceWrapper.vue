<template>
    <div class="iv-guidance-wrapper" ref ="iv-guidance-wrapper">
        <iv-guidance-modal :guidanceInput="returnGuidanceItem" :guidanceHeaderText="progressCount" :prevButton="currentPrevButton" :nextButton="currentNextButton" :homeButton="true" />
    </div>
</template>
<script>
import guidanceModal from './guidanceModal.vue';
import guidanceBus from '@/buses/guidanceBus.js';
export default {
    name:"iv-guidance-wrapper",
    components:{
        "iv-guidance-modal":guidanceModal
    },
    props:{
        guidanceInput:{
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
            return `${this.indexModal + 1}/${this.guidanceInput.length}`
        },
        returnGuidanceItem(){
            return this.guidanceInput[this.indexModal]
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
            if(this.indexModal == (this.guidanceInput.length -1)){
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
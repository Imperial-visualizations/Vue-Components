<template>
    <div class="iv-guidance-wrapper" ref ="iv-guidance-wrapper">
        <iv-guidance-modal :guidanceText="returnText" :guidanceHeaderText="progressCount" :prevButton="currentPrevButton" :nextButton="currentNextButton" @prevGuidance="prevModal" @nextGuidance="nextModal" @close-guidance="closeGuidance"/>
    </div>
</template>
<script>
import guidanceModal from './guidanceModal.vue'
export default {
    name:"iv-guidance-wrapper",
    components:{
        "iv-guidance-modal":guidanceModal
    },
    props:{
        guidance_texts_list:{
            type:Array,
            default:["testing guidance wrapper 1","testing guidance wrapper 2","testing guidance wrapper 3"]
        }
    },
    data(){
        return{
            indexModal:0,
            currentPrevButton:false,
            currentNextButton:true,
        }
    },
    methods:{
        closeGuidance(){
            this.$emit('close-guidance');
        },
        prevModal(){
            this.indexModal = this.indexModal - 1
            if(this.indexModal == 0){
                this.currentPrevButton=false;   
            }
            else{
                this.currentPrevButton=true;
                this.currentNextButton=true;
            }
            //console.log("wrapper- prev",this.guidance_texts_list[this.indexModal]);
        },
        nextModal(){
            this.indexModal = this.indexModal + 1
            if(this.indexModal == (this.guidance_texts_list.length -1)){
                this.currentNextButton=false;
            }
            else{
                this.currentPrevButton=true;
                this.currentNextButton=true;
            }
        }
    },
    computed:{
        progressCount(){
            //console.log(`${this.indexModal +1}/${this.guidance_texts_list.length}`);
            return `${this.indexModal +1}/${this.guidance_texts_list.length}`
        },
        returnText(){
            console.log( "return text:",this.guidance_texts_list[this.indexModal], typeof this.guidance_texts_list[this.indexModal]);
            return this.guidance_texts_list[this.indexModal]
        }
    },
    mounted(){
        console.log("wrapper",this.guidance_texts_list);
    }
}
</script>
<style>
</style>
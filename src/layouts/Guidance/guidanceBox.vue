<template>
    <div>
        <button @click="toggleGuidance" >{{buttonElement}}</button>
        <iv-guidance-modal v-if="isGuidanceVisible" :guidanceText="guidanceText" @close-guidance="isGuidanceVisible=false" />
    </div>
</template>
<script>
import guidanceModal from './guidanceModal.vue'

export default {
    name:"iv-guidance-box",
    props:{
        guidanceText:{
            type:String,
            default:"hey guys its ya boi"
        }
    },
    components:{
        "iv-guidance-modal":guidanceModal
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
    }
}
</script>
<style>
</style>
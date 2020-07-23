<template>
    <div>
        <iv-guidance-home v-if="showMainGuidanceHome" :guidance_branches_list="guidance_branches_list" />
        <iv-guidance-wrapper v-if="showMainGuidanceWrapper" :guidance_texts_list="guidance_texts_list" />
        <div class="iv-visualisation" ref ="visulisation_container">
            <slot ></slot>
        </div>
    </div>
</template>
<script>
import {guidanceBus} from "../Guidance/guidanceModal.vue"
//Potentially at some point this should be renamed to something like visulaisation manager? Or something to make it explicit that this object manages the state of the panels and dropouts etc...
export default {
    name:"iv-visualisation",
    props:{
        defaultshowMainGuidance:{
            type:Boolean,
            default:false
        },
        guidance_branches_input:{
            type:Array
        }
    },
    data(){
      return{
        showMainGuidanceHome:null,
        showMainGuidanceWrapper:false,
        guidance_texts_list:null,
      }
    },
    mounted(){
        this.showMainGuidanceHome = this.defaultshowMainGuidance;

        this.guidance_branches_list = this.guidance_branches_input;
        let guidance_branches_all = [];
        for(let i=0; i<this.guidance_branches_list.length; i++){
            guidance_branches_all = guidance_branches_all.concat(this.guidance_branches_list[i].branch_data)
        }
        //console.log("HEYYEYEYE", guidance_branches_all)
        this.guidance_branches_list.push({title:"All", branch_data: Array.from(new Set(guidance_branches_all))  });    
    }, 
    created(){
        guidanceBus.$on("open-window",function(){
            this.showMainGuidanceHome=true;
        }.bind(this));

        guidanceBus.$on("close-window",function(){
            this.showMainGuidanceHome=false;
            this.showMainGuidanceWrapper=false;
        }.bind(this));

        guidanceBus.$on("select-branch",function(branchData){
            this.showMainGuidanceHome=false;
            this.showMainGuidanceWrapper=true;
            this.guidance_texts_list =  branchData;
        }.bind(this));

        guidanceBus.$on("go-home",function(){
            this.showMainGuidanceHome=true;
            this.showMainGuidanceWrapper=false;
        }.bind(this));
    }
}
</script>
<style>
.iv-visualisation {
    display:flex;
    flex-direction: row;
    height:100%;
}
.iv-visualisation > .iv-main-stage{ 
    flex: 1 1 auto;
}
</style>
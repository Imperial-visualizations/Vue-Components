<template>
    <div id ="guidanceSystem" class="guidance-system" >
        <component v-if="guidanceData!=null" :is="whichGuidance" :guidanceInput="guidanceData"/>
    </div>
</template>

<script>
import guidanceBus from 'buses/guidanceBus.js';
//:guidance_branches_list="guidance_branches_list" :guidance_texts_list="guidance_texts_list" :guidance_item="guidance_item"
export default {
    name:"iv-guidance-system",
    props:{
      guidance_branches_input:{
          type:Array,
      },
      defaultGuidance:{
          default:null
      }
    },
    data(){
        return{
            whichGuidance: this.defaultGuidance,

            guidanceData:null,

            guidance_branches_list: this.guidance_branches_input,
            guidance_texts_list:null,
            guidance_item:null,
        }
    },
    mounted(){

        let guidance_branches_all = [];

        for(let i=0; i<this.guidance_branches_list.length; i++){
            guidance_branches_all = guidance_branches_all.concat(this.guidance_branches_list[i].branch_data)
        }

        this.guidance_branches_list.push(   {title:"All", branch_data: Array.from(new Set(guidance_branches_all))}      ); 

    }, 
    created(){
        guidanceBus.$on("guidance-button-click",function(guidanceIdentifier){
            let isDone=false;
            for(let i=0; i<this.guidance_branches_list.length; i++){

                for(let j=0; j<this.guidance_branches_list[i].branch_data.length; j++){

                    if(this.guidance_branches_list[i].branch_data[j].identifier == guidanceIdentifier){
                        this.guidanceData =  this.guidance_branches_list[i].branch_data[j];
                        isDone=true;
                        break;
                    }
                }
                if(isDone){
                    break;
                }
            }
            this.whichGuidance="iv-guidance-modal";
        }.bind(this));

        guidanceBus.$on("open-main-guidance",function(){
            this.guidanceData = this.guidance_branches_list;
            this.whichGuidance="iv-guidance-home";
        }.bind(this));

        guidanceBus.$on("close-window",function(){
            this.whichGuidance=null;
        }.bind(this));

        guidanceBus.$on("select-branch",function(branchData){
            this.guidanceData =  branchData;
            this.whichGuidance="iv-guidance-wrapper";

        }.bind(this));

        guidanceBus.$on("go-home",function(){
            this.guidanceData =  this.guidance_branches_list;
            this.whichGuidance="iv-guidance-home";
        }.bind(this));
    },
}
</script>

<style>
.guidance-system{
    z-index:0;
}
</style>
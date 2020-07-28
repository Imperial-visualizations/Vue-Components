<template>
    <div>
        <nav class="banner" id="ivTitleBar">
            <iv-button class="guidanceButton" @click="handleButton">?</iv-button>
            <a @click="openLinkNewTab" class="logo-container">
                <img class="vis-logo" src="./VisualisationsLogoWhite2.png">
            </a>
            <div class="vis-title"><slot>Default Title</slot></div>
        </nav>
        <iv-guidance-home v-if="showMainGuidanceHome" :guidance_branches_list="guidance_branches_list"/>
        <iv-guidance-wrapper v-if="showMainGuidanceWrapper" :guidance_texts_list="guidance_texts_list"/>
    </div>
</template>

<script>
import {guidanceBus} from "../Guidance/guidanceModal.vue";
import Button from "../../components/Button";

export default {
    name:"iv-title-bar",
    components:{
        "iv-button":Button
    },
    props:{
      buttonLink:{
        type: String,
        default: "https://www.imperialvisualisations.com/learn/"
      },
      newTab:{
        type: Boolean,
        default: true
      },
      defaultshowMainGuidance:{
          type:Boolean,
          default:false
      },
      guidance_branches_input:{
          type:Array
      }
    },
    methods:{
        openLinkNewTab: function () {
          if (this.newTab){
            window.open(this.buttonLink, "_blank");
          } else{
            open(this.buttonLink, "_self");
          }
        },
        handleButton(){
          guidanceBus.$emit("open-window", this._uid);
        }
    },
    mounted(){
        console.log("Guidance Data",this.guidance_branches_input);
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
    },
}
</script>

<style>

.banner {
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  align-items: center;
  padding: 0.25rem 0rem;
  width: 100%;
  position: fixed; 
  top: 0;
  right: 0;
  background: linear-gradient(
          90deg,
          #003E74 0%,
          #37578b 15%,
          #37578b 100%
  );
  color: #ffffff;
  z-index: 6;
}

.vis-title {
  flex-basis: 0;
  flex-grow: 1;
  margin:0;
  padding: 0;
  position: fixed;
  text-align: center;
  font-weight: bolder;
  left: 0vw;
  right: 0;
  background: none;
  color: #ffffff;
  font-size: 1.5rem;
  line-height: 1.5rem;
}

.logo-container {
  color: #1EAEDB; 
  z-index: 10;
  cursor: pointer;
  display:block;
  padding:0;
  height:1.5rem;
}

.logo-container:hover {
  color: #0FA0CE; }

.vis-logo {
  height: 1.25rem;
  width:auto;
  margin: 0.125rem 0.25rem;
}

.guidanceButton{
  z-index: 2;
  position: absolute;
  left:1%;
}

</style>
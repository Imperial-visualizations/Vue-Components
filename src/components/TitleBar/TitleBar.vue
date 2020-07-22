<template>
    <nav class="banner">
        <a @click="openLinkNewTab" class="logo-container">
            <img class="vis-logo" src="./VisualisationsLogoWhite2.png">
        </a>

        <button class="guidanceButton" @click="showMainGuidance=!showMainGuidance">?</button>
        <iv-guidance-wrapper v-if="showMainGuidance" :guidance_texts_list="guidance_texts_list"  @close-guidance="showMainGuidance=false" />

        <div class="vis-title"><slot>Default Title</slot></div>
    </nav>
    
</template>

<script>

//import guidanceWrapper from '../../layouts/Guidance/guidanceWrapper.vue'

export default {
    name:"iv-title-bar",
    /*
    components:{
      "iv-guidance-wrapper":guidanceWrapper
    },*/
    props:{
      defaultshowMainGuidance:{
        type:Boolean,
        default:false
      },
      buttonLink:{
        type: String,
        default: "https://www.imperialvisualisations.com/learn/"
      },
      newTab:{
        type: Boolean,
        default: true
      },
      guidance_texts_list:{
          type:Array,
          default:["testing guidance wrapper 1","testing guidance wrapper 2","testing guidance wrapper 3"]
      }
    },
    data(){
      return{
        showMainGuidance:null
      }
    },
    methods:{
        openLinkNewTab: function () {
          if (this.newTab){
            window.open(this.buttonLink, "_blank");
          } else{
            open(this.buttonLink, "_self");
          }
        }
    },
    mounted(){
      this.showMainGuidance = this.defaultshowMainGuidance;
      console.log("title bar",this.guidance_texts_list)
    }
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

.guidanceButton{
  z-index: 999;
  position: fixed;
  left:0;
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

</style>
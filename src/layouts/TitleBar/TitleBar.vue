<template>
      <div class="banner" id="ivTitleBar">
          <button class="guidanceButton" @click="handleGuidanceClick">?</button>
          <div class="vis-title"><slot>Default Title</slot></div>
          <a @click="openLinkNewTab" class="logo-container">
              <img class="vis-logo" src="./VisualisationsLogoWhite2.png">
          </a>
      </div>
</template>

<script>
import {guidanceBus} from "../Guidance/guidanceModal.vue";

export default {
    name:"iv-title-bar",
    props:{
      buttonLink:{
        type: String,
        default: "https://www.imperialvisualisations.com/learn/"
      },
      newTab:{
        type: Boolean,
        default: true
      },
    },
    methods:{
        openLinkNewTab: function () {
          if (this.newTab){
            window.open(this.buttonLink, "_blank");
          } else{
            open(this.buttonLink, "_self");
          }
        },
        handleGuidanceClick(){
          guidanceBus.$emit("open-main-guidance");
        }
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
  z-index: -1;
}

.logo-container {
  color: #1EAEDB; 
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
  position: absolute;
  background-color: blanchedalmond;
  left:1%;
}

</style>
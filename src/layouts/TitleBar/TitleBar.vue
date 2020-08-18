<template>
    <nav class="banner" :class="theme" id="ivTitleBar">
        <button v-if="showGuidanceSymbol" class="guidanceButton" @click="handleGuidanceClick">?</button>
        <a @click="openLinkNewTab" class="logo-container">
            <img class="vis-logo" :src="logo">
        </a>
        <div class="vis-title"><slot>Default Title</slot></div>
    </nav>
    
</template>

<script>
import guidanceBus from "@/buses/guidanceBus.js"
import Logo from "@/assets/ImpVis-logo-white.svg"
import LTMode from "@/mixins/LTMode.js"
export default {
    name:"iv-title-bar",
    mixins:[LTMode],
    props:{
      buttonLink:{
        type: String,
        default: "https://www.imperialvisualisations.com/learn/"
      },
      newTab:{
        type: Boolean,
        default: true
      }
    },
    data(){
      return{
        logo:Logo,
        showGuidanceSymbol:false
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
        handleGuidanceClick(){
          guidanceBus.$emit("open-main-guidance");
        }
    },
    computed:{
      theme(){
        return [this.mode]
      }
    },
    mounted(){
      if(typeof this.$parent.guidance_branch_list !== "undefined"){
          this.showGuidanceSymbol = true
      }
    }
}
</script>

<style lang="scss">
@import "src/globals.scss";

.banner {
  z-index: 1;

  display: flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  align-items: center;
  padding: 0.25rem 0rem;
  width: 100%;
  position: fixed; 
  top: 0;
  right: 0;

  &.learn{
    background: linear-gradient(
            90deg,
            #003E74 0%,
            #37578b 15%,
            #37578b 100%
    );
  }
  &.teach{
    background: $secondaryGreen;
  }
  color: #ffffff;

}
.vis-title {
  flex-basis: 0;
  flex-grow: 1;
  margin:0;
  padding: 0;
  position: fixed;
  text-align: center;
  font-weight: 600;
  left: 0vw;
  right: 0;
  background: none;
  color: $white;
  font-size: calc(#{$titleBarHeight} - 0.5em);
  line-height: calc(#{$titleBarHeight} - 0.5em);
}

.logo-container {
  color: #1EAEDB; 
  z-index: $titlebarZLevel;
  cursor: pointer;
  display:block;
  padding:0;
  height:calc(#{$titleBarHeight} - 0.5em);
  :hover {
    color: #0FA0CE;
  }

}
.vis-logo {
  height: 1.25rem;
  width:auto;
  margin: 0.125rem 0.5rem;
}

.guidanceButton{
  position: absolute;
  left: calc((#{$titleBarHeight} - #{$guidanceButtonHeight})/2);
  z-index: $titlebarZLevel;
  padding:0;
  cursor: pointer;
  background-color: $primaryImperialBlue;
  color: white;
  border: 2px solid white;
  border-radius: 14px 14px 14px 14px;
  //box-shadow: 1px 1px 2px 0px;
  width: 28px;
  height: 28px;
  outline: none;
  font: bold;
  font-size: 20px;
  text-align: center;
  line-height: 20px;
}

</style>
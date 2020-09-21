<template>
    <nav class="iv-title-bar" :class="theme" id="iv-title-bar">
        <button class="iv-guidance-button" @click="handleGuidanceClick">?</button>
        <a @click="openLinkNewTab" class="iv-logo-container">
            <img class="iv-vis-logo" :src="logo">
        </a>
        <div class="iv-vis-title"><slot>Default Title</slot></div>
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
}

.iv-title-bar:before{
  content:"";
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  z-index:-1;
  box-shadow: 0 0 5px #222;
}

.iv-title-bar{
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  align-items: center;
  padding: 0.25rem 0rem;
  width: 100%;
  top: -1 * $titleBarHeight;
  right: 0;
  position: absolute;
  flex-basis: 100%;
  &.learn{
    background:$primaryDarkBlue;
  }
  &.teach{
    background: $secondaryDarkGreen;
  }
  color: $white;
  z-index: 10;
}
.iv-vis-title {
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

.iv-logo-container {
  z-index: $titlebarZLevel;
  cursor: pointer;
  display:block;
  padding:0;
  height:calc(#{$titleBarHeight} - 0.5em);
  :hover {
    color: #0FA0CE;
  }

}
.iv-vis-logo {
  height: 1.25rem;
  width:auto;
  margin: 0.125rem 0.5rem;
}


.iv-guidance-button{
  position: absolute;
  left: calc((#{$titleBarHeight} - #{$guidanceButtonHeight})/2);
  z-index: $titlebarZLevel;
  padding:0;
  cursor: pointer;
  background-color: $primaryDarkBlue;
  color: $white;
  border: 2px solid $white;
  border-radius: 14px 14px 14px 14px;
  width: 28px;
  height: 28px;
  outline: none;
  font: bold;
  font-size: 20px;
  text-align: center;
  line-height: 20px;
}

</style>
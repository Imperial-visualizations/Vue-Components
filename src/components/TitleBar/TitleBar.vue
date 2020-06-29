<template>
    <div class="banner">
        <a @click="openLinkNewTab" id="logo-container">
            <img id="vis-logo" src="./VisualisationsLogoWhite2.png">
        </a>
        <div id="vis-title"><slot>Defualt Title</slot></div>
    </div>
    
</template>

<script>
export default {
    name:"iv-title-bar",
    methods:{
        openLinkNewTab: function () {
            window.open("https://www.imperialvisualisations.com/learn/", "_blank");
        }
    }
}
</script>

<style>

.banner {
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  align-items: center;
  height: 4vh;
  min-height: 30px;
  width: 100vw;
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

#vis-title {
  flex-basis: 0;
  flex-grow: 1;
  min-height: 30px;
  margin:0;
  padding: 0;
  position: fixed;
  text-align: center;
  vertical-align: middle;
  font-weight: bolder;
  left: 0vw;
  right: 0;
  background: none;
  color: #ffffff;
  font-size: 22pt;
  letter-spacing: 2pt;
}

#logo-container {
  color: #1EAEDB; 
  z-index: 10;}
#logo-container:hover {
  color: #0FA0CE; }

#vis-logo {
  height: 2.7vh;
  min-height: 18px;
  margin-right: 7px;
}

#vis-logo img{
   width: auto;
}


</style>
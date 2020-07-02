<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-MML-AM_CHTML">
</script>

<template>
    <div class="container-journey">
        
        <h2 id="section-heading"><slot>Section Title</slot></h2>
        <hr>
        <div v-katex:display="'\\frac{a_i}{1+x}'"></div>
        <p id="main-text"><slot>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </slot></p>
    </div>
</template>

<script>
import Vue from 'vue';
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';

Vue.use(VueKatex);

export default {
  name:"iv-description-pane",
}
</script>

<style>
#section-heading {
  color: #003E74;
  margin: 0;
  padding: 10px 0;
  font-size: 2.3vw;
  text-align: center;
  font-weight: bolder;
}

hr{
  background-color: #003E74;
  height: 0.1vh;
}
#main-text {
  margin-top: 0; }

.container-journey {
  float: left;
  height: 200vh;
  width: 30%;
  background-color: white;
  box-sizing: border-box;
  padding: 0px;
  padding-left: 10px;
  overflow-y: hidden; }
</style>
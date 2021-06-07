<template>
    <div id="app">
      <header class="appheader">
          <div class="start-items">
            <h1>Playground!</h1>
            <div class="app__components-select">
            <select v-model="currentComponent">
              <option v-for="option in options" :key=option>{{option}}</option>
            </select>
            </div>
          </div> 
      </header>
      <sandbox class="app__content">
          <component :is="getComponent"></component>
          
      </sandbox>
    </div>
</template>
<script>
import {Sandbox} from "component-fixture";
import * as components from "../src/components";
import "component-fixture/dist/ComponentFixture.css";

export default {
    components:{
        Sandbox,
    },
    created(){
      this.currentComponent = Object.keys(components)[0];
    },
    data(){
        return{
            currentComponent:""
        }
    },
    computed:{
        options:function(){
            return Object.keys(components);
        },
        getComponent(){
          return components[this.currentComponent].name;
        }
    }
}
</script>
<style>
html {
  height: 100%;
}
body {
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.app__content {
  flex-grow: 1;
  
}
.app__content .component {
    height: 100%;
    background: rgba(0, 0, 0, 0.03);
}

.appheader {
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.appheader .github-link {
    color: black;
    font-size: 22px;
    padding: 0;
}
.appheader > div {
    display: flex;
    align-items: center;
  }
.appheader .end-items {
    padding-right: 16px;
  }

.appheader h1 {
  padding: 12px 16px;
  margin: 0;
  font-size: 16px;
  border-right: 1px solid #ddd;
}
.appheader h1 img{
  max-width: 22px;
}
</style>

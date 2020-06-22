<template>
    <div>
    <header class="appheader">
        <div>
            <h1> Playground!</h1>
        <multiselect
          v-model="value"
          :options="options"
          :show-labels="false"
          :maxHeight="700"
          label="path"
          track-by="path"
          placeholder="Search and select a component"
          @select="changeComponent"
          close-on-select
          searchable
          hideSelected
        >
          <template
            slot="singleLabel"
            slot-scope="props"
          >
            <span class="option__placeholder">Current Component:</span>
            <div class="option__desc">
              <strong class="option__title">{{ props.option.meta.display }}</strong>
            </div>
          </template>
          <template
            slot="option"
            slot-scope="props"
          >
            <div class="option__desc">
              <strong class="option__title">{{ props.option.meta.display }}</strong>
            </div>
          </template>
        </multiselect>
        </div> 
    </header>
    <sandbox>
        <component :is="currentComponent"></component>
    </sandbox>
    </div>
</template>
<script>
import multiselect from "vue-multiselect";
import {Sandbox} from "component-fixture";
import * as components from "../../../src/components";
import "component-fixture/dist/ComponentFixture.css"; 
import Vue from "vue";

export default {
    components:{
        multiselect,
        Sandbox
    },
    data(){
        return{
            value:"",
            currentComponent:"iv-button"
        }
    },
    computed:{
        options(){
            return components;
        }
    }
}
</script>
<style scoped>
html,body{
    width:100%;
    overflow:hidden;
}
.appheader{
    background:#fff;
    border-bottom:1px solid #eaeaea;
    padding:0;
    width:100%;
    display:flex;
    justify-content: space-between;
}
.appheader h1{
    padding: 12px 16px;
    margin:0;
    font-size:16px;
    border-right:1px solid #ddd;
}
.github-link{
    color:black;
    font-size:22px;
    padding:0;
}
</style>
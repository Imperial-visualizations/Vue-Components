<template>
    <div>
      <header class="appheader">
          <div class="start-items">
            <h1>Playground!</h1>
            <div class="app__components-select">
              <multiselect
                v-model="value"
                :options="options"
                :show-labels="false"
                :maxHeight="700"
                placeholder="Search and select a component"
                close-on-select
                searchable
                hideSelected>
                <!-- <template
                  slot="singleLabel"
                  slot-scope="props">
                  <span class="option__placeholder">Current Component:</span>
                  <div class="option__desc">
                    <strong class="option__title">{{ props.option}}</strong>
                  </div>
                </template>
                <template
                slot="option"
                slot-scope="props">
                <div class="option__desc">
                  <strong class="option__title">{{ props.option}}</strong>
                </div>
                </template> -->
              </multiselect>
            </div>
          </div> 
      </header>
      <sandbox class="app__content">
          <component :is="currentComponent"></component>
      </sandbox>
    </div>
</template>
<script>
import Multiselect from "vue-multiselect";
import {Sandbox} from "component-fixture";
import * as components from "../src/components";
import "component-fixture/dist/ComponentFixture.css"; 

export default {
    components:{
        Multiselect,
        Sandbox
    },
    data(){
        return{
            value:"",
            currentComponent:"iv-button"
        }
    },
    methods:{
        changeComponent(){
            return;
        }
    },
    computed:{
        options:function(){
            return Object.keys(components);
        }
    }
}
</script>
<style lang="less" scoped>
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
  .component {
    height: 100%;
    background: rgba(0, 0, 0, 0.03);
  }
}

.appheader {
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  h1 {
    padding: 12px 16px;
    margin: 0;
    font-size: 16px;
    border-right: 1px solid #ddd;
    img {
      max-width: 22px;
    }
  }
  .github-link {
    color: black;
    font-size: 22px;
    padding: 0;
  }
  > div {
    display: flex;
    align-items: center;
  }
  .end-items {
    padding-right: 16px;
  }
}
.app__components-select {
  cursor: pointer;
  /deep/ .multiselect__tags {
    height: 100%;
    min-height: 46px;
    min-width: 260px;
    border-radius: 0;
    border: 0;
    border-right: 1px solid #e8e8e8;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 12px;
    display: flex;
    align-items: center;
  }
  /deep/ .multiselect__tags:hover {
    background: #fdfdfd;
  }
  /deep/ .multiselect__placeholder,
  /deep/ .multiselect__single {
    margin: 0;
    padding: 0;
  }
  /deep/ .multiselect__select,
  /deep/ .multiselect__select:before,
  /deep/ input {
    padding: 0;
    margin: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /deep/ .multiselect__single {
    padding-left: 12px;
    padding-top: 8px;
    background: transparent;
  }
  .option__title {
    text-transform: capitalize;
  }
  .option__placeholder {
    text-transform: uppercase;
    color: #35495e96;
    font-size: 9px;
    font-weight: bold;
    position: absolute;
    top: -8px;
  }
  .multiselect--active {
    /deep/ .multiselect__tags {
      border-bottom: 1px solid #e8e8e8;
    }
    /deep/ input {
      position: absolute;
      top: 50%;
      background: #eee;
      border: 1px solid #ddd;
      width: calc(100% - 24px) !important;
      border-radius: 2px;
      padding: 6px 8px;
      &::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #999;
        opacity: 1; /* Firefox */
        font-size: 14px;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #999;
        font-size: 14px;
      }
      &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: #999;
        font-size: 14px;
      }
    }
  }
}
</style>
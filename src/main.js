import DummyButton from './components/DummyButton.vue'
import Vue from "vue";
const Components = {
  "iv-dummybutton":DummyButton
};
for(let key in Components){
  Vue.component(key,Components[key]);
}

export default Components;

import Vue from 'vue';
import ImpVisLib from "../src/main.js";
import DragAndDropExample from "./DragAndDropExample.vue";
Vue.use(ImpVisLib);
Vue.config.productionTip= false;
new Vue({
    render:h=>h(DragAndDropExample)
}).$mount('#app');
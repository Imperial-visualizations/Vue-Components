import Vue from 'vue';
import ImpVisLib from "../src/main.js";
import SVGDragAndDrop from "./SVGDragAndDrop.vue";
Vue.use(ImpVisLib);
Vue.config.productionTip= false;
new Vue({
    render:h=>h(SVGDragAndDrop)
}).$mount('#app');
import Vue from 'vue';
import ImpVisLib from "../src/main.js";
import TabTest from "./TabTest.vue";
Vue.use(ImpVisLib);
Vue.config.productionTip= false;
new Vue({
    render:h=>h(TabTest)
}).$mount('#app');
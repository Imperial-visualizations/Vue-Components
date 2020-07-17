import Vue from "vue";
import ImpVisLib from "../src/main.js";
import Examples_Tabs from "./Examples_Tabs.vue";
Vue.use(ImpVisLib);
Vue.config.productionTip= false;
new Vue({
    render:h=>h(Examples_Tabs)
}).$mount('#app');
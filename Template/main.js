import Vue from "vue";
import ImpVisLib from "../src/main.js";
import App from "./App.vue";
Vue.use(ImpVisLib);
Vue.config.productionTip= false;
new Vue({
    render:h=>h(App)
}).$mount('#app');
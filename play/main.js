import Vue from "vue";
import ImpVisLib from "../src/main.js";
import Play from "./Play.vue";
Vue.use(ImpVisLib);
Vue.config.productionTip= false;
new Vue({
    render:h=>h(Play)
}).$mount('#app');
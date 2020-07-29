import * as components from './components';
import * as layouts from './layouts';
import "./main.css";
import 'vue-resize/dist/vue-resize.css'
import VueResize from 'vue-resize'


// Install a plugin to Vue.js
// Can then be installed simply by using the Vue.use syntax, which is preferred by the Vue docs 
const ImpVisLibrary={
  install(Vue){
    Vue.use(VueResize)
    for(const componentName in components){
      const component = components[componentName]
      Vue.component(component.name,component);
    }
    for(const componentName in layouts){
      const component = layouts[componentName]
      Vue.component(component.name,component);
    }
  }
}
export default ImpVisLibrary;

// Allow for the plugin to be used if loaded from a CDN
if (typeof window !== 'undefined' && window.Vue){
  window.Vue.use(ImpVisLibrary);
}

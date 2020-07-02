import * as components from './components';
import "./main.css";
import 'katex/dist/katex.min.css';
import Katex from 'vue-katex-auto-render'

// Install a plugin to Vue.js
// Can then be installed simply by using the Vue.use syntax, which is preferred by the Vue docs 
const ImpVisLibrary={
  install(Vue){
    for(const componentName in components){
      const component = components[componentName]
      Vue.component(component.name,component);
      Vue.directive('katex', Katex);
    }
  }
}
export default ImpVisLibrary;

// Allow for the plugin to be used if loaded from a CDN
if (typeof window !== 'undefined' && window.Vue){
  window.Vue.use(ImpVisLibrary);
}


import * as components from './components';
import "./main.css";

// Install a plugin to Vue.js
// Can then be installed simply by using the Vue.use syntax, which is preferred by the Vue docs 
const ImpVisLibrary={
  install(Vue){
    for(const componentName in components){
      const component = components[componentName]
      Vue.component(component.name,component);
    }
  }
}
export default ImpVisLibrary;

// Allow for the plugin to be used if loaded from a CDN
if (typeof window !== 'undefined' && window.Vue){
  window.Vue.use(ImpVisLibrary);
}

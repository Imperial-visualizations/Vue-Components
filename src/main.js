import * as components from './components';
import * as layouts from './layouts';
import "./main.scss";
import 'vue-resize/dist/vue-resize.css'
import {version} from '../package.json'
import VueResize from 'vue-resize'
import compare from 'compare-versions'
const npmURL = 'https://unpkg.com/@impvis/components/package.json'
// Install a plugin to Vue.js
// Can then be installed simply by using the Vue.use syntax, which is preferred by the Vue docs 
const ImpVisLibrary={
  ...components,
  ...layouts,
  install(Vue){
    fetch(npmURL)
    .then(res => res.json())
    .then(json => {
      console.log(`%c Imperial Visualisations Component Library v${version} `, 'background: #133f6f; color: #ffffff');
      if(compare(json.version,version) > 0){
        console.log('A new version of @impvis/components is available')
        console.log(`%c v${version} -> v${json.version}`,'color:red;')
        console.log('If you are using node, please run npm update')
      }
    })
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

# VueJS Components for Imperial Visualisations
The Imperial Visualisations component library for VueJS provides a standardized set of components for educators & students to create powerful interactive educational visualisations.

## Installation
In order to use the library in your visualisation you wil need to use npm (or yarn) to install the package using: 
```
npm install --save @impvis/components
```
into an empty project created using the VueJS CLI. For instructions on how to do that, follow the [official VueJS guide](https://cli.vuejs.org/guide/)

Once installed you will need to activate the component library plugin by adding the following the lines to your _main.js_ file:
```javascript
import Vue from "vue";
import ImpVis from "@impvis/components"

Vue.use(ImpVis);
```

And that's it! The full library of Imperial Visualisation components will now be globally registered to your project allowing them to use them anywhere in your project. All Imperial Visualistions components are named beginning with the **iv-** prefix and for a full reference of the avalible components please see the **project wiki**.

## Developmenet Setup
For a full guide to how to develop **new** components please follow the [contributing guide](./CONTRIBUTING.md).

## Licensing
We are currently licensed under the BSD Clause 3 license which is an open-source license which permits anyone to modify and distribute this libary for any purpose so long as original attribution is applied and a copy of the license is included in any derivatives. For more details please follow our [license](./LICENSE).

--- 
This readme was last updated on 1st July 2020. 
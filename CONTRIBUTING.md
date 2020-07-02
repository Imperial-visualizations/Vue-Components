# Contributing to Imperial Visualisations
Welcome to the Imperial Visualisations project, this document acts as a guide to how to go about the process of making contributions to the VueJS component library used in the creation of our visualisations. 

## Initial setup
In order to contribute to the component library you will need to create a fork of this repository on your own GitHub account. From there you will be able to develop and test any new component ideas that you may have or also fix any bugs that are lisited in the issues tracker. 

In order to setup a local development environment you will first need to execute:
```
npm install
```
in the root directory of your locally cloned forked repository. This will download and install all required dependencies needed to run and build the project.

Note that as a prerequisite you will need to ensure that you have NodeJS and NPM installed on your machine.

### Launch Playground
In order to test out any new components, we have provided a "playground" environment which will automatically scan all created components in the library and allow you to test out how your component responds to props and events.
After installing all dependencies as described above, running:
```
npm run play
```
will spawn a local development server which will contain a list of all components currently loaded into the Imperial Visualisations library.

### Creating new components
In order to create a new component, please create a new folder inside the *./src/components* directory in the repository root. In order for your component to be sucesfully added to library this folder must contain **at least two** files: 
* An index.js file which exports out any developed component modules
* A component *.vue file using the Vue Single File Component standard
  * Note that **all** components **MUST** define a name attribute on their Vue object or else they will fail to be added to the library.

Additional .js and .vue files may also be added to your folder to add in additional functionality or to create sub components.

Finally in order to register your component you will need to edit the *index.js* file located at: *./src/components/index.js* to again export out your component to be included in the library. This can be done by adding the following line:
```javascript
export {YourComponentName as default} from './your_component_folder';
``` 
to the end of the index.js file.



## Submitting a Pull Request
If you wish to submit your developed components for review for eventual inclusion into the Imperial Visualisatinos library you will first need to submit a **pull request**. This can be done from your forked repository by selecting the branch from your repo.

> **⚠️IMPORTANT** 
> 
> When submitting a pull request please only submit against the development (**dev**) branch and **not the master** branch. Failing to do this will lead to your pull request being rejected.

After doing this will need to select at least two reviewers who will go over your created component and ensure that it meets our standards for a visualisation. Most likely your pull request reviewer will require some changes to be made before it can be merged into the upstream repostiory. This will happen over 90% of the time so please don't be offended if we don't merged your pull request instantly we are all just trying to ensure that our library is of the highest standard possible!

After your pull request has been merged you can pat yourself on your back and accept our congratulations on contributing to the Imperial Visualisations project 🎉!

---
This guide was last updated on 1st July 2020. 
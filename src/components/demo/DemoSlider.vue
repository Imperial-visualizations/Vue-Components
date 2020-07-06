Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@krammyt 
Imperial-visualizations
/
Vue-Components
1
2
7
Code
Issues
5
Pull requests
4
Actions
Projects
Wiki
Security
Insights
Settings
Vue-Components/src/components/demo/DemoSlider.vue
@OneOneFour
OneOneFour renamed dummy components to demo folder
Latest commit 30f2313 13 days ago
 History
 1 contributor
26 lines (25 sloc)  441 Bytes
  
<template>
    <div>
        <input type="text" :placeholder="placeholder" v-model="value">
        <div>{{ value }}</div>
    </div>
</template>
<script>
export default {
    name:"iv-demoslider",
    props:{
        placeholder:{
            required:false,
            type:String,
            default:"Please enter some text"
        }
    },
    data(){
        return{
            value:""
        }
    }
}
</script>
<style>

</style>

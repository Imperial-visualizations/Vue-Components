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
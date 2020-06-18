<template>
    <div>
        <button class="impvis-button" @click="count+=1"><slot>Button</slot></button>
        <p> {{outText}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            count:0
        }
    },
    computed:{
        outText(){
            if(this.count > 0){
                return "I have been clicked " + this.count + " times"
            }else{
                return "I have not been clicked yet"
            }

        }
    }
}
</script>
<style>
.impvis-button{
    
}
</style>
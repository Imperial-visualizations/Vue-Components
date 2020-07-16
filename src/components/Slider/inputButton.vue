<template>
    <div>
        <template v-if="playSlider">
            <button @click="decreaseValue">Prev</button>
            <button @click="increaseValue">Next</button>
        </template>
        <template v-else>
            <button @click="decreaseValue">- {{button_step}}</button>
            <button @click="increaseValue">+ {{button_step}}</button>
            <input v-if="buttonInput" type="text" class = "buttonInput" v-model.number="button_step">
        </template>
    </div>
</template>

<script>
export default {
    name:"iv-input-button",
    props:["sliderValue","playSlider","buttonInput","min","max","button_step_init"],
    data(){
        return{
            button_step: this.button_step_init,
            value: this.sliderValue
        }
    },
    methods:{
        decreaseValue(){
            if(this.value - this.button_step >= this.min){
                this.value = this.value - this.button_step;
            }
            else{
                this.value = this.min;
            }
            this.$emit("inputButtonClicked",this.value);
        },
        increaseValue(){
            if(this.value + this.button_step <= this.max){
                this.value = this.value + this.button_step;
            }
            else{
                this.value = this.max;
            }
            this.$emit("inputButtonClicked",this.value);
        },
    }
}
</script>

<style>
</style>
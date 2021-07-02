<template>
    <div>
        <input class="toggleAdvanceInput" type="radio" 
        @click="$parent.changeMode(modeIndex)" :checked="$parent.isChecked(modeIndex)" 
        :disabled="$parent.toggleDisabled[modeIndex]" :id="id" :value="modeIndex"/>
        <label :for="id">{{ modeName }}</label>
    </div>
</template>

<script>
export default {
    data () {
        return {
        id: null
        }
    }, 
    mounted () {
    this.id = this._uid
    },
    props:{
        modeName:{
            type: String
        },
        modeIndex:{
            type: Number
        }
    },
}
</script>

<style>
.toggleAdvanceInput:disabled ~ label {
  background: #d5d5d5;
  pointer-events: none;
}

.toggleAdvanceInput:disabled ~ label:after { background: #bcbdbc; }
</style>
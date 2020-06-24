<template>
    <div>
        <input class="toggleAdvanceInput" type="radio" 
        @click="$parent.changeDropdown(dropdownIndex)" :checked="$parent.isChecked(dropdownIndex)" 
        :disabled="$parent.dropdownDisabled" :id="id" :value="dropdownIndex"/>
        <label :for="id">{{ dropdownName }}</label>
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
        dropdownName:{
            type: String
        },
        dropdownIndex:{
            type: Number
        }
    }
}
</script>

<style scoped>

</style>
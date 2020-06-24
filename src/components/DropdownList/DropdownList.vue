<template>
    <div class="toggleAdvanceClass">
        <iv-dropdown-list-element v-for="(dropdownName, dropdownIndex) in dropdownItems" :key="dropdownIndex" :dropdownIndex="dropdownIndex" :dropdownName="dropdownName"></iv-dropdown-list-element>
    </div>
</template>

<script>
import DropdownListElement from "./DropdownListElement.vue"
export default {
    name:"iv-dropdown-list",
    components: {"iv-dropdown-list-element": DropdownListElement},
    props:{
      initialDropdownIndex:{
        type: Number,
        default: 0
      },
      dropdownItems: {
        type: Array,
        required: true,
        default: function () { return ["Option 1", "Option 2", "Option 3"] }
      },
      dropdownDisabled: {
        type:Boolean,
        required: false,
        default: false
      }
    },
    data(){
      return {
        dropdownIndex: this.initialDropdownIndex
      }
    },
    methods:{
      changeDropdown(chooseIndex){
        this.dropdownIndex = chooseIndex;
        this.$emit("dropdownclicked", this.dropdownIndex);
      },
      isChecked(chooseIndex){
        if (chooseIndex === this.dropdownIndex){
          return true
        } else {
          return false
        }
      }
    }
}
</script>

<style scoped>

</style>
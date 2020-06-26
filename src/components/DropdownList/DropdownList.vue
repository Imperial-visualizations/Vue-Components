<template>
    <div class="dropdown">
        <button @click="displayOrHide" class="dropdownbutton" :for="dropdownIndex" :disabled="dropdownDisabled">{{ dropdownItems[dropdownIndex] }}</button>
        <div id="myDropdown" class="dropdown-content" v-show="showList">
          <iv-dropdown-list-element v-for="(dropdownName, dropdownIndex) in dropdownItems" :key="dropdownIndex" :dropdownIndex="dropdownIndex" :dropdownName="dropdownName"></iv-dropdown-list-element>
        </div>
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
      showList:{
        type:Boolean,
        default: false
        },
      dropdownDisabled: {
        type:Boolean,
        required: false,
        default: false
      }
    },
    data(){
      return {
        dropdownIndex: this.initialDropdownIndex,
      }
    },
    methods:{
      changeDropdown(chooseIndex){
        this.dropdownIndex = chooseIndex;
        this.showList = false
        this.$emit("dropdownlistelementclicked", this.dropdownIndex);
      },
      isChecked(chooseIndex){
        if (chooseIndex === this.dropdownIndex){
          return true
        } else {
          return false
        }
      },
      displayOrHide(e){
        if (!this.dropdownDisabled) {
            this.showList = !this.showList
        }
        this.$emit("dropdownlistbuttonclicked", e)
      }
    }
}
</script>

<style scoped>
/* The container <div> - needed to position the dropdown content */
.dropdown {
  font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  display: inline-block;
}

/* Dropdown Button */
.dropdownbutton {
  width: 95px;
  background-color: rgba(0, 62, 116, 0.9);
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: normal;
  letter-spacing: .05rem;
  text-align: center;
  text-transform: uppercase;
  padding: 6px 12px 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-text-stroke-width: 0.1px;
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

/* Dropdown button on hover */
.dropdownbutton:hover {
  cursor: pointer;
  background-color: #2980B9;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition:    all 0.4s ease-in-out;
  -ms-transition:     all 0.4s ease-in-out;
  -o-transition:      all 0.4s ease-in-out;
  transition:         all 0.4s ease-in-out;
}

/* Dropdown button when disabled */
.dropdownbutton:disabled {
  background-color: rgba(0, 62, 116, 0.5);
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition:    all 0.4s ease-in-out;
  -ms-transition:     all 0.4s ease-in-out;
  -o-transition:      all 0.4s ease-in-out;
  transition:         all 0.4s ease-in-out;
  pointer-events:     none;
}

/* Dropdown Content*/
.dropdown-content {
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: black;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}

</style>
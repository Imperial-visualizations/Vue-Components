<template>
    <div class="dropdown">
        <button @click="showList" class="dropbtn" :for="dropdownIndex">{{ dropdownItems[dropdownIndex] }}</button>
        <div id="myDropdown">
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
        this.$emit("dropdownelementclicked", this.dropdownIndex);
      },
      isChecked(chooseIndex){
        if (chooseIndex === this.dropdownIndex){
          return true
        } else {
          return false
        }
      },
      showList(){

      }
    }
}
</script>

<style scoped>
/* Dropdown Button */
.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}
</style>
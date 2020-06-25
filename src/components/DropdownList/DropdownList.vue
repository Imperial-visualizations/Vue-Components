<template>
    <div class="dropdown">
        <button @click="showList" class="dropdownbutton" :for="dropdownIndex" :disabled="dropdownDisabled">{{ dropdownItems[dropdownIndex] }}</button>
        <div id="myDropdown" class="dropdown-content">
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
        dropdownIndex: this.initialDropdownIndex,
      }
    },
    methods:{
      changeDropdown(chooseIndex){
        this.dropdownIndex = chooseIndex;
        document.getElementById("myDropdown").classList.remove("show")
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
        if (!this.dropdownDisabled) {
          if (document.getElementById("myDropdown").classList.contains("show")) {
            document.getElementById("myDropdown").classList.remove("show")
          } else {        
            document.getElementById("myDropdown").classList.toggle("show")
          }
        }
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

/* Dropdown button on hover & focus */
.dropdownbutton:hover {
  background-color: #2980B9;
}

.dropdownbutton:disabled {
  background: #d5d5d5;
  pointer-events: none;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: black;
  text-decoration: none;
}

/* Links inside the dropdown */
.dropdown-content-element a {
  color: black;
  padding: 6px 12px 5px 10px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content-element a:hover {
  cursor: pointer;
  background-color: #2980B9;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}

</style>
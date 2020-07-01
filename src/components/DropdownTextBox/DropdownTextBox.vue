<template>
    <div class="dropdown">
        <button @click="displayOrHide" class="dropdownbutton" :disabled="dropdownDisabled">Click this</button>
        <div id="myDropdown" class="dropdown-content" v-show="showContent">
            <p>{{dropdownText}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"iv-dropdown-text-box",
    props:{
        dropdownText:{
            type:String,
            default: "Add text"
        },
        showContent:{
            type:Boolean,
            default: false
        },
        dropdownDisabled: {
            type:Boolean,
            required: false,
            default: false
        }
    },
    methods:{
        displayOrHide(){
            this.showContent = !this.showContent
            this.$emit("dropdowntextboxbuttonclicked t", this.showContent)
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
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: normal;
    letter-spacing: .05rem;
    text-align: center;
    background-color: #f1f1f1;
    color: black;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 6px 12px 5px 10px;
    word-wrap: break-word;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}

</style>
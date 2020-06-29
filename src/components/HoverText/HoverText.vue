<template>
    <div class="dropdown">
        <button @mouseover="displayOrHide" @mouseleave="displayOrHide" class="dropdownhover">Hover me</button>
        <div id="myDropdown" class="dropdown-content" v-show="showContent">
            <p>{{dropdownText}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"iv-hover-text",
    props:{
        dropdownText:{
            type: String,
            default: "This is a secret message."
        },
        showContent:{
            type: Boolean,
            default: false
        }
    },
    methods:{
        displayOrHide(){
            this.showContent = !this.showContent
            this.$emit("hovertexthovered", this.showContent)
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

/* Dropdown hover */
.dropdownhover {
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

/* Dropdown hover on hover */
.dropdownhover:hover {
  cursor: help;
  background-color: #2980B9;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition:    all 0.4s ease-in-out;
  -ms-transition:     all 0.4s ease-in-out;
  -o-transition:      all 0.4s ease-in-out;
  transition:         all 0.4s ease-in-out;
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
    padding: 0px 12px 5px 10px;
    word-wrap: break-word;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown hover) */
.show {display:block;}

</style>
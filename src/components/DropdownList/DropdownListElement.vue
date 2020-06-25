<template>
    <div class="dropdown-content-element">
        <a @click="$parent.changeDropdown(dropdownIndex)" :checked="$parent.isChecked(dropdownIndex)" 
        :id="id" :value="dropdownIndex" :for="id">{{ dropdownName }}</a>
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

<style>
/* Dropdown Content (Hidden by Default) */
.dropdown-content-element {
  background-color: #f1f1f1;
  border: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: black;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  text-decoration: none;
}

/* Links inside the dropdown */
.dropdown-content-element a {
    font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: normal;
    position: relative;
    display: inline-block;
    letter-spacing: .05rem;
    text-align: center;
    color: black;
    padding: 6px 12px 5px 10px;
    text-decoration: none;
}

/* Change color of dropdown links on hover */
.dropdown-content-element a:hover {
  cursor: pointer;
  background-color: #2980B9;
}
</style>
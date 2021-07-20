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
    font-weight: normal;
    letter-spacing: .05rem;
    text-align: center;
    background-color: #f1f1f1;
    color: black;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

/* Links inside the dropdown */
.dropdown-content-element a {
    width: 71px;
    position: relative;
    display: inline-block;
    padding: 6px 12px 5px 10px;
}

/* Change color of dropdown links on hover */
.dropdown-content-element a:hover {
  cursor: pointer;
  background-color: #2980B9;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition:    all 0.4s ease-in-out;
  -ms-transition:     all 0.4s ease-in-out;
  -o-transition:      all 0.4s ease-in-out;
  transition:         all 0.4s ease-in-out;
}
</style>
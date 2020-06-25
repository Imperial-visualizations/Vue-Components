<template>
  <label>
    <input type="checkbox" id="unchecked" class="toggleBasicInput hidden" @click="changeMode" :disabled="toggleDisabled">
    <label for="unchecked" class="toggleBasicLabel"></label>
  </label>
</template>
<script>
export default {
    name:"iv-toggle-basic",
    props:{
      initialMode:{
        type: Boolean,
        default: true
      },
      toggleDisabled: {
        type:Boolean,
        required: false,
        default: false
      }
    },
    data(){
      return {
        toggleMode: this.initialMode
      }
    },
    methods:{
      changeMode(){
        this.toggleMode = !this.toggleMode;
        this.$emit("toggleswitched", this.toggleMode);
      }
    }
}
</script>
<style>
.toggleBasicLabel {
  position: relative;
  display: block;
  height: 20px;
  width: 44px;
  background-color: #003E74;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggleBasicLabel:after {
  position: absolute;
  left: -2px;
  top: -3px;
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 100px;
  background: #2980B9;
  box-shadow: 0 0 1px #ccc;
  content: '';
  transition: all 0.3s ease;
}

.toggleBasicLabel:active:after { transform: scale(1.15, 0.85); }

.toggleBasicInput:checked ~ label:after {
  left: 20px;
}

.toggleBasicInput:disabled ~ label {
  background: #d5d5d5;
  pointer-events: none;
}

/* toggle on hover */
.toggleBasicLabel:hover {
  cursor: pointer;
  background: #37538B;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition:    all 0.4s ease-in-out;
  -ms-transition:     all 0.4s ease-in-out;
  -o-transition:      all 0.4s ease-in-out;
  transition:         all 0.4s ease-in-out;
}

.toggleBasicInput:disabled ~ label:after { background: #bcbdbc; }

.hidden { display: none; }
</style>
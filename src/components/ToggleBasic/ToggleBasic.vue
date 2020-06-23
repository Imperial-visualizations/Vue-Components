<template>
  <label >
    <input type="checkbox" id="unchecked" class="toggleBasicInput hidden" @click="changeMode">
    <label for="unchecked" class="toggleBasicLabel"></label>
  </label>
</template>
<script>
export default {
    name:"iv-toggleBasic",
    props:{
      mode: {
        type: Boolean,
        required: true
        },
      disabled: {
        type:Boolean,
        required: false,
        default: false
      }
    },
    methods:{
      changeMode(){
        this.mode = !this.mode;
        this.$emit("toggleswitched", this.mode);
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
  background: #ccc;
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
  background: #2196F3;
  box-shadow: 0 0 1px #2196F3;
  content: '';
  transition: all 0.3s ease;
}

.toggleBasicLabel:active:after { transform: scale(1.15, 0.85); }

.toggleBasicInput:checked ~ label { background: #6fbeb5; }

.toggleBasicInput:checked ~ label:after {
  left: 20px;
  background: #179588;
}

.toggleBasicInput:disabled ~ label {
  background: #d5d5d5;
  pointer-events: none;
}

.toggleBasicInput:disabled ~ label:after { background: #bcbdbc; }

.hidden { display: none; }
</style>
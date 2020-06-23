<template>
  <label>
    <input type="checkbox" id="unchecked" class="cbx hidden" @click="mode = !mode">
    <label for="unchecked" class="lbl"></label>
  </label>
</template>
<script>
export default {
    name:"iv-toggleBasic",
    data:function(){
        return{
            mode:false
        }
    }
}
</script>
<style>
.lbl {
  position: relative;
  display: block;
  height: 20px;
  width: 44px;
  background: #ccc;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lbl:after {
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

.lbl:active:after { transform: scale(1.15, 0.85); }

.cbx:checked ~ label { background: #6fbeb5; }

.cbx:checked ~ label:after {
  left: 20px;
  background: #179588;
}

.cbx:disabled ~ label {
  background: #d5d5d5;
  pointer-events: none;
}

.cbx:disabled ~ label:after { background: #bcbdbc; }

.hidden { display: none; }
</style>
<template>
  <div class="toggleAdvanceClass">
    <input @click="changeMode($event.target.value)" :disabled="toggleDisabled" class="toggleAdvanceInput" type="radio" id="Mode1" name="mode.ID" value="Mode1" checked/>
    <label for="Mode1">Mode 1</label>

    <input @click="changeMode($event.target.value)" :disabled="toggleDisabled" class="toggleAdvanceInput" type="radio" id="Mode2" name="mode.ID" value="Mode2" />
    <label for="Mode2">Mode 2</label>

    <input @click="changeMode($event.target.value)" :disabled="toggleDisabled" class="toggleAdvanceInput" type="radio" id="Mode3" name="mode.ID" value="Mode3" />
    <label for="Mode3">Mode 3</label>
  </div>
</template>

<script>
export default {
    name:"iv-toggleAdvance",
    props:{
      toggleMode: {
        type: String,
        required: true
        },
      toggleDisabled: {
        type:Boolean,
        required: false,
        default: false
      }
    },
    methods:{
      changeMode(modeChoice){
        this.toggleMode = modeChoice;
        this.$emit("toggleswitched", this.toggleMode);
      }
    }
}
</script>
<style>
.toggleAdvanceClass {
  font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 4px 10px 4px 10px;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  margin-bottom: 6px;
  position: relative;
}

.toggleAdvanceClass input {
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
}

.toggleAdvanceClass label {
  width: 95px;
  font-size: 12px;
  display: inline-block;
  background-color: rgba(0, 62, 116, 0.5);
  color: rgba(255, 255, 255, 0.9);
  font-weight: normal;
  letter-spacing: .05rem;
  text-align: center;
  text-transform: uppercase;
  padding: 6px 12px 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-text-stroke-width: 0.1px;
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
}

.toggleAdvanceClass label:hover {
  cursor: pointer;
}

.toggleAdvanceClass input:checked + label {
  background-color: rgba(0, 62, 116, 0.9);
  -webkit-box-shadow: none;
  box-shadow: none;
}

.toggleAdvanceClass label:first-of-type {
  border-radius: 4px 0 0 4px;
}

.toggleAdvanceClass label:last-of-type {
  border-radius: 0 4px 4px 0;
}

/* Fade effect */
.toggleAdvanceClass label {
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition:    all 0.4s ease-in-out;
  -ms-transition:     all 0.4s ease-in-out;
  -o-transition:      all 0.4s ease-in-out;
  transition:         all 0.4s ease-in-out;
}

.toggleAdvanceInput:disabled ~ label {
  background: #d5d5d5;
  pointer-events: none;
}

.toggleAdvanceInput:disabled ~ label:after { background: #bcbdbc; }

</style>
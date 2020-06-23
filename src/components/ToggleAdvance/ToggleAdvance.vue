<template>
  <div class="switch-big">
    <input @click="mode = $event.target.value" type="radio" id="Option1" name="mode.ID" value="Option1" checked/>
    <label for="Option1">Option1</label>

    <input @click="mode = $event.target.value" type="radio" id="Option2" name="mode.ID" value="Option2" />
    <label for="Option2">Option2</label>

    <input @click="mode = $event.target.value" type="radio" id="Option3" name="mode.ID" value="Option3" />
    <label for="Option3">Option3</label>
  </div>
</template>

<script>
export default {
    name:"iv-toggleAdvance",
    data:function(){
        return{
            mode:"Option1"
        }
    }
}
</script>
<style>
.switch-big {
  font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 4px 10px 4px 10px;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  margin-bottom: 6px;
  position: relative;
}

.switch-big input {
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
}

.switch-big label {
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

.switch-big label:hover {
  cursor: pointer;
}

.switch-big input:checked + label {
  background-color: rgba(0, 62, 116, 0.9);
  -webkit-box-shadow: none;
  box-shadow: none;
}

.switch-big label:first-of-type {
  border-radius: 4px 0 0 4px;
}

.switch-big label:last-of-type {
  border-radius: 0 4px 4px 0;
}

/* Fade effect */
.switch-big label {
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition:    all 0.4s ease-in-out;
  -ms-transition:     all 0.4s ease-in-out;
  -o-transition:      all 0.4s ease-in-out;
  transition:         all 0.4s ease-in-out;
}
</style>
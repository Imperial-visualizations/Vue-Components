<template>
  <div class="toggleAdvanceClass">
    <iv-toggle-advance-button v-for="(modeName, modeIndex) in modes" :key="modeIndex" :style="cssVars" :modeIndex="modeIndex" :modeName="modeName"></iv-toggle-advance-button>
  </div>
</template>

<script>
import ToggleAdvanceButton from "./ToggleAdvanceButton.vue";
import {eventBus} from "@/buses/eventBus";

export default {
    name:"iv-toggle-advance",
    components: {"iv-toggle-advance-button": ToggleAdvanceButton},
    props:{
      modes: {
        type: Array,
        required: true,
        default: function () { return ["Option 1", "Option 2", "Option 3"] }
      },
      initialModeIndex:{
        type: Number,
        default: 0
      },
      width:{
        type: String,
        default: '95px'
      },
      togglesDisabled: {
        type: Array,
        required: false,
        default:  function () {
          let arr = [];
          for(let i = 0; i < this.modes.length; i++){
            arr.push(false);
          }
          return arr
        } 

      }
    },
    data(){
      return {
        toggleModeIndex: this.initialModeIndex,
      }
    },
    computed: {
      cssVars() {
        return {
          '--width': this.width,
        }
      }
    },
    methods:{
      changeMode(chooseIndex){
        this.toggleModeIndex = chooseIndex;
        this.$emit("toggleswitched", this.toggleModeIndex);
      },
      isChecked(chooseIndex){
        if (chooseIndex === this.toggleModeIndex){
          return true;
        } else {
          return false;
        }
      }
    },
    mounted(){
      eventBus.$on("reset-data", data => {
        console.log(data);
        this.toggleModeIndex = this.initialModeIndex;
        this.$emit("toggleswitched", this.toggleModeIndex);
      });
    },
    watch:{
        togglesDisabled:function(){
            let i=0;
            let exit=false;
            do {
              if (this.togglesDisabled[i] == false){
                this.toggleModeIndex=i;
                exit=true;
                this.$emit("toggleswitched", this.toggleModeIndex);
              }
              i++;
            } while (i <= this.modes.length && exit==false)
        }
    }
}
</script>
<style>
.toggleAdvanceClass {

  padding: 4px 10px 4px 10px;
  display: flex;
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
  width: var(--width);;
  font-size: 12px;
  display: inline-block;
  background-color: rgba(0, 62, 116, 0.5);
  color: rgba(255, 255, 255, 0.9);
  font-weight: normal;
  letter-spacing: .05rem;
  text-align: center;
  padding: 6px 12px 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-text-stroke-width: 0.1px;
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
}

/* toggle on hover */
.toggleAdvanceClass label:hover {
  background-color: #2980B9;
  cursor: pointer;
}

.toggleAdvanceClass input:checked + label {
  background-color: #003E74;
  -webkit-box-shadow: none;
  box-shadow: none;
}
/*
.toggleAdvanceClass label:first-of-type {
  border-radius: 4px 0 0 4px;
}

.toggleAdvanceClass label:last-of-type {
  border-radius: 0 4px 4px 0;
}
*/
/* Fade effect */
.toggleAdvanceClass label {
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition:    all 0.4s ease-in-out;
  -ms-transition:     all 0.4s ease-in-out;
  -o-transition:      all 0.4s ease-in-out;
  transition:         all 0.4s ease-in-out;
}

</style>
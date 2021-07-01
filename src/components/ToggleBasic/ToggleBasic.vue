<template>
  <div>
    <span
      class="toggle-wrapper"
      role="checkbox"
      :aria-checked="value.toString()"
      tabindex="0"
      @click="toggle"
      @keydown.space.prevent="toggle"
    >
      <span
        class="toggle-background"
        :class="backgroundStyles"
      />
      <span
        class="toggle-indicator"
        :style="indicatorStyles" 
      />
    </span>
  </div>
</template>
<script>
import {eventBus} from "@/buses/eventBus";
export default {
  name:"iv-toggle-basic",
  props: {
    value:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      toggleValue: this.value
    }
  },
  computed: {
    backgroundStyles() {
      return {
        'switchedOn': this.toggleValue,
        'switchedOff': !this.toggleValue
      };
    },
    indicatorStyles() {
      return { transform: this.toggleValue ? 'translateX(14px)' : 'translateX(0)' };
    }
  },
  methods: {
    toggle() {
      this.toggleValue =! this.toggleValue
      this.$emit('input', !this.toggleValue);
    }
  },

  mounted(){
    eventBus.$on("reset-data", data => {
      console.log(data);
      this.toggleValue=0;
    });
  }
};
</script>
<style>
.switchedOn{
  background-color: #003E74;
}

.switchedOff{
  background-color: #2980B9;
}

.toggle-wrapper {
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 32px;
  height: 18px;
  border-radius: 9999px;
}

.toggle-wrapper:focus {
  outline: 0;
}

.toggle-background {
  display: inline-block;
  border-radius: 9999px;
  height: 100%;
  width: 100%;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color .4s ease;
}

.toggle-indicator {
  position: absolute;
  height: 14px;
  width: 14px;
  left: 2px;
  bottom: 2px;
  background-color: #ffffff;
  border-radius: 9999px;
  box-shadow:  0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform .4s ease;
}
</style>
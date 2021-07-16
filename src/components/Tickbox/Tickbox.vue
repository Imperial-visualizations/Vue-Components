<template>
    <div class="checkboxContainer" @click="changeStatus">
    <div v-if="checkboxValue" class="checkboxBlueContent">
      <div class="checkmark">
      </div>
    </div>
    </div>
</template>

<script>
import {eventBus} from "@/buses/eventBus"
export default {
  name: "iv-tickbox",
  props: {
  value: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data(){
    return{
      checkboxValue: this.value
    }
  },
  methods: {
    changeStatus() {
      this.checkboxValue = !this.checkboxValue
      this.$emit("check", this.checkboxValue);
    }
  },
  mounted(){
    eventBus.$on("reset-data", data => {
      console.log(data);
      this.checkboxValue = this.value;
      this.$emit("check", this.checkboxValue);
    });
  }
}
</script>
<style lang="scss">
.checkboxContainer{
  cursor: pointer;
  background-color: lightgrey;
  width: 20px;
  height: 20px;
  border: 1px solid black;
}
.checkboxBlueContent{
  background-color: blue;
  width: 21px;
  height: 21px;
}
.checkmark{
  height: 12px;
  width: 8px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg) translate(3px,-4px);
}
</style>


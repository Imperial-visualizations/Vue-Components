<template>
    <div class="loadingSpinner" v-bind:style="scaling"></div>
</template>

<script>
export default {
    name:"iv-loading-spinner",
    props: {
      spinnerScaling: {
        type: Number,
        default: 1
      }
    },
    computed: {
      scaling: function () {
        return {
          'border': 10*this.spinnerScaling + "vw solid #c8cac8", 
          'border-top': 10*this.spinnerScaling + "vw solid #3498db",
          'border-radius': 100 + "%",
          'width': 20*this.spinnerScaling + "vw",
          'height': 20*this.spinnerScaling + "vw",
        }
      }
    }
}
</script>

<style scoped>
.loadingSpinner {
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
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
          'border': 12*this.spinnerScaling + "px solid #c8cac8", 
          'border-top': 12*this.spinnerScaling + "px solid #3498db",
          'border-radius': 50 + "%",
          'width': 40*this.spinnerScaling + "px",
          'height': 40*this.spinnerScaling + "px",
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
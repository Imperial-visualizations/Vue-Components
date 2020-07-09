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
        if (this.spinnerScaling != 0) {
          return {
            'border': 8*this.spinnerScaling + "px solid #c8cac8", 
            'border-top': 8*this.spinnerScaling + "px solid #3498db",
            'border-radius': 50 + "%",
            'width': 20*this.spinnerScaling + "px",
            'height': 20*this.spinnerScaling + "px",
          }
        } else {
          return {
            'border': 8 + "px solid #c8cac8", 
            'border-top': 8 + "px solid #3498db",
            'border-radius': 100 + "%",
            'width': 20 + "px",
            'height': 20 + "px",
          }
        }
      }
    }
}
</script>

<style scoped>
/* The container <div> - needed to position the dropdown content */
.loadingSpinner {
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
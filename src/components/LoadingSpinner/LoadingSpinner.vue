<template>
    <div class="loadingSpinner"></div>
</template>

<script>
export default {
<<<<<<< HEAD
    name:"iv-loading-spinner",
    props: {
      spinnerScaling: {
        type: Number,
        default: 0.5
      }
    },
    computed: {
      scaling: function () {
        if (this.spinnerScaling != 0) {
          return {
            'border': 3*this.spinnerScaling + "vw solid #c8cac8", 
            'border-top': 3*this.spinnerScaling + "vw solid #3498db",
            'border-radius': 100 + "%",
            'width': 20*this.spinnerScaling + "vw",
            'height': 20*this.spinnerScaling + "vw",
          }
        } else {
          return {
            'border': 3*0.5 + "vw solid #c8cac8", 
            'border-top': 3*0.5 + "vw solid #3498db",
            'border-radius': 100 + "%",
            'width': 20*0.5 + "vw",
            'height': 20*0.5 + "vw",
          }
        }
      }
    }
=======
    name:"iv-loading-spinner"
>>>>>>> parent of f23732d... Adjustable LoadingSpinner size
}
</script>

<style scoped>
/* The container <div> - needed to position the dropdown content */
.loadingSpinner {
  border: 16px solid #c8cac8; 
  border-top: 16px solid #3498db; 
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
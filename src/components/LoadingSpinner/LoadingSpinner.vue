<template>
    <div class="loadingSpinner"></div>
</template>

<script>
export default {
    name:"iv-loading-spinner"
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
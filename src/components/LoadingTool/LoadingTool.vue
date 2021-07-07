<template>

    <div class="ring" v-if="!isLoaded">
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>

</template>
<script>
export default {
    name:'iv-loader',
    data: () => {
        return{
            isLoaded : false
        }
    },
    mounted(){
        document.onreadystatechange = () =>{
            if (document.readyState == "complete"){
                this.isLoaded = true
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.ring{
    position: absolute;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    position: fixed;
    background-color:white;

}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  top:40%;
  left: 35%;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #133f6f;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #133f6f transparent transparent transparent;
  top:40%;
  left: 35%;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
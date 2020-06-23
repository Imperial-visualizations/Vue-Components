<template>
    <div class="container_journey">
        
        <h2><slot>Section Title</slot></h2>
        <hr>
        <p><slot>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </slot></p>
    </div>
</template>

<script>
export default {
  name:"iv-description-pane",
}
</script>

<style scoped>
h2 {
  color: #003E74;
  margin: 0;
  padding: 10px 0;
  font-size: 2.3vw;
  text-align: center;
  font-weight: bolder;
}

hr{
  background-color: #003E74;
  height: 0.1vh;
}
p {
  margin-top: 0; }

.container_journey {
  float: left;
  height: 200vh;
  width: 30%;
  background-color: white;
  box-sizing: border-box;
  padding: 0px;
  padding-left: 10px;
  overflow-y: hidden; }
</style>
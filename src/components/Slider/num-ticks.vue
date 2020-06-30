<template>
    <div>
        <div class="vert_container_ticks_num">
            <span v-for="tick in sliderTicksList" :key="tick.id" class="tick_num" >{{tick.value}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"iv-num-ticks",
    props:["sliderTicksList","thumb_width"]
}
</script>

<style>
.vert_container_ticks_num{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.tick_num{
  position: relative;
  text-align: center;
  height: 10px;
  width: 20px;
  margin-bottom: 10px;
}
</style>
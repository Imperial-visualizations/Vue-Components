<template>
    <div class = "ticksLineContainer" >
        <div class="vert_container_ticks" :style="tickPlace">
            <span v-for="tick in sliderTicksList" :key="tick.id" class="tick"></span>
        </div>
    </div>
</template>

<script>
export default {
    name:"iv-line-ticks",
    props:["sliderTicksList","thumb_width"],
    computed:{
        tickPlace(){
            return {
                marginLeft: `calc(${(0.5)*this.thumb_width}px)`,
                width: `calc(100% - ${this.thumb_width}px)`
            }
        }
    }
}
</script>

<style>
.ticksLineContainer{
    position: relative;
}
.vert_container_ticks{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.tick{
  justify-content: center;
  width: 1px;
  background: gray;
  height: 10px;
  line-height: 10px;
  margin-bottom: 10px;
}
</style>
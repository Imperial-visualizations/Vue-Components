<template>
  <iv-drag-and-drop>
    <iv-draggable v-for="(ball, ballName) in ballContainer" :key="ballName" :x="ball.x" :y="ball.y" :fill="ball.colour">
      <circle r="25" />
    </iv-draggable>

    <iv-draggable :x="400" :y="200" >
      <image xlink:href="./smiley.png" width="50px" height="50px" />
    </iv-draggable>
  </iv-drag-and-drop>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      ballContainer:{
        ball1:{
          x: 100,
          y: 200,
          colour: "red"
        },
        ball2:{
          x: 200,
          y: 100,
          colour: "orange"
        },
        ball3:{
          x: 75,
          y: 75,
          colour: "green"
        },
        ball4:{
          x: 175,
          y: 175,
          colour: "blue"
        },
        ball5:{
          x: 325,
          y: 150,
          colour: "purple"
        },
        ball6:{
          x: 450,
          y: 150,
          colour: "violet"
        },
      }
    }
  }
}
</script>

<style>
</style>

<template>
    <svg  width=600 height=300>
        <iv-ball v-for="(ball, ballIndex) in ballContainer" :key="ballIndex" :x="ball.x" :y="ball.y"></iv-ball>
        <iv-box v-for="(box, boxIndex) in boxContainer" :key="boxIndex" :x="box.x" :y="box.y"></iv-box>
    </svg>
</template>

<script>
import Ball from "./Ball.vue"
import Box from "./Box.vue"
export default {
    name: "iv-drag-and-drop",
    components: {
        "iv-ball": Ball,
        "iv-box": Box
    },
    data(){
        return {
            ballContainer: {
                ball1: {
                    x: 200,
                    y: 100
                },
                ball2:{
                    x: 100,
                    y: 200
                }
            },
            boxContainer: {
                box1: {
                    x: 75,
                    y: 75
                },
                box2:{
                    x: 175,
                    y: 175
                }
            }
        }
    }
}
</script>

<style scoped>
svg{
  border: 5px solid black;
}
</style>
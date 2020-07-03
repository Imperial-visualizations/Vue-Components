<template>
    <svg  width=600 height=300>
        <iv-ball v-for="(ball, ballIndex) in ballContainer" :key="ballIndex" :x="ball.x" :y="ball.y"></iv-ball>
        <iv-box v-for="(box, boxIndex) in boxContainer" :key="boxIndex" :x="box.x" :y="box.y"></iv-box>
        <iv-olive v-for="(olive, oliveIndex) in oliveContainer" :key="oliveIndex" :x="olive.x" :y="olive.y"></iv-olive>
    </svg>
</template>

<script>
import Ball from "./Ball.vue"
import Box from "./Box.vue"
import Olive from "./Olive.vue"
export default {
    name: "iv-drag-and-drop",
    components: {
        "iv-ball": Ball,
        "iv-box": Box,
        "iv-olive": Olive
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
            },
            oliveContainer: {
                box1: {
                    x: 325,
                    y: 150
                },
                box2:{
                    x: 450,
                    y: 150
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
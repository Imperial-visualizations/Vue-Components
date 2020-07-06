<template>
    <rect @mousedown="drag($event)" @mouseup="drop()" ref="box" width="50" height="50" fill="red" 
    :x="currentX" :y="currentY">
    </rect>
</template>

<script>
export default {
    props: {
        x:{
            type: Number
        },
        y:{
            type: Number
        }
    },
    data () {
        return {
            currentX: this.x,
            currentY: this.y,
            dragOffsetX: null,
            dragOffsetY: null
        }
    }, 
    methods: {
        drag({offsetX, offsetY}){
            this.dragOffsetX = offsetX - this.currentX;
            this.dragOffsetY = offsetY - this.currentY;
            this.$parent.$el.addEventListener('mousemove', this.move);
        },
        drop(){
            this.dragOffsetX = this.dragOffsetY = null;
            this.$parent.$el.removeEventListener('mousemove', this.move);
        },
        move({offsetX, offsetY}) {
            this.currentX = offsetX - this.dragOffsetX;
            this.currentY = offsetY - this.dragOffsetY;
        }
    }
}
</script>

<style>

</style>
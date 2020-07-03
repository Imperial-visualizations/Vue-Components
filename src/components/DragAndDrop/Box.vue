<template>
    <rect @mousedown="drag($event)" @mouseup="drop($event)" ref="box" width="50" height="50" fill="red" 
    :for="id" :x="currentX" :y="currentY">
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
            id: null,
            dragOffsetX: null,
            dragOffsetY: null
        }
    }, 
    mounted () {
        this.id = this._uid
    },
    methods: {
        drag({offsetX, offsetY}){
            this.dragOffsetX = offsetX - this.currentX;
            this.dragOffsetY = offsetY - this.currentY;
            this.$refs.box.addEventListener('mousemove', this.move)
        },
        drop(){
            this.dragOffsetX = this.dragOffsetY = null;
            this.$refs.box.removeEventListener('mousemove', this.move)
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
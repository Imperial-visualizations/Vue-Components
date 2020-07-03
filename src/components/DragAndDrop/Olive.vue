<template>
    <ellipse @mousedown="drag($event)" @mouseup="drop($event)" ref="ellipse" rx="50" ry="25" fill="green" 
    :for="id" :cx="currentX" :cy="currentY">
    </ellipse>
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
            this.$refs.ellipse.addEventListener('mousemove', this.move)
        },
        drop(){
            this.dragOffsetX = this.dragOffsetY = null;
            this.$refs.ellipse.removeEventListener('mousemove', this.move)
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
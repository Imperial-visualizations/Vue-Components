<template>
    <g @mousedown="drag($event)" @mouseup="drop()"
    :transform="`translate(${currentX}, ${currentY})`">
    <slot></slot>
    </g>
</template>

<script>
export default {
    name: "iv-draggable",
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
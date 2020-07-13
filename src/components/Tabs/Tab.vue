<template>
    <div :id="id" v-show="isActive"><slot></slot></div>
</template>
<script>
export default {
    name: "iv-tab",
    props: {
        tabName: {type: String,
        required: true },
        selected: {type: Boolean,
        default: false}
    },
    
    data() {
        
        return {
            id: null,
            isActive: false
        };
        
    },

    
    mounted() {
        this.id = this._uid
        this.isActive = this.selected;
        
    },

    computed: {
        
        href() {
            return '#' + this.id;
        }
    }
}
</script>
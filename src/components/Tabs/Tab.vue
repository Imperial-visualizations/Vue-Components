<template>
    <div v-show="isActive"><slot></slot></div>
</template>
<script>
export default {
    name: "iv-tab",
    props: {
        tabName: { required: true },
        selected: { default: false}
    },
    
    data() {
        
        return {
            isActive: false
        };
        
    },
    
    computed: {
        
        href() {
            return '#' + this.tabName.toLowerCase().replace(/ /g, '-');
        }
    },
    
    mounted() {
        
        this.isActive = this.selected;
        
    }
}
</script>
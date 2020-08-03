<template>
    <div class="iv-hotspotable iv-fixed-hotspot" :class="[edgeClass]"> 
       <slot />
    </div>
</template>
<script>
import Hotspotable from 'mixins/Hotspotable.js'
export default {
    name:'iv-fixed-hotspot',
    mixins:[Hotspotable]
}
</script>
<style lang="scss">
.iv-fixed-hotspot{
    flex: 1 1 auto;
    &.iv-edge{

    }
    &.iv-corner{
        
    }
}
</style>
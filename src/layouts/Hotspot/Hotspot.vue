<template>
    <div :class="hotspotClass">
        <slot/>
    </div>
</template>
<script>
const CORNERS = ['topleft','topright','bottomleft','bottomright'];
const EDGES = ['left','right','top','bottom'];
export default {
    name:"iv-hotspot",
    props:{
        position:{
            type:String,
            required:true, // TODO: Add validator,
            validator: (value) => CORNERS.concat(EDGES).indexOf(value) !== -1
        },
    },
    data(){
        return{
            childCount: 0,
            isLarge:false
        }
    },
    methods:{
        isSpace(large){
            if(this.type == 'corner'){
                return this.childCount < 1
            }
            return (large && this.childCount > 0 )? false : !this.isLarge;
        },
        addComponent(instance,isLarge){
            if(this.isLarge ) throw Error("Hotspotable unable to be positioned. Please check iv-overflow to find the unpostionable element")
            if(isLarge){
                this.childCount = 1
                this.isLarge = true;
                document.getElementById('iv-visualisation-flow').appendChild(instance)
            }else{
                this.childCount++
                this.$el.appendChild(instance)
            }

            
        },
        removeComponent(){ 
            this.childCount--;
            this.isLarge = false;

        }
    },
    computed:{
        type(){
            return (CORNERS.indexOf(this.position) !== -1)? 'corner':'edge';
        },
        hotspotClass(){
            return [`iv-hotspot-${this.position}`,`iv-hotspot-${this.type}`]
        },
    }
}
</script>
<style lang="scss">
@import "src/globals.scss";
.iv-hotspot-corner{
    display:flex;
    z-index:$hotspotZLevel;
}
.iv-hotspot-edge{
    display:flex;
    justify-content: space-around;
    z-index:$hotspotZLevel;
}
.iv-hotspot-left{
    flex-direction: column;
    grid-area:left;
    align-items:flex-start;
    > * {
        margin: $hotspotItemMargin 0;
    }
}
.iv-hotspot-right{
    flex-direction:column;
    grid-area:right;
    align-items: flex-end;
     > * {
        margin: $hotspotItemMargin 0;
    }
}
.iv-hotspot-top{
    flex-direction:row;
    grid-area:top;
    align-items:flex-start;
     > * {
        margin: 0 $hotspotItemMargin ;
    }
}
.iv-hotspot-bottom{
    flex-direction:row;
    grid-area:bottom;
    align-items:flex-end;
    > * {
        margin: 0 $hotspotItemMargin;
    }
}
.iv-hotspot-topleft{
	justify-content: flex-start;	
    align-items: flex-start;	
    grid-area: topleft;
}
.iv-hotspot-topright{
    justify-content: flex-end;	
    align-items: flex-start;	
    grid-area:topright;
}
.iv-hotspot-bottomleft{
	justify-content: flex-start;	
    grid-area:bottomleft;	
    align-items: flex-end;
}
.iv-hotspot-bottomright{
    justify-content: flex-end;
    align-items: flex-end;
    grid-area:bottomright;
}

.iv-hotspotable{
    pointer-events: auto;
    flex:1 1 auto;
}
</style>
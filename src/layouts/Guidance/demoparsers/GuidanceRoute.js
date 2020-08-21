export default {
    name:"iv-guidance-route",
    inject:['guidanceTree'],
    props:{
        name:String
    },
    data(){
        return {
            guidanceTree:{},
            
        }
    },
    mounted(){
        this.$nextTick(function(){
            this.$parent.guidanceTree[this.name] = this.guidanceTree
        }.bind(this))
    },
    render(h){
        return h('div',this.$slots.default)
    }
}

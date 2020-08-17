export default {
    name:"iv-guidance-system",
    data(){
        return {
            guidanceTree:{},
            parsed:false
        }
    },
    mounted(){
        this.$next(function(){
            //Here guidanceTree should be fully established
            console.log(guidanceTree);
        })
    },
    render(h){
        if(!this.parsed) return h('div',this.$slots.default)
    }
}

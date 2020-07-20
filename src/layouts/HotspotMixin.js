export default{
    injects:['layout'],
    props:{
        position:{
            type:String,
            required:true
        }
    },
    mounted(){
        if(this.layout[this.position].free){
            this.layout[this.position].content = this;
        }else{
            this.$el.style.display = "none";
        }
    },
    computed:{
        left(){
            return this.layout[this.position].left;
        }
    }
}
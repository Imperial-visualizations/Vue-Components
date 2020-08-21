export default {
    name:"iv-guidance-window",
    props:{
        elId:{ //ID of element in DOM for this guidance window to select 
            type:String,
            required:false,
            default:null
        },
        name:{
            type:String,
            required:true
        },
        src:{
            type:String,
            required:false
        }
    },
    mounted(){
        let content = this.$el.innerHTML
        if(this.$parent.$options.name == 'iv-guidance-system' || this.$parent.$options.name == 'iv-guidance-route'){
            this.$parent.guidanceTree[this.name] = {
                name:this.name,
                elId:this.elId,
                content:content
            }
        }else{
            throw Error("Guidance window must be used inside a guidance system component")
        }
    }
}
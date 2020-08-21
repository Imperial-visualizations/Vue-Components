export default{
    name:'iv-legacy-wrapper',
    props:{       
        // src:{
        //     type:String,
        //     required:false
        // },
        id:{
            type:String,
            required:false
        },
        execute:{
            type:Function,
            required:false
        }
    },
    mounted(){
        if(this.execute){
            this.execute(this.id);
        // } else if(this.src){ TODO: Fix this block, to allow for proper importing of 3rd party file
        //     var id = this.id
        //     import(this.src).then(
        //         execute => execute(id)
        //     ).catch(
        //         err => console.log(err)
        //     )
        } else{
            throw Error("Must provide either a source file or an executable function")
        }
    },
    render(h){
        return h('div',{
            attrs:{
                id:this.id
            }
        })
    }
}
export default{
    props:{
        position:{
            type:String,
            required:true
        }
    },
    created(){
        // Check if requested spot is vacant
        // If so put object in the spot, if not throw exception?
        // How do we get the parent visualisation layout prop? We don't want to use Vuex if at all possible for the components
        // 
    }
}
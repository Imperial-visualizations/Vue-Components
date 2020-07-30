const POSITIONS = ["left","right","top","bottom","topleft","topright","bottomright","bottomleft"];
export default{
    props:{
        position:{
            type:String,
            required:true,
            validator: value => POSITIONS.indexOf(value) > -1
        }
    }
}
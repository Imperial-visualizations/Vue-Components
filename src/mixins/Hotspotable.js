const POSITIONS = ["left","right","top","bottom","topleft","topright","bottomright","bottomleft"];
export default{
    props:{
        position:{
            type:String,
            required:true,
            validator: value => POSITIONS.indexOf(value) > -1
        },
        size:{
            type:Number,
            required:false,
            default:-1 //Set the explict size on the major axis of the hotspot, if set to -1 (default) will fill all available space
        }
    },
    inject:['getElement','checkElement'],
    data(){
        return {
            position_:this.position,
            large:false
        }
    },
    mounted(){
        this.getElement(this.position).addComponent(this.$el,this.large)
    },
    methods:{
        positionalClass(base){
            return `${base}-${this.position_}`
        },
        setPosition(newPosition){
            if(this.checkElement(newPosition,this.large)){
                console.log("HE")
                this.getElement(newPosition).addComponent(this.$el,this.large)
                this.getElement(this.position_).removeComponent()
                this.position_ = newPosition
                return true
            }else{
                return false
            }
        }
    },
    computed:{
        edgeClass(){
            return `${(['left','right','top','bottom'].indexOf(this.position_) > -1)? 'iv-edge':'iv-corner'}`
        }
    }
}
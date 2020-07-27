import './Hotspot.css'
const CORNERS = ['topleft','topright','bottomleft','bottomright'];
//const EDGES = ['left','right','top','bottom'];
export default{
    props:{
        position:{
            type:String,
            required:true, // TODO: Add validator,
        },
        content:{
            type:Array,
            required:true
        }
    },
    computed:{
        type(){
            return (CORNERS.indexOf(this.position) !== -1)? 'corner':'edge';
        },
        hotspotClass(){
            return [`iv-hotspot-${this.position}`,`iv-hotspot-${this.type}`]
        },
        processedContent(){
            return (this.type == 'edge')? this.content : this.content[0];
        }
    },
    render(createElem){
        return createElem('div',
        {class:this.hotspotClass},
        this.processedContent)
    }
}
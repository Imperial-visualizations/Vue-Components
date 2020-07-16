import Vue from 'vue';
const hotspotBus = new Vue();

class Hotspot{
    constructor(posX,posY){
        this.posX = posX;
        this.posY = posY;
        this.content = null;
    }
    get free(){
        return this.content != null;
    }
    get left(){
        return `${this.posX}%`
    }
    get right(){
        return `${this.posY}%`
    }
}
export default Hotspot;
export {hotspotBus};
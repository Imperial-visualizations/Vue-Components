import Hotspot from './Hotspot.js';

function DefaultLayout(){
    this.topleft = Hotspot(0,0);
    this.topright = Hotspot(100,0);
    this.left = Hotspot(0,50);
    this.right = Hotspot(100,50);
    this.bottomleft = Hotspot(0,100);
    this.bottomright = Hotspot(100,100);
}
export default DefaultLayout;
<template>
    <div>
        <div class="iv-popup" :class="positionalClass('iv-popup')"  ref="ivPopup" v-show=showPane>
            <slot>pop up</slot>
        </div>
        <button class="iv-popup-button" :class="positionalClass('iv-popup-button')" ref="popupButton" @click="handleButton">{{paneText}}</button>
    </div>
</template>
<script>
export default {
    name:"iv-popup",
    props:{
        popPosition:{
            type:String,
            default:"topLeft"
        }
    },
    data(){
        return{
            showPane: false,
            heightFraction: 3,
            heightFractionPixel: null
        }
    },
    methods:{     
        positionalClass(base){
            return [`${base}-${this.popPosition}`]
        },
        handleButton(){
            this.showPane = !this.showPane;

            if(this.showPane){
                if((this.popPosition == "topLeft") || (this.popPosition == "topCentre") || (this.popPosition == "topRight") ){
                    this.$refs.popupButton.top = `${this.heightFractionPixel}px`
                }
                else{
                    this.$refs.popupButton.bottom = `${this.heightFractionPixel}px`
                }  
            }
            else{
                if((this.popPosition == "topLeft") || (this.popPosition == "topCentre") || (this.popPosition == "topRight") ){
                    this.$refs.popupButton.top = `0px`
                }
                else{
                    this.$refs.popupButton.bottom = `0px`
                }  
            }
            
        },
    },
    computed:{
        paneText(){
            if((this.popPosition == "topLeft") || (this.popPosition == "topCentre") || (this.popPosition == "topRight") ){
                if(this.showPane){
                    return "⬆️";
                }
                else{
                    return "⬇️";
                }
            }
            else{
                if(this.showPane){
                    return "⬇️";
                }
                else{
                    return "⬆️";
                }
            }
        }
    },
    mounted(){  
        this.heightFractionPixel = Math.round(this.$parent.$el.clientHeight/this.heightFraction);
        this.$refs.ivPopup.height = `${this.heightFractionPixel}px`;
    }
}
</script>
<style>
.iv-popup{ 
    z-index: 1;
    margin:0;
    border: 3px solid black;
    box-shadow: -5px 0px 10px 5px #aaa;
}
.iv-popup-topLeft{
    float:left;
    top:0;  
}
.iv-popup-topRight{
    float:right;
    top:0;  
}
.iv-popup-bottomLeft{
    float:left;
    bottom:0;  
}
.iv-popup-bottomRight{
    float:right;
    bottom:0;  
}

.iv-popup-button{
    position: absolute;
}

.iv-popup-button-topLeft{
    float:left;
    top:0;  
}
.iv-popup-button-topRight{
    float:right;
    top:0;  
}
.iv-popup-button-bottomLeft{
    float:left;  
    bottom:0;
}
.iv-popup-button-bottomRight{
    float:right;  
    bottom:0;
}

</style>
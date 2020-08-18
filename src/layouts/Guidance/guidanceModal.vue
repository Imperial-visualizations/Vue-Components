<template>
    <iv-modal :color="color.shade_500" :positionModal="guidanceInput.positionModal" >

        <template #header>
            <div :style="modalHeader" class="iv-guidance-modal-header">
                <div class="iv-guidance-modal-title">{{guidanceHeaderText}}</div>
                <div @click="closeWindow" class="iv-guidance-modal-close-button" :style="modalCloseButton" >
                    <img class="iv-guidance-modal-closeImage"  src="./assets/close.svg" />
                </div>
            </div>
        </template>

        <template #body >
            <div :style="modalBody" class="iv-guidance-modal-body">
                <div class="iv-guidance-modal-body-text" >{{guidanceInput.text}}</div>
            </div>
        </template>

        <template #footer>   
            <div v-if="prevButton || nextButton || homeButton"   class="iv-guidance-modal-footer" :style="modalFooter">
                <div v-show="prevButton" @click="prevGuidance" class="iv-guidance-modal-prev-button" :style="modalFooterButton" >
                    <img class="iv-guidance-modal-navImage"  src="./assets/right.svg" />
                </div>
                <div v-show="homeButton" @click="goHome" class="iv-guidance-modal-home" >
                    <img class="iv-guidance-modal-homeImage"  src="./assets/home.svg" />
                </div> 
                <div v-show="nextButton" @click="nextGuidance" class="iv-guidance-modal-next-button" :style="modalFooterButton" >
                    <img class="iv-guidance-modal-navImage" src="./assets/left.svg" />
                </div>
            </div>
        </template>

    </iv-modal>
</template>

<script>
import Guidance from "@/mixins/Guidance";
//import { relative } from 'path';
import windowModal from "../Window";
import guidanceBus from "@/buses/guidanceBus"
export default {
    name:"iv-guidance-modal",
    components:{
        "iv-modal":windowModal,
    },
    mixins:[Guidance],
    props:{
        guidanceHeaderText:{
            type: String,
            default: "Help!"
        },
        guidanceInput:{
            type:Object
        },
        prevButton:{
            type:Boolean,
            default:false
        },
        nextButton:{
            type:Boolean,
            default:false
        },
        homeButton:{
            type:Boolean,
            default:false
        },
    },
    data(){
        return{
            color: null,
            color_rgb: this.guidanceInput.color_rgb,
        }
    },
    computed:{
        modalFooter(){
            if(this.prevButton || this.nextButton ||  this.homeButton){
                return{
                    backgroundColor: this.color.shade_500,
                }
            }
            return {}
        },
    },
    methods:{
        
        raiseComponent(){
            document.getElementById(this.guidanceInput.highlightDiv).style.zIndex = 900;
            document.getElementById(this.guidanceInput.highlightDiv).style.pointerEvents = "none";
        },
        lowerComponent(){
            document.getElementById(this.guidanceInput.highlightDiv).style.zIndex = 0;
            document.getElementById(this.guidanceInput.highlightDiv).style.pointerEvents = "auto";
            guidanceBus.$emit("hide-component", this.guidanceInput.highlightDiv);
        },
        prevGuidance(){
            this.lowerComponent();
            guidanceBus.$emit("prev-guidance", this._uid);
        },
        nextGuidance(){
            this.lowerComponent();
            guidanceBus.$emit("next-guidance", this._uid);
        },
        closeWindow(){
            this.lowerComponent();
            guidanceBus.$emit("close-window", this._uid);
        },
        goHome(){
            this.lowerComponent();
            guidanceBus.$emit("go-home", this._uid);
        }
    },
    mounted(){
        this.raiseComponent();
        guidanceBus.$emit("show-component", this.guidanceInput.highlightDiv);
    },
    watch:{
        guidanceInput:function(){
            this.color_rgb = this.guidanceInput.color_rgb;
            this.produceColor();
            this.raiseComponent();
            guidanceBus.$emit("show-component", this.guidanceInput.highlightDiv);
        }
    }
}
</script>

<style lang="scss">
@import "src/globals.scss";
.iv-guidance-modal-header{
    position: relative;
    top:0;
    min-height: 1.5rem;
    padding: 0px 0px 5px 0px;
}
.iv-guidance-modal-body{
    position:relative;
    min-height: 200px;
    max-height: 2vh;
    min-width: 400px;
    margin: 5px 5px 5px 5px;
}
.iv-guidance-modal-footer{
    position: relative;
    bottom:0;
    min-height: 1.5rem;
    padding: 5px 0px 5px 0px;
}
.iv-guidance-modal-title{
    text-align: center;
    float:left;
    color: white;
    padding: 5px 5px 5px 5px;
}
.iv-guidance-modal-body-text{
    position: relative;
    text-align: center;
    float:left;
    padding: 5px 5px 5px 5px;
    color: black;
}

//BUTTONS
.iv-guidance-modal-close-button{
    position: absolute;
    right:0;
    height: 100%;
    cursor: pointer;
    padding: 0px 5px 0px 5px;
}

.iv-guidance-modal-home{
    position: absolute;
    left:50%;
    top:50%;
    width: 36px;
    height: 36px;
    transform:translate(-50%,-50%);
    cursor: pointer;
    background-color: $hotspotButtonColor;
    border-radius: 100% 100% 100% 100%;
}

.iv-guidance-modal-next-button{
    position: absolute;
    right:0;
    top:50%;
    width: 30px;
    height: 30px;
    transform:translate(-50%,-50%);
    cursor: pointer;
}
.iv-guidance-modal-prev-button{
    position: absolute;
    left:0;
    top:50%;
    width: 30px;
    height: 30px;
    transform:translate(50%,-50%);
    cursor: pointer;
}

//IMAGES

.iv-guidance-modal-closeImage{
    position: relative;
    height: 70%;
    top:50%;
    transform: translateY(-50%);
    transition: 0.5s;
    text-align: center;
}

.iv-guidance-modal-navImage{
    position: absolute;
    left:50%;
    top:50%;
    height:90%;
    transform:translate(-50%,-50%);
    transition: 0.5s;
}
.iv-guidance-modal-homeImage{
    position: absolute;
    left:50%;
    top:50%;
    height:70%;
    transform:translate(-50%,-55%);
    transition: 0.5s;
    padding:2px;
}

</style>
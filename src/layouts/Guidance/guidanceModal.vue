<template>
    <div>
        <iv-modal :positionModal="guidanceInput.positionModal" >
            <template #header style="positon:relative" >
                <button v-show="homeButton" @click="goHome" class="iv-guidance-modal-home-button" >Home</button>
                <div class="iv-guidance-modal-title">{{guidanceHeaderText}}</div>
                <button @click="closeWindow" class="iv-guidance-modal-close-button" >X</button>
            </template>
            <template>
                <div>{{guidanceInput.text}}</div>
            </template>
            <template #footer>    
                <button v-show="prevButton" @click="prevGuidance" class="iv-guidance-modal-prev-button">
                    <img class="iv-guidance-modal-navImage"  src="./assets/right.svg" />
                </button>
                <button v-show="nextButton" @click="nextGuidance" class="iv-guidance-modal-next-button">
                    <img class="iv-guidance-modal-navImage" src="./assets/left.svg" />
                </button>
            </template>
        </iv-modal>
    </div>
</template>

<script>
import windowModal from "../WindowComp";
import guidanceBus from "buses/guidanceBus"
export default {
    name:"iv-guidance-modal",
    components:{
        "iv-modal":windowModal,
    },
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
    methods:{
        prevGuidance(){
            document.getElementById(this.guidanceInput.highlightDiv).style.zIndex = 0;
            document.getElementById(this.guidanceInput.highlightDiv).style.pointerEvents = "auto";
            guidanceBus.$emit("hide-component", this.guidanceInput.highlightDiv);
            guidanceBus.$emit("prev-guidance", this._uid);
        },
        nextGuidance(){
            document.getElementById(this.guidanceInput.highlightDiv).style.zIndex = 0;
            document.getElementById(this.guidanceInput.highlightDiv).style.pointerEvents = "auto";
            guidanceBus.$emit("hide-component", this.guidanceInput.highlightDiv);
            guidanceBus.$emit("next-guidance", this._uid);
        },
        closeWindow(){
            document.getElementById(this.guidanceInput.highlightDiv).style.zIndex = 0;
            document.getElementById(this.guidanceInput.highlightDiv).style.pointerEvents = "auto";
            guidanceBus.$emit("hide-component", this.guidanceInput.highlightDiv);
            guidanceBus.$emit("close-window", this._uid);
        },
        goHome(){
            document.getElementById(this.guidanceInput.highlightDiv).style.zIndex = 0;
            document.getElementById(this.guidanceInput.highlightDiv).style.pointerEvents = "auto";
            guidanceBus.$emit("hide-component", this.guidanceInput.highlightDiv);
            guidanceBus.$emit("go-home", this._uid);
        }
    },
    mounted(){
        guidanceBus.$emit("show-component", this.guidanceInput.highlightDiv);
        console.log("before", document.getElementById(this.guidanceInput.highlightDiv).style.zIndex, "brus", this.guidanceInput.highlightDiv,  document.getElementById(this.guidanceInput.highlightDiv) );
        document.getElementById(this.guidanceInput.highlightDiv).style.zIndex = 900;
        console.log("after", document.getElementById(this.guidanceInput.highlightDiv).style.zIndex   );
        document.getElementById(this.guidanceInput.highlightDiv).style.pointerEvents = "none";
    },
    watch:{
        guidanceInput:function(){
            guidanceBus.$emit("show-component", this.guidanceInput.highlightDiv);
            document.getElementById(this.guidanceInput.highlightDiv).style.zIndex = 900;
            document.getElementById(this.guidanceInput.highlightDiv).style.pointerEvents = "none";
        }
    }
}
</script>

<style lang="scss">
@import "src/globals.scss";

.iv-guidance-modal-close-button{
    position: absolute;
    right: 10px;
    top:50%;
    transform: translateY(-50%);
    text-align: center;
    color: white;
    background-color: $secondaryGreen;
    height: 80%;
    width: 60px;
    padding: 0px 10px 0px 10px;
    vertical-align: middle;
    cursor: pointer;
    outline: none;
    font: bold;
    font-size: 20px;
}

.iv-guidance-modal-home-button{
    position: absolute;
    left: 10px;
    top:50%;
    transform: translateY(-50%);
    text-align: center;
    color: white;
    background-color: $secondaryGreen;
    height: 80%;
    padding: 0px 10px 0px 10px;
    vertical-align: middle;
    cursor: pointer;
    outline: none;
    font: bold;
    font-size: 20px;
}

.iv-guidance-modal-title{
    text-align: center;
    padding: 15px 0px 10px 10px;
}


.iv-guidance-modal-next-button{
    position: absolute;
    right: 25%;
    top:50%;
    transform: translateY(-50%);
    text-align: center;
    color: white;
    background-color: $secondaryGreen;
    height: 80%;
    width: 60px;
    vertical-align: middle;
    cursor: pointer;
    outline: none;
    font: bold;
    font-size: 20px;
}
.iv-guidance-modal-prev-button{
    position: absolute;
    left: 25%;
    top:50%;
    transform: translateY(-50%);
    text-align: center;
    color: white;
    background-color: $secondaryGreen;
    height: 80%;
    width: 60px;
    vertical-align: middle;
    cursor: pointer;
    outline: none;
    font: bold;
    font-size: 20px;
}
.iv-guidance-modal-navImage{
  //width: 100%;
  padding: 5px 0px 5px 0px;
  height: 70%;
  transition: 0.5s;
}
</style>
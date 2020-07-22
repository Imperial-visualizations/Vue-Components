<template>
    <div>
        <iv-modal>
            <template #header>
                <button v-if="homeButton" @click="goHome">Home</button>
                <div>{{guidanceHeaderText}}</div>
                <button @click="closeWindow">X</button>
            </template>
            <template>
                <div>{{guidanceText}}</div>
            </template>
            <template #footer>
                <button v-if="prevButton" @click="prevGuidance">PREV</button>
                <button v-if="nextButton" @click="nextGuidance">NEXT</button>
            </template>
        </iv-modal>
    </div>
</template>

<script>

import windowModal from "../WindowComp"

import Vue from 'vue';
const guidanceBus = new Vue();
export {guidanceBus};

export default {
    name:"iv-guidance-modal",
    components:{
        "iv-modal":windowModal
    },
    props:{
        guidanceText:{
            type: String,
        },
        guidanceHeaderText:{
            type: String,
            default: "Help!"
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
        }
    },
    methods:{
        prevGuidance(){
            guidanceBus.$emit("prev-guidance", this._uid);
        },
        nextGuidance(){
            guidanceBus.$emit("next-guidance", this._uid);
        },
        closeWindow(){
            guidanceBus.$emit("close-window", this._uid);
        },
        goHome(){
            guidanceBus.$emit("go-home", this._uid);
        }
    }
}
</script>
<style>

.modal-backdrop {
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
}
.modalGuidance{
  min-width: 300px;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #003e74;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.modal-body p{
    color:black;
}


</style>
<template>
    <div>
        <iv-modal :color="color.shade_500" :positionModal="positionData">

            <template #header>
                <div :style="modalHeader" class="iv-guidance-modal-header">
                    <div class="iv-guidance-modal-title">Select Guidance Branch</div>
                    <div @click="closeWindow" class="iv-guidance-modal-close-button" :style="modalCloseButton" >
                        <img class="iv-guidance-modal-closeImage"  src="./assets/close.svg" />
                    </div>
                </div>
            </template>

            <template  #body >
                <div class ="branchList" :style="modalBody">
                    <div class="iv-guidance-home-branch-button" v-for=" branch in guidanceInput" :key="branch.title" @click="handleBranch(branch.branch_data)" :style="modalBranch" >{{branch.title}}</div>
                </div>
            </template>

        </iv-modal> 
    </div>
</template>
<script>
import guidanceBus from 'buses/guidanceBus.js';
import Guidance from "mixins/Guidance";

export default {
    name:"iv-guidance-home",
    props:{
        guidanceInput:{
            type:Array,
        },
        color_rgb_home:{
            default: () => [0, 102, 255]
        }
    },
    mixins:[Guidance],
    data(){
        return{
            color: null,
            color_rgb: this.color_rgb_home,
            gridStructure:false,
            positionData:[3,7,4,8],
        }
    },
    methods:{
        handleBranch(branchData){
            guidanceBus.$emit("select-branch", branchData);
        },
        closeWindow(){
            guidanceBus.$emit("close-window", this._uid);
        },
    },
    computed:{
        modalBranch(){
            return{
                backgroundColor: this.color.shade_400,
            }
        },
    }
}
</script>
<style lang="scss">
@import "src/globals.scss";
.branchList{
    position:relative;
    min-height: 200px;
    max-height: 2vh;
    min-width: 400px;
    padding: 5px 5px 5px 5px;
    margin: 5px 5px 5px 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.iv-guidance-home-branch-button{
    position:relative;

    width: 30%;
    padding: 5px 0px 5px 0px;
    //margin: auto;
    margin: 5px auto 5px auto;
    cursor: pointer;
    font-size: 20px;
    text-align: center;
    color: white;
    background-color: $secondaryGreen;
}

</style>
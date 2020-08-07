<template>
    <div>
        <iv-modal :positionModal="positionData">
            <template #header>
                <button @click="closeWindow" class="iv-guidance-home-close-button">X</button>
            </template>
            <template>
                <div class ="branchList">
                    <div class="iv-guidance-home-branch-button" v-for=" branch in guidanceInput" :key="branch.title" @click="handleBranch(branch.branch_data)" >{{branch.title}}</div>
                </div>
            </template>
        </iv-modal>
    </div>
</template>
<script>
import guidanceBus from 'buses/guidanceBus.js';

export default {
    name:"iv-guidance-home",
    props:{
        guidanceInput:{
            type:Array,
        }
    },
    data(){
        return{
        gridStructure:false,
        positionData:[3,7,4,8]
        }
    },
    methods:{
        handleBranch(branchData){
            guidanceBus.$emit("select-branch", branchData);
        },
        closeWindow(){
            guidanceBus.$emit("close-window", this._uid);
        },
    }
}
</script>
<style lang="scss">
@import "src/globals.scss";
.branchList{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    //padding:10px 0px 10px 0px;
    //width: 100%
}
.iv-guidance-home-close-button{
    position: absolute;
    right: 10px;
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
.iv-guidance-home-branch-button{
    color: white;
    background-color: $secondaryGreen;
    outline: none;
    text-align: center;
    width: 30%;
    padding:10px 0px 10px 0px;
    cursor: pointer;
    outline: none;
    font: bold;
    font-size: 20px;
}

</style>
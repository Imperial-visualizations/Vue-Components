<template>
    <div>
        <iv-modal :positionModal="positionData">
            <template #header>
                <iv-button @click="closeWindow" class="close-button" >X</iv-button>
            </template>
            <template>
                <div class ="branchList">
                    <iv-button v-for=" branch in guidanceInput" :key="branch.title" @click="handleBranch(branch.branch_data)" >{{branch.title}}</iv-button>
                </div>
            </template>
        </iv-modal>
    </div>
</template>
<script>
import Button from "../../components/Button";
import guidanceBus from 'buses/guidanceBus.js';

export default {
    name:"iv-guidance-home",
    components:{
        "iv-button":Button
    },
    props:{
        guidanceInput:{
            type:Array,
        }
    },
    data(){
        return{
        gridStructure:false,
        positionData:[3,9,4,8]
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
<style>
.branchList{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

</style>
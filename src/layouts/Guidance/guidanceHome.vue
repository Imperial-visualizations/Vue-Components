<template>
    <div>
        <iv-modal :positionModal="returnPosition">
            <template #header>
                <iv-button @click="closeWindow" class="close-button" >X</iv-button>
            </template>
            <template>
                <div class ="branchList">
                    <iv-button v-for=" branch in guidance_branches_list" :key="branch.title" @click="handleBranch(branch.branch_data)" >{{branch.title}}</iv-button>
                </div>
            </template>
        </iv-modal>
        
    </div>
</template>
<script>
import Button from "../../components/Button";
import {guidanceBus} from './guidanceModal.vue';

export default {
    name:"iv-guidance-home",
    components:{
        "iv-button":Button
    },
    props:{
        guidance_branches_list:{
            type:Array,
        }
    },
    data(){
        return{
        gridStructure:false
        }
    },
    methods:{
        handleBranch(branchData){
            guidanceBus.$emit("select-branch", branchData);
        },
        closeWindow(){
            guidanceBus.$emit("close-window", this._uid);
        },
        returnPosition(){
            return [5,7,2,4];
        }
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
.close-button{
    position: absolute;
    right: 5%
}
</style>
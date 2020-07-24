<template>
    <div>
        <iv-modal window_pos_left="5" window_pos_right="7" window_pos_top="2" window_pos_bottom="4" >
            <template #header>
                <button @click="closeWindow">X</button>
            </template>
            <template>
                <div class ="branchList">
                    <button v-for=" branch in guidance_branches_list" :key="branch.title" @click="handleBranch(branch.branch_data)" >{{branch.title}}</button>
                </div>
            </template>
        </iv-modal>
        
    </div>
</template>
<script>
import {guidanceBus} from './guidanceModal.vue';
export default {
    name:"iv-guidance-home",
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
    }
}
</script>
<style>
.branchList{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
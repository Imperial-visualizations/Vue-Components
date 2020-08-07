<template>
    <div>
        <iv-modal :positionModal="positionData">
            <template #header>
                <button @click="closeWindow" class="close-button modal-button" >X</button>
            </template>
            <template>
                <div class ="branchList">
                    <button class="modal-button" v-for=" branch in guidanceInput" :key="branch.title" @click="handleBranch(branch.branch_data)" >{{branch.title}}</button>
                </div>
            </template>
        </iv-modal>
    </div>
</template>
<script>
//import Button from 'components/Button'; Commmented because unused
import guidanceBus from 'buses/guidanceBus.js';

export default {
    name:"iv-guidance-home",
    components:{
       // "iv-button":Button
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
<style lang="scss">
@import "src/globals.scss";
.branchList{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%
}
.close-button{
    position: relative;
    right: 10px;
}
.modal-button{
    position: relative;
    color: white;
    background-color: $secondaryGreen;
    box-shadow: 1px 1px 5px 0px;
    //border:1px solid black;
    outline: none;
    //height: 3rem;
    width: 40%;
    padding:10px 5px 10px 5px
}

</style>
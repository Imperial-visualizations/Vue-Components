<template>
    <div class="iv-pane-navigator">
        <a href="#" id="iv-pagination-next" class="iv-button">Next</a>
        <a href="#" id="iv-pagination-prev" class="iv-button">Previous</a>
    </div>    
</template>
<script>
export default{
    name:'iv-pane-navigator'
}
</script>
<style lang="scss">
@import 'src/globals.scss';
.iv-pane-navigator{
    height:4rem;
    flex: 0 0 auto;
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    background:$lightgray;
    a{
        width:5rem;
        background:$primaryDarkBlue;
        &:hover{
            background:#3e668b
        }
    }
}
</style>
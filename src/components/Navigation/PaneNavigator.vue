<template>
    <div class="iv-pane-navigator">
        <a href="#" id="iv-pagination-prev" class="iv-button">{{prevText}}</a>
        <a href="#" id="iv-pagination-next" class="iv-button">{{nextText}}</a>
    </div>    
</template>
<script>
export default{
    name:'iv-pane-navigator',
    props:{
        nextText:{
            type:String,
            default:'Next'
        },
        prevText:{
            type:String,
            default:'Previous'
        }
    }
}
</script>
<style lang="scss">
@import 'src/globals.scss';
.iv-pane-navigator{
    height:3rem;
    flex: 0 0 auto;
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    background:$lightgray;
    position:relative;
    a{
        width:5rem;
        background:$primaryDarkBlue;
        &:hover{
            background:#3e668b
        }
    }
    &::before{
        content:"";
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        z-index:-1;
        box-shadow: -10px 10px 10px 10px #e4e4e4;
    }
}
</style>
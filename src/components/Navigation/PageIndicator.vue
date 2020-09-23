<template>
    <div id="iv-page-indicator">
        <a v-for="i in number_of_pages" :key="i" href="#" :id="`iv-page-indicator-no-${i}`"
        class="iv-page-indicator-button" :class="{'iv-current-page': (i) === current_page}">{{i}}</a>
    </div>
</template>
<script>
export default {
    name:'iv-page-indicator',
    props:{
        number_of_pages:{
            type:Number,
            required:true,
            default: 5 
        },
        current_page:{
            type:Number,
            required:true,
            default:3
        }
    }
}
</script>
<style lang="scss">
@import "src/globals.scss";
#iv-page-indicator{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    z-index:$titlebarZLevel;
    margin-left:0.5rem;
}
.iv-page-indicator-button{
    text-decoration: none;
    padding: 0.1rem 0.3rem;
    margin: 0 0.3rem;
    font-size:1.1rem;
    line-height: 1.1rem;
    font-weight:600;
    border-radius: 7px;
    box-sizing: border-box;
    border: 0.15rem solid $white;
    color:$white;
    &:visited{
        color:$white;
    }
    &.iv-current-page{
        color:$primaryImperialBlue;
        background: $white;
    }
}
</style>
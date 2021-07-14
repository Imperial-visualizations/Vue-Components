<template>
    <div id="iv-page-indicator">
        <a v-for="(url,i) in page_urls" :key="i"  :id="`iv-page-indicator-no-${i+1}`"
        class="iv-page-indicator-button" :class="{'iv-current-page': (i+1) === current_page}"
        :href=url>{{i+1}}</a>
    </div>
</template>
<script>
export default {
    name:'iv-page-indicator',
    inject:['current_page','page_urls']
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
    font-size: $titleBarHeight - 1vh;
    line-height: $titleBarHeight - 2vh;
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
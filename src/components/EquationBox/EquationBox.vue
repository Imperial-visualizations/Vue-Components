<template>
    <div :class="{ equationbox: stylise }">
        <iv-loading-spinner v-if="!loaded"/>
        <div ref='equationBox' v-show="loaded"></div>
    </div>
</template>

<script>

import LoadingSpinner from "../LoadingSpinner";
export default {
    name:"iv-equation-box",
    components:{
        'iv-loading-spinner':LoadingSpinner
    },
    mounted(){
        this.render();
    },
    props:{
        stylise: {
            type: Boolean,
            default: true,
        },
        equation: {
            type: String,
            default: String.raw` f({x}) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi `,
        }
    },
    data(){
        return {
            loaded:false
        }
    },
    methods:{
        async render(){
            let katex = await import("katex");
            await import("katex/dist/katex.min.css");
            //Here v-show MUST be used, because otherwise the equationBox element does not exist in the DOM!
            //An alternate approach would be to set this loaded = true in the line above and then await the next vue update to be sure
            //This method should be more performant though.
            katex.render(this.equation,this.$refs.equationBox,{throwOnError:false,errorColor:"black",displayMode:true});
            this.loaded = true;
        }
    },
    watch:{
        equation: function(){
            this.render();
        }
    }
}
</script>

<style>
.equationbox{
    border-style: solid;
    border-color: #37578b;
    border-radius: 0.5rem;
    background-color: #daeced;
    display: inline-block;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
</style>
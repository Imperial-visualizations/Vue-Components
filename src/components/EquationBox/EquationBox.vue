<template>
    <div ref='equationBox' :class="{ equationbox: stylise }">
    </div>
</template>

<script>
export default {
    name:"iv-equation-box",
    mounted(){
        this.rerender();
    },
    props:{
        stylise: {
            type: Boolean,
            default: true,
        },
        equation: {
            type: String,
            default: String.raw`f({x}) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi`,
        }
    },
    methods:{
        //Consider moving this to a mixin? (takes in text to render and elem to render to)
        async rerender(){
            let katex = await import("katex");
            katex.render(this.equation,this.$refs.equationBox,{throwOnError:false, errorColor: 'red',displayMode:true});
        }
    },
    watch:{
        equation(){
            this.rerender();
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
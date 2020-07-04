<template>
    <div id='equationBox' :class="{ equationbox: stylise }" v-katex>
        {{equation}}
    </div>
</template>

<script>
import katex from 'katex';

export default {
    name:"iv-equation-box",
    props:{
        stylise: {
            type: Boolean,
            default: true,
        },
        equation: {
            type: String,
            default: String.raw` $$ f({x}) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi $$`,
        }
    },
    watch:{
        equation: function(){
            katex.render(this.equation,  document.getElementById("equationBox"), {throwOnError: false, errorColor: 'black'});
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
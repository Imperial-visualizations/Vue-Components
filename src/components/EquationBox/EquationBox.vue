<template>
    <div :class="{ equationbox: stylise }" v-katex>
        {{equation}}
    </div>
</template>

<script>
import Vue from 'vue';
import 'katex/dist/katex.min.css';
import Katex from 'vue-katex-auto-render'
Vue.directive('katex', Katex);


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
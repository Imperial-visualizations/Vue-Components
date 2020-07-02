<template>
    <div :class="{ equationbox: background }" v-katex:display="'\\frac{a_i}{1+x}'"></div>
</template>

<script>
import Vue from 'vue';
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';

Vue.use(VueKatex);

export default {
    name:"iv-equation-box",
    props:{
        background: {
            type: Boolean,
            default: true,
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
    padding: 0.5rem;
}
</style>
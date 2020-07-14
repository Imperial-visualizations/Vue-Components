<template>
<iv-hover-text>
    <template #default>
        <iv-equation-box :equation="myEquation"></iv-equation-box>
    </template>
    <template #hoverElement>
        <h3>This is Newton's 2nd Law of Motion for a body of constant mass.</h3>
        <iv-equation-box :equation="symbol1" :stylise="false"></iv-equation-box>
        : Force
        <br>
        <iv-equation-box :equation="symbol2" :stylise="false"></iv-equation-box>
        : mass
        <br>
        <iv-equation-box :equation="symbol3" :stylise="false"></iv-equation-box>
        : acceleration
    </template>
</iv-hover-text>
</template>

<script>
import EquationBox from '../EquationBox/EquationBox.vue';
import HoverText from '../HoverText/HoverText.vue';

export default {
    name:"iv-equation-box-advance",
    components: {
        "iv-equation-box": EquationBox,
        "iv-hover-text": HoverText
    },
    props: {
        myEquation: {
            type: String,
            default: String.raw` $$ \textbf{F} = m \textbf{a} $$`,
        },
        symbol1: {
            type: String,
            default: String.raw` $$ \textbf{F} $$`
        },
        symbol2: {
            type: String,
            default: String.raw` $$ m $$`
        },
        symbol3: {
            type: String,
            default: String.raw` $$ \textbf{a} $$`
        },
    }
}
</script>

<style>

</style>
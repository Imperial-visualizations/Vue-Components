import vue from 'rollup-plugin-vue';
import includePaths from 'rollup-plugin-includepaths';
import scss from 'rollup-plugin-scss';
import image from '@rollup/plugin-image';
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import eslint from "@rbnlffl/rollup-plugin-eslint";
import alias from "@rollup/plugin-alias";
import {terser} from "rollup-plugin-terser";

const external = [
    'vue',
    'katex',
    'katex/dist/katex.min.css' 
]
const pluginConfig = [
    alias({
        entries:[
            {find:"@",replacement:"src"}
        ]
    }),
    includePaths({
         paths: ["./"]
    }),  
    resolve(),
    commonjs(), 
    scss({output:'./dist/impvis-components.css'}),
    image(),
    vue({css:false}),
    eslint(),
    terser()
];

export default [{
    input:'src/main.js',
    external: external,
    output: {
        format: 'esm',
        file:"./dist/impvis-components.js"
    },
    plugins:pluginConfig,
},
{
    input:'src/main.js',
    external:external,
    output:{
        format:'umd',
        file:'./dist/impvis-components.umd.js',
        name:"ImpVis",
        globals:{
                vue:"Vue"
        }
    },
    plugins:pluginConfig 
}]
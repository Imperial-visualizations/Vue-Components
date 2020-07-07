import vue from 'rollup-plugin-vue';
import includePaths from 'rollup-plugin-includepaths';
import css from 'rollup-plugin-css-porter';
import image from '@rollup/plugin-image';
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import {eslint} from "rollup-plugin-eslint";

export default{
    input:'src/main.js',
    external: [ // Include here any large external libraries that will be used as PeerDependencies.
        'vue',
        'katex',
        'katex/dist/katex.min.css'
    ],
    output: {
        format: 'esm',
        dir: 'dist'
    },
    plugins:[
        includePaths({ paths: ["./"] }),  
        resolve(),
        commonjs(), 
        css({dest:"./dist/ImpVis.css"}),
        image(),
        vue({css:false}),
        eslint()
    ]
}
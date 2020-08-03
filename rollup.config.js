import vue from 'rollup-plugin-vue';
import includePaths from 'rollup-plugin-includepaths';
import scss from 'rollup-plugin-scss';
import image from '@rollup/plugin-image';
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import eslint from "@rbnlffl/rollup-plugin-eslint"

const external = [
    'vue',
    'katex',
    'katex/dist/katex.min.css'
]
const pluginConfig = [
    includePaths({
         paths: ["./","src"]
    }),  
    resolve(),
    commonjs(), 
    scss({output:'./dist/impvis-components.css'}),
    image(),
    vue({css:false}),
    eslint()
];

export default [{
    input:'src/main.js',
    external: external,
    output: {
        format: 'esm',
        dir: 'dist'
    },
    plugins:pluginConfig,
},
{
    input:'src/main.js',
    external:external,
    output:{
        format:'umd',
        file:'./dist/impvis-components.umd.js',
        name:"ImpVis"
    },
    plugins:pluginConfig
}
]
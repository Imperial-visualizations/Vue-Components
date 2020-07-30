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

export default [{
    input:'src/main.js',
    external: external,
    output: {
        format: 'esm',
        dir: 'dist'
    },
    plugins:[
        includePaths({
             paths: ["./"]
        }),  
        resolve(),
        commonjs(), 
        scss({output:'impvis-components.css'}),
        image(),
        vue({css:false}),
        eslint()
    ]
},
{
    input:'src/main.js',
    external: external,
    output: {
        format: 'cjs',
        file:'./dist/impvis-components.common.js'
    },
    plugins:[
        includePaths({ paths: ["./"] }),  
        resolve(),
        commonjs(), 
        image(),
        scss({output:'impvis-components.css'}),
        vue({css:false}),
        eslint()
    ]
},
{
    input:'src/main.js',
    external:external,
    output:{
        format:'umd',
        file:'./dist/impvis-components.umd.js',
        name:"ImpVis"
    },
    plugins:[
        includePaths({ paths: ["./"] }),  
        resolve(),
        commonjs(), 
        image(),
        scss({output:'impvis-components.css'}),
        vue({css:false}),
        eslint()
    ]
}
]
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const typescript = require('rollup-plugin-typescript');
const serve = require('rollup-plugin-serve');

const path = require('path');
export default {
    input: './src/main.es.ts',
    output: {
        file: './dist/bundle.min.js',
        format: 'iife'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        resolve(),
        typescript(),
        serve()
    ]
}
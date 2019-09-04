const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');
const typescript = require('rollup-plugin-typescript');

module.exports = {
    input : 'src/main.es.ts',
    output: [
        {
            file: 'dist/bundle.module.js',
            format: 'esm',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [
        resolve(),
        typescript(),
        postcss({
            inject: false,
            minimize: true
        }),
        serve(),
        livereload()
    ]
}
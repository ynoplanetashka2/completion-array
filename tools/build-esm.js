const { build } = require('esbuild')
const { resolve } = require('path')

const tsconfigPath = resolve(__dirname, '../tsconfig.esm.json')
const esmDirectoryPath = resolve(__dirname, '../dist/esm')
const entryPoint = resolve(__dirname, '../src/index.ts')

const args = process.argv.slice(2)
build({
    tsconfig: tsconfigPath,
    entryPoints: [entryPoint],
    outdir: esmDirectoryPath,
    outExtension: { '.js': '.mjs' },
    bundle: true,
    format: 'esm',
    watch: Boolean(args.includes('--watch')),
})
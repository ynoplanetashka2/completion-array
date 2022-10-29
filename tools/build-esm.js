const { readdirSync, renameSync } = require('fs')
const { resolve } = require('path')
const { execSync } = require('child_process')

const tsconfigPath = resolve(__dirname, '../tsconfig.esm.json')
const esmDirectoryPath = resolve(__dirname, '../dist/esm')
execSync(`npx tsc -p ${tsconfigPath}`)
console.log('ts build complete')
const files = readdirSync(esmDirectoryPath)
for (const basename of files) {
    const fullName = resolve(esmDirectoryPath, basename)
    renameSync(fullName, resolve(esmDirectoryPath, `${fullName.slice(0, -3)}.mjs`))
}
console.log('files renamed')
import { exec } from 'node:child_process'
import * as fs from 'fs'

const packageJson = JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf-8' }))

// Check if dependencies folders exist
for (let dependency in packageJson.dependencies) {
  const path = `./node_modules/${dependency}`
  console.log(dependency, fs.existsSync(path))
}


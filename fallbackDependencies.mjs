import { execSync } from 'node:child_process'
import * as fs from 'fs'

const packageJson = JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf-8' }))

// Check if dependencies folders exist
for (let dependency in packageJson.dependencies) {
  const isInstalled = fs.existsSync(`./node_modules/${dependency}`)
  console.log(dependency, isInstalled)
  if (!isInstalled) {
    console.log(`Installing ${dependency} from optionalDependencies`)
    execSync(`npm install ${dependency}@${packageJson.optionalDependencies[dependency]}`)
  }
}


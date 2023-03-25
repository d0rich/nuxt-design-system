import { execSync } from 'node:child_process'
import * as fs from 'fs'
import consola from 'consola'

const packageJson = JSON.parse(
  fs.readFileSync('./package.json', { encoding: 'utf-8' })
)

// Check if dependencies folders exist
for (let dependency in packageJson.dependencies) {
  const isInstalled = fs.existsSync(`./node_modules/${dependency}`)
  if (!isInstalled) {
    consola.info(`Installing ${dependency} from fallbackDependencies`)
    execSync(
      `npm install ${dependency}@${packageJson.fallbackDependencies[dependency]}`
    )
  }
}

// Manually create files to avoid Rollup error
const files = {
  './node_modules/gsap/MorphSVGPlugin.js': 'export const MorphSVGPlugin = {}'
}
for (let path in files) {
  if (!fs.existsSync(path)) {
    const dirPath = path.split('/').slice(0, -1).join('/')
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true })
    fs.writeFileSync(path, files[path], {
      encoding: 'utf-8'
    })
  }
}


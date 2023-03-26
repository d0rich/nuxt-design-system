import { execSync } from 'node:child_process'
import * as fs from 'fs'
import consola from 'consola'

const packageJson = JSON.parse(
  fs.readFileSync('./package.json', { encoding: 'utf-8' })
)

// Check if dependencies folders exist
for (let dependency in packageJson.optionalDependencies) {
  function isInstalled() {
    return fs.existsSync(`./node_modules/${dependency}`)
  }

  function install(packageToInstall) {
    execSync(`npm install ${packageToInstall} --no-save`)
    const isInstalledResult = isInstalled()
    if (isInstalledResult) {
      consola.info(`${packageToInstall} is installed`)
    } else {
      consola.error(`Failed to install ${packageToInstall}`)
    }
    return isInstalledResult
  }

  if (!isInstalled()) {
    consola.info(`Installing ${dependency} from fallbackDependencies`)
    const fallbackDependency = packageJson.fallbackDependencies[dependency]

    if (Array.isArray(fallbackDependency)) {
      for (let version of fallbackDependency) {
        const installResult = install(`${dependency}@${version}`)
        if (installResult) break
      }
    } else if (typeof fallbackDependency === 'string') {
      install(`${dependency}@${fallbackDependency}`)
    }
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

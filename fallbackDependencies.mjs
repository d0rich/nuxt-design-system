import { execSync } from 'node:child_process'
import * as fs from 'fs'
import consola from 'consola'

const prefix = 'node_modules/@d0rich/nuxt-desing-system'

const isNuxtLayer = fs.existsSync(`./${prefix}`)

const packageJson = JSON.parse(
  fs.readFileSync(isNuxtLayer ? `./${prefix}/package.json` : `./package.json`, {
    encoding: 'utf-8'
  })
)

// Check if dependencies folders exist
for (let dependency in packageJson.optionalDependencies) {
  function isInstalled() {
    return fs.existsSync(
      isNuxtLayer
        ? `./${prefix}/node_modules/${dependency}`
        : `./node_modules/${dependency}`
    )
  }
  if (!isInstalled()) {
    consola.info(`Installing ${dependency} from fallbackDependencies`)
    const fallbackDependency = packageJson.fallbackDependencies[dependency]
    if (Array.isArray(fallbackDependency)) {
      for (let version of fallbackDependency) {
        const packageToInstall = `${dependency}@${version}`
        execSync(
          `npm install ${packageToInstall} --no-save ${
            isNuxtLayer ? `--prefix ./${prefix}` : ''
          }`
        )
        if (isInstalled()) {
          consola.info(`${packageToInstall} is installed`)
          break
        }
        consola.error(`Failed to install ${packageToInstall} `)
      }
    } else if (typeof fallbackDependency === 'string') {
      const packageToInstall = `${dependency}@${fallbackDependency}`
      execSync(
        `npm install ${packageToInstall} --no-save ${
          isNuxtLayer ? `--prefix ./${prefix}` : ''
        }`
      )
      if (isInstalled()) {
        consola.info(`${packageToInstall} is installed`)
      } else {
        consola.error(`Failed to install ${packageToInstall}`)
      }
    }
  }
}

// Manually create files to avoid Rollup error
const files = [
  {
    path: `./${
      isNuxtLayer ? `${prefix}/` : ''
    }node_modules/gsap/MorphSVGPlugin.js`,
    content: 'export const MorphSVGPlugin = {}'
  }
]
for (let { path, content } of files) {
  if (!fs.existsSync(path)) {
    const dirPath = path.split('/').slice(0, -1).join('/')
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true })
    fs.writeFileSync(path, content, {
      encoding: 'utf-8'
    })
  }
}

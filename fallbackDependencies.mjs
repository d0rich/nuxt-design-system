/**
 * This script was used as `postinstall` script to install fallback GSAP if payed one is not available.
 * But it seems project scoped `.npmrc` can't be acessed if this repository is used as dependency.
 *
 * Code for package.json
 * ```
 * "optionalDependencies": {
 *  "gsap": "npm:@gsap/shockingly@^3.11.5"
 *  },
 *  "fallbackDependencies": {
 *    "gsap": [
 *      "npm:@gsap/simply@^3.11.5",
 *      "^3.11.5"
 *    ]
 *  }
 * ```
 */

import { execSync } from 'node:child_process'
import * as fs from 'fs'
import { resolve, sep, join } from 'node:path'
import consola from 'consola'

// Read current package.json
const packageJson = JSON.parse(
  fs.readFileSync('./package.json', { encoding: 'utf-8' })
)

// Calculate root project for case if nuxt-design-system is dependency
const currentDir = resolve()
const firstNodeModules = currentDir
  .split(sep)
  .findIndex((section) => section === 'node_modules')
const root = currentDir
  .split(sep)
  .slice(0, firstNodeModules === -1 ? undefined : firstNodeModules)
  .join(sep)

// // Work with custom fallbackDependencies
// for (let dependency in packageJson.optionalDependencies) {
//   function isInstalled() {
//     return fs.existsSync(join(root, `./node_modules/${dependency}`))
//   }

//   function install(packageToInstall) {
//     execSync(`npm install ${packageToInstall} --no-save`, {
//       cwd: root
//     })

//     const isInstalledResult = isInstalled()
//     if (isInstalledResult) {
//       consola.info(`${packageToInstall} is installed`)
//     } else {
//       consola.error(`Failed to install ${packageToInstall}`)
//     }
//     return isInstalledResult
//   }

//   if (!isInstalled()) {
//     consola.info(`Installing ${dependency} from fallbackDependencies`)
//     const fallbackDependency = packageJson.fallbackDependencies[dependency]

//     if (Array.isArray(fallbackDependency)) {
//       for (let version of fallbackDependency) {
//         const installResult = install(`${dependency}@${version}`)
//         if (installResult) break
//       }
//     } else if (typeof fallbackDependency === 'string') {
//       install(`${dependency}@${fallbackDependency}`)
//     }
//   }
// }

// Work with optionalDependencies
for (let dependency in packageJson.dependencies) {
  function isInstalled() {
    return fs.existsSync(join(root, `./node_modules/${dependency}`))
  }

  function install(packageToInstall) {
    execSync(`npm install ${packageToInstall} --no-save`, {
      cwd: root
    })

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
    const fallbackDependency = packageJson.optionalDependencies[dependency]
    install(`${dependency}@${fallbackDependency}`)
  }
}

// Manually create files to avoid Rollup error
consola.info('Creating files fallbacks')
const files = {
  './node_modules/gsap/MorphSVGPlugin.js': 'export const MorphSVGPlugin = {}',
  './node_modules/gsap/SplitText.js': 'export const SplitText = {}'
}
for (let path in files) {
  const absPath = join(root, path)
  if (!fs.existsSync(absPath)) {
    consola.info(`Writing ${absPath}`)
    const dirPath = join(absPath, '..')
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true })
    fs.writeFileSync(absPath, files[path], {
      encoding: 'utf-8'
    })
  }
}

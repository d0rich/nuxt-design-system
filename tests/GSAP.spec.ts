import { describe, test, expect } from 'vitest'
import { setup, url, getBrowser } from '@nuxt/test-utils'

describe('Test GSAP on page', async () => {
  await setup({
    // test context options
  })
  test('MorphSVGPlugin should be installed', async () => {
    const browser = await getBrowser()
    const page = await browser.newPage()
    await page.goto(url('/'), {
      waitUntil: 'networkidle'
    })
    const morphSVGTypeHandle = await page.evaluateHandle(() =>
      Promise.resolve(typeof window?.gsap?.plugins?.morphSVG)
    )
    const morphSVGType = await morphSVGTypeHandle.jsonValue()
    expect(morphSVGType).toBe('function')
  })
})

import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
  await page.goto('https://ourHTTPUser:ourHTTPpass@pages-in.staging.uknow-whatgoes-here.com/')
  await page.pause()
})
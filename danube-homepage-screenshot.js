const { chromium } = require('playwright');

async function run () {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto('https://danube-web.shop')

  await page.screenshot({ path: 'screenshot.jpg' })

  await page.close()
  await browser.close()
}

run()
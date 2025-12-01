import puppeteer from 'puppeteer';

/**
 * 基础浏览器操作
 */
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100
  })

  const page = await browser.newPage();

  await page.setVieport({ width: 1200, height: 800 })

  await page.goto('https://baidu.com')

  await page.screenshot({
    path: 'fullpage.png',
    fullPage: true
  })

  await browser.close()

})()

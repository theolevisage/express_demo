const puppeteer = require('puppeteer')

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}

exports.doTheThing = async (req, res, next) => {
    let browser = await puppeteer.launch({headless: false})
    let page = await browser.newPage()
    await page.goto(`https://www.facebook.com/xavier.tostivint.7/about`)
    let elements = await page.$$('button');
    await elements[2].click();
    await delay(1000);
    await page.$eval('input[id = email]', el => el.value = 'm.laboule@outlook.fr');
    await page.$eval('input[id = pass]', el => el.value = 'azerty123');

    try {
        await page.click('input[type="submit"]');
    }
    catch
    {
        await page.click('button[id=loginbutton]');
    }

    await delay(10000);
    await page.keyboard.press('Escape');
    const element2 = await page.waitForSelector('div[class=buofh1pr] > div > div > div > div > div > div :nth-child(2)'); // select the element
    const value2 = await element2.evaluate(el => el.textContent);
    console.log(value2);

    res.json()
};
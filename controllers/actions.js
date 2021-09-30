const puppeteer = require('puppeteer')

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}

exports.doTheThing = async (req, res, next) => {
    console.log('HEEEYYY C MOI C FRANCOIS BLEU BLANC ROUGE');
    console.log(req.body);

    let url = 'https://www.facebook.com/'

    var id = 'j.malkovitch@outlook.fr'
    var pw = 'azerty123'

    let browser = await puppeteer.launch({headless: false})
    let page = await browser.newPage()

    let cible = req.body.profile
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

    try
    {
        console.log("hehe");
        const element = await page.waitForSelector('div[class=buofh1pr]'); // select the element
        const value = await element.evaluate(el => el.textContent);
        console.log(value);

        const patrick = await page.evaluate( () => {
            var parent = document.querySelectorAll("div.buofh1pr > div > div");

            console.log('############  patrick FIRST TRY  ################');
            console.log(parent);
        })

        console.log('############  patrick  ################');
        console.log(patrick);

/*
        let john = await page.$$('div .buofh1pr');
*/
        /*for (let i = 0; i < john.length; i++) {

            console.log('/////// **********  john ********** /////////');
            console.log(await john[i].evaluate(el => el.textContent));
        }*/
    }
    catch
    {
        console.log("oko");
    }


    res.json()
};
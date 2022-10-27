const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('Spec2 Test', () => {
    xit('This is Spec2 testcase', async () => {
        await browser.setWindowSize(1536, 824);
        await browser.url("https://www.se.com/in/en/");
        // await browser.reloadSession();
        
        let url = "https://www.google.com/";
        await browser.newWindow(url, {windowName: 'blank window'});

        let handles = await browser.getWindowHandles();
        if (handles.length > 1) {
            for (var i = handles.length - 1; i >= 0; i--) {
              await browser.switchToWindow(handles[i]);
              await browser.closeWindow();;
            }
          }
        // let handles = await browser.getWindowHandles();
        // await browser.switchToWindow(handles[1]);
        // await browser.pause(2000);
        // let currenturl = await browser.getTitle();
        // console.log(currenturl)

        // let handles1 = await browser.getWindowHandles();
        // await browser.switchToWindow(handles1[0]);
        // await browser.pause(2000);
        // let currenturl1 = await browser.getTitle();
        // console.log(currenturl1)
     
    });

    xit('Get title of cherchertech Home page', async () => {
    //  await browser.url('https://chercher.tech/practice/popups')
    //  let ele = await $("//input[@name='alert']");
    //  await ele.click();
    //  await browser.acceptAlert();

      // await browser.url('https://chercher.tech/practice/popups')
      // let ele = await  $("//input[@name='confirmation']")
      // await ele.click();
      // await browser.dismissAlert();

      // await browser.url('https://chercher.tech/practice/popups')
      // let ele = await $("//input[@name='confirmation']");
      // await ele.click();
      // const alertText = await browser.getAlertText()
      // console.log("Text is : " +alertText)

      await browser.url('https://chercher.tech/practice/popups')
      let ele = await $("//input[@name='prompt']")
      await ele.click();
      await browser.sendAlertText("This is Chercher Tech")

    });


    xit('Get title of cherchertech Home page', async () => {
      await browser.url('https://webdriver.io')
      const pluginWrapper = await browser.custom$$('myStrat', '.pluginWrapper')
      console.log(pluginWrapper.length) // 4
  
      });

      it('addValue command', () => {
        browser.url('https://chercher.tech/practice/popups')
        let exist = $("//selec").isExisting()
        console.log("Is dropdown exist : "+exist)
      })




});

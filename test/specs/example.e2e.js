// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');
// import allureReporter from '@wdio/allure-reporter';

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await browser.setWindowSize(1536, 824);
//         // allureReporter.addFeature('This is the first feature');
//         // allureReporter.addFeature('addLabel');
//         // allureReporter.addTestId(123);
//         // allureReporter.addDescription('Description');
//         // allureReporter.startStep("StartStep title");
//         await LoginPage.open();
//         await LoginPage.Test();
//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(await SecurePage.flashAlert).toBeExisting();
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//         // allureReporter.endStep("passed");
//     });

//     it('Fail the test', async () => {
//         // await expect(true).toBeFalsy();
        
//     });
// });

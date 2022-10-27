const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).waitForExist();
        await (await this.inputUsername).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    async Test () {
       let element_names = await $$("//label");
       var tempArray = []
       var expected_text = 'Username Password';
       expected_text = expected_text.split(" ");

       for (let element_name of element_names) {
            const actual_text = await element_name.getText();
            console.log("actual_text : " + actual_text);
            expect(expected_text).toContain(actual_text);
            tempArray.push(actual_text);
       }  

        // for (let i = 0; i < element_names.length; i++) {
        //     const actual_text = await (element_names[i]).getText();
        //     console.log("actual_text : " + actual_text);
        //     expect(expected_text).toContain(actual_text);
        //     tempArray.push(actual_text);
        //  }

        console.log('completed ' + tempArray)
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }

    
}

module.exports = new LoginPage();

// import { moment} from 'moment' ;
import moment from 'moment';
var fs = require('fs-extra');
var path = require('path');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    async takeScreenshot(message) {
        const timestamp = moment().format('YYYYMMDD-HHmmss.SSS');
        fs.ensureDirSync('reports/html-reports/screenshots/');
        const filepath = path.join('reports/html-reports/screenshots/', timestamp + '.png');
        await browser.takeScreenshot();
        // this.browser.saveScreenshot(filepath);
        this.logMessage(message) ;
        process.emit('test:screenshot', filepath);
        return this;
    }

   async logMessage(message) {
       await process.emit('test:log', message);
    }
}


module.exports = class BasePage {
   
    goToLoginPage () {
        browser.url("/")
        browser.maximizeWindow()
        return this
    }

    isLoginPageDisplayed(){
        
        return browser.getTitle()
    }

    getUrl(){
        return browser.getUrl()
    }

    
}


    

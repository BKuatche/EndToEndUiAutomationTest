
const BasePage = require('./basePage');

class LoginPage extends BasePage {


    get inputUsername () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('#login-button') }


    Dologin (username, password) {
        this.inputUsername.setValue(username)
        this.inputPassword.setValue(password)
        this.btnSubmit.isClickable()
        this.btnSubmit.click() 
    }

}

module.exports = new LoginPage();
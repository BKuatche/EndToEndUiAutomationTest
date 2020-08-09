const BasePage = require('./basePage');

class CheckoutPage extends BasePage {
   
    get firstName () { return $('input#first-name') }
    get lastName () { return $('#last-name') }
    get zipCode () { return $('input#postal-code') }
    get continueButton (){return $(".btn_primary.cart_button")}

    doFillCheckoutInformation(firsname,lastname,zipcode){
     
        if (this.firstName.isExisting()) {

            this.firstName.setValue(firsname)
            this.lastName.setValue(lastname)
            this.zipCode.setValue(zipcode)
        }

        return this
    }

}

module.exports = new CheckoutPage();
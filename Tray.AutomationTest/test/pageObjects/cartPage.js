const BasePage = require('./basePage');
const CommonPage = require('../Common/commonPage');

class CartPage extends BasePage{

    get itemPrices () { return $$('div.inventory_item_price') }
    get checkoutButton () { return $('.btn_action.checkout_button') }
    


    doRemoveItemWithLowerPriceFromCart(){
      
        try {
             
             var itemPrices = this.getCartPrices()

             var minPrices = CommonPage.getMinPrices(itemPrices,1)

             var price = minPrices[0].toString()

            $("//div[@class='item_pricebar']/div[text() = '"+price+"']//following-sibling::button").click()
            
            return this

           } catch (error) {
               console.log(error)
           }
    }

    getCartPrices(){
        let prices = new Array();

        try {
         
            let totalElements = this.itemPrices.map((result) => {
                return result.getText();
            });

            for (let index = 0; index < totalElements.length; index++) {
                const element = totalElements[index]; 
                prices[index] = Number(element)
            }

            return prices

           } catch (error) {
               console.log(error)
           }

    }


  goToCheckoutPage(){

    if(this.checkoutButton.isExisting()){
        this.checkoutButton.click()
    }
   
  }

  getPriceCountDisplayed(){

    return this.getCartPrices().length
  }
}

module.exports = new CartPage();
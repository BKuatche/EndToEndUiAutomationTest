const BasePage = require('./basePage');
const CommonPage = require('../Common/commonPage');

class ProductPage extends BasePage {

    get productSortContainer () { return $('select.product_sort_container') }
    get itemPrices () { return $$('div.inventory_item_price') }
    get itemsCount () { return $('.shopping_cart_badge') }
    get shoppingBasket(){return $("div#shopping_cart_container")}
    get hightoLowPrice(){return  $("option[value='hilo']")}

    DoSortProductBy(text){
        try {
            
            if(this.productSortContainer.isDisplayed()){
            
                this.productSortContainer.selectByVisibleText(text) 
            }
           
           } catch (error) {
               console.log(error.message)
           }
           return this;
    }

    getProductsPrices(){
        let prices = new Array();

        try {
         
            let totalElements = this.itemPrices.map((result) => {
                return result.getText();
            });

            for (let index = 0; index < totalElements.length; index++) {
                const element = totalElements[index].substr(1); 
                prices[index] = Number(element)
            }

            return prices

           } catch (error) {
               console.log(error)
           }

    }


    AddToShoppingBasket(){
       
       try {  

        let totalElements = this.itemPrices.map((result) => {
            return result.getText();
        });
         
        let minPrices = CommonPage.getMinPrices(this.getProductsPrices(),2)

        for (let index = 1; index <= totalElements.length; index++) {
        
            var element = $("div:nth-of-type("+index+") > .pricebar > .inventory_item_price") 
            var Price = element.getText().substr(1)
            if (Price === minPrices[0].toString()||Price === minPrices[1].toString()){
           
                 var addCard =$("div:nth-of-type("+index+") > .pricebar > .btn_inventory.btn_primary")
                     addCard.click()

               } 
        }

        return this

      } catch (error) {
              console.log(error.message)
     }

   }

  getBasketItemCount(){
      try {
         
           if(this.itemsCount.isExisting()){
           
            return this.itemsCount.getText()
           }  
          
      } catch (error) {
          console.log(error)
      }
  }

  goToYourCartPage(){

     this.shoppingBasket.click()
  }

  isHighToLowPriceSelected(){
    
    return this.hightoLowPrice.isSelected()
  }
}

module.exports = new ProductPage();
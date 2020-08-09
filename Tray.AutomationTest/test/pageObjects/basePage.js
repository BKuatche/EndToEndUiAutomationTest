
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

    getMinPrices(array,size){
        let minPrices = new Array();

        try {
              
            let prices = array
             
            for (let index =0 ;index <size ; index++) {

                var price = Math.min.apply(null,prices)
                minPrices[index] = price

                this.removeItem(prices,price)
            }

            return minPrices

           } catch (error) {
               console.log(error.message)
           }

    }

    removeItem(array, item){
        for(var i in array){
            if(array[i]==item){
                array.splice(i,1);
                break;
            }
        }
    }
    
}


    

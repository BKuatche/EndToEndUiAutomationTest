
class CommonPage {

    get containerHeaderTitle (){return $(".subheader")}
    get itemPrice () { return $('div.inventory_item_price') }


    getTitle(){
        return this.containerHeaderTitle.getText()
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

    getPrice(){
        return this.itemPrice.getText()
    }
}

module.exports = new CommonPage();
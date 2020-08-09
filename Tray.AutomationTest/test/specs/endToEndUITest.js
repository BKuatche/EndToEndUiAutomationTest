const LoginPage = require('../pageObjects/loginPage');
const data = require('../../test/testData/data.json');
const { expect } = require('chai');
const InventoryPage = require('../pageObjects/inventoryPage');
const CartPage = require('../pageObjects/cartPage');
const CheckoutPage = require('../pageObjects/checkoutPage');


describe('validate that user is able to successfully add items to your basket and remove an item', () => {
    
    
    beforeEach(() => {
           
        expect(LoginPage.goToLoginPage().isLoginPageDisplayed()).to.contain(data.LoginPageTitle);
        
    });
   

    it('end to end ui test', () => {
        
        //1-Login to https://www.saucedemo.com/
        LoginPage.Dologin(data.UserName,data.Password)
        expect(LoginPage.getUrl()).to.contain(data.PartialInventoryUrl);

        //2 - Sort the products by Price (high to low)
        InventoryPage.DoSortProductBy(data.SortByLowerPrice);
        expect(InventoryPage.isHighToLowPriceSelected()).to.be.true;
        
        //3. Add the two cheapest products to your basket
        InventoryPage.AddToShoppingBasket()
        expect(InventoryPage.getBasketItemCount()).to.equal("2");

        //4. Open the basket
        InventoryPage.goToYourCartPage()
        expect(CartPage.getUrl()).to.contain(data.PartialCartUrl);

        //5. Remove the cheapest product from your basket and Checkout
        CartPage.doRemoveItemWithLowerPriceFromCart();
        expect(CartPage.getPriceCountDisplayed()).to.equal(1);

        CartPage.goToCheckoutPage();
        expect(CheckoutPage.getUrl()).to.contain(data.PartialCheckoutUrl);

        //7. Finish on the page where you need to enter your name and postal code   
        CheckoutPage.doFillCheckoutInformation(data.FirstName,data.LastName,data.ZipCode)
        
    });

});
import homePage from "../../pages/homePage";
import signin from "../../pages/signin";


describe('Handling autocomplete', function() {
    it('Should login to inventory page',()=>{
        cy.visit('https://bstackdemo.com/')
        homePage.clickOnSignin();
        signin.verifyUsernameTextbox();
    })
})

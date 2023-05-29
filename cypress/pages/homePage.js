class homePage{
    elements = {
loginbtn :() =>cy.get("#signin"),
logoffbtn :() => cy.get("#logout")
    }

    // I create a function -> this will click the login button
    clickOnSignin(){
        this.elements.loginbtn().click()
    }
}
module.exports = new homePage();
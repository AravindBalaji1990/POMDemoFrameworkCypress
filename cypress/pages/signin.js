/// <reference types="Cypress" />

class signin{
    elements = {
        usernametxt :() =>cy.get("#username"),
        passwordtxt :() =>cy.get("#password")
            }


            verifyUsernameTextbox(){
                this.elements.usernametxt().should('be.visible')
            }
}
module.exports = new signin();
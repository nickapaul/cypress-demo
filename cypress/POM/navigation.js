class Navigation {
    goToHomepage(){
        cy.contains(' Home').should('be.visible').click();
    }

    goToProductPage(){
        cy.contains(' Products').should('be.visible').click();
    }

    goToCart(){
        cy.contains(' Cart').should('be.visible').click();
    }

    goToSignUp(){
        cy.contains(' Signup / Login').should('be.visible').click();
    }

    goToTestCases(){
        cy.contains(' Test Cases').should('be.visible').click();
    }

    goToAPITesting(){
        cy.contains(' API Testing').should('be.visible').click();
    }

    goToContactUs(){
        cy.contains(' Contact us').should('be.visible').click();
    }

    clickLogOut(){
        cy.contains(' Logout').should('be.visible').click();
    }

    clickDeleteAccount(){
        cy.contains(' Delete Account').should('be.visible').click();
    }

    getLoggedInUserName(){
        return cy.get('[class="fa fa-user"]').should('be.visible').invoke('text').then((text) => {
            return text.trim();
        });
    }

    clickLogOut(){
        cy.contains(' Logout').should('be.visible').click();
    }
}

module.exports = new Navigation();
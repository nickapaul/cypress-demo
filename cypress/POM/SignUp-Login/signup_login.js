class Signup_Login {
    login_enterEmail(email) {
        cy.get('[data-qa="login-email"]').should('be.visible').type(email);
    }

    login_enterPassword(password) {
        cy.get('[data-qa="login-password"]').should('be.visible').type(password);
    }

    login_clickLogin() {
        cy.get('[data-qa="login-button"]').should('be.visible').click();
    }

    signup_enterName(name) {
        cy.get('[data-qa="signup-name"]').should('be.visible').type(name);
    }

    signup_enterEmail(email) {
        cy.get('[data-qa="signup-email"]').should('be.visible').type(email);
    }

    signup_clickSignup() {
        cy.get('[data-qa="signup-button"]').should('be.visible').click();
    }
}

module.exports = new Signup_Login();
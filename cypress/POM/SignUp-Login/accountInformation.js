class AccountInformation{
    isMrOrMrs(response){
        let formatted_resp = response.toLowerCase();
        if (formatted_resp.includes("mr") ) {
            cy.get('[id="id_gender1"]').should('be.visible').click();     
        }
        else if (formatted_resp.includes("mrs") ) {
            cy.get('[id="id_gender2"]').should('be.visible').click();     
        }
        else {
            cy.log('Please use either Mr or Mrs');     
        }
    }

    typeName(name){
        cy.get('[data-qa="name"]').should('be.visible').type(name);
    }
    
    typePassword(password){
        cy.get('[data-qa="password"]').should('be.visible').type(password);
    }

    selectDateOfBirth(day, month, year){
        cy.get('[data-qa="days"]').should('be.visible').select(day);
        cy.get('[data-qa="months"]').should('be.visible').select(month);
        cy.get('[data-qa="years"]').should('be.visible').select(year);
    }

    signUpForNewsletter(){
        cy.get('[id="newsletter"]').should('be.visible').click();
    }

    optIn(){
        cy.get('[id="optin"]').should('be.visible').click();
    }

    addressFirstName(name){
        cy.get('[data-qa="first_name"]').should('be.visible').type(name);
    }

    addressLastName(name){
        cy.get('[data-qa="last_name"]').should('be.visible').type(name);
    }

    enterCompanyName(name){
        cy.get('[data-qa="company"]').should('be.visible').type(name);
    }

    enterAddress1(address){ 
        cy.get('[data-qa="address"]').should('be.visible').type(address);
    }

    enterAddress2(address){
        cy.get('[data-qa="address2"]').should('be.visible').type(address);
    }

    selectCountry(country){
        cy.get('[data-qa="country"]').should('be.visible').select(country);
    }

    enterState(state){
        cy.get('[data-qa="state"]').should('be.visible').type(state);
    }

    enterCity(city){
        cy.get('[data-qa="city"]').should('be.visible').type(city);
    }   

    enterZipCode(zipcode){
        cy.get('[data-qa="zipcode"]').should('be.visible').type(zipcode);
    }   

    enterMobileNumber(mobile){
        cy.get('[data-qa="mobile_number"]').should('be.visible').type(mobile);
    }

    clickCreateAccount(){
        cy.get('[data-qa="create-account"]').should('be.visible').click();
    }

    clickContinue(){
        cy.get('[data-qa="continue-button"]').should('be.visible').click();
    }






}

module.exports = new AccountInformation();
import nav from '../POM/navigation'
import signUp from '../POM/SignUp-Login/signup_login'
import acctInfo from '../POM/SignUp-Login/accountInformation'
import del from '../POM/deleteAccount';

describe('Demo Test Cases', () => {
  it('Test Case 1: Register User', () => {
    cy.visit('https://www.automationexercise.com/');
    nav.goToSignUp();
    cy.get('[class="signup-form"]').should('be.visible');
    signUp.signup_enterName('John Doe');
    signUp.signup_enterEmail('jd@wassup.com');
    signUp.signup_clickSignup();
    cy.contains('Enter Account Information').should('be.visible');
    acctInfo.isMrOrMrs('Mr');
    acctInfo.typePassword('password123');
    acctInfo.selectDateOfBirth('1', 'January', '1990');
    acctInfo.signUpForNewsletter();
    acctInfo.optIn();
    acctInfo.addressFirstName('John');
    acctInfo.addressLastName('Doe');
    acctInfo.enterCompanyName('Tech Corp');
    acctInfo.enterAddress1('123 Main St');
    acctInfo.enterAddress2('Apt 4B');
    acctInfo.selectCountry('United States');
    acctInfo.enterState('California');
    acctInfo.enterCity('Los Angeles');
    acctInfo.enterZipCode('90001');
    acctInfo.enterMobileNumber('1234567890');
    acctInfo.clickCreateAccount();
    cy.contains('Account Created!').should('be.visible');
    acctInfo.clickContinue();
    nav.clickDeleteAccount();
    cy.contains('Account Deleted!').should('be.visible');
    del.deleteAccount();
  })
})
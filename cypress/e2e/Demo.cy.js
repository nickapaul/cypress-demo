import nav from '../POM/navigation'
import signUp from '../POM/SignUp-Login/signup_login'
import acctInfo from '../POM/SignUp-Login/accountInformation'
import del from '../POM/deleteAccount';
import contactUs from '../POM/contactUs';
import products from '../POM/products';

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

  it('Test Case 2: Login with Correct Email', () => {    
    cy.visit('https://www.automationexercise.com/');
    nav.goToSignUp();
    cy.get('[class="login-form"]').should('be.visible');
    signUp.login_enterEmail('bob_mctest@email.com');
    signUp.login_enterPassword('abc123');
    signUp.login_clickLogin();
    cy.get('b').should('have.text', 'Bob McTerster');
  })

  it('Test Case 3: Login with Incorrect Email', () => {    
    cy.visit('https://www.automationexercise.com/');
    nav.goToSignUp();
    cy.get('[class="login-form"]').should('be.visible');
    signUp.login_enterEmail('bob_mctest@email.com');
    signUp.login_enterPassword('123abc');
    signUp.login_clickLogin();
    cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!');
  })

  it('Test Case 4: Logout User', () => {    
    cy.visit('https://www.automationexercise.com/');
    nav.goToSignUp();
    cy.get('[class="login-form"]').should('be.visible');
    signUp.login_enterEmail('bob_mctest@email.com');
    signUp.login_enterPassword('abc123');
    signUp.login_clickLogin();
    nav.clickLogOut();
    cy.get('[class="login-form"]').should('be.visible');
  })

  it('Test Case 5: Register User With Exitsing Email', () => {    
    cy.visit('https://www.automationexercise.com/');
    nav.goToSignUp();
    cy.get('[class="login-form"]').should('be.visible');
    signUp.signup_enterEmail('bob_mctest@email.com');
    signUp.signup_enterName('Greg McTesterson');
    signUp.signup_clickSignup();
    cy.get('.signup-form > form > p').should('have.text', 'Email Address already exist!');
  })

  it('Test Case 6: Contact Us Form', () => {    
    cy.visit('https://www.automationexercise.com/');
    nav.goToContactUs();
    cy.get('div.contact-form > .title').should('have.text', 'Get In Touch');
    contactUs.typeName('John Doe');
    contactUs.typeEmail('wassup@email.com');
    contactUs.typeSubject('Test Subject');
    contactUs.typeMessage('This is a test message.');
    contactUs.uploadFile('test.txt');
    contactUs.clickSubmit();
    cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');
  })

  it('Test Case 7: Verify Test Cases Page', () => {    
    cy.visit('https://www.automationexercise.com/');
    nav.goToTestCases();
    cy.get('b').should('have.text', 'Test Cases');    
  })

  it('Test Case 8: Verify All Products and Product Detail Page', () => {    
    cy.visit('https://www.automationexercise.com/');
    nav.goToProductPage();
    cy.get('.title').should('have.text', 'All Products');
    cy.get('.features_items').should('be.visible');
    products.clickViewProductByProductIndex(1);
    cy.get('.product-information > h2').should('have.text', 'Blue Top');
    cy.get('.product-information > :nth-child(3)').should('have.text', 'Category: Women > Tops');
    cy.get(':nth-child(5) > span').should('have.text', 'Rs. 500');
    cy.get('.product-information > :nth-child(6)').should('have.text', 'Availability: In Stock');
    cy.get('.product-information > :nth-child(7)').should('have.text', 'Condition: New');
    cy.get('.product-information > :nth-child(8)').should('have.text', 'Brand: Polo');
  })

  it('Test Case 9: Search Product', () => {    
    cy.visit('https://www.automationexercise.com/');
    nav.goToProductPage();
    products.searchForProduct('Blue Top');
    cy.get('.features_items > .col-sm-4')
    cy.get('.features_items > .col-sm-4').should('have.length', 1);
    cy.get('.productinfo > p').should('have.text', 'Blue Top');
  })

  it('Test Case 10: View Subscription in Home Page', () => {    
    cy.visit('https://www.automationexercise.com/');
    cy.get('.single-widget > h2').should('have.text', 'Subscription');
    cy.get('#susbscribe_email').type('email@email.com');
    cy.get('#subscribe').click();
    cy.get('.alert-success').should('have.text', 'You have been successfully subscribed!');
  })

  
})
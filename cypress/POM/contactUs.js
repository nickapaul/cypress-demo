import 'cypress-file-upload';

class ContactUs {
    typeName(name) {
        cy.get('[data-qa="name"]').type(name);
    }

    typeEmail(email) {
        cy.get('[data-qa="email"]').type(email);
    }

    typeSubject(subject) {
        cy.get('[data-qa="subject"]').type(subject);
    }

    typeMessage(message) {
        cy.get('[data-qa="message"]').type(message);
    }

    clickSubmit() {
        cy.get('[data-qa="submit-button"]').should('be.visible').click();
    }

    uploadFile(filePath) {
        cy.get('[name="upload_file"]').attachFile(filePath);
    }


}

module.exports = new ContactUs();
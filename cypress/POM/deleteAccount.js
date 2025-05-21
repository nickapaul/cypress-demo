class DeleteAccount {
  deleteAccount() {
    cy.get('[data-qa="continue-button"]').should('be.visible').click();
    
  }
}

module.exports = new DeleteAccount();
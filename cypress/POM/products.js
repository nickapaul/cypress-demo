class Products {
    clickViewProductByProductIndex(index) {
        index = index + 1;
        cy.get(`:nth-child(${index + 1}) > .product-image-wrapper > .choose > .nav > li > a`).click();
        
    }

    searchForProduct(productName) {
        cy.get('#search_product').type(productName);
        cy.get('#submit_search').click();
    }

}

module.exports = new Products();
/// <reference types="cypress" />

describe('Funcionalidade Página de Produto', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            // USANDO EQUAL CONTAR A PARTIR DE 0
            //.eq(5)
            .contains('Abominable Hoodie').click()
    })

    it.only('Deve selecionar um produto da lista', () => {
        // VARIÁVEL
        var quantidade = 20
        // ESCOLHENDO UM PRODUTO
        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        // VALIDAÇÃO
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie”')
    })

})
/// <reference types="cypress" />

describe('Funcionalidade Escolha Múltipla de Produtos', () => {

    // HOOK EXECUTA ANTES DE CADA TESTE
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar alguns produtos da lista', () => {
        // CRIANDO VARIÁVEIS
        var a = 5
        var b = 2
        var quantidade = a + b
        // ESCOLHENDO PRODUTO 1
        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(a)
        cy.get('.single_add_to_cart_button').click()
        // VALIDAÇÃO PARCIAL 1
        cy.get('.woocommerce-message').should('contain', a + ' × “Abominable Hoodie”')
        // VOLTA PARA LISTA DE COMPRAS
        cy.get('#primary-menu > .menu-item-629 > a').click()
        // AVANÇA ATÉ A PÁGINA DESEJADA
        cy.get('.next').click()
        // ESCOLHENDO O PRODUTO 2
        cy.get('[class="product-block grid"]').contains('Autumn Pullie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(b)
        cy.get('.single_add_to_cart_button').click()
        // VALIDAÇÃO PARCIAL 2
        cy.get('.woocommerce-message').should('contain', b + ' × “Autumn Pullie”')
        // VISUALIZA O CARRINHO
        cy.get('.woocommerce-message > .button').click()
        // VALIDAÇÃO FINAL
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    })

})
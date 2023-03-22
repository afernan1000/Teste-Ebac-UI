/// <reference types="cypress" />

describe('Funcionalidade Escolha Multipla de Produtos - Usando Comandos Customizados', () => {

    // HOOK EXECUTA ANTES DE CADA TESTE
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar multiplos produtos da lista - Usando Comandos Customizados', () => {
        // ESCOLHENDO PRODUTO 1
        cy.addProdutos('Abominable Hoodie', 'L', 'Red', 5)
        // VALIDAÇÃO PARCIAL 1
        cy.get('.woocommerce-message').should('contain', 5 + ' × “Abominable Hoodie”')
        // VOLTA PARA LISTA DE COMPRAS
        cy.get('#primary-menu > .menu-item-629 > a').click()
        // AVANÇA ATÉ A PÁGINA DESEJADA
        cy.get('.next').click()
        // ESCOLHENDO O PRODUTO 2
        cy.addProdutos('Autumn Pullie', 'M', 'Purple', 2)
        // VALIDAÇÃO PARCIAL 2
        cy.get('.woocommerce-message').should('contain', 2 + ' × “Autumn Pullie”')
        // VISUALIZA O CARRINHO
        cy.get('.woocommerce-message > .button').click()
        // VALIDAÇÃO FINAL
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 7)
    })

    it('Deve selecionar multiplos produtos da lista - Usando Comandos Customizados com Variável', () => {
        // CRIANDO VARIÁVEIS
        var a = 5
        var b = 2
        var quantidade = a + b
        // ESCOLHENDO PRODUTO 1
        cy.addProdutos('Abominable Hoodie', 'L', 'Red', a)
        // VALIDAÇÃO PARCIAL 1
        cy.get('.woocommerce-message').should('contain', a + ' × “Abominable Hoodie”')
        // VOLTA PARA LISTA DE COMPRAS
        cy.get('#primary-menu > .menu-item-629 > a').click()
        // AVANÇA ATÉ A PÁGINA DESEJADA
        cy.get('.next').click()
        // ESCOLHENDO O PRODUTO 2
        cy.addProdutos('Autumn Pullie', 'M', 'Purple', b)
        // VALIDAÇÃO PARCIAL 2
        cy.get('.woocommerce-message').should('contain', b + ' × “Autumn Pullie”')
        // VISUALIZA O CARRINHO
        cy.get('.woocommerce-message > .button').click()
        // VALIDAÇÃO FINAL
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    })

})
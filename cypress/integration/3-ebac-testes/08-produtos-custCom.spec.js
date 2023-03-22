/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos - Usando Comandos Customizados', () => {

    // HOOK EXECUTA ANTES DE CADA TESTE
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista - Usando Comandos Customizados', () => {
        // ESCOLHENDO UM PRODUTO
        cy.addProdutos('Abominable Hoodie', 'L', 'Green', 3)
        // VALIDAÇÃO COM VALOR ESPECÍFICO DA QUANTIDADE
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)
        cy.get('.woocommerce-message').should('contain', 3 + ' × “Abominable Hoodie”')
    })

    it('Deve selecionar um produto da lista - Usando Comandos Customizados com Variável', () => {
        // CRIANDO VARIÁVEL
        var quantidade = 3
        // ESCOLHENDO UM PRODUTO
        cy.addProdutos('Abominable Hoodie', 'L', 'Green', quantidade)
        // VALIDAÇÃO COM VALOR ESPECÍFICO DA QUANTIDADE
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie”')
    })

})
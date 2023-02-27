/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    beforeEach(() => {
        // HOOK EXECUTA ANTES DE CADA TESTE
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        // HOOK - EXECUTA DEPOIS DE CADA TESTE
        cy.screenshot()
    });    
    
    it('Deve fazer login com sucesso', () => {
        // TESTE
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        // VALIDAÇÃO
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        // TESTE
        cy.get('#username').type('_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        // VALIDAÇÃO
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        // TESTE
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('@teste.com')
        cy.get('.woocommerce-form > .button').click()
        // VALIDAÇÃO
        cy.get('.woocommerce-error').should('contain', 'está incorreta')        
    })

})
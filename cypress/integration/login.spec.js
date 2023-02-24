/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    it('Deve fazer login com sucesso', () => {
        /// TESTE
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        /// VALIDAÇÃO
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        /// TESTE
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        /// VALIDAÇÃO
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        /// TESTE
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('@teste.com')
        cy.get('.woocommerce-form > .button').click()
        /// VALIDAÇÃO
        cy.get('.woocommerce-error').should('contain', 'está incorreta')
        
    })

})
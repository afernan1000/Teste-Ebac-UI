/// <reference types="cypress" />

// PERFIL USUARIO E SENHA
const perfil = require('../../fixtures/perfil.json')

context('Funcionalidade Login - Usando Massa de Dados', () => {

    // HOOK EXECUTA ANTES DE CADA TESTE - USANDO BASEURL
    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    // HOOK EXECUTA DEPOIS DE CADA TESTE
    /* afterEach(() => {
        cy.screenshot()
    }); */

    it('Deve fazer login com sucesso - Usando Arquivo de Dados', () => {
        // FAZENDO LOGIN COM A CONSTANTE PERFIL
        cy.get('#username').type(perfil.usuario)
        // NÃO EXIBIR A SENHA NO TESTE LOG:FALSE
        cy.get('#password').type(perfil.senha, { log: false })
        cy.get('.woocommerce-form > .button').click()
        // VALIDAÇÃO
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })

    it('Deve fazer login com sucesso - Usando Fixture', () => {
        // APONTANDO PARA O PERFIL EM FIXTURE E CRIANDO VARIAVEL DADOS
        cy.fixture('perfil').then(dados => {
            // FAZENDO LOGIN COM A VARIAVEL DADOS
            cy.get('#username').type(dados.usuario)
            // NÃO EXIBIR A SENHA NO TESTE LOG:FALSE
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('.woocommerce-form > .button').click()
            // VALIDAÇÃO
            cy.get('.page-title').should('contain', 'Minha conta')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
        })
    })

})
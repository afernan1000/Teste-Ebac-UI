/// <reference types="cypress" />

// FAKER PARA NOME, SOBRENOME E EMAIL
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Pré Cadastro + listaFaker', () => {

    // HOOK EXECUTA ANTES DE CADA TESTE
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    // HOOK EXECUTA DEPOIS DE CADA TESTE
    //afterEach(() => {cy.screenshot()});

    it.skip('Deve completar o pré cadastro com sucesso', () => {
        // CRIANDO LISTA FAKER
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        // USANDO O FAKER PARA A SENHA
        let senhaFaker = faker.internet.password()
        // USANDO NOME E SOBRENOME NO EMAIL
        let emailFaker = faker.internet.email(nomeFaker + sobrenomeFaker)
        // FAZENDO CADASTRO
        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(senhaFaker)
        cy.get(':nth-child(4) > .button').click()
        // PREENCHENDO DETALHES DA CONTA
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()
        // VALIDAÇÃO
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    })

    it('Deve completar o pré cadstro com sucesso - Usando comandos customizados', () => {
        // RECRIANDO LISTA FAKER COMO 2 PORQUE O CYPRESS LIMPA VARIÁVEIS DE TESTES ANTERIORES
        let nomeFaker2 = faker.name.firstName()
        let sobrenomeFaker2 = faker.name.lastName()
        // USANDO O FAKER PARA A SENHA
        let senhaFaker2 = faker.internet.password()
        // USANDO NOME E SOBRENOME NO EMAIL
        let emailFaker2 = faker.internet.email(nomeFaker2 + sobrenomeFaker2)
        // FAZENDO CADASTRO + PREENCHENDO DETALHES DA CONTA
        cy.preCadastro(emailFaker2, senhaFaker2, nomeFaker2, sobrenomeFaker2)
        // VALIDAÇÃO
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    });

})
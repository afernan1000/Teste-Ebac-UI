/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
// FAKER - MOD. EMAIL, NOME E SOBRENOME

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        // HOOK - EXECUTA ANTES DE CADA TESTE
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        // HOOK - EXECUTA DEPOIS DE CADA TESTE
        cy.screenshot()
    });
    
    it('Deve completar o pré cadastro com sucesso', () => {
        // CADASTRO
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        // DETALHES DA CONTA
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()
        // VALIDAÇÃO
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    })

})
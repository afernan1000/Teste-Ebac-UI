/// <reference types="cypress" />

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha conta')
        // APONTANDO PARA O PERFIL EM FIXTURE E CRIANDO VARIAVEL DADOS
        cy.fixture('perfil').then(dados => {
            // FAZENDO LOGIN COM COMANDOS CUSTOMIZADOS E COM A VARIAVEL DADOS
            cy.login(dados.usuario, dados.senha)            
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        // VALIDAÇÃO PARCIAL
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
        // OPÇÃO ENDEREÇOS
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        // VALIDAÇÃO FINAL
        cy.get('h2').should('contain', 'My Addresses')
    });
});
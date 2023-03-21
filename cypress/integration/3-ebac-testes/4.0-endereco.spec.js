/// <reference types="cypress" />

// FAZENDO A IMPORTAÇÃO DO PAGE OBJECTS DA PASTA SUPPORT
import enderecoPage from "../../support/page-objects/endereco.page";

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
        // PASSO PARA MEU MÉTODO TODOS OS PARAMETOS EXIGIDOS DO ARQUIVO PAGE-OBJECTS
        enderecoPage.editarEnderecoFaturamento('André', 'Fernandes', 'EBAC', 'Brasil', 'Av. Rio Branco', '2001', 'São Paulo', 'São Paulo', '01000100', '1199999999', 'andre@ebac.com')
        // VALIDAÇÃO
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    })

})
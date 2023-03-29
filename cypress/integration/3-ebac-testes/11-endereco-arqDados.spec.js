/// <reference types="cypress" />

// FAZENDO A IMPORTAÇÃO DO PAGE OBJECTS DA PASTA SUPPORT
import enderecoPage from "../../support/page-objects/endereco.page";

// CRIando A MINHA CONSTANTE
const dadosEndereco = require('../../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega - Usando Massa de Dados', () => {

    beforeEach(() => {
        cy.visit('minha conta')
        // APONTANDO PARA O PERFIL EM FIXTURE E CRIANDO VARIAVEL DADOS
        cy.fixture('perfil').then(dados => {
            // FAZENDO LOGIN COM COMANDOS CUSTOMIZADOS E COM A VARIAVEL DADOS
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve editar o cadastro do endereço de faturamento com sucesso - Usando Lista de Dados', () => {
        // APONTO PARA MEU MÉTODO USAR A LISTA DE DADOS NO ARQUIVO ENDEREÇO EM FIXTURES
        // ATENÇÃO PARA IMPORTAR A LISTA DE INICINADO EM 0,1,2...N
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )
        // VALIDAÇÃO
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    })

    it('Deve editar o cadastro do endereço de entrega com sucesso - Usando Lista de Dados', () => {
        // APONTO PARA MEU MÉTODO USAR A LISTA DE DADOS NO ARQUIVO ENDEREÇO EM FIXTURES
        // ATENÇÃO PARA IMPORTAR A LISTA DE INICINADO EM 0,1,2...N
        enderecoPage.editarEnderecoEntrega(
            dadosEnredeco[2].nome,
            dadosEnredeco[2].sobrenome,
            dadosEnredeco[2].empresa,
            dadosEnredeco[2].pais,
            dadosEnredeco[2].endereco,
            dadosEnredeco[2].numero,
            dadosEnredeco[2].cidade,
            dadosEnredeco[2].estado,
            dadosEnredeco[2].cep,
        )
        // VALIDAÇÃO
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    })

})
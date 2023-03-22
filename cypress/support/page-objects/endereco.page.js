class EnderecoPage {

    // AQUI FORAM CRIADOS OS PARAMETROS AO INVÉS DE UMA MASSA DE DADOS FIXA
    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep, telefone, email) {
        // COMEÇANDO A EDITAR O ENDEREÇO
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        // COMEÇANDO A EDITAR OS VALORES COM ATENÇÃO PARA LIMPAR O CAMPO ANTES DE DIGITAR
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        // NESTE CAMPO DE COMBO, VOCÊ DEVE CLICAR, DIGITAR O VALOR E DEPOIS SELECIONAR
        // AQUI EM PARTICULAR OPTOU-SE POR CLICAR NO OBJETO INSPECIONADO
        cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
        // EDITANDO MAIS VALORES
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        // NO MESMO EXEMPLO ACIMA, VOCÊ DEVE CLICAR, DIGITAR O VALOR E DEPOIS SELECIONAR
        // AQUI EM PARTICULAR OPTOU-SE POR USAR O RECURSO ENTER DO TECLADO VISTO QUE O FRONT ACEITA TAL AÇÃO
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        // FINALIZANDO A EDIÇÃO DE VALORES
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('.button').click()
    }

    // AQUI FORAM CRIADOS OS PARAMETROS AO INVÉS DE UMA MASSA DE DADOS FIXA
    editarEnderecoEntrega(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep) {
        // COMEÇANDO A EDITAR O ENDEREÇO
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > .edit').click()
        // COMEÇANDO A EDITAR OS VALORES COM ATENÇÃO PARA LIMPAR O CAMPO ANTES DE DIGITAR
        cy.get('#shipping_first_name').clear().type(nome)
        cy.get('#shipping_last_name').clear().type(sobrenome)
        cy.get('#shipping_company').clear().type(empresa)
        // NESTE CAMPO DE COMBO, VOCÊ DEVE CLICAR, DIGITAR O VALOR E DEPOIS SELECIONAR
        // AQUI EM PARTICULAR OPTOU-SE POR CLICAR NO OBJETO INSPECIONADO
        cy.get('#select2-shipping_country-container').click().type(pais).get('[aria-selected="true"]').click()
        // EDITANDO MAIS VALORES
        cy.get('#shipping_address_1').clear().type(endereco)
        cy.get('#shipping_address_2').clear().type(numero)
        cy.get('#shipping_city').clear().type(cidade)
        // NO MESMO EXEMPLO ACIMA, VOCÊ DEVE CLICAR, DIGITAR O VALOR E DEPOIS SELECIONAR
        // AQUI EM PARTICULAR OPTOU-SE POR USAR O RECURSO ENTER DO TECLADO VISTO QUE O FRONT ACEITA TAL AÇÃO
        cy.get('#select2-shipping_state-container').click().type(estado + '{enter}')
        // FINALIZANDO A EDIÇÃO DE VALORES
        cy.get('#shipping_postcode').clear().type(cep)
        cy.get('.button').click()
    }

}

export default new EnderecoPage()
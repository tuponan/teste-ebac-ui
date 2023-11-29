/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require('../fixtures/endereco.json')


enderecoPage


describe('Funcionalidade endereços - Faturamento e Entrega', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.fixture('perfil').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })

  });

  it('Deve fazer cadastro de faturamento com sucesso', () => {
    enderecoPage.editarEnderecoFaturamento('Cleberson', 'Jhonsons', 'EBACSHOP', 'Brasil', 'AV dos coqueiros', '546', 'Campinas', 'São Paulo', '01000100', '40028922', 'email@email.com')

    cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
  });

  it('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
    enderecoPage.editarEnderecoFaturamento(
      dadosEndereco[2].nome,
      dadosEndereco[2].sobrenome,
      dadosEndereco[2].empresa,
      dadosEndereco[2].pais,
      dadosEndereco[2].endereco,
      dadosEndereco[2].numero,
      dadosEndereco[2].cidade,
      dadosEndereco[2].estado,
      dadosEndereco[2].cep,
      dadosEndereco[2].telefone,
      dadosEndereco[2].email
      )

    cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
  });

});
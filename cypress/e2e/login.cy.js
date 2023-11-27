/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')


context('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.breadcrumb > .active').should('contain', 'Minha conta')
  });

  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('aluno_ebac@teste')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro')

  });

  it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro')

  });

  it('Deve fazer login com sucesso - Usando arquivos de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--dashboard > a').should('contain', 'Painel')
  });

  it('Deve fazer login com sucesso - Usando fixtures', () => {
    cy.fixture('perfil').then(dados => {
      cy.get('#username').type(dados.usuario)
      cy.get('#password').type(dados.senha, { log: false })
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-MyAccount-navigation-link--dashboard > a').should('contain', 'Painel')
    })
  });

});
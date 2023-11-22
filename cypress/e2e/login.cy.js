/// <reference types="cypress" />


context('Funcionalidade Login', () => {

  it('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.breadcrumb > .active').should('contain', 'Minha conta')
  });

  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno_ebac@teste')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro')

  });

  it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Erro')

  });

});
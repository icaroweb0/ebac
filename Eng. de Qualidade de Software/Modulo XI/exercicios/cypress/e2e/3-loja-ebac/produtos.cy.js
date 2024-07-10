/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('#content')
            //.first()
            //.last()
            //.eq(2)
            .contains('Aero Daily')
                .click()
        
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
            
    });
});
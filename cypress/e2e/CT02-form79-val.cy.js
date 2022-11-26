/// <reference types="cypress" />

describe('All-in-one validation tests', () => {
    beforeEach(() => {
        cy.viewport(1300, 1300);
        cy.visit(Cypress.env('baseUrl'))
    })

    //All error validation tests from form79 in a single custom command
    // ### All functions descriptions and references ##
    //           ## on support/shortcuts.js ### 
    it('Integrated form79 validations', () => {
        cy.form79Validations();
    })
})
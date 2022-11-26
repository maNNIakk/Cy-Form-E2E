/// <reference types="cypress" />

describe('All-in-one validation tests', () => {
    beforeEach(() => {
        cy.viewport(1300, 1300);
        cy.visit(Cypress.env('baseUrl'))
    })

    it('All error messages validations tests in single try', () => {
        cy.form79Validations();
    })
})
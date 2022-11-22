/// <reference types="cypress" />



describe('Validation Tests ', () =>{
    beforeEach(() => {
        cy.viewport(1300,1300);
        cy.visit(Cypress.env('baseUrl'))
    })

    it('Load test', () => {
        cy.request({
            method: "GET",
            url: Cypress.env('apiUrl')

        }).then((res) => {
            expect(res.status).to.be.equal(200);
        })
    })

    it.only('Form Fill Error Validations', () => {
        cy.get('form').submit().focusOut();
        cy.vendorIdError().stateError().cityError().nameError();
    })
})
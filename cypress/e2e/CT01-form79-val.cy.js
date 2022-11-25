/// <reference types="cypress" />



describe('Validation Tests ', () => {
    beforeEach(() => {
        cy.viewport(1300, 1300);
        cy.visit(Cypress.env('baseUrl'))
    })

    //Simple "unit" testing with inputs and errors validations
    describe('Black-Box unit test', () => {
        //All functions descriptions on support/shortcuts.js 
        it('VendorId required', () => {
            cy.vendorIdError();
        })

        it('State required', () => {
            cy.stateError();
        })

        it('City required', () => {
            cy.cityError();
        })
        it('Name required', () => {
            cy.nameError();
        })

        it('Phone required', () => {
            cy.phoneError();
        })

        it.only('Email Empty required', () => {
            cy.emailEmptyError();
        })

        it.only('Email Invalid required', () => {
            cy.emailInvalidError();
        })

        it('How the client discovered Voltz input required', () => {
            cy.whereFoundError();
        })

        it('Which product client is looking for required', () => {
            cy.whichProductError();
        })

        it('Radio button unchecked error required', () => {
            cy.radioError()
        })

        it('Average daily KM not required', () => {
            cy.dailyKmError();
        })
    })











    // it('Form Fill Error Validations', () => {
    //     cy.get('form').submit().focusOut();
    //     //Check for vendorId error,stateError,cityError, nameError, phoneError, emailError, 
    //     cy.vendorIdError().stateError().cityError().nameError().phoneError().emailError().whereFoundIt();
    // })


})
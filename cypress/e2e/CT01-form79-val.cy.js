/// <reference types="cypress" />

describe('Validation Tests ', () => {
    beforeEach(() => {
        cy.viewport(1300, 1300);
        cy.visit(Cypress.env('baseUrl'))
    })

    //All error/required messages validation (including those that should not appear)
    describe('Black-Box unit test', () => {

        // ### All functions descriptions and references ##
        //           ## on support/shortcuts.js ### 
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

        it('Phone invalid AND empty required', () => {
            cy.phoneError();
        })

        it('Email Empty and Invalid required', () => {
            cy.emailError();
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

        describe('Validations of elements included if "Preencher Formulário" is checked', () => {

            it('Driver License required', () => {
                cy.driverLicense();
            })

            it('Unknown field required', () => {
                cy.unknownField()
            })
            
            it('Attraction Radio not required', () => {
                cy.attRadioError();
            })
        })

        it('Average daily KM not required', () => {
            cy.dailyKmError();
        })

        it('Comment textarea not required', () => {
            cy.commentError();
        })
    })
})
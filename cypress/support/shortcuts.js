// Field only check for validation errors after focus is lost by the element, this function click
// on textarea element to trigger the focus out of primary element
Cypress.Commands.add('focusOut',() => {
    cy.get('textarea[class="b24-form-control"]').click();
})

//Check if vendorID is empty, check error message if its empty and if error message is visible
Cypress.Commands.add('vendorIdError', () => {

    cy.get('.b24-form-control')
       .eq(0)
        .click()
         .should('have.value','')
          .focusOut();
    cy.get('.b24-form-control-alert-message')
      .eq(0)
       .should('contain','O campo é obrigatório')
        .should('be.visible');
})

//Check if State is filled 
Cypress.Commands.add('stateError', () =>{
    cy.get('.b24-form-control')
       .eq(1)
        .should('have.value','')
         .focusOut();
    cy.get('.b24-form-control-alert-message')
       .eq(1)
        .should('contain','O campo é obrigatório')
         .should('be.visible');
 })

 // City input only show if State input is filled - Code belown select Rj State to be able to test City 
Cypress.Commands.add('cityError', () => {
   
    cy.get('.b24-form-control').eq(1).click();
    cy.get('[class="b24-form-control-list-selector-item-title"')
       .contains('span','RJ')
        .click()
        .focusOut();
    cy.get('.b24-form-control')
       .eq(24)
        .click()
         .focusOut();
    cy.get('.b24-form-control-alert-message')
       .should('be.visible')
        .focusOut();
})


//Name input checked and error message verified
Cypress.Commands.add('nameError', () => {
    
    cy.get('input[name="name"]')
       .should('have.value','')
        .focusOut();
    cy.get('.b24-form-control-alert-message')
       .eq(29)
        .should('be.visible');
})


//Phone checking and error message verified
Cypress.Commands.add('phoneError', () => {
    cy.get('input[name="phone"]')
       .should('have.value','+55')
        .focusOut();
    cy.get('.b24-form-field-phone')
       .eq(0)
        .should('be.visible');
})

Cypress.Commands.add('emailError', () => {
    cy.get('.b24-form-field-email')
       .should('have.value','')
        .focusOut();
    cy.get('.b24-form-control-alert-message')
       .eq(31)
        .should('be.visible')
;})

Cypress.Commands.add('whereFoundIt', () => {
    cy.get('.b24-form-control-alert-message')
       .eq(32)
        .should('be.visible');
    cy.get('.b24-form-control')
       .eq(32)
        .click();
    cy.get('.b24-form-control-list-selector-item-title')
       .eq(11)
        .click();
    cy.get('.b24-form-control-alert-message')
       .eq(32)
        .should('not.visible');
})

// //TODO ABOVE


Cypress.Commands.add('fillForm', (vendorId,clientName,clientPhone,clientEmail,bikeModel) => {

    //Get and fill vendor id number
    cy.get('input[type="number"]').eq(0).type(vendorId);
    //Open State Dropdown menu
    cy.get('input[readonly="readonly"]').eq(0).click();
    //Select Rj in Dropdown menu
    cy.get('[class="b24-form-control-list-selector-item-title"').contains('span','RJ').click();
    //Open City Dropdown menu
    cy.get('input[readonly="readonly"]').eq(23).click();
    //Select the city/area in City Dropdown menu
    cy.contains('span','Rio de Janeiro - Barra da Tijuca').click();
    //Get and fill client name
    cy.get('input[name="name"]').type(clientName);
    //Get and fill phone field
    cy.get('input[name="phone"]').type(clientPhone);
    //Get and fill client email
    cy.get('input[name="email"]').type(clientEmail);
    //Open 
    cy.get('input[readonly="readonly"').eq(28).click();
    cy.get('.b24-form-control-list-selector-item-title > span').eq(2).click();
    cy.get('input[readonly="readonly"').eq(29).click();
    //bikeModel 1 = EV1 Sport / bikeModel 2 = EVS
    cy.get('.b24-form-control-list-selector-item-title > span').eq(bikeModel).click();
    cy.get('input[type="number"]').eq(1).type('50');
    cy.get('input[value="82403"').click();
    //Se descomentar abaixo envia o formulario para o ambiente de produção - NÃO DESCOMENTAR
    //cy.get('form').submit();
})

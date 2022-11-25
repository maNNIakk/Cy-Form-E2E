// Field only show validation errors after focus is lost by the element, this function below click
// on textarea element to trigger the focus out of primary  element
Cypress.Commands.add('focusOut',() => {
    cy.get('textarea[class="b24-form-control"]').click({force:true});
})


//Check if vendorID is empty, check error message if its empty and if error message is visible
Cypress.Commands.add('vendorIdError', () => {

    cy.get('.b24-form-control')
       .eq(0)
        .click()
         .should('be.empty')
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
        .should('be.empty')
         .click()
          .focusOut();
    cy.get('.b24-form-control-alert-message')
       .eq(1)
        .should('contain','O campo é obrigatório')
         .should('be.visible');
 })

 // City input only show if State input is filled - Code belown select Rj State to be able to test City 
Cypress.Commands.add('cityError', () => {
   
    cy.get('.b24-form-control')
       .eq(1)
        .click();
    cy.get('[class="b24-form-control-list-selector-item-title"').contains('span','RJ').click()
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
       .should('be.empty')
        .click()
         .focusOut();
    cy.get('.b24-form-control-alert-message')
       .eq(29)
        .should('be.visible');
})


//Phone checking and error message verified
Cypress.Commands.add('phoneError', () => {

    cy.get('.b24-form-control-alert-message')
       .eq(30)
        .should('not.be.visible');
    cy.get('input[name="phone"]')
       .should('have.value','+55')
        .click()
         .focusOut();
    cy.get('.b24-form-control-alert-message')
       .eq(30)
        .should('be.visible');
})
//
Cypress.Commands.add('emailEmptyError', () => {

    cy.get('.b24-form-control')
       .eq(31)
        .should('be.empty')
         .click()
         .focusOut();
    cy.get('.b24-form-control-alert-message')
       .eq(31)
        .should('contain','O campo é obrigatório');
})

Cypress.Commands.add('emailInvalidError', () => {
    cy.get('.b24-form-control')
       .eq(31)
        .should('be.empty')
         .type('example.com')
          .focusOut();
    cy.get('.b24-form-control-alert-message')
       .eq(31)
        .should('contain','E-mail incorreto especificado');
})


Cypress.Commands.add('whereFoundError', () => {

    cy.get('.b24-form-control-alert-message')
       .eq(32)
        .should('not.be.visible');
    cy.get('.b24-form-control')
       .eq(32)
        .click()
         .focusOut();
    cy.get('.b24-form-control-alert-message')
       .eq(32)
        .should('be.visible');
})

Cypress.Commands.add('whichProductError', () => {
    cy.get('.b24-form-control-alert-message')
       .eq(33)
        .should('not.be.visible');
    cy.get('.b24-form-control')
       .eq(33)
        .click()
         .focusOut();
    cy.get('.b24-form-control-alert-message')
       .eq(33)
        .should('be.visible')
          .should('contain','O campo é obrigatório');
        

})

Cypress.Commands.add('radioError', () => {
    cy.get('.b24-form-control-alert-message')
       .eq(34)
         .should('not.be.visible');
    cy.get('[type="radio"]')
       .eq(0)
        .focus()
         .focusOut();
    cy.get('.b24-form-control-alert-message')
       .eq(34)
        .should('be.visible')
         .should('contain','O campo é obrigatório')
})

Cypress.Commands.add('dailyKmError', () => {
    cy.get('.b24-form-control-alert-message')
       .eq(35)
        .should('not.be.visible');
    cy.get('.b24-form-control')
       .eq(36)
        .click()
         .focusOut()
    cy.get('.b24-form-control-alert-message')
       .eq(35)
        .should('not.be.visible')
})


Cypress.Commands.add('fillForm', (vendorId,clientName,clientPhone,clientEmail,bikeModel) => {

//TODO BELOW
    cy.get('.b24-form-control-list-selector-item-title')
       .eq(11)
        .click();
//TODO ABOVE
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

// ### THIS FILE CONTAINS CUSTOM COMMANDS FOR UNIT AND E2E VALIDATION TESTS IN FORM 79 ###

// Field only show validation errors after focus is lost by the element, this function
// below click on textarea element to trigger the focus out of primary  element
Cypress.Commands.add('focusOut', () => {
   cy.get('textarea[class="b24-form-control"]')
      .click({ force: true });
})


//Check if field is empty before validation, interact and leave it blank, check if
//error message is displayed with correct text
Cypress.Commands.add('vendorIdError', () => {

   cy.get('.b24-form-control')
      .eq(0)
      .click()
      .should('be.empty')
      .focusOut();
   cy.get('.b24-form-control-alert-message')
      .eq(0)
      .should('contain', 'O campo é obrigatório')
      .and('be.visible');
})

//Check if field is empty/no value selected before validation, interact and leave
//it blank, check if error message is displayed with correct text
Cypress.Commands.add('stateError', () => {
   cy.get('.b24-form-control')
      .eq(1)
      .should('be.empty')
      .click()
      .focusOut();
   cy.get('.b24-form-control-alert-message')
      .eq(1)
      .should('contain', 'O campo é obrigatório')
      .and('be.visible');
})

//City field only show up after State is selected, 2 initial blocks of code
// is present to do this interaction, then we yield City field list, interact
// with it, leave it blank, and check if error message is displayed with correct text  
Cypress.Commands.add('cityError', () => {
   //Yield State Field
   cy.get('.b24-form-control')
      .eq(1)
      .click();
   //Yield State list and select RJ option
   cy.get('[class="b24-form-control-list-selector-item-title"')
      .contains('span', 'RJ')
      .click();
   //Now the City field is displayed
   cy.get('.b24-form-control')
      .eq(24)
      .click()
      .focusOut();
   cy.get('.b24-form-control-alert-message')
      .should('be.visible')
       .and('contain','O campo é obrigatório');
})

//Check if field is empty before validation, interact and leave it blank, check if
//error message is displayed with correct text
Cypress.Commands.add('nameError', () => {

   cy.get('input[name="name"]')
      .should('be.empty')
      .click()
      .focusOut();
   cy.get('.b24-form-control-alert-message')
      .eq(29)
      .should('be.visible')
       .and('contain','O campo é obrigatório');
})

//Check if error message is hidden as it should, check if field has default value 
// +55 (Brazil phone code), interact with it, leave with default value, check 
// if error message about INCORRECT filling is displayed, with correct text
//then
//Check if previous error message is displayed correctly, yield and focus on phone
//field, CLEAR the field, and check if EMPTY filling error message is displayed
//with correct text
Cypress.Commands.add('phoneError', () => {

   cy.get('.b24-form-control-alert-message')
      .eq(30)
      .should('not.be.visible');
   cy.get('input[name="phone"]')
      .should('have.value', '+55')
      .click()
      .focusOut();
   cy.get('.b24-form-control-alert-message')
      .eq(30)
      .should('be.visible')
       .and('contain','O valor do campo está incorreto');
   cy.get('input[name="phone"]')
        .focus()
         .clear()
          .focusOut();
    cy.get('.b24-form-control-alert-message')
       .eq(30)
       .should('be.visible')
        .and('contain','O campo é obrigatório');
})

//Check if email field has default value(empty in this case), interact with it, leave
// with default value, check for Empty error message, with the correct text, THEN
//Repeat process above, but type a incorrect email sample (without @) after yielding
//the element, then check for Incorrect error message, with the correct text
Cypress.Commands.add('emailError', () => {

   cy.get('.b24-form-control')
      .eq(31)
      .should('be.empty')
      .click()
      .focusOut();
   cy.get('.b24-form-control-alert-message')
      .eq(31)
      .should('contain', 'O campo é obrigatório');
   cy.get('.b24-form-control')
      .eq(31)
      .should('be.empty')
      .type('example.com')
      .focusOut();
   cy.get('.b24-form-control-alert-message')
      .eq(31)
      .should('contain', 'E-mail incorreto especificado');
})

//Check if error message is not visible, yield list element, interact with it, leave
//it blank, check if error message is visible with correct text
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
      .should('be.visible')
       .and('contain','O campo é obrigatório');
})

//Check if error message is not visible, yield list element, interact with it, leave
//it blank, check if error message is visible with correct text
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
      .and('contain', 'O campo é obrigatório');


})

//Check if radio error message if not visible, yield first radio, interact with it, leave
//blank, check if error message is visible with correct text
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
      .and('contain', 'O campo é obrigatório')
})

//WARNING: driverLicense, unknownField and attRadioError only shows up after
//radio "Preencher Formulário" is checked, clickRadio() below was created to supply it
Cypress.Commands.add('clickRadio', () => {
   cy.get('[type="radio"]')
      .eq(0)
      .click();
})

//Click on radio "Preencher Formulário",then check if Driver license is checked by default
//and error message is not visible, then UNCHECK the Driver license radio, take focus out
//of it, and check if error message is displayed correctly, with the correct text
Cypress.Commands.add('driverLicense', () => {
   
   cy.clickRadio();
   cy.get('input[type="checkbox"]')
      .eq(0)
      .should('be.checked');
   cy.get('.b24-form-control-alert-message')
      .eq(35)
      .should('not.be.visible');
   cy.get('input[type="checkbox"]')
      .eq(0)
      .uncheck()
      .focusOut();
   cy.get('.b24-form-control-alert-message')
      .eq(35)
      .should('be.visible');

})

//Don't know the purpose of this element, probably a bug, validated it anyway
//Click on radio "Preencher formulário", then check if error message is not visible,
// interact with it, focus out, then check if error message is displayed correctly,
//with correct text
Cypress.Commands.add('unknownField', () => {

   cy.clickRadio()
   cy.get('.b24-form-control-alert-message')
      .eq(36)
      .should('not.be.visible');
   cy.get('input[type="checkbox"]')
      .eq(1)
      .focus()
      .focusOut();
   cy.get('.b24-form-control-alert-message')
      .eq(36)
      .should('be.visible');
})

//Check if error message is not visible(as it should), then interact with the element
//leave it blank, take focus out, and check if error message is NOT displayed,
//since this isn't a required field
Cypress.Commands.add('dailyKmError', () => {
   cy.get('.b24-form-control-alert-message')
      .eq(37)
      .should('not.be.visible');
   cy.get('.b24-form-control')
      .eq(36)
      .click()
      .focusOut()
   cy.get('.b24-form-control-alert-message')
      .eq(37)
      .should('not.be.visible')
})

//Check if error message is not visible(as it should), then interact with the element
//leave it blank, take focus out, and check if error message is NOT displayed,
//since this isn't a required field
Cypress.Commands.add('attRadioError', () => {

   cy.clickRadio();
   cy.get('.b24-form-control-alert-message')
      .eq(38)
      .should('not.be.visible');
   cy.get('.b24-form-control')
      .eq(37)
      .should('be.visible')
   cy.get('.b24-form-control-alert-message')
      .eq(38)
      .should('not.be.visible');
})

//Check if error message exists but its not visible(as it should), then interact with
//the element, leave it blank, and check if error message is NOT displayed
//since this isn't a required field
Cypress.Commands.add('commentError', () => {
   cy.get('.b24-form-control-alert-message')
      .eq(39)
      .should('exist')
      .and('not.be.visible');
   cy.get('.b24-form-control')
      .eq(41)
      .should('exist')
      .and('be.empty');
   cy.get('.b24-form-control-alert-message')
      .eq(39)
      .should('exist')
      .and('not.be.visible');

})

// All unit tests above integrated in a single function below
Cypress.Commands.add('form79Validations', () => {
   cy.vendorIdError()
      .stateError()
      .cityError()
      .nameError()
      .phoneError()
      .emailEmptyError()
      .emailInvalidError()
      .whereFoundError()
      .whichProductError()
      .radioError()
      .driverLicense()
      .unknownField()
      .dailyKmError()
      .attRadioError()
      .commentError()
})


Cypress.Commands.add('fillForm', (vendorId, clientName, clientPhone, clientEmail, bikeModel) => {

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
   cy.get('[class="b24-form-control-list-selector-item-title"').contains('span', 'RJ').click();
   //Open City Dropdown menu
   cy.get('input[readonly="readonly"]').eq(23).click();
   //Select the city/area in City Dropdown menu
   cy.contains('span', 'Rio de Janeiro - Barra da Tijuca').click();
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

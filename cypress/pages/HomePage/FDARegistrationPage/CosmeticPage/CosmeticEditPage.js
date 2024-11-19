/// <reference types="cypress" />
import { should } from "chai";




class CosmeticEdit{

    FDARegistartion = "#loginLanding > .uk-grid > .my-badge-target > .registrationRenew > a > .uk-overlay-panel"
    CosmeticMenu = ".uk-navbar-nav > :nth-child(3) > a"
    EditButtonPhysical = ":nth-child(5) > fieldset > .uk-clearfix > .uk-icon-small"
    ComapnyNamePhysical = "#updatePhysicalAddressForm > :nth-child(5) > .uk-form-controls > .uk-form-width-medium"
    SaveNamePhysical = ":nth-child(14) > .uk-form-controls > .uk-button-primary"
    EditButtonMailing = ":nth-child(7) > fieldset > .uk-clearfix > .uk-icon-small"
    ComapnyNameMailing = "#updateMailingAddressForm > :nth-child(5) > .uk-form-controls > .uk-form-width-medium"
    SaveNameMailing = ":nth-child(12) > .uk-form-controls > .uk-button-primary"
    EditButtonEmergency = ":nth-child(9) > fieldset > .uk-clearfix > .uk-icon-small"
    EmergencyContact = ":nth-child(3) > #required_21"
    SaveEmergencyContact = "#updateEmergencyContactForm > :nth-child(10) > .uk-form-controls > .uk-button-primary"
    EditOwnerAndOperator = ":nth-child(11) > fieldset > .uk-clearfix > .uk-icon-small"
    OwnerEmail = "#required_15"
    SaveOwnerEmail = "#updateOwnerOperatorForm > :nth-child(10) > .uk-form-controls > .uk-button-primary"
    EditProduct = ":nth-child(1) > :nth-child(4) > .uk-icon-small"
    //EditBrand = "//tbody/tr[1]/td[4]/a[1]"
    EditBrand = "#required_13"
    SaveBrand = "#updateProductForm1 > :nth-child(12) > .uk-form-controls > .uk-button-primary"
    SaveAndContinue = "#submit_next1"


    goToCosmeticMenu(){
        cy.get(this.FDARegistartion).click();
        cy.get(this.CosmeticMenu).click();
    }

    editPhysicalAddressSection(){
        cy.get(this.EditButtonPhysical).click();
        cy.get(this.ComapnyNamePhysical)
        .invoke('val') 
        .then(text => {
          const someText = text;
          cy.log("Before Edit",someText);
        });
        cy.get(this.ComapnyNamePhysical).clear().type('AutomationEdit Company');
        cy.get(this.ComapnyNamePhysical)
        .invoke('val') 
        .then(text1 => {
          const someText1 = text1;
          cy.log("After Edit",someText1);
    })

  

    cy.get(this.SaveNamePhysical).click({multiple: true,force: true});

}

editMailingAddress(){
  cy.get(this.EditButtonMailing).click();
  cy.get(this.ComapnyNameMailing)
  .invoke('val') 
  .then(text => {
    const someText = text;
    cy.log("Before Edit",someText);
  });
  cy.get(this.ComapnyNameMailing).clear().type('AutomationEditMailing Company');
  cy.get(this.ComapnyNameMailing)
  .invoke('val')
  .then(text1 => {
    const someText1 = text1;
    cy.log("After Edit",someText1);


})
cy.get(this.SaveNameMailing).click({ multiple: true,force: true });

}

editEmergencyConatact(){

  cy.get(this.EditButtonEmergency).click();
  cy.get(this.EmergencyContact)
  .invoke('val') 
  .then(text => {
    const someText = text;
    cy.log("Before Edit",someText);
  });
  cy.get(this.EmergencyContact).clear().type('123456789');
  cy.get(this.EmergencyContact)
  .invoke('val')
  .then(text1 => {
    const someText1 = text1;
    cy.log("After Edit",someText1);


})
  cy.get(this.SaveEmergencyContact).click({ multiple: true,force: true });

}

editOwnerandOpreator(){

  cy.get(this.EditOwnerAndOperator).click();
  cy.get(this.OwnerEmail)
  .invoke('val') 
  .then(text => {
    const someText = text;
    cy.log("Before Edit",someText);
  });
  cy.get(this.OwnerEmail).clear().type('automation@gmail.com');
  cy.get(this.OwnerEmail)
  .invoke('val')
  .then(text1 => {
    const someText1 = text1;
    cy.log("After Edit",someText1);


})
    cy.get(this.SaveOwnerEmail).click({ multiple: true,force: true });

}

editProductName(){

  cy.get(this.EditProduct).click();
  cy.get(this.EditBrand)
  .invoke('val') 
  .then(text => {
    const someText = text;
    cy.log("Before Edit",someText);
  });
  cy.get(this.EditBrand).clear({force: true}).type('automation@gmail.com');
  cy.get(this.EditBrand)
  .invoke('val')
  .then(text1 => {
    const someText1 = text1;
    cy.log("After Edit",someText1);


})
    cy.get(this.SaveBrand).click({ multiple: true,force: true });

   
}

clickToNext(){
  cy.scrollTo("bottom");
  cy.contains("Save and Continue").click();
  
}


}

export default CosmeticEdit;
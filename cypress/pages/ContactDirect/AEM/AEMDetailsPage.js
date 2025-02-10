const Locator = {
    Sector:'select[name="sector"]',
    AERSVersion: 'input[name ="versionPurchased"]',
    AERSVersionRadio: '2',
    ServiceStatus:"input[name ='service_status']",
    ServiceActive: 'A',
    Block: 'select[name ="blockPurchased"]',
    SubmitButton: 'input[name ="submitUpdate"]',
    BlockSize: '10',
    AlertSuccessMessage:'.alert-success'
}

const Texts = {
    AdverseEvent:'Adverse Event',
    SectorValue:'Cosmetics',
}

class AEMDetails {

    verifyAEMDetails(){
    cy.contains(Texts.AdverseEvent).click();
    cy.get(Locator.Sector).should('be.visible').select(Texts.SectorValue);
    cy.get(Locator.AERSVersion).should('be.visible').check(Locator.AERSVersionRadio);
    cy.get(Locator.ServiceStatus).should('be.visible').check(Locator.ServiceActive);
    cy.get(Locator.Block).should('be.visible').select(Locator.BlockSize);
    cy.get(Locator.SubmitButton).click();
    cy.get(Locator.AlertSuccessMessage).should('be.visible');

    }

    
}

export default AEMDetails;
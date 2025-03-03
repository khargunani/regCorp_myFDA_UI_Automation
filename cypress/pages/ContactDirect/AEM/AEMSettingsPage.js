const Locator = {
    CompanyName: "input[placeholder='Company Name']",
    URL:"input[placeholder='abcxyzcompanyname']",
    WebSiteLogo:"#WebLogo",
    AEMLogo:"#AEMLogo",

  
}

const Texts = {
    AdverseEvent:'Adverse Event',
    Settings: ' Settings ',
    
}

class AEMSetting {

    verifyAEMSettings(){
    cy.contains(Texts.AdverseEvent).click();
    cy.wait(5000);
    cy.contains(Texts.Settings).click();
    cy.get(Locator.CompanyName).clear({force: true}).type("Test Automation");
    cy.get(Locator.URL).clear({force: true}).type("test", {force: true});
    cy.fixture('ContactDirect/AEM/websiteLogo.jpg').then((fileContent) => {
        cy.get('#WebLogo').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'websiteLogo.jpg',
            mimeType: 'image/jpg'
        });
    });
    cy.fixture('ContactDirect/AEM/PortalLogo.jpg').then((fileContent) => {
        cy.get('#AEMLogo').attachFile({
            fileContent: fileContent.toString(),
            fileName: 'PortalLogo.jpg',
            mimeType: 'image/jpg'
        });
    });
    cy.get('.emailAddress_block > .row > .col-md-7 > .email-input').clear().type("khargunani@registrarcorp.com");
    cy.get('.save-btn').click();   
    cy.wait(5000); 

    }

    verifyAEMSettingsOnCD(){
        cy.contains(Texts.AdverseEvent).click();
        cy.get(":nth-child(2) > .uk-form-controls > .uk-form-width-medium").invoke('val').should('eq','Test Automation');
        cy.get(":nth-child(5) > .uk-form-controls > .uk-form-width-medium").invoke('val').should('eq', 'khargunani@registrarcorp.com');

    }

    
}

export default AEMSetting;
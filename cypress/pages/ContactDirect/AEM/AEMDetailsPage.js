const Locator = {
    Sector:'select[name="sector"]',
    AERSVersion: 'input[name ="versionPurchased"]',
    AERSVersionRadio: '2',
    ServiceStatus:"input[name ='service_status']",
    ServiceActive: 'A',
    Block: 'select[name ="blockPurchased"]',
    SubmitButton: 'input[name ="submitUpdate"]',
    BlockSize: '10',
    AlertSuccessMessage:'.alert-success',
    BlockPurchase: `select[name='blockPurchased']`,
    BlockPrice: `#blockPrice`
}

const Texts = {
    AdverseEvent:'Adverse Event',
    SectorValue:'Cosmetics',
}

const BlockValueArray = ['1', '10', '25', '50', '100', '250', '500', '1000', '2500', 'Unlimited']
const BlockPriceArray = ['$2495.00', '$2495.00', '$2995.00', '$3995.00', '$4995.00', '$5995.00', '$9995.00', '$14995.00', '$24995.00', '$49995.00']

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


    verifyAllBlockPricing() {
        cy.contains(Texts.AdverseEvent).should('be.visible').click();
        for (let i = 0; i < BlockValueArray.length; i++) {
            cy.get(Locator.BlockPurchase).select(BlockValueArray[i]);
            cy.log(BlockPriceArray[i]);
            cy.get(Locator.BlockPrice, { timeout: 10000 })
                .should('be.visible').invoke('val')
                .should('not.be.empty').should('eq', BlockPriceArray[i]);
        }
    }

    
}

export default AEMDetails;
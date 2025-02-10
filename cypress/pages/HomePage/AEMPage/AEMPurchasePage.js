const Locator = {
    video: ".vp-preview VideoThumbnail_module_videoThumbnail__d1b35579 VideoThumbnail_module_cover__d1b35579",
    Block: "#block",
    BlockPrice: "#serviceAmount" ,
    Mode: "input[name='payoption']",
    AgreementOnline:"input[name='agreeTermsCheckbox']",
    Name:"input[name='undersignedName']",
    Title: "input[name='undersignedTitle']",
    Email: "input[name='undersignedEmail']",
    AgreementBankWire: '#swiftForm > fieldset.uk-margin-bottom > .agreeTermsDiv > input',
    NameBankWire: '#swiftForm > fieldset.uk-margin-bottom > :nth-child(4) > .uk-form-controls > .uk-form-width-medium',
    TitleBankWire:'#swiftForm > fieldset.uk-margin-bottom > :nth-child(5) > .uk-form-controls > .uk-form-width-medium',
    EmailBankWire:'#swiftForm > fieldset.uk-margin-bottom > :nth-child(6) > .uk-form-controls > .uk-form-width-medium',
    NextButton: '#swiftForm > .center > .uk-button',
    NextButtonCC:'#paymentForm > .center > .uk-button'
}

const Texts = {
  AEMMenu: 'Adverse Event Management',
  PurchaseButton: 'Purchase',
  BlockValue10: '1',
  BlockPricing10:"2495",
  CCValue: "cc",
  WireValue: "wire",
  //NextButton: "Next"

}

let amount10=2495;

class AEMPurchase {

    verifyLandingPage(){
        cy.contains(Texts.AEMMenu).click();
        cy.url().should('include', '/aers.do');
        cy.contains(Texts.PurchaseButton).click();
    }
    
    selectBlockValue(){
        cy.get(Locator.Block).should('be.visible').select(Texts.BlockValue10);
    }

    selectPaymentModeBankwire(){
        cy.get(Locator.Mode).check(Texts.WireValue);
    }

    selectPaymentModeCC(){
        cy.get(Locator.Mode).check(Texts.CCValue);

    }

    VerifyPricing(){
        cy.get('#serviceAmount').should(($el) => {
            expect($el.text()).to.eq(Texts.BlockPricing10);
          })
    }

    VerifyPAymentbyCC(){
        cy.get(Locator.AgreementOnline).first().check();
        cy.get(Locator.Name).first().type("AutomationTest");
        cy.get(Locator.Title).first().type("AutomationTest");
        cy.get(Locator.Email).first().type("khargunani@registrarcorp.com")
        cy.get(Locator.NextButtonCC).click();
        cy.get('.h3.red-title').should('be.visible');
    
}

   VerifyPAymentbyBankwire(){
    cy.get(Locator.AgreementBankWire).check();
    cy.get(Locator.NameBankWire).first().type("AutomationTest");
    cy.get(Locator.TitleBankWire).first().type("AutomationTest");
    cy.get(Locator.EmailBankWire).first().type("khargunani@registrarcorp.com")
    cy.get(Locator.NextButton).click();
    cy.get('.h3.red-title').should('be.visible');
   }

   verifyInvoiceDetailsForBankWire(){
    cy.get('#bankwireinfo > .uk-button').click();
    cy.task('readPdf','cypress/downloads/Invoice_for_AutomationTest_().pdf').then((data)=>{
        cy.log(data.text)
        cy.log(amount10);
        expect(data.text).to.contain(amount10);
    })
}
}

export default AEMPurchase;
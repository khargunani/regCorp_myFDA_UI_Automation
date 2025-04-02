
const Locator = {
    selectDomainFromDD: "select[id='gm-host-select']",
    editBtn: "span[title='Click to Edit']",
    inputEmailAddr: "span[title='Click to Edit'] input",
    emailAddrSetBtn: "span[title='Click to Edit'] button[class^='save button']",
    emailList: "#email_list",
    docNameInEmailContent: "div[class='email_body'] ul li",
    hyperlinkListinEmailContent: "div[class='email'] a",
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
    NextButtonCC:'#paymentForm > .center > .uk-button',
    Confirmation:'.uk-text-bold',
    PayWithThisMethod: `:nth-child(1) > :nth-child(3) > .pay-by-stored-method`,
    Confirmations: `h3.red-title`,
    DownloadPaidInvoice: `.confirmation > :nth-child(3) > a`

}

const Texts = {
  AEMMenu: 'Adverse Event Management',
  PurchaseButton: 'Purchase',
  BlockValue10: '1',
  BlockPricing10:"2495",
  CCValue: "cc",
  WireValue: "wire",
  EmailSubject: 'Adverse Event Reporting System Purchase for Automation Test',
  ConfirmationMessage: 'Thank you for purchasing Adverse Event Reporting System. Upon receipt of payment, you will be able to report Adverse Event with Registrar Corp'
}

const MailSlurp = require('mailslurp-client').default;
const mailslurp = new MailSlurp({ apiKey: Cypress.env('MAILSLURP_API_KEY') })
const BlockValueArray = ['1-10','11-25','26-50','51-100','100-250','250-500','500-1000','1000-2500','2500+']
const BlockPriceArray = ['2495', '2995', '3995', '4995','','','','','']
let amount10=2495;

class AEMPurchase {

configureEmail(Input)
    {
        cy.visit('https://www.guerrillamail.com/',{timeout:60000})              
            cy.get(Locator.selectDomainFromDD).select('guerrillamail.biz').should('have.value','guerrillamail.biz')
            cy.wait(1000)
            cy.get(Locator.editBtn).click()
            cy.wait(100)
            cy.get(Locator.inputEmailAddr).clear().as('inputEmail');
            cy.get('@inputEmail').type(Input.tempEmail)
            cy.wait(100)
            cy.get(Locator.emailAddrSetBtn).click()        
            cy.wait(2000)
            cy.get(Locator.emailList).contains(Input.EmailSubject).click();                          
    }


    configureEmail1(Input)
    {
        cy.visit('https://www.guerrillamail.com/',{timeout:60000})              
            cy.get(Locator.selectDomainFromDD).select('guerrillamail.biz').should('have.value','guerrillamail.biz')
            cy.wait(1000)
            cy.get(Locator.editBtn).click()
            cy.wait(100)
            cy.get(Locator.inputEmailAddr).clear().as('inputEmail');
            cy.get('@inputEmail').type(Input.tempEmail)
            cy.wait(100)
            cy.get(Locator.emailAddrSetBtn).click()        
            cy.wait(2000)
            cy.get(Locator.emailList).contains(Input.EmailSubject).click();                          
    }


verifyAllBlockPricing(){

            for (let i = 0; i < BlockValueArray.length; i++){
                cy.get('#block').select(BlockValueArray[i])
                cy.get(Locator.BlockPrice).invoke('text').should('eq',BlockPriceArray[i])
          
}   
}

verifyLandingPage(){
        cy.contains(Texts.AEMMenu).click();
        cy.url().should('include', '/aers.do');
        cy.contains(Texts.PurchaseButton).should('be.visible').click();
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

VerifyPAymentbyCC(Input){
        cy.get(Locator.AgreementOnline).first().check();
        cy.get(Locator.Name).first().type(Input.Name);
        cy.get(Locator.Title).first().type(Input.Title);
        cy.get(Locator.Email).first().type(Input.tempEmail)
        cy.get(Locator.NextButtonCC).click();
        cy.get(Locator.Confirmation).should('be.visible');
    
}

   VerifyPAymentbyBankwire(Input){
    cy.get(Locator.AgreementBankWire).check();
    cy.get(Locator.NameBankWire).first().type(Input.Name);
    cy.get(Locator.TitleBankWire).first().type(Input.Title);
    cy.get(Locator.EmailBankWire).first().type(Input.tempEmail)
    cy.get(Locator.NextButton).click();
    cy.get(Locator.Confirmation).should('contain',Texts.ConfirmationMessage);
   }


   verifyInvoiceDetailsForBankWire(){
    cy.get('#bankwireinfo > .uk-button').click();
    cy.task('readPdf','cypress/downloads/Invoice_for_AutomationTest_().pdf').then((data)=>{
        cy.log(data.text);
        cy.log(amount10);
        expect(data.text).to.contain(amount10);
    })
}


VerifyPAymentbyCC(Input) {
    cy.get(Locator.AgreementOnline).first().check();
    cy.get(Locator.Name).first().type(Input.Name);
    cy.get(Locator.Title).first().type(Input.Title);
    cy.get(Locator.Email).first().type(Input.Email);
    cy.get(Locator.NextButtonCC).click();
    cy.get(Locator.PayWithThisMethod).should('be.visible').click();
    cy.get(Locator.Confirmations).should('contain.text', 'Thank You');
}

verifyEmailOnCheckPayment(Inboxid) {
    cy.then(() => {
        cy.wrap(mailslurp).as('mailslurp')
        cy.then(function () {
            return this.mailslurp.waitForLatestEmail(Inboxid, 120_000, true);
        }).then(email => {
            expect(email.subject).to.contain(Texts.EmailSubject);
        })
    })
}
}

export default AEMPurchase;
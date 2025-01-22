const Locators = {
    fdaIcon: `.registrationRenew > a > .uk-overlay-panel`,
    yearCertificate: '.uk-dropdown > .uk-nav > :nth-child(1) > a',
    DownloadCertificate: '#certPdf > .uk-icon',
    ShareIcon: '[href="#"] > .uk-icon',
    ShareEmailID: '.uk-form-width-large',
    SubmitButton: '.center > .uk-button',
    EmailAlert:'.uk-alert',
    UpdateBTATickler: `//a[normalize-space()='Update BTA']`,
    DiscountValue: `//input[@name='discount']`,
    CustomPrice: `//input[@name='customPrice']`

}

const Texts = {
    NextButton: 'Next',
    StaywithStandard:'Stay with Standard',
    PayOnline: 'Pay Online',
    fdaRegistartionText: `FDA Registration`,
    ViewCertificate: 'View Certificate',
    ManageRegistration: `Manage Registration`,
    FoodFacility:'Food Facility',
    EmailMessage: 'Email is sent',
    EmailID: 'khargunani@registrarcorp.com'
}

let amount;
let txt;

class FFPayment {

    verifyDiscount() {
        cy.xpath(Locators.UpdateBTATickler).should('be.visible').click();
        cy.xpath(Locators.DiscountValue).invoke('val')
            .then((discount) => {
                const discountValue = parseFloat(discount);
                cy.log('The entered discount is: ' + discountValue);
                cy.xpath(Locators.CustomPrice).invoke('val')
                    .then((custom) => {
                        const customPrice = parseFloat(custom);
                        cy.log('The entered custom price is: ' + customPrice);
                        if (discount && !isNaN(discountValue) && custom && !isNaN(customPrice)) {
                            cy.log('Both discount and custom price are present');
                            cy.log('Displaying discount: ' + discountValue);
                        } else {
                            if (!discount || isNaN(discountValue)) {
                                cy.log('Discount is not present or invalid');
                                if (custom && !isNaN(customPrice)) {
                                    cy.log('Displaying custom price: ' + customPrice);
                                }
                            }
                            if (!custom || isNaN(customPrice)) {
                                cy.log('Custom price is not present or invalid');
                            }
                        }
                    })
            })
    }


    verifyFFPayment() {
        cy.get(Locators.fdaIcon).should('be.visible').and('have.text', Texts.fdaRegistartionText).click();
        cy.contains(Texts.FoodFacility).should('be.visible').click();
        cy.contains(Texts.ManageRegistration).should('be.visible').click();
        cy.contains(Texts.NextButton).click();
        cy.contains(Texts.StaywithStandard).click();
        cy.get("input[type='radio'][value='1']").check();
        cy.get("input[type='radio'][value='2']").check();
        cy.get("input[type='radio'][value='1']").check();
        cy.get("td[id='finalTotal']").then(($btn) => {
            this.txt = $btn.text()
            this.txt= this.txt.replace('$', ''); 
            cy.log("testing log.........")
            cy.log(this.txt);
        }).then(() => {
            cy.wrap(this.txt)
        })
        
    }

    
    verifyFF2YearPayment() {
        cy.get(Locators.fdaIcon).should('be.visible').and('have.text', Texts.fdaRegistartionText).click();
        cy.contains(Texts.FoodFacility).should('be.visible').click();
        cy.contains(Texts.ManageRegistration).should('be.visible').click();
        cy.contains(Texts.NextButton).click();
        cy.contains(Texts.StaywithStandard).click();
        cy.get("input[type='radio'][value='2']").check();
        cy.get("td[id='finalTotal']").then(($btn) => {

            this.txt = $btn.text()
            this.txt= this.txt.replace('$', ''); 
            cy.log("testing log.........")
            cy.log(this.txt);
        }).then(() => {
            cy.wrap(this.txt)
        })
       
    }

    
    verifyFF3YearPayment() {
        cy.get(Locators.fdaIcon).should('be.visible').and('have.text', Texts.fdaRegistartionText).click();
        cy.contains(Texts.FoodFacility).should('be.visible').click();
        cy.contains(Texts.ManageRegistration).should('be.visible').click();
        cy.contains(Texts.NextButton).click();
        cy.contains(Texts.StaywithStandard).click();
        cy.get("input[type='radio'][value='3']").check();
        cy.get("td[id='finalTotal']").then(($btn) => {
            this.txt = $btn.text()
            cy.log("testing log.........")
            cy.log(this.txt);
        }).then(() => {
            cy.wrap(this.txt)
        })

    }

    fillDetailsForOnlinePayment(){
        cy.get("input[type='radio'][value='check']").check();
        cy.get("input[type='radio'][value='cc']").check();
        cy.get("input[type='checkbox'][name='agreeTermsCheckbox']").first().check();
        cy.get('#paymentForm > .uk-margin-bottom > :nth-child(5) > .uk-form-controls > .uk-form-width-medium').type("Automation Test");
        cy.get("input[name='undersignedTitle']").first().type("Test Title");
        cy.get("input[name='undersignedEmail']").first().type("khargunani@registrarcorp.com");
        cy.get('#paymentForm > .center > .uk-button').click();
        cy.get(':nth-child(1) > :nth-child(3) > .pay-by-stored-method').click();
        cy.get('.confirmation > h2.uk-text-center').should('have.text','Thank You');
        cy.get('.confirmation > :nth-child(3) > a').click()
    }

    fillDetailsForCheckPayment(){
        cy.get("input[type='radio'][value='check']").check();
        cy.get("#checkForm > .uk-margin-bottom > .agreeTermsDiv > input").check();
        cy.get("input[name='undersignedName']").eq(2).type("Automation Test");
        cy.get('#checkForm > .uk-margin-bottom > :nth-child(6) > .uk-form-controls > .uk-form-width-medium').type("Test Title");
        cy.get('#checkForm > .uk-margin-bottom > :nth-child(7) > .uk-form-controls > .uk-form-width-medium').type("khargunani@registrarcorp.com");
        cy.get('#checkForm > .uk-margin-bottom > :nth-child(7) > .uk-form-controls > .uk-form-width-medium').click();
    }
    verifyInvoiceDetailsForBankWire(){
        cy.get('#checkinfo > .uk-button').click();
        cy.task('readPdf','cypress/downloads/Invoice_for_KimPossible_().pdf').then((data)=>{
            cy.log(data.text)
            cy.log(this.txt);
            expect(data.text).to.contain(this.txt);
        })
        cy.get('#checkForm > .center > .uk-button').click();
        cy.get('.confirmation > h2.uk-text-center').should('have.text','Thank You');
       // cy.get('.confirmation > :nth-child(3) > a').click()

   }

   verifyEmailOnCheckPayment(){
    cy.then(()=>{
        cy.wrap(mailslurp).as('mailslurp')
      cy.then(function () {
        return this.mailslurp.waitForLatestEmail('923afa32-ee38-4279-b97c-170f4ea93cdd',120_000,true);
      }).then(email =>{
        expect(email.body).to.contain("Your online request was successfully submitted. Registrar Corp's Regulatory Specialists will update your registration and notify you via email once completed.")
      })
      
    })

}
verifyEmailOnOnlinePayment(){
        cy.then(()=>{
            cy.wrap(mailslurp).as('mailslurp')
          cy.then(function () {
            return this.mailslurp.waitForLatestEmail('923afa32-ee38-4279-b97c-170f4ea93cdd',120_000,true);
          }).then(email =>{
            expect(email.body).to.contain("Your online request was successfully submitted. Registrar Corp's Regulatory Specialists will update your registration and notify you via email once completed.")
          })
          
        })

    }

}

export default FFPayment;
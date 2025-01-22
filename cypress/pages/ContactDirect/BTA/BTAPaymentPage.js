const Locators = {
    fdaIcon: `.registrationRenew > a > .uk-overlay-panel`,
    yearCertificate: '.uk-dropdown > .uk-nav > :nth-child(1) > a',
    DownloadCertificate: '#certPdf > .uk-icon',
    ShareIcon: '[href="#"] > .uk-icon',
    ShareEmailID: '.uk-form-width-large',
    SubmitButton: '.center > .uk-button',
    EmailAlert:'.uk-alert'

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

class BTAPayment {

    
   

    verifyBTAPaymentIsDone() {
        cy.contains("Update BTA").click();
        cy.get("input[name='renew_status'][value='3']").should("be.checked");
        cy.get("input[name='renewal_date_23']").should('not.be.null');
    }

    verifyDiscountOfferedOnCD(){
        cy.contains("Update BTA").click();
        return cy.get("input[name='discount']").invoke('val');
       // return cy.get('appscreen').find('input[id="studentName"]').invoke('val')
    }
    

    }

export default BTAPayment;
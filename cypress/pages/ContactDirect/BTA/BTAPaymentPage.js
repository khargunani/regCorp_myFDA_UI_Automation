const Locators = {
    fdaIcon: `.registrationRenew > a > .uk-overlay-panel`,
    yearCertificate: '.uk-dropdown > .uk-nav > :nth-child(1) > a',
    DownloadCertificate: '#certPdf > .uk-icon',
    ShareIcon: '[href="#"] > .uk-icon',
    DiscountValue: "input[name='discount']",
    ShareEmailID: '.uk-form-width-large',
    SubmitButton: '.center > .uk-button',
    EmailAlert: '.uk-alert',
    PaymentCheckbox: "input[name='renew_status'][value='3']"
}

const Texts = {
    NextButton: 'Next',
    UpdateBTA: "Update BTA",
    StaywithStandard: 'Stay with Standard',
    PayOnline: 'Pay Online',
    fdaRegistartionText: `FDA Registration`,
    ViewCertificate: 'View Certificate',
    ManageRegistration: `Manage Registration`,
    FoodFacility: 'Food Facility',
    EmailMessage: 'Email is sent',
    EmailID: 'khargunani@registrarcorp.com'
}

class BTAPayment {
    verifyBTAPaymentIsDone() {
        cy.contains(Texts.UpdateBTA).should('be.visible').click();
        cy.get(Locators.PaymentCheckbox).should("be.checked");
        cy.get("input[name='renewal_date_23']").should('not.be.null');
    }

    verifyDiscountOfferedOnCD() {
        cy.contains(Texts.UpdateBTA).should('be.visible').click();
        return cy.get(Locators.DiscountValue).invoke('val');
    }
}

export default BTAPayment;
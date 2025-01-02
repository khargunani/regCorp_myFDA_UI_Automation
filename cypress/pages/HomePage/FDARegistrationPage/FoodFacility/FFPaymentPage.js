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

class FFPayment {

    verifyFFPayment() {
        cy.get(Locators.fdaIcon).should('be.visible').and('have.text', Texts.fdaRegistartionText).click();
        cy.contains(Texts.FoodFacility).should('be.visible').click();
        cy.contains(Texts.ManageRegistration).should('be.visible').click();
        cy.contains(Texts.NextButton).click();
        cy.contains(Texts.StaywithStandard).click();
        cy.get("input[type='radio'][value='cc']").uncheck().check();
        cy.get("input[type='checkbox'][name='agreeTermsCheckbox']").first().check();
        cy.get("input[name='agreeAutoRenewPlanCheckbox']").first().check();
        cy.get("input[name='undersignedName']").first().type("Automation Test");
        cy.get("input[name='undersignedTitle']").first().type("Test Title");
        cy.get("input[name='undersignedEmail']").first().type("khargunani@registrarcorp.com");
        cy.contains(Texts.NextButton).click({force: true});




       


    }

   }

export default FFPayment;
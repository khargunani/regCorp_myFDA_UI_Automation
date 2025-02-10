const Locators = {
    fdaIcon: `.registrationRenew > a > .uk-overlay-panel`,
    yearCertificate: '.uk-dropdown > .uk-nav > :nth-child(1) > a',
    DownloadCertificate: '#certPdf > .uk-icon',
    ShareIcon: '[href="#"] > .uk-icon',
    ShareEmailID: '.uk-form-width-large',
    SubmitButton: '.center > .uk-button',
    EmailAlert: '.uk-alert'

}

const Texts = {
    fdaRegistartionText: `FDA Registration`,
    ViewCertificate: 'View Certificate',
    ManageRegistration: `Manage Registration`,
    FoodFacility: 'Food Facility',
    EmailMessage: 'Email is sent',
    EmailID: 'khargunani@registrarcorp.com'
}

class FFViewCertificates {

    verifyFFDownloadAndShareCertificates() {
        cy.get(Locators.fdaIcon).should('be.visible').and('have.text', Texts.fdaRegistartionText).click();
        cy.contains(Texts.FoodFacility).should('be.visible').click();
        cy.contains(Texts.ViewCertificate).should('be.visible').click();
        cy.get(Locators.yearCertificate).click();
        cy.get(Locators.DownloadCertificate).click();
        cy.get(Locators.ShareIcon).click();
        cy.get(Locators.ShareEmailID).type(Texts.EmailID);
        cy.get(Locators.SubmitButton).click();
        cy.then(() => {
            cy.get(Locators.EmailAlert).should('be.visible').and('contain.text', Texts.EmailMessage);
        })
    }
}

export default FFViewCertificates;
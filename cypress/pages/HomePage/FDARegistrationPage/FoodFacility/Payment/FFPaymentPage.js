const Locators = {
    fdaIcon: `.registrationRenew > a > .uk-overlay-panel`,
    yearCertificate: '.uk-dropdown > .uk-nav > :nth-child(1) > a',
    DownloadCertificate: '#certPdf > .uk-icon',
    ShareIcon: '[href="#"] > .uk-icon',
    ShareEmailID: '.uk-form-width-large',
    SubmitButton: '.center > .uk-button',
    EmailAlert: '.uk-alert',
    UpdateBTATickler: `//a[normalize-space()='Update BTA']`,
    DiscountValue: `//input[@name='discount']`,
    CustomPrice: `//input[@name='customPrice']`

}

const Texts = {
    NextButton: 'Next',
    StaywithStandard: 'Stay with Standard',
    PayOnline: 'Pay Online',
    fdaRegistartionText: `FDA Registration`,
    ViewCertificate: 'View Certificate',
    ManageRegistration: `Manage Registration`,
    FoodFacility: 'Food Facility',
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
        cy.contains(Texts.NextButton).click({ force: true });
    }

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

}

export default FFPayment;
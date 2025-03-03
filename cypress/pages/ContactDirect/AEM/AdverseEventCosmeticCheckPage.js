const Locators = {
    CosmeticTickler: `//a[normalize-space()='Cosmetic']`,
    CosmeticAdverseEventManagement: `input[value='50']`,
    SubmitButton: `div[id='button-save'] button[type='submit']`,
}
class AdverseEventCosmeticCheckPage {

    verifyCosmeticCheckbox() {
        cy.xpath(Locators.CosmeticTickler).should(`be.visible`).click();
        cy.get(Locators.CosmeticAdverseEventManagement).then(($checkbox) => {
            if (!$checkbox.prop('checked')) {
                cy.wrap($checkbox).check();
            }
        });
        cy.get(Locators.CosmeticAdverseEventManagement).should('be.checked');
        cy.get(Locators.SubmitButton).should('be.visible').click();
    }
}
export default AdverseEventCosmeticCheckPage;
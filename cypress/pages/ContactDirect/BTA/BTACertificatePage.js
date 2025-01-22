const Locator = {
    UpdateBTATickler: `//a[normalize-space()='Update BTA']`,
    UploadFiles: `.uk-button.uk-button-default.uk-button-small[href='#']`,
    FileText: `form[id='uploadFiles'] input[name='fName']`,
    UpdateFileText: `#updateFiles [type="text"]`,
    SelectYear: `select[name='docYear']`,
    ChooseFile: `#uFile`,
    ModifyFile: `#mFile`,
    UploadButton: `:nth-child(5) > span > .uk-button`,
    CloseButton: `div[id='uploadPDFFiles'] button[type='button']`,
    EstablishmentCertificate: `:nth-child(5) > [value="Establishment Certificate"]`,
    ListingCertificate: `span > input[type="radio"][value="Listing Certificate"]`,
    FileVerification: `tbody [class="uk-table uk-width-1-1 inner"] [class="uk-table uk-width-1-1 uk-background-default uk-table-striped inner"]`,
    UpdateUploadButton: `[style="padding-left: 2.5em"] > .uk-button`,
    UpdateLink: `a.uk-link.uk-button.uk-button-primary.uk-button-small`,
    DeleteLink: `a.uk-link.uk-button.uk-button-danger.uk-button-small`
}

const Texts = {
    EstablishmentCertificate: `Establishment certificate`,
    ListingCertificate: `Listing certificate`,
    Year: `2020`
}

class BTACertificate {

    verifyUploadBTACertificates() {
        cy.xpath(Locator.UpdateBTATickler).should('be.visible').click();
        cy.get(Locator.UploadFiles).should('be.visible').click();
        cy.get(Locator.FileText).should('be.visible').type(Texts.EstablishmentCertificate);
        cy.get(Locator.SelectYear).should('be.visible').select(Texts.Year);
        cy.get(Locator.EstablishmentCertificate).should('be.visible').check();
        cy.fixture('ContactDirect/FoodFacility/FFCertificate.pdf', 'base64').then((fileContent) => {
            cy.get(Locator.ChooseFile).should('be.visible').attachFile({
                fileContent,
                fileName: 'FFCertificate.pdf',
                encoding: 'base64'
            });
        });
        cy.get(Locator.UploadButton).should('be.visible').click();
    }

    verifyUpdateBTACertificates() {
        cy.get(Locator.FileVerification).contains('td', Texts.EstablishmentCertificate)
            .parents('tr').find(Locator.UpdateLink)
            .contains('Update').should('be.visible').click();
        cy.get(Locator.UpdateFileText).should('be.visible').type(Texts.ListingCertificate);
        cy.get(Locator.ListingCertificate).should('be.visible').check({ force: true });
        cy.fixture('ContactDirect/FoodFacility/FFCertificate copy.pdf', 'base64').then((fileContent) => {
            cy.get(Locator.ModifyFile).should('be.visible').attachFile({
                fileContent,
                fileName: 'FFCertificate copy.pdf',
                encoding: 'base64'
            });
        });
        cy.get(Locator.UpdateUploadButton).should('be.visible').click();
    }

    verifyDeleteBTACertificates() {
        cy.get(Locator.FileVerification).contains('td', Texts.ListingCertificate)
            .parents('tr').find(Locator.DeleteLink)
            .contains('Delete').should('be.visible').click();
    }
}

export default BTACertificate;
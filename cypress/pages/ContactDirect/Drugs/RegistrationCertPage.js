const Locator = {
    DrugTickler: `//a[normalize-space()='Drugs']`,
    CreateRegistration: `//a[contains(text(),'Create Registration')]`,
    LetterType: `select[name='letterType']`,
    CertificateCoverLetter: `input[value='Certificate & Cover Letter']`,
    FyHeader: `:nth-child(2) > td > b`,
    CompanyHeader: `:nth-child(13) > td > b`,
    CancelButton: `input[value='Cancel']`,
    ConfirmationUrl: `company=2731047&country=IN`,
}

const NewDomesticLetter = {
    NewDomestic2025: `2025 New Registration Letter DOMESTIC`,
    NewDomesticHeader: `[bgcolor="#ffffff"][align="center"] > :nth-child(1) > :nth-child(15) > td`,
    NewDomesticText: `is registered with the U.S. Food and Drug Administration for the statutory filing period applicable to U.S. FY 2025 pursuant to part 207 of Title 21, U.S. Code of Federal Regulations.`
}

const NewForeignLetter = {
    NewForeign2025: `2025 New Registration Letter FOREIGN`,
    NewForeignHeader: `[bgcolor="#ffffff"][align="center"] > :nth-child(1) > :nth-child(15) > td`,
    NewForeignText: `is registered with the U.S. Food and Drug Administration for the statutory filing period applicable to U.S. FY 2025 pursuant to part 207 of Title 21, U.S. Code of Federal Regulations.`
}

const RenewalDomesticLetter = {
    RenewalDomestic2025: `2025 Renewal Registration Letter DOMESTIC`,
    RenewalDomesticHeader: `[bgcolor="#ffffff"][align="center"] > :nth-child(1) > :nth-child(15) > td`,
    RenewalDomesticText: `is registered with the U.S. Food and Drug Administration for the statutory filing period applicable to U.S. FY 2025 pursuant to part 207 of Title 21, U.S. Code of Federal Regulations.`
}

const RenewalForeignLetter = {
    RenewalForeign2025: `2025 Renewal Registration Letter FOREIGN`,
    RenewalForeignHeader: `[bgcolor="#ffffff"][align="center"] > :nth-child(1) > :nth-child(15) > td`,
    RenewalForeignText: `is registered with the U.S. Food and Drug Administration for the statutory filing period applicable to U.S. FY 2025 pursuant to part 207 of Title 21, U.S. Code of Federal Regulations.`
}

const ListingDomesticLetter = {
    ListingDomestic2025: `2025 Renewal Registration and Listing Letter DOMESTIC`,
    ListingDomesticHeader: `[bgcolor="#ffffff"][align="center"] > :nth-child(1) > :nth-child(15) > td`,
    ListingDomesticText: `is registered with the U.S. Food and Drug Administration for the statutory filing period applicable to U.S. FY 2025 pursuant to part 207 of Title 21, U.S. Code of Federal Regulations.`

}

const ListingForeignLetter = {
    ListingForeign2025: `2025 Renewal Registration and Listing Letter FOREIGN`,
    ListingForeignHeader: `[bgcolor="#ffffff"][align="center"] > :nth-child(1) > :nth-child(15) > td`,
    ListingForeignText: `is registered with the U.S. Food and Drug Administration for the statutory filing period applicable to U.S. FY 2025 pursuant to part 207 of Title 21, U.S. Code of Federal Regulations.`
}

const CreateLabelerCert = {
    CreateLabelerCertification: `//a[normalize-space()='Create Labeler Code Assignment Cert']`,
    LabelerHeader: `:nth-child(1) > :nth-child(1) > table > tbody > :nth-child(15) > td`,
    LabelerText: `has electronically requested and received an NDC Labeler Code from the U.S. Food and Drug Administration pursuant to part 207 of Title 21, US Code of Federal Regulations, such code having been verified as currently effective on the date hereof by Registrar Corp.`
}

class RegistrationCert {

    createRegistrationCertification() {
        cy.xpath(Locator.DrugTickler).should('be.visible').click();
        cy.logger('Drug on CD side', "Validated Drug tickler and click on it");
        cy.xpath(Locator.CreateRegistration).invoke('removeAttr', 'target').click();
        cy.logger('Create registration certification on CD side', "Validated Create registration and click on it");
        cy.url().should('include', Locator.ConfirmationUrl);
        cy.logger('Create registration certification on CD side', "Validated URL for registration certification");
    }

    newDomesticLetter2025() {
        cy.get(Locator.LetterType).should('be.visible').select(NewDomesticLetter.NewDomestic2025);
        cy.logger('Create registration certification on CD side', "Validated letter type and selected New Registration Letter DOMESTIC");
        cy.get(Locator.CertificateCoverLetter).should('be.visible').click();
        cy.logger('New Registration Letter DOMESTIC', "click on cover letter");
        cy.contains(Locator.FyHeader, 'FY2025');
        cy.logger('New Registration Letter DOMESTIC', "Validated header");
        cy.contains(Locator.CompanyHeader, 'Automation Test');
        cy.logger('New Registration Letter DOMESTIC', "Validated company header");
        cy.get(NewDomesticLetter.NewDomesticHeader).should('have.text', NewDomesticLetter.NewDomesticText);
        cy.logger('New Registration Letter DOMESTIC', "Validated New domestic text");
    }

    newForeignLetter2025() {
        cy.get(Locator.LetterType).should('be.visible').select(NewForeignLetter.NewForeign2025);
        cy.logger('Create registration certification on CD side', "Validated letter type and selected New Registration Letter DOMESTIC");
        cy.get(Locator.CertificateCoverLetter).should('be.visible').click();
        cy.logger('New Registration Letter DOMESTIC', "click on cover letter");
        cy.contains(Locator.FyHeader, 'FY2025');
        cy.logger('New Registration Letter DOMESTIC', "Validated header");
        cy.contains(Locator.CompanyHeader, 'Automation Test');
        cy.logger('New Registration Letter DOMESTIC', "Validated company header");
        cy.get(NewForeignLetter.NewForeignHeader).should('have.text', NewForeignLetter.NewForeignText);
        cy.logger('New Registration Letter DOMESTIC', "Validated New domestic text");
    }

    renewalDomesticLetter2025() {
        cy.get(Locator.LetterType).should('be.visible').select(RenewalDomesticLetter.RenewalDomestic2025);
        cy.logger('Create registration certification on CD side', "Validated letter type and selected New Registration Letter DOMESTIC");
        cy.get(Locator.CertificateCoverLetter).should('be.visible').click();
        cy.logger('New Registration Letter DOMESTIC', "click on cover letter");
        cy.contains(Locator.FyHeader, 'FY2025');
        cy.logger('New Registration Letter DOMESTIC', "Validated header");
        cy.contains(Locator.CompanyHeader, 'Automation Test');
        cy.logger('New Registration Letter DOMESTIC', "Validated company header");
        cy.get(RenewalDomesticLetter.RenewalDomesticHeader).should('have.text', RenewalDomesticLetter.RenewalDomesticText);
        cy.logger('New Registration Letter DOMESTIC', "Validated New domestic text");
    }

    renewalForeignLetter2025() {
        cy.get(Locator.LetterType).should('be.visible').select(RenewalForeignLetter.RenewalForeign2025);
        cy.logger('Create registration certification on CD side', "Validated letter type and selected New Registration Letter DOMESTIC");
        cy.get(Locator.CertificateCoverLetter).should('be.visible').click();
        cy.logger('New Registration Letter DOMESTIC', "click on cover letter");
        cy.contains(Locator.FyHeader, 'FY2025');
        cy.logger('New Registration Letter DOMESTIC', "Validated header");
        cy.contains(Locator.CompanyHeader, 'Automation Test');
        cy.logger('New Registration Letter DOMESTIC', "Validated company header");
        cy.get(RenewalForeignLetter.RenewalForeignHeader).should('have.text', RenewalForeignLetter.RenewalForeignText);
        cy.logger('New Registration Letter DOMESTIC', "Validated New domestic text");
    }

    listingDomesticLetter2025() {
        cy.get(Locator.LetterType).should('be.visible').select(ListingDomesticLetter.ListingDomestic2025);
        cy.logger('Create registration certification on CD side', "Validated letter type and selected New Registration Letter DOMESTIC");
        cy.get(Locator.CertificateCoverLetter).should('be.visible').click();
        cy.logger('New Registration Letter DOMESTIC', "click on cover letter");
        cy.contains(Locator.FyHeader, 'FY2025');
        cy.logger('New Registration Letter DOMESTIC', "Validated header");
        cy.contains(Locator.CompanyHeader, 'Automation Test');
        cy.logger('New Registration Letter DOMESTIC', "Validated company header");
        cy.get(ListingDomesticLetter.ListingDomesticHeader).should('have.text', ListingDomesticLetter.ListingDomesticText);
        cy.logger('New Registration Letter DOMESTIC', "Validated New domestic text");
    }

    listingForeignLetter2025() {
        cy.get(Locator.LetterType).should('be.visible').select(ListingForeignLetter.ListingForeign2025);
        cy.logger('Create registration certification on CD side', "Validated letter type and selected New Registration Letter DOMESTIC");
        cy.get(Locator.CertificateCoverLetter).should('be.visible').click();
        cy.logger('New Registration Letter DOMESTIC', "click on cover letter");
        cy.contains(Locator.FyHeader, 'FY2025');
        cy.logger('New Registration Letter DOMESTIC', "Validated header");
        cy.contains(Locator.CompanyHeader, 'Automation Test');
        cy.logger('New Registration Letter DOMESTIC', "Validated company header");
        cy.get(ListingForeignLetter.ListingForeignHeader).should('have.text', ListingForeignLetter.ListingForeignText);
        cy.logger('New Registration Letter DOMESTIC', "Validated New domestic text");
    }

    cancelRegistrationCertificate() {
        cy.get(Locator.CancelButton).should('be.visible').click({ force: true });
        cy.logger('Create registration certification on CD side', "Validated cancel button functionality");
        cy.wait(2000);
        cy.state('window');
        cy.url().should('include', Locator.ConfirmationUrl);
    }

    createLabelerCertification() {
        cy.xpath(Locator.DrugTickler).should('be.visible').click();
        cy.logger('Drug on CD side', "Validated Drug tickler and click on it");
        cy.xpath(CreateLabelerCert.CreateLabelerCertification).invoke('removeAttr', 'target').click();
        cy.logger('Create labeler code assignment certification on CD side', "Validated Create labeler certificate and click on it");
        cy.get(CreateLabelerCert.LabelerHeader).should('have.text', CreateLabelerCert.LabelerText);
        cy.logger('Labeler certification', "Validated labeler certification");
    }

}
export default RegistrationCert;
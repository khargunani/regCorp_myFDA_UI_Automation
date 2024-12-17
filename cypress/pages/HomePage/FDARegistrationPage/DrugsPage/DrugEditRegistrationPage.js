const Locators = {
    fdaIcon: `.registrationRenew > a > .uk-overlay-panel`,
    reviewRegistration: `div[class='step step-active'] span[class='step_label']`,
    reviewListings: `//span[normalize-space()='Review Listings']`,
    payment: `//span[normalize-space()='Payment']`,
    confirmation: `//span[normalize-space()='Confirmation']`,
    establishmentPhysicalAddress: `a[data-uk-modal="{target:'#updatePhysicalAddressModal', bgclose:false, keyboard:false}"]`,
    establishmentMailingAddress: `a[data-uk-modal="{target:'#updateMailingAddressModal', bgclose:false, keyboard:false}"]`,
    ownerOperator: `a[data-uk-modal="{target:'#updateContactInfoModal', bgclose:false, keyboard:false}"]`,
    businessOperations: `a[data-uk-modal="{target:'#updateOperationModal', bgclose:false, keyboard:false}"]`,
    importers: `.uk-button.uk-button-primary.uk-icon.uk-icon-plus.uk-margin-top`,
    nextButton: `div[class='uk-text-center uk-margin-top'] button[type='submit']`,
    comment: `input[value='Other Comments']`,
    signOutIcon: `a[title='Sign Out']`
}

const PhysicalAddress = {
    companyName: `form[name='updatePhysicalAddressForm'] div div input[name='NAME']`,
    feiNumber: `input[name='FEI']`,
    addressLine1: `form[name='updatePhysicalAddressForm'] div div input[name='ADDRESS_LINE_1']`,
    addressLine2: `form[name='updatePhysicalAddressForm'] div div input[name='ADDRESS_LINE_2']`,
    city: `form[name='updatePhysicalAddressForm'] div div input[name='CITY']`,
    state: `form[name='updatePhysicalAddressForm'] div div input[name='STATE_ID']`,
    postalCode: `form[name='updatePhysicalAddressForm'] div div input[name='POSTAL_CODE']`,
    country: `form[name='updatePhysicalAddressForm'] div div select[name='ISO_COUNTRY_CODE']`,
    dunsNumber: `input[name='DUNS']`,
    saveButton: `form[name='updatePhysicalAddressForm'] div div button[type='submit']`
}

const MailingAddress = {
    companyName: `#updateMailingAddressForm > :nth-child(5) > .uk-form-controls > .uk-form-width-medium`,
    addressLine1: `#updateMailingAddressForm > :nth-child(6) > .uk-form-controls > .uk-form-width-medium`,
    addressLine2: `#updateMailingAddressForm > :nth-child(7) > .uk-form-controls > .uk-form-width-medium`,
    city: `#updateMailingAddressForm > :nth-child(8) > .uk-form-controls > .uk-form-width-medium`,
    state: `#updateMailingAddressForm > :nth-child(9) > .uk-form-controls > .uk-form-width-medium`,
    postalCode: `#updateMailingAddressForm > :nth-child(10) > .uk-form-controls > .uk-form-width-medium`,
    country: `#updateMailingAddressForm > :nth-child(11) > .uk-form-controls > .uk-form-width-medium`,
    saveButton: `:nth-child(12) > .uk-form-controls > .uk-button-primary`
}

const OwnerOperator = {
    contactPerson: `form[name='updateContactInfoForm'] div div input[name='name']`,
    contactPhone: `input[name='phone']`,
    contactEmail: `form[name='updateContactInfoForm'] div div input[name='email']`,
    saveButton: `form[name='updateContactInfoForm'] div div button[type='submit']`
}

const BusinessOperations = {
    analysis: `input[value='C25391']`,
    apiManufacture: `input[value='C82401']`,
    label: `input[value='C84732']`,
    manufacture: `input[value='C43360']`,
    medicatedAnimal: `input[value='C84635']`,
    outsourcingAnimal: `input[value='C122061']`,
    pack: `input[value='C84731']`,
    particleSizeReduction: `input[value='C84386']`,
    positronEmission: `input[value='C91403']`,
    relabel: `input[value='C73607']`,
    repack: `input[value='C73606']`,
    salvage: `input[value='C70827']`,
    sterilize: `input[value='C84382']`,
    transfill: `input[value='C125710']`,
    contractManufacturing: `input[value='C170729']`,
    manufactureAnimalPrescription: `input[value='C114889']`,
    manufactureAnimalOver: `input[value='C114891']`,
    manufactureMedicatedArticle: `input[value='C114892']`,
    manufactureHuman: `input[value='C131710']`,
    manufactureMonograph: `input[value='C131708']`,
    manufactureApplication: `input[value='C131709']`,
    manufactureDrug: `input[value='C106643']`,
    manufactureArticleDrug: `input[value='C114890']`,
    transfillMedicalGas: `input[value='C126091']`,
    saveButton: `:nth-child(7) > .uk-form-controls > .uk-button`,
}

const ReviewListings = {
    addListings: `#addListingsBtn`,
    addNewListings: `.uk-h2`,
    submitButton: `button[class='uk-button uk-button-primary']`,
    noChanges: `input[value='No changes are required']`,
    continue: `button[class='asLink']`,
    addListing: `input[name='num_of_listing_to_add']`,
    nextButton: `#commentRow > .uk-text-center > button.uk-button`
}

const Importers = {
    companyName: `form[name='addImporterForm'] div div input[name='name']`,
    phone: `#addImporterModal > .uk-modal-dialog > .uk-overflow-container > .uk-form > :nth-child(5) > .uk-form-controls > .uk-form-width-medium`,
    email: `#addImporterModal > .uk-modal-dialog > .uk-overflow-container > .uk-form > :nth-child(6) > .uk-form-controls > .uk-form-width-medium`,
    duns: `#addImporterModal > .uk-modal-dialog > .uk-overflow-container > .uk-form > :nth-child(7) > .uk-form-controls > .uk-form-width-medium`,
    submitButton: `button[class='uk-button uk-button-primary uk-margin-right uk-form-width-medium']`
}

const Payment = {
    name: `input[name='undersignedName']`,
    title: `input[name='undersignedTitle']`,
    email: `input[name='undersignedEmail']`,
    nextButton: `button[class='uk-button uk-button-primary uk-margin-right uk-margin-top uk-form-width-medium']`,
    payWithThisMethod: `.pay-by-stored-method.btn.btn-primary.btn-lg`
}

const Confirmation = {
    successfullMessage: `.uk-text-bold`,
    thankYouMessage: `h3.red-title`,
    thankYouText: `\n Thank You`,
    confirmationText: `\n        Your request was successfully submitted. Registrar Corp's Regulatory Specialists will make the necessary updates to your Drug Registration with FDA and notify you upon completion.`
}

const Texts = {
    fdaRegistartionText: `FDA Registration`,
    drugText: `Drug`,
    reviewRegistrationText: `Review Registration`,
    reviewListingsText: `Review Listings`,
    paymentText: `Payment`,
    confirmationText: `Confirmation`,
    addNewListings: `Add New Listings`,
    physicalAddress: `Physical Address:`,
    mailingAddress: `Mailing Address:`,
    contactInformation: `Contact Information:`,
    importer: `Importer:`,
    businessOperations: `Business Operations:`,
    businessOperation: `Business Operations: DISTRIBUTES DRUG PRODUCTS UNDER OWN PRIVATE LABEL`,
    businessOperationQualifier: `Business Operation Qualifier: DISTRIBUTES HUMAN OVER-THE-COUNTER DRUG PRODUCTS, DISTRIBUTES HUMAN PRESCRIPTION DRUG PRODUCTS, DISTRIBUTES ANIMAL DRUGS`
}

const MyFDA = {
    physicalAddressContent: `body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(6) > ul:nth-child(30) > li:nth-child(1)`,
    mailingAddressContent: `body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(6) > ul:nth-child(33) > li:nth-child(1)`,
    contactInformation: `body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(6) > ul:nth-child(36) > li:nth-child(1)`,
    businessOperationContent: `body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(6) > ul:nth-child(39) > li:nth-child(1)`
}

class DrugEditRegistration {

    verifyEditRegistration() {
        cy.get(Locators.fdaIcon).should('be.visible').and('have.text', Texts.fdaRegistartionText).click();
        cy.contains(Texts.drugText).should('be.visible').click();
    }

    establishmentPhysicalAddress(establishmentPhysicalAddress) {
        cy.get(Locators.reviewRegistration).should('be.visible');
        cy.get(Locators.establishmentPhysicalAddress).should('be.visible').click();
        cy.log('Received Data:', establishmentPhysicalAddress);
        if (establishmentPhysicalAddress) {
            cy.get(PhysicalAddress.companyName).should('be.visible').clear().type(establishmentPhysicalAddress.companyName);
           // cy.get(PhysicalAddress.feiNumber).should('be.visible').clear().type(establishmentPhysicalAddress.feiNumber);
            cy.get(PhysicalAddress.addressLine1).should('be.visible').clear().type(establishmentPhysicalAddress.addressLine1);
            cy.get(PhysicalAddress.addressLine2).should('be.visible').clear().type(establishmentPhysicalAddress.addressLine2);
            cy.get(PhysicalAddress.city).should('be.visible').clear().type(establishmentPhysicalAddress.city);
            cy.get(PhysicalAddress.state).should('be.visible').clear().type(establishmentPhysicalAddress.state);
            cy.get(PhysicalAddress.postalCode).should('be.visible').clear().type(establishmentPhysicalAddress.postalCode);
            cy.get(PhysicalAddress.country).should('be.visible').select(establishmentPhysicalAddress.country);
            cy.get(PhysicalAddress.dunsNumber).should('be.visible').clear().type(establishmentPhysicalAddress.dunsNumber);
            cy.get(PhysicalAddress.saveButton).click();
        } else {
            cy.log('Error: establishmentPhysicalAddress is undefined or empty');
        }
    }

    mailingAddress(mailingAddress) {
        cy.get(Locators.establishmentMailingAddress).should('be.visible').click();
        cy.log('Received Data:', mailingAddress);
        if (mailingAddress) {
            cy.get(MailingAddress.companyName).should('be.visible').clear().type(mailingAddress.companyName);
            cy.get(MailingAddress.addressLine1).should('be.visible').clear().type(mailingAddress.addressLine1);
            cy.get(MailingAddress.addressLine2).should('be.visible').clear().type(mailingAddress.addressLine2);
            cy.get(MailingAddress.city).should('be.visible').clear().type(mailingAddress.city);
            cy.get(MailingAddress.state).should('be.visible').clear().type(mailingAddress.state);
            cy.get(MailingAddress.postalCode).should('be.visible').clear().type(mailingAddress.postalCode);
            cy.get(MailingAddress.country).should('be.visible').select(mailingAddress.country);
            cy.get(MailingAddress.saveButton).click();

        } else {
            cy.log('Error: mailingAddress is undefined or empty');
        }
    }

    ownerOperator(ownerOperator) {
        cy.get(Locators.ownerOperator).should('be.visible').click();
        cy.log('Received Data:', ownerOperator);
        if (ownerOperator) {
            cy.get(OwnerOperator.contactPerson).should('be.visible').clear().type(ownerOperator.contactPerson);
            cy.get(OwnerOperator.contactPhone).should('be.visible').clear().type(ownerOperator.contactPhone);
            cy.get(OwnerOperator.contactEmail).should('be.visible').clear().type(ownerOperator.contactEmail);
            cy.get(OwnerOperator.saveButton).click();
        } else {
            cy.log('Error: ownerOperator is undefined or empty');
        }
    }

    businessOperations() {
        cy.get(Locators.businessOperations).should('be.visible').click();
        // cy.get(BusinessOperations.analysis).should('be.visible').check();
        // cy.get(BusinessOperations.apiManufacture).should('be.visible').check();
        // cy.get(BusinessOperations.label).should('be.visible').check();
        // cy.get(BusinessOperations.manufacture).should('be.visible').check();
        // cy.get(BusinessOperations.medicatedAnimal).should('be.visible').check();
        // cy.get(BusinessOperations.outsourcingAnimal).should('be.visible').check();
        // cy.get(BusinessOperations.pack).should('be.visible').check();
        // cy.get(BusinessOperations.particleSizeReduction).should('be.visible').check();
        // cy.get(BusinessOperations.positronEmission).scrollIntoView().should('be.visible').check();
        // cy.get(BusinessOperations.relabel).should('be.visible').check();
        // cy.get(BusinessOperations.repack).should('be.visible').check();
        // cy.get(BusinessOperations.salvage).should('be.visible').check();
        // cy.get(BusinessOperations.sterilize).should('be.visible').check();
        // cy.get(BusinessOperations.transfill).should('be.visible').check();
        // cy.get(BusinessOperations.contractManufacturing).scrollIntoView().should('be.visible').check();
        // cy.get(BusinessOperations.manufactureAnimalPrescription).should('be.visible').check();
        // cy.get(BusinessOperations.manufactureAnimalOver).should('be.visible').check();
        // cy.get(BusinessOperations.manufactureMedicatedArticle).scrollIntoView().should('be.visible').check();
        // cy.get(BusinessOperations.manufactureHuman).should('be.visible').check();
        // cy.get(BusinessOperations.manufactureMonograph).should('be.visible').check();
        // cy.get(BusinessOperations.manufactureApplication).scrollIntoView().should('be.visible').check();
        // cy.get(BusinessOperations.manufactureDrug).should('be.visible').check();
        // cy.get(BusinessOperations.manufactureArticleDrug).should('be.visible').check();
        // cy.get(BusinessOperations.transfillMedicalGas).scrollIntoView().should('be.visible').check();
        // cy.get(BusinessOperations.saveButton).should('be.visible').click();
        cy.get(`input[value='C73608']`).should('be.visible').check();
        cy.get(`input[value='C111078']`).should('be.visible').check();
        cy.get(`input[value='C111077']`).should('be.visible').check();
        cy.get(`input[value='72871-7']`).should('be.visible').scrollIntoView().check();
        cy.get(BusinessOperations.saveButton).should('be.visible').click();
        cy.get(Locators.nextButton).should('be.visible').click();
    }

    generateRandomDuns() {
        const randomSuffix = Math.floor(Math.random() * 1000); // Generates a random number
        return `81${String(randomSuffix).padStart(7, '0')}`; // Returns the DUNS as a string
    }

    // importers(importers) {
    //     cy.get(Locators.importers).should('be.visible').click();
    //     cy.log('Received Data:', importers);
    //     if (importers) {
    //         const dunsValue = this.generateRandomDuns();
    //         cy.get(Importers.companyName).should('be.visible').type(importers.companyName);
    //         cy.get(Importers.phone).should('be.visible').type(importers.phone);
    //         cy.get(Importers.email).should('be.visible').type(importers.email);
    //         cy.get(Importers.duns).should('be.visible').type(dunsValue);
    //         cy.get(Importers.submitButton).click();
    //         cy.get(Locators.comment).check();
    //         cy.get(Locators.nextButton).should('be.visible').click();
    //     } else {
    //         cy.log('Error: importers is undefined or empty');
    //     }
    // }

    reviewListings() {
        cy.xpath(Locators.reviewListings).should('be.visible');
        cy.get(ReviewListings.addListings).should('be.visible').click();
        cy.get(ReviewListings.addNewListings).should('have.text', Texts.addNewListings);
        cy.get(ReviewListings.addListing).type(10);
        cy.get(ReviewListings.submitButton).should('be.visible').click();
        cy.get(ReviewListings.noChanges).should('be.visible').check();
        cy.get(ReviewListings.nextButton).should('be.visible').click();
        cy.get(ReviewListings.continue).should('be.visible').click();
    }

    payment(payment) {
        cy.xpath(Locators.payment).should('be.visible');
        cy.log('Received Data:', payment);
        if (payment) {
            cy.get(Payment.name).should('be.visible').type(payment.name);
            cy.get(Payment.title).should('be.visible').type(payment.title);
            cy.get(Payment.email).should('be.visible').type(payment.email);
            cy.get(Payment.nextButton).should('be.visible').click();
        } else {
            cy.log('Error: payment is undefined or empty');
        }
    }

    confirmation() {
        cy.xpath(Locators.confirmation).should('be.visible');
        cy.get(Confirmation.successfullMessage).should('have.text', Confirmation.confirmationText);
    }

    signOut() {
        cy.get(Locators.signOutIcon).should('be.visible').click();
        cy.url().should('include', '/signin');
    }

    verifyRecordInCD(establishmentPhysicalAddress, mailingAddress, ownerOperator, importer) {
        cy.contains(Texts.physicalAddress).should('be.visible');
        cy.get(MyFDA.physicalAddressContent).should('contain.text', establishmentPhysicalAddress.companyName);
        cy.get(MyFDA.physicalAddressContent).should('contain.text', establishmentPhysicalAddress.feiNumber);
        cy.get(MyFDA.physicalAddressContent).should('contain.text', establishmentPhysicalAddress.addressLine1);
        cy.get(MyFDA.physicalAddressContent).should('contain.text', establishmentPhysicalAddress.addressLine2);
        cy.get(MyFDA.physicalAddressContent).should('contain.text', establishmentPhysicalAddress.city);
        cy.get(MyFDA.physicalAddressContent).should('contain.text', establishmentPhysicalAddress.state);
        cy.get(MyFDA.physicalAddressContent).should('contain.text', establishmentPhysicalAddress.postalCode);
        cy.get(MyFDA.physicalAddressContent).should('contain.text', establishmentPhysicalAddress.dunsNumber);
        cy.contains(Texts.mailingAddress).should('be.visible');
        cy.get(MyFDA.mailingAddressContent).should('contain.text', mailingAddress.addressLine1);
        cy.get(MyFDA.mailingAddressContent).should('contain.text', mailingAddress.addressLine2);
        cy.get(MyFDA.mailingAddressContent).should('contain.text', mailingAddress.city);
        cy.get(MyFDA.mailingAddressContent).should('contain.text', mailingAddress.state);
        cy.get(MyFDA.mailingAddressContent).should('contain.text', mailingAddress.postalCode);
        cy.get(MyFDA.mailingAddressContent).should('contain.text', mailingAddress.companyName);
        cy.contains(Texts.contactInformation).should('be.visible');
        cy.get(MyFDA.contactInformation).should('contain.text', ownerOperator.contactPerson);
        cy.get(MyFDA.contactInformation).should('contain.text', ownerOperator.contactPhone);
        cy.get(MyFDA.contactInformation).should('contain.text', ownerOperator.contactEmail);
        // cy.contains(Texts.importer).should('be.visible');
        // cy.get(MyFDA.importerContent).should('contain.text', importer.companyName);
        // cy.get(MyFDA.importerContent).should('contain.text', importer.phone);
        // cy.get(MyFDA.importerContent).should('contain.text', importer.email);
        cy.contains(Texts.businessOperations).should('be.visible');
        cy.get(MyFDA.businessOperationContent).should('contain.text', Texts.businessOperation);
        cy.get(MyFDA.businessOperationContent).should('contain.text', Texts.businessOperationQualifier);
    }
}

export default DrugEditRegistration;
const Locators = {
    fdaIcon: `.registrationRenew > a > .uk-overlay-panel`,
    ManageRegistration: `Manage Registration`,
    FoodFacility:'Food Facility',


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
    businessOperations: `Business Operations:`,
    businessOperation: `Business Operations: DISTRIBUTES DRUG PRODUCTS UNDER OWN PRIVATE LABEL`,
    businessOperationQualifier: `Business Operation Qualifier: DISTRIBUTES HUMAN OVER-THE-COUNTER DRUG PRODUCTS, DISTRIBUTES HUMAN PRESCRIPTION DRUG PRODUCTS, DISTRIBUTES ANIMAL DRUGS`
}

const PhysicalAddress = {
    
}

const MailingAddress = {
    
}

const OwnerOperator = {
    
}

const BusinessOperations = {
    
}

const ReviewListings = {
}
    

const Importers = {
   
}


const MailSlurp = require('mailslurp-client').default;
const mailslurp = new MailSlurp({apiKey:Cypress.env('MAILSLURP_API_KEY')})

class FFAddRegistration {

    verifyFFAddRegistration() {
        cy.get(Locators.fdaIcon).should('be.visible').and('have.text', Texts.fdaRegistartionText).click();
        cy.contains(Locators.FoodFacility).should('be.visible').click();
        cy.contains(Locators.ManageRegistration).should('be.visible').click();
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
        cy.get(`input[value='C73608']`).should('be.visible').check();
        cy.get(`input[value='C111078']`).should('be.visible').check();
        cy.get(`input[value='C111077']`).should('be.visible').check();
        cy.get(`input[value='72871-7']`).should('be.visible').scrollIntoView().check();
        cy.get(BusinessOperations.saveButton).should('be.visible').click();
        cy.get(Locators.nextButton).should('be.visible').click();
    }

    generateRandomDuns() {
        const randomSuffix = Math.floor(Math.random() * 1000); // Generates a random number
        return `91${String(randomSuffix).padStart(7, '0')}`; // Returns the DUNS as a string
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
        cy.get(Confirmation.thankYouMessage).should('contain.text', Confirmation.thankYouText);
        cy.get(Confirmation.successfullMessage).should('have.text', Confirmation.confirmationText);
    }

    verifyRecordInCD(establishmentPhysicalAddress, mailingAddress, ownerOperator) {
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
        cy.contains(Texts.businessOperations).should('be.visible');
        cy.get(MyFDA.businessOperationContent).should('contain.text', Texts.businessOperation);
        cy.get(MyFDA.businessOperationContent).should('contain.text', Texts.businessOperationQualifier);
    }

    verifyAddEmail(){
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

export default FFAddRegistration;
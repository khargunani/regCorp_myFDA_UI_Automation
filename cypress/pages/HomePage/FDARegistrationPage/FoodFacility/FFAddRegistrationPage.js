const Locators = {
    fdaIcon: `.registrationRenew > a > .uk-overlay-panel`,
    facilityPhysicalAddress: `a[data-uk-modal="{target:'#updateFacilityInfoModal'}"]`,
    facilityPostalAddress: `a[data-uk-modal="{target:'#updateMailingInfoModal'}"]`,
    emergencyContact: `a[data-uk-modal="{target:'#updateEmergencyContactInfoModal'}"]`,
    parentCompany: `a[data-uk-modal="{target:'#updateParentInfoModal'}"]`,
    activityConducted: `.uk-icon-small.uk-icon-edit.blue-title.uk-icon-hover.uk-margin-large-left.uk-float-right`,
    nextButton: `button[class='uk-button uk-button-primary uk-form-width-medium']`
}

const Texts = {
    ManageRegistration: `Manage Registration`,
    FoodFacility: `Food Facility`,
    ReviewData: `Review Data`,
    FdaRegistartionText: `FDA Registration`,
    FacilityPhysicalAddress: `Facility Physical Address`,
    FacilityPostalAddress: `Facility Postal Address`,
    EmergencyContact: `Emergency Contact`,
    ParentCompany: `Parent Company`,
    ActivityConductedFacility: ` Activities Conducted at This Facility`,
    Agreement: `Agreement`,
    Confirmation: `Confirmation`,
    Alcoholic: `ALCOHOLIC BEVERAGES`,
    Coffee: `COFFEE AND TEA`,
    Candy: `CANDY WITHOUT CHOCOLATE, CANDY SPECIALTIES AND CHEWING GUM`,
    Color: `COLOR ADDITIVES FOR FOODS`,
    Soups: `SOUPS`,
    WholeGrains: `WHOLE GRAINS, MILLER GRAIN PRODUCTS (FLOURS), OR STARCH`,
    FatsOils: `FATS OR OIL`,
    PeanutProducts: `PEANUT PRODUCTS`,
    PetFood: `PET FOOD`,
    PetTreats: `PET TREATS OR PET CHEWS`,
    PaymentInformation: `Payment Information`,
    EmailHeader: `Certificates of Registration issued by Registrar Corp provide confirmation to industry that you are fulfilling U.S. FDA registration requirements. FDA does not issue or recognize Certificates of Registration. Registrar Corp is not affiliated with the FDA.`,
    EmailBody: `Your online request was successfully submitted. Registrar Corp's Regulatory Specialists will update your food facility registration and notify you via email once completed.`
}

const PhysicalAddress = {
    companyName: `input[placeholder='Company Name'][name='facilityName']`,
    fdaRegistration: ``,
    facilityNameSuffix: `select[name='facilityNameSuffix']`,
    tradeName: `input[placeholder='Alternate Trade Name 1']`,
    physicalAddress: `input[placeholder='Address Line 1'][name='facilityAddress1']`,
    city: `input[placeholder='City'][name='facilityCity']`,
    country: `#updateFacilityInfoForm > :nth-child(18) > .uk-form-controls > .uk-form-width-medium`,
    phoneNumber: `[name='facilityPhone'][type='text']`,
    faxNumber: `input[name='facilityFax'][type='text']`,
    emailAddress: `[name='facilityEmail'][type='text']`,
    taxId: `input[name='taxNumber']`,
    dunsNumber: `input[name='duns']`,
    saveButton: `form[name='updateFacilityInfoForm'] div div button[type='submit']`
}

const PostalAddress = {
    companyName: `input[placeholder='Company Name'][name='mailingName']`,
    postalAddress: `input[placeholder='Address Line 1'][name='mailingAddress1']`,
    city: `input[placeholder='City'][name='mailingCity']`,
    phoneNumber: `[name='mailingPhone'][type='text']`,
    country: `:nth-child(26) > .uk-form-controls > .uk-form-width-medium`,
    faxNumber: `input[name='mailingFax'][type='text']`,
    emailAddress: `[name='mailingEmail'][type='text']`,
    updateButton: `form[name='updateMailingInfoForm'] div div button[type='submit']`
}

const EmergencyContact = {
    firstName: `input[placeholder='First Name']`,
    middleName: `input[placeholder='Middle Name']`,
    lastName: `input[placeholder='Last Name']`,
    jobTitle: `input[value='Owner']`,
    phoneNumber: `//input[@name='emergencyContactPhone']`,
    emailAddress: `[name='emergencyContactEmail']`,
    updateButton: `form[name='updateEmergencyContactInfoForm'] div div button[type='submit']`
}

const ParentCompany = {
    companyName: `[name='parentName']`,
    companyNameSuffix: `select[name='parentNameSuffix']`,
    address: `input[placeholder='Address Line 1'][name='parentAddress1']`,
    city: `input[placeholder='City'][name='parentCity']`,
    country: `select[name='parentCountry']`,
    phoneNumber: `[name='parentPhone']`,
    faxNumber: `input[name='parentFax']`,
    emailAddress: `[name='parentEmail']`,
    updateButton: `form[name='updateParentInfoForm'] div div button[type='submit']`
}

const ActivityConductedFacility = {
    humanConsumption: `input[value='human']`,
    animalConsumption: `input[value='animal']`,
    nextButtons: `button[class='uk-button uk-button-primary uk-form-width-medium']`,
    alcoholicBeverages: `input[value='0'][name='humanFoodCategory']`,
    candy: `input[value='4'][name='humanFoodCategory']`,
    coffeeTea: `input[value='8'][name='humanFoodCategory']`,
    soups: `input[value='30'][name='humanFoodCategory']`,
    wholeGrains: `input[value='35']`,
    fatsOils: `input[value='12'][name='animalFoodCategory']`,
    peanutProducts: `input[value='22'][name='animalFoodCategory']`,
    petTreats: `input[value='30'][name='animalFoodCategory']`,
    nextButton: `button[class='uk-button uk-button-primary uk-form-width-medium uk-margin-right uk-margin-top uk-margin-bottom']`,
    submitButton: `button[type='submit']`
}

const ActivityConductedFacilityCheckboxes = {
    alcoholicBeverages: `:nth-child(4) > tbody > :nth-child(1) > :nth-child(2) > .ms-parent > .ms-choice > div`,
    alcoholicBeveragesCheck: `:nth-child(4) > tbody > :nth-child(1) > :nth-child(2) > .ms-parent > .ms-drop > ul > .ms-select-all > label > input`,
    candy: `:nth-child(4) > tbody > :nth-child(2) > :nth-child(2) > .ms-parent > .ms-choice > div`,
    candyCheck: `:nth-child(4) > tbody > :nth-child(2) > :nth-child(2) > .ms-parent > .ms-drop > ul > .ms-select-all > label > input`,
    coffeeTea: `:nth-child(4) > tbody > :nth-child(3) > :nth-child(2) > .ms-parent > .ms-choice > div`,
    coffeeTeaCheck: `:nth-child(4) > tbody > :nth-child(3) > :nth-child(2) > .ms-parent > .ms-drop > ul > .ms-select-all > label > input`,
    soups: `:nth-child(5) > :nth-child(2) > .ms-parent > .ms-choice > div`,
    soupsCheck: `:nth-child(5) > :nth-child(2) > .ms-parent > .ms-drop > ul > .ms-select-all > label > input`,
    wholeGrains: `:nth-child(6) > :nth-child(2) > .ms-parent > .ms-choice > div`,
    wholeGrainsCheck: `:nth-child(6) > :nth-child(2) > .ms-parent > .ms-drop > ul > .ms-select-all > label > input`,
    fatsOils: `:nth-child(6) > tbody > :nth-child(1) > :nth-child(2) > .ms-parent > .ms-choice > div`,
    fatsOilsCheck: `:nth-child(6) > tbody > :nth-child(1) > :nth-child(2) > .ms-parent > .ms-drop > ul > .ms-select-all > label > input`,
    peanutProducts: `:nth-child(6) > tbody > :nth-child(2) > :nth-child(2) > .ms-parent > .ms-choice > div`,
    peanutProductsCheck: `:nth-child(6) > tbody > :nth-child(2) > :nth-child(2) > .ms-parent > .ms-drop > ul > .ms-select-all > label > input`,
    petTreats: `:nth-child(6) > tbody > :nth-child(4) > :nth-child(2) > .ms-parent > .ms-choice > div`,
    petTreatsCheck: `:nth-child(6) > tbody > :nth-child(4) > :nth-child(2) > .ms-parent > .ms-drop > ul > .ms-select-all > label > input`,
    activityType: `.otherHumanFoodActivity > .uk-width-1-1`,
    activityType2: `.otherAnimalFoodActivity > .uk-width-1-1`,
    comment: `#commentRow > :nth-child(1) > input`
}

const Agreement = {
    name: `input[name='undersignedName']`,
    title: `input[name='undersignedTitle']`,
    email: `input[name='undersignedEmail']`,
    nextButton: `button[class='uk-button uk-button-primary uk-margin-right uk-margin-top uk-form-width-medium']`
}

const Confirmation = {
    successfullMessage: `p.uk-text-center`,
    thankYouMessage: `.confirmation > h2.uk-text-center`,
    thankYouText: `Thank You`,
    confirmationText: `Your request was successfully submitted. A Regulatory Specialist will update your FDA food facility registration and provide your Certificate of Registration issued by Registrar Corp.`
}

const CD = {
    content: `#sections > :nth-child(1) > :nth-child(1) > :nth-child(2) > [width="100%"]`,
    alcoholicBeveragesContent: `body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(6) > table:nth-child(117) > tbody:nth-child(3) > tr:nth-child(1)`,
    candyContent: `body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(6) > table:nth-child(117) > tbody:nth-child(3) > tr:nth-child(2)`,
    coffeeTeaContent: `body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(6) > table:nth-child(117) > tbody:nth-child(3) > tr:nth-child(3)`,
    colorContent: `body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(6) > table:nth-child(117) > tbody:nth-child(3) > tr:nth-child(4)`,
    soupsContent: `body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(6) > table:nth-child(117) > tbody:nth-child(3) > tr:nth-child(5)`,
    wholeGrainsContent: `body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(6) > table:nth-child(117) > tbody:nth-child(3) > tr:nth-child(6)`,
    humanConsumption: `Ambient Food Storage Warehouse / Holding FacilityRefrigerated Food Storage Warehouse / Holding FacilityFrozen Food Storage Warehouse / Holding FacilityAcidified Food ProcessorLow-Acid Food ProcessorInterstate Conveyance Caterer / Catering PointContract SterilizerLabeler / RelabelerManufacturer / ProcessorPacker / RepackerSalvage Operator (Reconditioner)Farm Mixed-Type FacilityOther Activity Conducted`,
    fatContent: `body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(5) > tbody:nth-child(1) > tr:nth-child(6) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(6) > table:nth-child(121) > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(2)`,
    peanutProductsContent: `:nth-child(2) > [width="100%"] > :nth-child(121) > tbody > :nth-child(2) > :nth-child(2)`,
    petFoodContent: `:nth-child(2) > [width="100%"] > :nth-child(121) > tbody > :nth-child(3) > :nth-child(2)`,
    petTreatsContent: `:nth-child(2) > [width="100%"] > :nth-child(121) > tbody > :nth-child(4) > :nth-child(2)`,
    animalConsumption: `Animal food manufacturer / ProcessorAnimal Food Warehouse / Holding FacilityAcidified Food ProcessorLow Acid Food ProcessorContract SterilizerPacker / RepackerLabeler / RelabelerSalvage Operator (Reconditioner)Farm Mixed-Type FacilityOther Activity`
}


const MailSlurp = require('mailslurp-client').default;
const mailslurp = new MailSlurp({ apiKey: Cypress.env('MAILSLURP_API_KEY') })

class FFAddRegistration {

    verifyFFAddRegistration() {
        cy.get(Locators.fdaIcon).should('be.visible').and('have.text', Texts.FdaRegistartionText).click();
        cy.contains(Texts.FoodFacility).should('be.visible').click();
        cy.contains(Texts.ManageRegistration).should('be.visible').click();
    }

    generateRandomDuns() {
        const randomSuffix = Math.floor(Math.random() * 1000); // Generates a random number
        return `91${String(randomSuffix).padStart(7, '0')}`; // Returns the DUNS as a string
    }

    facilityPhysicalAddress(facilityPhysicalAddress) {
        cy.contains(Texts.ReviewData).should('be.visible');
        cy.get(Locators.facilityPhysicalAddress).should('be.visible').click();
        cy.log('Received Data:', facilityPhysicalAddress);
        if (facilityPhysicalAddress) {
            const dunsValue = this.generateRandomDuns();
            cy.get(PhysicalAddress.companyName).should('be.visible').clear().type(facilityPhysicalAddress.companyName);
            cy.get(PhysicalAddress.facilityNameSuffix).should('be.visible').type(facilityPhysicalAddress.facilityNameSuffix);
            cy.get(PhysicalAddress.tradeName).should('be.visible').clear().type(facilityPhysicalAddress.tradeName);
            cy.get(PhysicalAddress.physicalAddress).scrollIntoView().should('be.visible').clear().type(facilityPhysicalAddress.physicalAddress);
            cy.get(PhysicalAddress.city).should('be.visible').clear().type(facilityPhysicalAddress.city);
            cy.get(PhysicalAddress.country).should('be.visible').select(facilityPhysicalAddress.country);
            cy.get(PhysicalAddress.phoneNumber).should('be.visible').clear().type(facilityPhysicalAddress.phoneNumber);
            cy.get(PhysicalAddress.faxNumber).should('be.visible').clear().type(facilityPhysicalAddress.faxNumber);
            cy.get(PhysicalAddress.emailAddress).should('be.visible').clear().type(facilityPhysicalAddress.emailAddress);
            cy.get(PhysicalAddress.taxId).should('be.visible').clear().type(facilityPhysicalAddress.taxId);
            cy.get(PhysicalAddress.dunsNumber).should('be.visible').clear().type(dunsValue);
            cy.get(PhysicalAddress.saveButton).click();
        } else {
            cy.log('Error: facilityPhysicalAddress is undefined or empty');
        }
    }

    facilityPostalAddress(facilityPostalAddress) {
        cy.contains(Texts.FacilityPostalAddress).should('be.visible');
        cy.get(Locators.facilityPostalAddress).should('be.visible').click();
        cy.log('Received Data:', facilityPostalAddress);
        if (facilityPostalAddress) {
            cy.get(PostalAddress.companyName).should('be.visible').clear().type(facilityPostalAddress.companyName);
            cy.get(PostalAddress.postalAddress).should('be.visible').clear().type(facilityPostalAddress.postalAddress);
            cy.get(PostalAddress.city).should('be.visible').scrollIntoView().clear().type(facilityPostalAddress.city);
            cy.get(PostalAddress.country).should('be.visible').select(facilityPostalAddress.country);
            cy.get(PostalAddress.phoneNumber).should('be.visible').clear().type(facilityPostalAddress.phoneNumber);
            cy.get(PostalAddress.faxNumber).should('be.visible').clear().type(facilityPostalAddress.faxNumber);
            cy.get(PostalAddress.emailAddress).should('be.visible').clear().type(facilityPostalAddress.emailAddress);
            cy.get(PostalAddress.updateButton).should('be.visible').click();
        } else {
            cy.log('Error: facilityPostalAddress is undefined or empty');
        }
    }

    emergencyContact(emergencyContact) {
        cy.contains(Texts.EmergencyContact).should('be.visible');
        cy.get(Locators.emergencyContact).should('be.visible').click();
        cy.log('Received Data:', emergencyContact);
        if (emergencyContact) {
            cy.get(EmergencyContact.firstName).should('be.visible').clear().type(emergencyContact.firstName);
            cy.get(EmergencyContact.middleName).should('be.visible').clear().type(emergencyContact.middleName);
            cy.get(EmergencyContact.lastName).should('be.visible').clear().type(emergencyContact.lastName);
            cy.get(EmergencyContact.jobTitle).should('be.visible').clear().type(emergencyContact.jobTitle);
            cy.xpath(EmergencyContact.phoneNumber).should('be.visible').clear().type(emergencyContact.phoneNumber);
            cy.get(EmergencyContact.emailAddress).should('be.visible').clear().type(emergencyContact.emailAddress);
            cy.get(EmergencyContact.updateButton).should('be.visible').click();
        } else {
            cy.log('Error: emergencyContact is undefined or empty');
        }
    }

    parentCompany(parentCompany) {
        cy.contains(Texts.ParentCompany).should('be.visible');
        cy.get(Locators.parentCompany).should('be.visible').click();
        cy.log('Received Data:', parentCompany);
        if (parentCompany) {
            cy.get(ParentCompany.companyName).should('be.visible').clear().type(parentCompany.companyName);
            cy.get(ParentCompany.companyNameSuffix).should('be.visible').type(parentCompany.companyNameSuffix);
            cy.get(ParentCompany.address).should('be.visible').clear().type(parentCompany.address);
            cy.get(ParentCompany.city).should('be.visible').clear().type(parentCompany.city);
            cy.get(ParentCompany.country).should('be.visible').select(parentCompany.country);
            cy.get(ParentCompany.phoneNumber).should('be.visible').clear().type(parentCompany.phoneNumber);
            cy.get(ParentCompany.faxNumber).should('be.visible').clear().type(parentCompany.faxNumber);
            cy.get(ParentCompany.emailAddress).should('be.visible').clear().type(parentCompany.emailAddress);
            cy.get(ParentCompany.updateButton).should('be.visible').click();
        } else {
            cy.log('Error: parentCompany is undefined or empty');
        }
    }

    activityConductedFacility(activityConductedFacility) {
        cy.contains(Texts.ActivityConductedFacility).should('be.visible');
        cy.get(Locators.activityConducted).should('be.visible').click();
        cy.log('Received Data:', activityConductedFacility);
        if (activityConductedFacility) {
            cy.get(ActivityConductedFacility.humanConsumption).should('be.visible').check();
            cy.get(ActivityConductedFacility.animalConsumption).should('be.visible').check();
            cy.get(ActivityConductedFacility.nextButtons).should('be.visible').click();
            cy.get(ActivityConductedFacility.alcoholicBeverages).should('be.visible').check();
            cy.get(ActivityConductedFacility.candy).should('be.visible').check();
            cy.get(ActivityConductedFacility.coffeeTea).should('be.visible').check();
            cy.get(ActivityConductedFacility.soups).should('be.visible').check();
            cy.get(ActivityConductedFacility.wholeGrains).should('be.visible').check();
            cy.get(ActivityConductedFacility.fatsOils).should('be.visible').check();
            cy.get(ActivityConductedFacility.peanutProducts).should('be.visible').check();
            cy.get(ActivityConductedFacility.petTreats).should('be.visible').check();
            cy.get(ActivityConductedFacility.nextButton).should('be.visible').click();
            cy.get(ActivityConductedFacilityCheckboxes.alcoholicBeverages).should('be.visible').click();
            cy.get(ActivityConductedFacilityCheckboxes.alcoholicBeveragesCheck).should('be.visible').check();
            cy.get(ActivityConductedFacilityCheckboxes.candy).should('be.visible').click({ force: true });
            cy.get(ActivityConductedFacilityCheckboxes.candyCheck).should('be.visible').check();
            cy.get(ActivityConductedFacilityCheckboxes.coffeeTea).should('be.visible').click({ force: true });
            cy.get(ActivityConductedFacilityCheckboxes.coffeeTeaCheck).should('be.visible').check();
            cy.get(ActivityConductedFacilityCheckboxes.soups).should('be.visible').click({ force: true });
            cy.get(ActivityConductedFacilityCheckboxes.soupsCheck).should('be.visible').check();
            cy.get(ActivityConductedFacilityCheckboxes.wholeGrains).should('be.visible').click({ force: true });
            cy.get(ActivityConductedFacilityCheckboxes.wholeGrainsCheck).should('be.visible').check();
            cy.get(':nth-child(6) > tbody > :nth-child(1) > :nth-child(1)').should('be.visible').click();
            cy.get(ActivityConductedFacilityCheckboxes.activityType).should('be.visible').clear().type(activityConductedFacility.activityType);
            cy.get(ActivityConductedFacilityCheckboxes.fatsOils).should('be.visible').click({ force: true });
            cy.get(ActivityConductedFacilityCheckboxes.fatsOilsCheck).should('be.visible').check();
            cy.get(`:nth-child(6) > tbody > :nth-child(2) > :nth-child(1)`).should('be.visible').click();
            cy.get(ActivityConductedFacilityCheckboxes.peanutProducts).should('be.visible').click({ forc: true });
            cy.get(ActivityConductedFacilityCheckboxes.peanutProductsCheck).should('be.visible').check();
            cy.get(ActivityConductedFacilityCheckboxes.petTreats).should('be.visible').click({ force: true });
            cy.get(ActivityConductedFacilityCheckboxes.petTreatsCheck).should('be.visible').check();
            cy.get(ActivityConductedFacilityCheckboxes.activityType2).should('be.visible').clear().type(activityConductedFacility.activityType2);
            cy.get(ActivityConductedFacility.submitButton).should('be.visible').click({ force: true });
            cy.get(ActivityConductedFacilityCheckboxes.comment).should('be.visible').check();
            cy.get(Locators.nextButton).should('be.visible').click();
        } else {
            cy.log('Error: activityConductedFacility is undefined or empty');
        }
    }

    agreement(agreement) {
        cy.contains(Texts.Agreement).should('be.visible');
        cy.log('Received Data:', agreement);
        if (agreement) {
            cy.get(Agreement.name).should('be.visible').type(agreement.name);
            cy.get(Agreement.title).should('be.visible').type(agreement.title);
            cy.get(Agreement.email).should('be.visible').type(agreement.email);
            cy.get(Agreement.nextButton).should('be.visible').click();
        } else {
            cy.log('Error: agreement is undefined or empty');
        }
    }

    confirmation() {
        cy.get(Confirmation.thankYouMessage).should('contain.text', Confirmation.thankYouText);
        cy.get(Confirmation.successfullMessage).should('have.text', Confirmation.confirmationText);
    }

    verifyRecordInCD(facilityPhysicalAddress, facilityPostalAddress, emergencyContact, parentCompany, agreement) {
        cy.contains(Texts.PaymentInformation).should('be.visible');
        cy.get(CD.content).should('contain.text', agreement.name);
        cy.get(CD.content).should('contain.text', agreement.title);
        cy.get(CD.content).should('contain.text', agreement.email);
        cy.contains(Texts.FacilityPhysicalAddress).should('be.visible');
        cy.get(CD.content).should('contain.text', facilityPhysicalAddress.companyName);
        cy.get(CD.content).should('contain.text', facilityPhysicalAddress.facilityNameSuffix);
        cy.get(CD.content).should('contain.text', facilityPhysicalAddress.tradeName);
        cy.get(CD.content).should('contain.text', facilityPhysicalAddress.physicalAddress);
        cy.get(CD.content).should('contain.text', facilityPhysicalAddress.city);
        cy.get(CD.content).should('contain.text', facilityPhysicalAddress.country);
        cy.get(CD.content).should('contain.text', facilityPhysicalAddress.phoneNumber);
        cy.get(CD.content).should('contain.text', facilityPhysicalAddress.faxNumber);
        cy.get(CD.content).should('contain.text', facilityPhysicalAddress.emailAddress);
        cy.get(CD.content).should('contain.text', facilityPhysicalAddress.taxId);
        cy.contains(Texts.FacilityPostalAddress).should('be.visible');
        cy.get(CD.content).should('contain.text', facilityPostalAddress.companyName);
        cy.get(CD.content).should('contain.text', facilityPostalAddress.postalAddress);
        cy.get(CD.content).should('contain.text', facilityPostalAddress.city);
        cy.get(CD.content).should('contain.text', facilityPostalAddress.country);
        cy.get(CD.content).should('contain.text', facilityPostalAddress.phoneNumber);
        cy.get(CD.content).should('contain.text', facilityPostalAddress.faxNumber);
        cy.get(CD.content).should('contain.text', facilityPostalAddress.emailAddress);
        cy.contains(Texts.EmergencyContact).should('be.visible');
        cy.get(CD.content).should('contain.text', emergencyContact.firstName);
        cy.get(CD.content).should('contain.text', emergencyContact.middleName);
        cy.get(CD.content).should('contain.text', emergencyContact.lastName);
        cy.get(CD.content).should('contain.text', emergencyContact.phoneNumber);
        cy.get(CD.content).should('contain.text', emergencyContact.emailAddress);
        cy.contains(Texts.ParentCompany).should('be.visible');
        cy.get(CD.content).should('contain.text', parentCompany.companyName);
        cy.get(CD.content).should('contain.text', parentCompany.address);
        cy.get(CD.content).should('contain.text', parentCompany.city);
        cy.get(CD.content).should('contain.text', parentCompany.country);
        cy.get(CD.content).should('contain.text', parentCompany.phoneNumber);
        cy.get(CD.content).should('contain.text', parentCompany.faxNumber);
        cy.get(CD.content).should('contain.text', parentCompany.emailAddress);
        cy.contains(Texts.Alcoholic).should('be.visible');
        cy.contains(Texts.Coffee).should('be.visible');
        cy.contains(Texts.Candy).should('be.visible');
        cy.contains(Texts.Color).should('be.visible');
        cy.contains(Texts.WholeGrains).should('be.visible');
        cy.contains(Texts.Soups).should('be.visible');
        cy.contains(CD.humanConsumption).should('be.visible');
        cy.contains(Texts.FatsOils).should('be.visible');
        cy.contains(Texts.PeanutProducts).should('be.visible');
        cy.contains(Texts.PetFood).should('be.visible');
        cy.contains(Texts.PetTreats).should('be.visible');
        cy.contains(CD.animalConsumption).should('be.visible');
    }

    verifyAddEmail(Inboxid) {
        cy.then(() => {
            cy.wrap(mailslurp).as('mailslurp')
            cy.then(function () {
                return this.mailslurp.waitForLatestEmail(Inboxid, 120000, true);
            }).then(email => {
                expect(email.body).to.contain(Texts.EmailBody)
            })
        })
    }

}
export default FFAddRegistration;
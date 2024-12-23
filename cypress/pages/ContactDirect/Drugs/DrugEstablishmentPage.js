const GeneralInformation = {
    DrugTickler: `//a[normalize-space()='Drugs']`,
    FacilityEstablishmentIdentifier: `tbody tr td input[name="registrationId"]`,
    LabelerCode: `tbody tr td input[name='labelerCode']`,
    FDAInactivatedLabelerCode: `tbody tr td input[name="labelerCodeInactivated"]`,
    Month: `select[name='paymentDate_month']`,
    Day: `select[name='paymentDate_day']`,
    Year: `select[name='paymentDate_year']`,
    ExtendToButton: `input[value='Y'][name='extendTo']`,
    SubmitChangeButton: `div[class='uk-grid'] div [id="button-save"]`,
    ReturnChangeButton: `div[class='uk-grid'] div div a[class='uk-button']`,
    CustomMessage: `textarea[name='custom_message']`,
    FEINumber: `#drugFeiTD`
}

const CompanyFunctions = {
    BusinessQualifier: `:nth-child(16) > .uk-panel.uk-row-first > :nth-child(1) > .uk-accordion-title > b`,
    Manufacture: `input[value='Manufacture'][name='funcs']`,
    MedicalGasTransfiller: `input[value='Medical Gas Transfiller']`,
    Label: `input[value='Label']`,
    Pack: `input[value='Pack']`,
    Sterilize: `input[value='Sterilize']`,
    PrivateLabel: `input[value='Private Label Distributor']`,
    APIManufacture: `input[value='API Manufacture']`,
    NDAManufacture: `input[value='NDA/ANDA Manufacture']`,
    Relabel: `input[value='Relabel']`,
    RePack: `input[value='Repack']`,
    SelfId: `input[value='Self ID Only']`,
    PetDrug: `input[value='PET Drug Production']`,
    MedicatedAnimalFeed: `input[value='Medicated Animal Feed Manufacture']`,
    HumanDrugFacility: `input[value='Human Drug Compounding Outsourcing Facility']`,
    Analysis: `input[value='Analysis']`,
    ParticleSizeReduction: `input[value='Particle Size Reduction']`
}

const BusinessOperationQualifier = {
    AnimalOTC: `input[value='10'][name='operationQualifier']`,
    AnimalRX: `input[value='70'][name='operationQualifier']`,
    AnimalOTCA: `input[value='40'][name='operationQualifier']`,
    VetFeed: `input[value='80'][name='operationQualifier']`,
    TransfillMedicalGas: `input[value='30'][name='operationQualifier']`,
    HumanRx: `input[value='50'][name='operationQualifier']`,
    HumanOTC: `input[value='20'][name='operationQualifier']`,
    HumanOTCApproved: `input[value='15'][name='operationQualifier']`,
    HumanOTCMonograph: `input[value='05']`,
    HumanContract: `input[value='35']`,
    HumanOTCUnapproved: `input[value='25'][name='operationQualifier']`
}

const Texts = {
    DrugEstablishmentText: `Drug Establishment`,
    GeneralInformationText: `General Information`,
}
class DrugEstablishment {

    generateRandomGeneralInformation() {
        const randomSuffix = Math.floor(Math.random() * 1000);
        return {
            feiNumber: `3019960251`,
            labelerCode: `NDC26${String(randomSuffix).padStart(8, '012')}`,
        };
    }

    generalInformation() {
        const generalInfo = this.generateRandomGeneralInformation();
        cy.xpath(GeneralInformation.DrugTickler).should('be.visible').click();
        cy.logger('Drug on CD side', "Validated Drug tickler and click on it");
        cy.contains(Texts.DrugEstablishmentText).should('be.visible').click();
        cy.get(GeneralInformation.FacilityEstablishmentIdentifier).should('be.visible').click().clear().type(generalInfo.feiNumber);
        cy.get(GeneralInformation.LabelerCode).should('be.visible').click().clear().type(generalInfo.labelerCode);
        cy.get(GeneralInformation.FDAInactivatedLabelerCode).should('be.visible').click().clear().type("12/05/2024").click();
    }

    businessOperationQualifier() {
        cy.get(CompanyFunctions.BusinessQualifier).should('be.visible').click();
        cy.get(CompanyFunctions.Manufacture).should('be.visible').check();
        cy.get(CompanyFunctions.MedicalGasTransfiller).should('be.visible').check();
        cy.get(CompanyFunctions.Label).should('be.visible').check();
        cy.get(CompanyFunctions.Pack).should('be.visible').check();
        cy.get(CompanyFunctions.Sterilize).should('be.visible').check();
        cy.get(CompanyFunctions.PrivateLabel).should('be.visible').check();
        cy.get(CompanyFunctions.APIManufacture).should('be.visible').check();
        cy.get(CompanyFunctions.NDAManufacture).should('be.visible').check();
        cy.get(CompanyFunctions.Relabel).should('be.visible').check();
        cy.get(CompanyFunctions.RePack).should('be.visible').check();
        cy.get(CompanyFunctions.SelfId).should('be.visible').check();
        cy.get(CompanyFunctions.PetDrug).should('be.visible').check();
        cy.get(CompanyFunctions.MedicatedAnimalFeed).should('be.visible').check();
        cy.get(CompanyFunctions.HumanDrugFacility).should('be.visible').check();
        cy.get(CompanyFunctions.Analysis).should('be.visible').check();
        cy.get(CompanyFunctions.ParticleSizeReduction).should('be.visible').check();
        cy.get(BusinessOperationQualifier.AnimalOTC).should('be.visible').check();
        cy.get(BusinessOperationQualifier.AnimalRX).should('be.visible').check();
        cy.get(BusinessOperationQualifier.AnimalOTCA).should('be.visible').check();
        cy.get(BusinessOperationQualifier.VetFeed).should('be.visible').check();
        cy.get(BusinessOperationQualifier.TransfillMedicalGas).should('be.visible').check();
        cy.get(BusinessOperationQualifier.HumanRx).should('be.visible').check();
        cy.get(BusinessOperationQualifier.HumanOTC).should('be.visible').check();
        cy.get(BusinessOperationQualifier.HumanOTCApproved).should('be.visible').check();
        cy.get(BusinessOperationQualifier.HumanOTCMonograph).should('be.visible').check();
        cy.get(BusinessOperationQualifier.HumanContract).should('be.visible').check();
        cy.get(BusinessOperationQualifier.HumanOTCUnapproved).should('be.visible').check();
    }

    

    submit() {
        const generalInfo = this.generateRandomGeneralInformation();
        cy.get(GeneralInformation.SubmitChangeButton).click();
        cy.url().should('eq', 'https://testweb.myfda.com:8743/fda/intranet/otc/OtcInfo');
        cy.get(GeneralInformation.FEINumber).should('contain.text',generalInfo.feiNumber);
    }

}
export default DrugEstablishment;
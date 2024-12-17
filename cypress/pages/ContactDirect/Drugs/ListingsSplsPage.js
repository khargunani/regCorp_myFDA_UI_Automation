const Listings = {
  DrugTickler: `//a[normalize-space()='Drugs']`,
  ListingSpls: `body > div:nth-child(4) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)`,
  ChooseFileIcon: `//input[@id='uploadForm:uploadXmlFile']`,
  UploadXmlFileButton: `//span[normalize-space()='Upload XML File']`,
  Iframe: `iframe[src="/fda/intranet/drug/spl/read.xhtml?company=2731047"]`
}

const ListingsReporting = {
  ListingsReporting: `body > div:nth-child(4) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)`,
  DrugListingReporting: `li[class='uk-margin-top uk-active'] h1[class='uk-h2']`,
  ReportYear2024: `body > div:nth-child(4) > ul:nth-child(2) > li:nth-child(3) > div:nth-child(5) > h4:nth-child(1) > div:nth-child(1)`,
  ReportYear2022: `//div[normalize-space()='Report Year 2022 (Incomplete)']`,
  DrugListingText: `Drug Listing Reporting`,
  DUNSLocator: `//td[normalize-space()='80354456']`,
  EstablishmentDUNS: `80354456`
}

const Drugs = {
  NDCNumber: `70631-137-85`,
  NDCVerification: `#devicesTab`,
  NextButton: `div[class='uk-text-center uk-margin-top'] button[type='submit']`,
  FdaIcon: `.registrationRenew > a > .uk-overlay-panel`,
  FdaRegistartionText: `FDA Registration`,
  DrugText: `Drug`,
  ProductReportingButton: `.uk-float-right > .uk-button`,
  ProductReportingText: `Product Reporting`,
  YearTab: `#yearTabs`,
  ReportStatus: `.uk-active > .submissionDiv > .outer-accordion-title > div`,
  RegistrationRelatedFiles: "Registration Related Files",
  UploadRegSPL: ':nth-child(8) > .uk-panel > [data-wrapper="true"] > .uk-accordion-content > .uk-grid > :nth-child(1) > a',
  UploadRegSPLFile: '#uploadregsplfileS3 > .uk-modal-dialog > .uk-display-inline > form > #inquiryFile',
  UploadRegSPLButton: '#uploadregsplfileS3 > .uk-modal-dialog > .uk-display-inline > form > .uk-button',
  UpdateRegSPLFile: ".uk-table tbody tr:nth-child(1)  td:nth-child(5) a",
  DeleteRegSPLFile: ".uk-table tbody tr:nth-child(1)  td:nth-child(6) a",
  UploadLabelerSpl: `a[data-uk-modal="{target:'#uploadlabelersplfileS3'}"]`,
  UploadLabelerFile: `#uploadlabelersplfileS3 > .uk-modal-dialog > .uk-display-inline > form > #inquiryFile`,
  UploadLabelerButton: `#uploadlabelersplfileS3 > .uk-modal-dialog > .uk-display-inline > form > .uk-button`,
  RegSPLTable: `body > div:nth-child(4) > ul:nth-child(2) > li:nth-child(1) > form:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(2)`,
  LabelerSPLTable: `body > div:nth-child(4) > ul:nth-child(2) > li:nth-child(1) > form:nth-child(2) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)`,
  QualifierBusinessOperationInfo : `.uk-h2`,
  ExportButton : `a[align='center']`,

}

const Texts = {
  QualifierBusinessOperationInfoText : `Qualifer/Business Operation Info`,
  ExportButtonText : `Export to excel`

}

const GDUFA = {

  GDUFATab: 'GDUFA',
  AddGDUFA: 'Add GDUFA',
  GDUFAYear: '2023',
  AssignedTo: '39190',
  RootID: 'input[name="rootId"]',
  SetID: 'input[name="setId"]',
  PinNumber: 'input[name="pinNumber"]',
  FeeOwed: 'input[name="gdufaFeeOwed"]',
  FDAUsername: 'input[name="fdaUserName"]',
  FDAPassword: 'input[name="fdaUserPassword"]',
  BusinessOpertion: 'input[name ="businessOpertion"]',
  SubmitButton: '#addGdufaForm > .uk-margin-top > .uk-button',
  EditButton: 'Edit',
  EditEmailID: "input[name ='email']",
  EditRootID: 'input[name="rootId"][value]',
  EditSetID: 'input[name="setId"][value]',
  EditPinNumber: 'input[name="pinNumber"][value]',
  EditFeeOwed: 'input[name="gdufaFeeOwed"][value]',
  EditFDAUsername: "input[name ='fdaUserName'][maxlength]:not([value=''])[data-fv-field]",
  EditFDAPassword: "input[name ='fdaUserPassword'][maxlength]:not([value=''])[data-fv-field]",
  EditBusinessOpertion: 'input[name ="businessOpertion"]',
  Submit:'#editGdufaForm125467 > .uk-margin-top > .uk-button'

}

const expectedProductNames = [
  'Mineral Sunscreen SPF 50',
  'CASTOR OIL',
  'POLYGLYCERYL-3 RICINOLEATE'
];

class ListingSpls {

  uploadFile() {
    cy.xpath(Listings.DrugTickler).should('be.visible').click();
    cy.logger('Drug on CD side', "Validated Drug tickler and click on it");
    cy.get(Listings.ListingSpls).should('be.visible').click();
    cy.logger('Drug on CD side', "Validated Listing SPL's and click on it");
    cy.frameLoaded(Listings.Iframe);
    cy.logger('Drug on CD side', "Validated iframe on Listing SPL's");
    cy.iframe().xpath(Listings.ChooseFileIcon)
      .attachFile('ContactDirect/Drugs/DrugFile.xml');
    cy.logger('Drug on CD side', "Uploaded XML file in drug listing SPL's");
    cy.iframe().xpath(Listings.UploadXmlFileButton).click({ force: true });
    cy.logger('Drug on CD side', "Validated Upload XML file and click on it");
    cy.wait(1000);
    cy.readFile('cypress/fixtures/ContactDirect/Drugs/DrugFile.xml').then((xmlContent) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlContent, "application/xml");
      const extractedProductNames = Array.from(xmlDoc.getElementsByTagName('name')).map((nameElement) => {
        return nameElement.textContent;
      });
      expectedProductNames.forEach((productName) => {
        expect(extractedProductNames).to.include(productName);
      });
      cy.get('iframe').its('0.contentDocument').should('exist')
        .find('body').contains(expectedProductNames[0]);
    })
  }

  verifyUploadedData() {
    cy.get(ListingsReporting.ListingsReporting).should('be.visible').click();
    cy.get(ListingsReporting.DrugListingReporting).should('have.text', ListingsReporting.DrugListingText);
    cy.xpath(ListingsReporting.ReportYear2024).should('be.visible').click();
    cy.xpath(ListingsReporting.DUNSLocator).should('include.text', ListingsReporting.EstablishmentDUNS);
  }

  verifyUploadedDataOnMyFDA() {
    cy.get(Drugs.FdaIcon).should('be.visible').and('have.text', Drugs.FdaRegistartionText).click();
    cy.contains(Drugs.DrugText).should('be.visible').click();
    cy.get(Drugs.NextButton).should('be.visible').click();
    cy.get(Drugs.NDCVerification)
      .contains('td', Drugs.NDCNumber)
          .should('be.visible');
  }

  // verifyUploadedDataOnMyFDA() {
  //   cy.get(Drugs.FdaIcon).should('be.visible').and('have.text', Drugs.FdaRegistartionText).click();
  //   cy.contains(Drugs.DrugText).should('be.visible').click();
  //   cy.get(Drugs.ProductReportingButton).should('have.text', Drugs.ProductReportingText).click();
  //   cy.wait(3000);
  //   cy.get(Drugs.YearTab).contains('2024').click({ force: true });
  //   cy.get(Drugs.ReportStatus)
  //     .contains(ListingsReporting.EstablishmentDUNS)
  //     .then(($status) => {
  //       const reportText = $status.text();
  //       const isDUNSMatch = reportText.includes(ListingsReporting.EstablishmentDUNS);
  //       expect(isDUNSMatch).to.be.true;
  //     });
  // }

  VerifyEditListing() {
    cy.xpath(Listings.DrugTickler).should('be.visible').click();
    cy.logger('Drug on CD side', "Validated Drug tickler and click on it");
    cy.get(ListingsReporting.ListingsReporting).should('be.visible').click();
    cy.get(ListingsReporting.ListingsReporting).should('be.visible').click();
    cy.get(ListingsReporting.DrugListingReporting).should('have.text', ListingsReporting.DrugListingText);
    cy.xpath(ListingsReporting.ReportYear2023).should('be.visible').click();
    cy.get(':nth-child(6) > .outer-accordion-content > .uk-table > tbody > tr > :nth-child(1)').click();
    cy.wait(500);
    cy.get('#editSubmissionModal1-0 > .uk-modal-dialog > .uk-overflow-container > .uk-form > :nth-child(5) > .uk-form-controls > .uk-form-width-medium').click({ force: true });
    cy.wait(500);
    cy.get('#editSubmissionModal1-0 > .uk-modal-dialog > .uk-overflow-container > .uk-form > :nth-child(5) > .uk-form-controls > .uk-form-width-medium').type(dayjs().format('DD/MM/YYYY'));
    cy.get('#editSubmissionModal0-0 > .uk-modal-dialog').click({ force: true });
    cy.get('#editSubmissionModal0-0 > .uk-modal-dialog > .uk-overflow-container > .uk-form > :nth-child(6) > .uk-form-controls > .uk-form-width-medium').type("123456");
    cy.get('#editSubmissionModal0-0 > .uk-modal-dialog > .uk-overflow-container > .uk-form > :nth-child(7) > .uk-form-controls > .uk-form-width-medium')
      .attachFile('ContactDirect/Drugs/DrugListing_csv.csv');
    cy.get('#editSubmissionModal0-0 > .uk-modal-dialog > .uk-overflow-container > .uk-form > :nth-child(8) > .uk-form-controls > .uk-form-width-medium')
      .attachFile('ContactDirect/Drugs/DrugListing.png');
    cy.get('#editSubmissionModal0-0 > .uk-modal-dialog > .uk-overflow-container > .uk-form > .uk-text-center > .uk-button').click();
    cy.contains("Edit Report succeeded.").should('have.text', "Edit Report succeeded.")

  }
  verifyDeleteListing() {

    cy.get(ListingsReporting.ListingsReporting).should('be.visible').click();
    cy.get(ListingsReporting.DrugListingReporting).should('have.text', ListingsReporting.DrugListingText);
    cy.xpath(ListingsReporting.ReportYear2024).should('be.visible').click();
    cy.get(':nth-child(3) > .outer-accordion-content > .uk-table > tbody > tr > :nth-child(10) > a > .uk-icon-trash').click();
    cy.get('#deleteSubmissionModal0-0 > .uk-modal-dialog > .uk-form > center > [type="submit"]').click();
    cy.contains("Delete report succeeded.").should('have.value', "Delete report succeeded.");

  }
  uploadRegSPLFile() {
    cy.xpath(Listings.DrugTickler).should('be.visible').click();
    cy.logger('Drug on CD side', "Validated Drug tickler and click on it");
    cy.contains(Drugs.RegistrationRelatedFiles).click();
    cy.logger('Drug on CD side', "Redirecting to RegistrationRelatedFiles");
    cy.get(Drugs.UploadRegSPL).click();
    cy.get(Drugs.UploadRegSPLFile).attachFile('ContactDirect/Drugs/RegSpl.xml');
    cy.get(Drugs.UploadRegSPLButton).click();
    cy.logger('Drug on CD side', "Uploaded Reg SPL");
    cy.contains(Drugs.RegistrationRelatedFiles).click();
    cy.get(Drugs.RegSPLTable).contains('td', 'RegSpl.xml').
      parents('tr').should('be.visible')
  }

  verifyUpdateRegSPLFile() {
    cy.get(Drugs.RegSPLTable).
      contains('td', 'RegSpl.xml').
      parents('tr').within(() => {
        cy.get('a')
          .contains('Update')
          .should('be.visible')
          .click();
      });
    cy.get(Drugs.UploadRegSPLFile).attachFile('ContactDirect/Drugs/RegSpl1.xml');
    cy.get(Drugs.UploadRegSPLButton).click();
    cy.logger('Drug on CD side', "Uploaded Reg SPL");
  }

  verifyDeleteRegSPLFile() {
    cy.contains(Drugs.RegistrationRelatedFiles).click();
    cy.get(Drugs.RegSPLTable).
      contains('td', 'RegSpl1.xml').
      parents('tr').within(() => {
        cy.get('a')
          .contains('Delete')
          .should('be.visible')
          .click();
      });
    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.contains('Are you sure you want to delete?');
      return true;
    });
  }

  verifyRegSPLQualifierFile() {
    cy.get(Drugs.RegSPLTable).
      contains('td', 'RegSpl.xml').
      parents('tr').within(() => {
        cy.get('a')
          .contains('View Qualifiers')
          .should('be.visible').invoke('removeAttr', 'target')
          .click();
      });
      cy.get(Drugs.QualifierBusinessOperationInfo).should('contain.text', Texts.QualifierBusinessOperationInfoText);
      cy.get(Drugs.ExportButton).should('contain.text', Texts.ExportButtonText).click();
      cy.readFile('cypress/downloads/qualifier.xlsx').should('exist');
  }

  verifyRegSPLData() {

  }

  verifyRegSPLDataOnMyFDA() {

  }

  // verifyUpdateRegSPLFile(){
  //   cy.contains(Drugs.RegistrationRelatedFiles).click();
  //   cy.get(Drugs.RegSPLTable).
  //   contains('td', '2474005-regSPL-RegSpl.xml' ).
  //   parents('tr').within(() => {
  //     cy.get('a')
  //       .contains('Update')
  //       .should('be.visible')
  //       .click();
  //   });
  //   cy.get(Drugs.UploadRegSPLFile).attachFile('ContactDirect/Drugs/RegSpl.xml');
  //   cy.get(Drugs.UploadRegSPLButton).click();
  //   cy.logger('Drug on CD side', "Uploaded Reg SPL");

  // }

  uploadLablerSPLFile() {
    cy.xpath(Listings.DrugTickler).should('be.visible').click();
    cy.logger('Drug on CD side', "Validated Drug tickler and click on it");
    cy.contains(Drugs.RegistrationRelatedFiles).click();
    cy.logger('Drug on CD side', "Redirecting to RegistrationRelatedFiles");
    cy.get(Drugs.UploadLabelerSpl).click();
    cy.get(Drugs.UploadLabelerFile).attachFile('ContactDirect/Drugs/LabelerSpl.xml');
    cy.get(Drugs.UploadLabelerButton).click();
    cy.logger('Drug on CD side', "Uploaded Reg SPL");
    cy.contains(Drugs.RegistrationRelatedFiles).click();
    cy.get(Drugs.LabelerSPLTable).
      contains('td', 'LabelerSpl.xml').
      parents('tr').should('be.visible')
  }

  verifyUpdateLabelerSPLFile() {
    cy.get(Drugs.LabelerSPLTable).
      contains('td', 'LabelerSpl.xml').
      parents('tr').within(() => {
        cy.get('a')
          .contains('Update')
          .should('be.visible')
          .click();
      });
    cy.get(Drugs.UploadLabelerFile).attachFile('ContactDirect/Drugs/LabelerSpl1.xml');
    cy.get(Drugs.UploadLabelerButton).click();
    cy.logger('Drug on CD side', "Uploaded Reg SPL");
  }

  verifyDeleteLabelerSPLFile() {
    cy.contains(Drugs.RegistrationRelatedFiles).click();
    cy.get(Drugs.LabelerSPLTable).
      contains('td', 'LabelerSpl1.xml').
      parents('tr').within(() => {
        cy.get('a')
          .contains('Delete')
          .should('be.visible')
          .click();
      });
    cy.on('window:confirm', (confirmText) => {
      expect(confirmText).to.contains('Are you sure you want to delete?');
      return true;
    });
  }

  verifyLabelerQualifierFile() {
    cy.get(Drugs.LabelerSPLTable).
      contains('td', 'LabelerSpl.xml').
      parents('tr').within(() => {
        cy.get('a')
          .contains('View Qualifiers')
          .should('be.visible').invoke('removeAttr', 'target')
          .click();
      });
      cy.get(Drugs.QualifierBusinessOperationInfo).should('contain.text', Texts.QualifierBusinessOperationInfoText);
      cy.get(Drugs.ExportButton).should('contain.text', Texts.ExportButtonText).click();
      cy.readFile('cypress/downloads/qualifier.xlsx').should('exist');
  }

    verifyLabelerSPLData() {

  }

  verifyLabelerSPLDataOnMyFDA() {

  }

  verifyAddGDUFA() {
    cy.xpath(Listings.DrugTickler).should('be.visible').click();
    cy.logger('Drug on CD side', "Validated Drug tickler and click on it");
    cy.contains(GDUFA.GDUFATab).click();
    cy.contains(GDUFA.AddGDUFA).click();
    cy.get('select[name ="selfIdYear"]').select(GDUFA.GDUFAYear);
    cy.get('div[class="uk-form-controls"] select[name ="assignedTo"]').select(GDUFA.AssignedTo);
    cy.get('#addGdufaForm > .uk-grid > .uk-width-medium-3-5 > :nth-child(4) > .uk-form-controls > input').clear().type("khargunani@registrarcorp.com");
    cy.get(GDUFA.RootID).clear().type('123456');
    cy.get(GDUFA.SetID).clear().type('123456');
    cy.get(GDUFA.PinNumber).clear().type('1234');
    cy.get(GDUFA.FDAUsername).clear().type('core3003');
    cy.get(GDUFA.FDAPassword).clear().type('Komal@123');
    cy.get(GDUFA.BusinessOpertion).check('60');
    cy.get(GDUFA.FeeOwed).clear().type('0');
    cy.get(GDUFA.SubmitButton).click();
  }

  verifyEditGDUFA() {
    cy.xpath(Listings.DrugTickler).should('be.visible').click();
    cy.logger('Drug on CD side', "Validated Drug tickler and click on it");
    cy.contains(GDUFA.GDUFATab).click();
    cy.get('.uk-text-right > .uk-button-primary').click();
    // cy.get(GDUFA.EditEmailID).first().clear().type("plonkar@registrarcorp.com");
    cy.wait(2000);
    cy.get(GDUFA.EditRootID).clear().type('1234567');
    cy.get(GDUFA.EditSetID).clear().type('1234567');
    cy.get(GDUFA.EditBusinessOpertion).check({ force: true }, '20');
    cy.get(GDUFA.EditPinNumber).clear().type('12345');
    cy.get(GDUFA.EditFDAUsername).clear();
    cy.get(GDUFA.EditFDAUsername).type('atal_1');
    cy.get(GDUFA.EditFDAPassword).clear();
    cy.get(GDUFA.EditFDAPassword).type('atal_1');
    //cy.get(GDUFA.BusinessOpertion).uncheck('60');
    cy.get(GDUFA.EditBusinessOpertion).check({ force: true }, '20');
    cy.get(GDUFA.EditFeeOwed).clear().type('0');
    cy.get(GDUFA.Submit).click();

  }
  verifyImporterData() {



  }
  verifyQualifierData() {

  }
}
export default ListingSpls;
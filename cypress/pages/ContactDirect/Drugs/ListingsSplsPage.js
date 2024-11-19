
import dayjs from 'dayjs';

const Listings = {
  DrugTickler: `//a[normalize-space()='Drugs']`,
  ListingSpls: `body > div:nth-child(4) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)`,
  ChooseFileIcon: `//input[@id='uploadForm:uploadXmlFile']`,
  UploadXmlFileButton: `//span[normalize-space()='Upload XML File']`,
  Iframe: `iframe[src="/fda/intranet/drug/spl/read.xhtml?company=2474005"]`
}

const ListingsReporting = {
  ListingsReporting: `body > div:nth-child(4) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)`,
  DrugListingReporting: `li[class='uk-margin-top uk-active'] h1[class='uk-h2']`,
  ReportYear2024: `//div[normalize-space()='Report Year 2024 (Incomplete)']`,
  ReportYear2022: `//div[normalize-space()='Report Year 2022 (Incomplete)']`,
  DrugListingText: `Drug Listing Reporting`,
  DUNSLocator: `//td[normalize-space()='80354456']`,
  EstablishmentDUNS: `80354456`
}

const Drugs = {
  FdaIcon: `.registrationRenew > a > .uk-overlay-panel`,
  FdaRegistartionText: `FDA Registration`,
  DrugText: `Drug`,
  ProductReportingButton: `.uk-float-right > .uk-button`,
  ProductReportingText: `Product Reporting`,
  YearTab: `#yearTabs`,
  ReportStatus: `.uk-active > .submissionDiv > .outer-accordion-title > div`
}

class ListingSpls {

  uploadFile() {
    cy.xpath(Listings.DrugTickler).should('be.visible').click();
    cy.logger('Drug on CD side', "Validated Drug tickler and click on it");
    cy.get(Listings.ListingSpls).should('be.visible').click();
    cy.logger('Drug on CD side', "Validated Listing SPL's and click on it");
    cy.frameLoaded(Listings.Iframe);
    cy.logger('Drug on CD side', "Validated iframe on Listing SPL's");
    cy.iframe().xpath(Listings.ChooseFileIcon)
      .attachFile('ContactDirect/Drugs/DrugsListing.xml');
    cy.logger('Drug on CD side', "Uploaded XML file in drug listing SPL's");
    cy.iframe().xpath(Listings.UploadXmlFileButton).click({ force: true });
    cy.logger('Drug on CD side', "Validated Upload XML file and click on it");
    cy.wait(1000);
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
    cy.get(Drugs.ProductReportingButton).should('have.text', Drugs.ProductReportingText).click();
    cy.wait(3000);
    cy.get(Drugs.YearTab).contains('2024').click({ force: true });
    cy.get(Drugs.ReportStatus)
      .contains(ListingsReporting.EstablishmentDUNS)
      .then(($status) => {
        const reportText = $status.text();
        const isDUNSMatch = reportText.includes(ListingsReporting.EstablishmentDUNS);
        expect(isDUNSMatch).to.be.true;
      });
  }

  VerifyEditListing(){
    cy.get(ListingsReporting.ListingsReporting).should('be.visible').click();
    cy.get(ListingsReporting.DrugListingReporting).should('have.text', ListingsReporting.DrugListingText);
    cy.xpath(ListingsReporting.ReportYear2024).should('be.visible').click();
    cy.get(':nth-child(2) > .outer-accordion-content > .uk-table > tbody > tr > :nth-child(1) > a > .uk-icon-edit').click();
    cy.get('#editSubmissionModal0-0 > .uk-modal-dialog > .uk-overflow-container > .uk-form > :nth-child(5) > .uk-form-controls > .uk-form-width-medium').click().type(dayjs().format('DD/MM/YYYY'));
    cy.get('#editSubmissionModal0-0 > .uk-modal-dialog').click({force: true} );
    cy.get('#editSubmissionModal0-0 > .uk-modal-dialog > .uk-overflow-container > .uk-form > :nth-child(6) > .uk-form-controls > .uk-form-width-medium').type("123456");
    cy.get('#editSubmissionModal0-0 > .uk-modal-dialog > .uk-overflow-container > .uk-form > :nth-child(7) > .uk-form-controls > .uk-form-width-medium')
    .attachFile('ContactDirect/Drugs/DrugListing_csv.csv');
    cy.get('#editSubmissionModal0-0 > .uk-modal-dialog > .uk-overflow-container > .uk-form > :nth-child(8) > .uk-form-controls > .uk-form-width-medium')
    .attachFile('ContactDirect/Drugs/DrugListing.png');
    cy.get('#editSubmissionModal0-0 > .uk-modal-dialog > .uk-overflow-container > .uk-form > .uk-text-center > .uk-button').click();

  }

  verifyDeleteListing(){

    cy.get(ListingsReporting.ListingsReporting).should('be.visible').click();
    cy.get(ListingsReporting.DrugListingReporting).should('have.text', ListingsReporting.DrugListingText);
    cy.xpath(ListingsReporting.ReportYear2024).should('be.visible').click();
    cy.get(':nth-child(3) > .outer-accordion-content > .uk-table > tbody > tr > :nth-child(10) > a > .uk-icon-trash').click();
    cy.get('#deleteSubmissionModal0-0 > .uk-modal-dialog > .uk-form > center > [type="submit"]').click();
    cy.contains("Delete report succeeded.").should('have.value',"Delete report succeeded.");

  }

  verifyManualAddListing(){
    cy.get(ListingsReporting.ListingsReporting).should('be.visible').click();
    cy.get(ListingsReporting.DrugListingReporting).should('have.text', ListingsReporting.DrugListingText);
   // cy.get('a[data-uk-modal="{target:'#addReportYear'}"]').should('not.be.visible').click({ force: true });

  }
}
export default ListingSpls;
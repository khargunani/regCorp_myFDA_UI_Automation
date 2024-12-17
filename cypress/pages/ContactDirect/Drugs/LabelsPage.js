const Label = {
  DrugTickler: `//a[normalize-space()='Drugs']`,
  Labels: `body > div:nth-child(4) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)`,
  AddDrugListing: `div[class='uk-margin-top uk-margin-bottom'] a`,
  AddDrugPopup: `div[id='addDrugListingModal'] h3`,
  NDCNumber: `form[id='addDrugListingForm'] input[name='ndcNumber']`,
  Description: `form[id='addDrugListingForm'] textarea[name='description']`,
  EditedDescription: `div[aria-hidden='false'] div form[method='post'] div div div div textarea[name='description']`,
  JpgFile2: `form[id='addDrugListingForm'] input[name='jpgFile2']`,
  JpgFile1: `div[aria-hidden='false'] div form[method='post'] div div div div input[name='jpgFile1']`,
  SubmitButton: `form[id='addDrugListingForm'] button[type='submit']`,
  LabelVerification: `li[class='uk-margin-top uk-active'] div[class='uk-panel uk-panel-box uk-panel-header']`,
  UpdateButton: `div[aria-hidden='false'] div form[method='post'] div button[type='submit']`,
  CloseButton: `div[id='addDrugListingModal'] button[type='button']`,
  YesButton: `div[aria-hidden='false'] div button[type='submit']`
}

const LabelFda = {
  FdaIcon: `.registrationRenew > a > .uk-overlay-panel`,
  ReviewRegistration: `//span[normalize-space()='Review Registration']`,
  ReviewListings: `//span[normalize-space()='Review Listings']`,
  NextButton: `div[class='uk-text-center uk-margin-top'] button[type='submit']`,
  NDCNumber: `70631-137-85`,
  NDCVerification: `#devicesTab`,
  SearchButton: `td[data-title='View Details']`
}

const Texts = {
  LabelText: `Labels `,
  AddDrugListingText: ` Add Drug Listing`,
  AddDrugPopupText: `Add Drug Listing`,
  Description: `Drug labelling is also referred to as prescription labelling upon on container.`,
  EditedDescription: `Edited drug labelling is also referred to as prescription labelling.`,
  fdaRegistartionText: `FDA Registration`,
  drugText: `Drug`,
  reviewRegistrationText: `Review Registration`,
  reviewListingsText: `Review Listings`,
}

class Labels {

  generateNDCNumber() {
    const randomSuffix = Math.floor(Math.random() * 1000);
    return `10${String(randomSuffix).padStart(9, '06')}`;
  }

  constructor() {
    this.NDCNumbers = this.generateNDCNumber();
  }

  uploadLabels() {
    cy.xpath(Label.DrugTickler).should('be.visible').click();
    cy.logger('Drug on CD side', "Validated Drug tickler and click on it");
    cy.get(Label.Labels).should('be.visible').and('contain.text', Texts.LabelText).click();
    cy.logger('Drug on CD side', "Validated Labels and click on it");
    cy.get(Label.AddDrugListing).should('be.visible').and('contain.text', Texts.AddDrugListingText).click();
    cy.get(Label.AddDrugPopup).should('be.visible').and('contain.text', Texts.AddDrugPopupText).click();
    cy.get(Label.NDCNumber).should('be.visible').type(this.NDCNumbers);
    cy.get(Label.Description).should('be.visible').type(Texts.Description);
    cy.fixture('ContactDirect/Drugs/Drug.jpg', 'base64').then((fileContent) => {
      cy.get(Label.JpgFile2).should('be.visible').attachFile({
        fileContent,
        fileName: 'Drug.jpg',
        mimeType: 'image/jpeg',
        encoding: 'base64'
      });
    });
    cy.get(Label.SubmitButton).should('be.visible').click();
  }

  editLabels() {
    cy.get(Label.LabelVerification)
      .contains('td', this.NDCNumbers)
      .parents('tr')
      .within(() => {
        cy.get('a')
          .contains('Edit')
          .should('be.visible')
          .click();
      });

    cy.get(Label.EditedDescription).click().clear().type(Texts.EditedDescription);
    cy.fixture('ContactDirect/Drugs/DrugEdited.jpg', 'base64').then((fileContent) => {
      cy.get(Label.JpgFile1).should('be.visible').attachFile({
        fileContent,
        fileName: 'DrugEdited.jpg',
        mimeType: 'image/jpeg',
        encoding: 'base64'
      });
    });
    cy.get(Label.UpdateButton).should('be.visible').click();
  }

  deleteLabels() {
    cy.get(Label.LabelVerification)
      .contains('td', this.NDCNumbers)
      .parents('tr')
      .within(() => {
        cy.get('a.uk-margin-left')
          .contains('Delete')
          .should('be.visible')
          .click();
      });
    cy.window().then(() => {
      cy.get(Label.YesButton).click({ force: true });
    })
    cy.get(Label.LabelVerification)
      .contains('td', this.NDCNumbers).should('not.exist', this.NDCNumbers);
  }

  uploadManualLabels() {
    cy.xpath(Label.DrugTickler).should('be.visible').click();
    cy.logger('Drug on CD side', "Validated Drug tickler and click on it");
    cy.get(Label.Labels).should('be.visible').and('contain.text', Texts.LabelText).click();
    cy.logger('Drug on CD side', "Validated Labels and click on it");
    cy.get(Label.AddDrugListing).should('be.visible').and('contain.text', Texts.AddDrugListingText).click();
    cy.get(Label.AddDrugPopup).should('be.visible').and('contain.text', Texts.AddDrugPopupText).click();
    cy.get(Label.NDCNumber).should('be.visible').type(LabelFda.NDCNumber);
    cy.get(Label.Description).should('be.visible').type(Texts.Description);
    cy.fixture('ContactDirect/Drugs/531605_14448-302-30_1 (1).jpg', 'base64').then((fileContent) => {
      cy.get(Label.JpgFile2).should('be.visible').attachFile({
        fileContent,
        fileName: '531605_14448-302-30_1 (1).jpg',
        mimeType: 'image/jpeg',
        encoding: 'base64'
      });
    });
    cy.get(Label.SubmitButton).should('be.visible').click();
  }

  labelsViewable() {
    cy.get(LabelFda.FdaIcon).should('be.visible').and('have.text', Texts.fdaRegistartionText).click();
    cy.contains(Texts.drugText).should('be.visible').click();
    cy.get(LabelFda.NextButton).should('be.visible').click();
    cy.get(LabelFda.NDCVerification)
      .contains('td', LabelFda.NDCNumber)
      .parents('tr')
      .within(() => {
        cy.get(LabelFda.SearchButton)
          .should('be.visible')
          .click();
      });
    cy.wait(1000);
    cy.get(`a.uk-margin-right`).should('be.visible').invoke('removeAttr', 'target').click();
  }

}

export default Labels;
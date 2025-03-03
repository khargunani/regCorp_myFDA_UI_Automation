const Locators = {
    selectDomainFromDD: "select[id='gm-host-select']",
    editBtn: "span[title='Click to Edit']",
    inputEmailAddr: "span[title='Click to Edit'] input",
    emailAddrSetBtn: "span[title='Click to Edit'] button[class^='save button']",
    emailList: "#email_list",
    docNameInEmailContent: "div[class='email_body'] ul li",
    hyperlinkListinEmailContent: "div[class='email'] a",
    video: ".vp-preview VideoThumbnail_module_videoThumbnail__d1b35579 VideoThumbnail_module_cover__d1b35579",
    AdverseEventTickler: `//a[normalize-space()='Adverse Event']`,
    PaymentCheckbox: `input[value='3;']`,
    UpgradeBlock: `.fw-semibold.text-nowrap.pointer.upgrade-block`,
    Block: `#block`,
    SubmitButton: `input[value='Submit']`,
    Blocks: `option[id]`,
    BankWireInfo: '#bankwireinfo > .uk-button',
    Information: `#sections > :nth-child(1) > :nth-child(1) > :nth-child(2)`
}

const Texts = {
    AdverseEventTickler: `Adverse Event`,
    UpgradeBlock: `Upgrade Block`,
    AEMMenu: 'Adverse Event Management',
    Subject: `Subject: Unpaid Online Adverse Event Reporting System Purchase from MyFDA.com : Automation Test`,
    Subjects: `Subject: Paid Online Adverse Event Reporting System Purchase from MyFDA.com : Automation Test`,

}

class AEMUpgrade {

    viewPaymentReceivedCheckbox() {
        cy.visit(Cypress.env('CDurl'), { failOnStatusCode: false });
        cy.logger('applicationCD', "CD Launched Application-->Login Test");
        cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
            cy.logger('CDLogin', 'Logging to CD using valid credentials')
            const { username, password } = data;
            cy.LoginCD(username, password);
            cy.wait(10000);
        })
        cy.logger('application', "Validated success Login Msg-->Login Test");
        const homepage = new HomePage();
        homepage.goForCompany();
        cy.logger('CD application', 'Search for Kimmy Test company');
    }

    verifyLandingPage() {
        cy.contains(Texts.AEMMenu).click();
        cy.url().should('include', '/aem');
        cy.get(Locators.UpgradeBlock).should('be.visible').click();
    }

    verifyCheckboxForUncheckPayment() {
        cy.get(Locators.PaymentCheckbox).then(($checkbox) => {
            if ($checkbox.prop('checked')) {
                cy.wrap($checkbox).uncheck();
            }
            cy.get(Locators.SubmitButton).should('be.visible').click();
            cy.wait(2000);
        });
    }

    verifyCheckboxForCheckPayment() {
        cy.get(Locators.PaymentCheckbox).then(($checkbox) => {
            if (!$checkbox.prop('checked')) {
                cy.wrap($checkbox).check();
            }
        });
        cy.get(Locators.SubmitButton).should('be.visible').click();
        cy.wait(2000);
    }

    verifyBlockValues(BlockValues, index) {
        const blockKey = Object.keys(BlockValues[index])[0];
        const blockValue = BlockValues[index][blockKey];

        const blockText = String(blockValue);

        cy.log('blockKey:', blockKey);
        cy.log('blockValue:', blockValue);
        cy.log('blockText:', blockText);
        cy.get(Locators.Block).select(blockText);

        cy.log(blockText);
    }

    verifyInvoiceDetailsForBankWireMode(BlockPrice) {
        cy.get(Locators.BankWireInfo).click();
        cy.task('readPdf', 'cypress/downloads/Invoice_for_AutomationTest_().pdf').then((data) => {
            let extractedText = data.text;
            extractedText = extractedText.replace('$', '').trim();
            cy.log("Extracted text: ", extractedText);
            cy.wrap(extractedText).should('include', BlockPrice[3]);
        })
    }

    verifyInvoiceDetailsForCCMode(BlockPrice) {
        cy.get(Locators.BankWireInfo).click();
        cy.task('readPdf', 'cypress/downloads/Invoice_for_AutomationTest_().pdf').then((data) => {
            let extractedText = data.text;
            extractedText = extractedText.replace('$', '').trim();
            cy.log("Extracted text: ", extractedText);
            cy.wrap(extractedText).should('include', BlockPrice[3]);
        })
    }

    configureEmail(Input)
    {
        cy.visit('https://www.guerrillamail.com/',{timeout:60000})              
            cy.get(Locator.selectDomainFromDD).select('guerrillamail.biz').should('have.value','guerrillamail.biz')
            cy.wait(1000)
            cy.get(Locator.editBtn).click()
            cy.wait(100)
            cy.get(Locator.inputEmailAddr).clear().as('inputEmail')
            cy.get('@inputEmail').type(Input.tempEmail)
            cy.wait(100)
            cy.get(Locator.emailAddrSetBtn).click()        
            cy.wait(2000)
            cy.get(Locator.emailList).contains(Input.EmailSubject).click();                          
    }

    verifyNotepadIsUpdated(NotepadInfo,BlockPrice) {
        cy.get(Locators.Information, { timeout: 60000 }).should('be.visible');
        cy.get(Locators.Information).should('contain.text', Texts.Subject);
        cy.get(Locators.Information).should('contain.text', NotepadInfo.PaymentMethod);
        cy.get(Locators.Information).should('contain.text', NotepadInfo['Authorized Person Name']);
        cy.get(Locators.Information).should('contain.text', NotepadInfo['Authorized Person Title']);
        cy.get(Locators.Information).should('contain.text', NotepadInfo['Authorized Person Email']);
        cy.get(Locators.Information).should('contain.text',BlockPrice[3]);
    }

    verifyNotepadIsUpdatedCC(NotepadInfo,BlockPrice) {
        cy.get(Locators.Information, { timeout: 60000 }).should('be.visible');
        cy.get(Locators.Information).should('contain.text', Texts.Subjects);
        cy.get(Locators.Information).should('contain.text', NotepadInfo.PaymentCCMethod);
        cy.get(Locators.Information).should('contain.text', NotepadInfo['Authorized Person Name']);
        cy.get(Locators.Information).should('contain.text', NotepadInfo['Authorized Person Title']);
        cy.get(Locators.Information).should('contain.text', NotepadInfo['Authorized Person Email']);
        cy.get(Locators.Information).should('contain.text',BlockPrice[1]);
    }

}

export default AEMUpgrade;
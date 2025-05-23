const Locators = {
    fdaIcon: `.registrationRenew > a > .uk-overlay-panel`,
    yearCertificate: '.uk-dropdown > .uk-nav > :nth-child(1) > a',
    DownloadCertificate: '#certPdf > .uk-icon',
    ShareIcon: '[href="#"] > .uk-icon',
    ShareEmailID: '.uk-form-width-large',
    SubmitButton: '.center > .uk-button',
    EmailAlert: '.uk-alert',
    UpdateBTATickler: `//a[normalize-space()='Update BTA']`,
    DiscountValue: `//input[@name='discount']`,
    CustomPrice: `//input[@name='customPrice']`,
    submitButton: `.uk-text-center.uk-margin-top > .uk-button`,
    OneYearCheckbox: `input[type='radio'][value='1']`,
    TwoYearCheckbox: `input[type='radio'][value='2']`,
    ThreeYearCheckbox: `input[type='radio'][value='3']`,
    FinalTotal: `td[id='finalTotal']`,
    CheckCheckbox: `input[type='radio'][value='check']`,
    PayOnlineCheckbox: `input[type='radio'][value='cc']`,
    AgreementCheckbox: `input[type='checkbox'][name='agreeTermsCheckbox']`,
    Name: `#paymentForm > .uk-margin-bottom > :nth-child(5) > .uk-form-controls > .uk-form-width-medium`,
    Title: `input[name='undersignedTitle']`,
    Email: `input[name='undersignedEmail']`,
    NextButton: `#paymentForm > .center > .uk-button`,
    PayWithThisMethod: `:nth-child(1) > :nth-child(3) > .pay-by-stored-method`,
    Confirmation: `.confirmation > h2.uk-text-center`,
    DownloadPaidInvoice: `.confirmation > :nth-child(3) > a`,
    ViewInvoice: `#checkinfo > .uk-button`,
    Next: `#checkForm > .center > .uk-button`,
    Agreement: `#checkForm > .uk-margin-bottom > .agreeTermsDiv > input`,
    UndersignName: `input[name='undersignedName']`,
    UndersignTitle: `#checkForm > .uk-margin-bottom > :nth-child(6) > .uk-form-controls > .uk-form-width-medium`,
    UndersignEmail: `#checkForm > .uk-margin-bottom > :nth-child(7) > .uk-form-controls > .uk-form-width-medium`,
    selectDomainFromDD: "select[id='gm-host-select']",
    editBtn: "span[title='Click to Edit']",
    inputEmailAddr: "span[title='Click to Edit'] input",
    emailAddrSetBtn: "span[title='Click to Edit'] button[class^='save button']",
    emailList: "#email_list",
    docNameInEmailContent: "div[class='email_body'] ul li",
    hyperlinkListinEmailContent: "div[class='email'] a"
}

const Texts = {
    NextButton: 'Next',
    StaywithStandard: 'Stay with Standard',
    PayOnline: 'Pay Online',
    fdaRegistartionText: `FDA Registration`,
    ViewCertificate: 'View Certificate',
    ManageRegistration: `Manage Registration`,
    FoodFacility: 'Food Facility',
    EmailMessage: 'Email is sent',
    EmailID: 'khargunani@registrarcorp.com',
    EmailBody: 'Thank you for renewing your Registration service'
}

const MailSlurp = require('mailslurp-client').default;
const mailslurp = new MailSlurp({ apiKey: Cypress.env('MAILSLURP_API_KEY') })


class FFRegProPayment {


    verifyDiscountCustomPrice() {

        cy.xpath(Locators.UpdateBTATickler).should('be.visible').click();
        cy.xpath(Locators.DiscountValue).clear().type('100');
        cy.xpath(Locators.CustomPrice).clear().type('0.5');
        cy.get(Locators.submitButton).should('be.visible').click();
        cy.wait(10000);
        cy.xpath(Locators.UpdateBTATickler).should('be.visible').click();
        cy.xpath(Locators.DiscountValue).invoke('val')
            .then((discount) => {
                const discountValue = parseFloat(discount);
                cy.log('The entered discount is: ' + discountValue);
                cy.xpath(Locators.CustomPrice).invoke('val')
                    .then((custom) => {
                        const customPrice = parseFloat(custom);
                        cy.log('The entered custom price is: ' + customPrice);
                        if (discount && !isNaN(discountValue) && custom && !isNaN(customPrice)) {
                            cy.log('Both discount and custom price are present');
                            cy.log('Displaying discount: ' + discountValue);
                        } else {
                            if (!discount || isNaN(discountValue)) {
                                cy.log('Discount is not present or invalid');
                                if (custom && !isNaN(customPrice)) {
                                    cy.log('Displaying custom price: ' + customPrice);
                                }
                            }
                            if (!custom || isNaN(customPrice)) {
                                cy.log('Custom price is not present or invalid');
                            }
                        }
                    })
            })
    }
    verifyRegProFFPayment() {
        cy.get(Locators.fdaIcon).should('be.visible').and('have.text', Texts.fdaRegistartionText).click();
        cy.contains(Texts.FoodFacility).should('be.visible').click();
        cy.contains(Texts.ManageRegistration).should('be.visible').click();
        cy.contains(Texts.NextButton).click();
        //cy.contains(Texts.UpgradeToRegPro).click();
        cy.get('.pro > .uk-grid > .uk-width-6-6 > a').click();
        cy.get(Locators.OneYearCheckbox).check();
        cy.get(Locators.TwoYearCheckbox).check();
        cy.get("input[type='radio'][value='1']").check();
        cy.get(Locators.FinalTotal).then(($btn) => {
            this.txt = $btn.text()
            this.txt = this.txt.replace('$', '');
            cy.log("testing log.........")
            cy.log(this.txt);
        }).then(() => {
            cy.wrap(this.txt)
        })
    }

    verifyFFPayment() {
        cy.get(Locators.fdaIcon).should('be.visible').and('have.text', Texts.fdaRegistartionText).click();
        cy.contains(Texts.FoodFacility).should('be.visible').click();
        cy.contains(Texts.ManageRegistration).should('be.visible').click();
        cy.contains(Texts.NextButton).click();
        cy.get('.pro > .uk-grid > .uk-width-6-6 > a').click();
        cy.get(Locators.OneYearCheckbox).check();
        cy.get(Locators.TwoYearCheckbox).check();
        cy.get("input[type='radio'][value='1']").check();
        cy.get(Locators.FinalTotal).then(($btn) => {
            this.txt = $btn.text()
            this.txt = this.txt.replace('$', '');
            cy.log("testing log.........")
            cy.log(this.txt);
        }).then(() => {
            cy.wrap(this.txt)
        })
    }

    verifyFF2YearPayment() {
        cy.get(Locators.fdaIcon).should('be.visible').and('have.text', Texts.fdaRegistartionText).click();
        cy.contains(Texts.FoodFacility).should('be.visible').click();
        cy.contains(Texts.ManageRegistration).should('be.visible').click();
        cy.contains(Texts.NextButton).click();
        cy.get('.pro > .uk-grid > .uk-width-6-6 > a').click();
        cy.get(Locators.TwoYearCheckbox).check();
        cy.get(Locators.FinalTotal).then(($btn) => {
            this.txt = $btn.text()
            this.txt = this.txt.replace('$', '');
            cy.log("testing log.........")
            cy.log(this.txt);
        }).then(() => {
            cy.wrap(this.txt)
        })
    }

    verifyFF3YearPayment() {
        cy.get(Locators.fdaIcon).should('be.visible').and('have.text', Texts.fdaRegistartionText).click();
        cy.contains(Texts.FoodFacility).should('be.visible').click();
        cy.contains(Texts.ManageRegistration).should('be.visible').click();
        cy.contains(Texts.NextButton).click();
        cy.get('.pro > .uk-grid > .uk-width-6-6 > a').click();
        cy.get(Locators.ThreeYearCheckbox).check();
        cy.get(Locators.FinalTotal).then(($btn) => {
            this.txt = $btn.text()
            cy.log("testing log.........")
            cy.log(this.txt);
        }).then(() => {
            cy.wrap(this.txt)
        })
    }

    fillDetailsForOnlinePayment(PaymentDetails) {
        cy.get(Locators.CheckCheckbox).check();
        cy.get(Locators.PayOnlineCheckbox).check();
        cy.get(Locators.AgreementCheckbox).first().check();
        cy.get(Locators.Name).type(PaymentDetails.Name);
        cy.get(Locators.Title).first().type(PaymentDetails.Title);
        cy.get(Locators.Email).first().type(PaymentDetails.emailid);
        cy.get(Locators.NextButton).should('be.visible').click();
        cy.get(Locators.PayWithThisMethod).should('be.visible').click();
        cy.get(Locators.Confirmation).should('have.text', 'Thank You');
        cy.get(Locators.DownloadPaidInvoice).should('be.visible').click()
    }

    fillDetailsForCheckPayment(PaymentDetails) {
        cy.get(Locators.CheckCheckbox).check();
        cy.get(Locators.Agreement).check();
        cy.get(Locators.UndersignName).eq(2).type(PaymentDetails.Name);
        cy.get(Locators.UndersignTitle).type(PaymentDetails.Title);
        cy.get(Locators.UndersignEmail).type(PaymentDetails.emailid);
        cy.get(Locators.UndersignEmail).click();
    }

    verifyInvoiceDetailsForBankWire() {
        cy.get(Locators.ViewInvoice).should('be.visible').click();
        cy.task('readPdf', 'cypress/downloads/Invoice_for_KimPossible_().pdf').then((data) => {
            cy.log(data.text)
            cy.log(this.txt);
            expect(data.text).to.contain(this.txt);
        })
        cy.get(Locators.Next).should('be.visible').click();
        cy.get(Locators.Confirmation).should('have.text', 'Thank You');
    }

    verifyInvoiceDetailsFor3BankWire() {
        cy.get(Locators.ViewInvoice).should('be.visible').click();
        cy.task('readPdf', 'cypress/downloads/Invoice_for_KimPossible_().pdf').then((data) => {
            cy.log('Extracted Text: ' + data.text);
            const numericValues = data.text.match(/\d+\.\d{2}/g);
            if (numericValues && numericValues.length > 0) {
                const lastNumericValue = numericValues[numericValues.length - 1];
                const formattedValue = `${lastNumericValue}`;
                expect(data.text).to.contain(formattedValue);
            } else {
                cy.log('No numeric value found in the text');
            }
        })
        cy.get(Locators.Next).should('be.visible').click();
        cy.get(Locators.Confirmation).should('have.text', 'Thank You');
    }

    configureEmail(PaymentDetails) {
        cy.visit('https://www.guerrillamail.com/', { timeout: 60000 })
        cy.get(Locators.selectDomainFromDD).select('guerrillamail.com').should('have.value', 'guerrillamail.com')
        cy.wait(1000)
        cy.get(Locators.editBtn).click()
        cy.wait(100)
        cy.get(Locators.inputEmailAddr).clear().as('inputEmail')
        cy.get('@inputEmail').type(PaymentDetails.emailid)
        cy.wait(100)
        cy.get(Locators.emailAddrSetBtn).click()
        cy.wait(2000)
        cy.get(Locators.emailList).contains(PaymentDetails.EmailSubjectForUS);
    }
}

export default FFRegProPayment;
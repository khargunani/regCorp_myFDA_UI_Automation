/// <reference types="cypress" />
import { should } from "chai";

class CosmeticPayment{

    Select1YearRadio = ".padding-1 > [value='1']"
    OnlineRadio = ":nth-child(2) > :nth-child(2) > input"
    BankWireRadio = ".uk-panel > :nth-child(2) > :nth-child(3) > input"
    OnlineAgreementCheckbox = "#paymentForm > .uk-margin-bottom > .agreeTermsDiv > input"
    OnlineNameInput = "#paymentForm > .uk-margin-bottom > :nth-child(5) > .uk-form-controls > .uk-form-width-medium"
    OnlineTitleInput = "#paymentForm > .uk-margin-bottom > :nth-child(6) > .uk-form-controls > .uk-form-width-medium"
    OnineEmailInput = "#paymentForm > .uk-margin-bottom > :nth-child(7) > .uk-form-controls > .uk-form-width-medium"
    OnlinePaymentNextButton ="#paymentForm > .center > button.uk-button"
    StoredPaymentButton =".pay-by-stored-method"
    PathForScreenshotMyFDA = "myFDA\\PaymentDone"
    RenewNowPopup = "Renew Now"
    Payment1Year = "input[value='1']"
    Payment2Year = "input[value='2']"
    Payment3Year = "input[value='3']"
    ViewInvoice = "View Invoice"
    BankwireAgreementCheckbox = "#swiftForm > fieldset.uk-margin-bottom > .agreeTermsDiv > input"
    BankwireName = "#swiftForm > fieldset.uk-margin-bottom > :nth-child(5) > .uk-form-controls > .uk-form-width-medium"
    BankwireTitle = "#swiftForm > fieldset.uk-margin-bottom > :nth-child(6) > .uk-form-controls > .uk-form-width-medium"
    BankwireEmail = "#swiftForm > fieldset.uk-margin-bottom > :nth-child(7) > .uk-form-controls > .uk-form-width-medium"
    BankwireNext = "Next"



    goForRenewalProcess(){
      cy.contains(this.RenewNowPopup).click();
    }

    SelectYearPlan(){

        cy.get(this.Payment1Year).should("be.visible");
        cy.get(this.Payment1Year).should("be.checked");
    }

    
    Select2YearPlan(){

        cy.get(this.Payment2Year).should("be.visible");
        cy.get(this.Payment2Year).check().should("be.checked");
    }

    
    Select3YearPlan(){

        cy.get(this.Payment3Year).should("be.visible");
        cy.get(this.Payment3Year).check().should("be.checked");
    }

    SelectPaymentModeOnline(){
        cy.scrollTo('bottom');
        cy.get(this.OnlineRadio).should("be.visible");
        cy.get(this.OnlineRadio).check();
        cy.get(this.OnlineRadio).should("be.checked");
        cy.get(this.OnlineAgreementCheckbox).should("be.visible");
        cy.get(this.OnlineAgreementCheckbox).check();
        cy.get(this.OnlineNameInput).click().type('Automation Test');
        cy.get(this.OnlineTitleInput).click().type('Automation Test');
        cy.get(this.OnineEmailInput).click().type('khargunani@registrarcorp.com');
        cy.get(this.OnlinePaymentNextButton).click();
    }

    SelectPaymentModeBankwire(){
        cy.scrollTo('bottom');
        cy.get(this.BankWireRadio).check();
        //cy.get(this.BankWire).should("be.visible");
        cy.get(this.BankWireRadio).should("be.checked");
        this.verifyInvoiceDetailsForBankWire();
        cy.get(this.BankwireAgreementCheckbox).check();
        cy.get(this.BankwireName).click().type("Komal AutomationTest")
        cy.get(this.BankwireTitle).click().type("TestTitle")
        cy.get(this.BankwireEmail).click().type('khargunani@registrarcorp.com');
        cy.get("#swiftForm > .center > button.uk-button").click();
    }

    payByStoredOnlineMode(){
        cy.get(this.StoredPaymentButton).click();
    }

    verifyPaymentConfirmation(){
        cy.contains("Confirmation").screenshot(this.PathForScreenshotMyFDA);
        return true;
    
       }

    verifyInvoiceDetailsForBankWire(){

        cy.contains(this.ViewInvoice).click();
        cy.task('readPdf','cypress/downloads/Invoice_for_AutomationTest_().pdf').then((data)=>{
            cy.log(data.text)
            expect(data.text).to.contain('995.00Total USD')
        })
        
        
    }




}


export default CosmeticPayment;
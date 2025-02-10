/// <reference types="cypress" />
//import AEMDetails from "../../../pages/ContactDirect/AEM/AEMDetailsPage"
import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import AEMPurchase from "../../../pages/HomePage/AEMPage/AEMPurchasePage"

const startTime = Date.now();
//const AEMDEtailsObj = new AEMDetails();
const AEMPurchaseobj = new AEMPurchase();
describe('Validate upload food facility certification process on myFDA', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);

        })
        cy.logger('application', "Validated success Login Msg-->Login Test");
    });

    it('Verify the AEM payment scenario using bankwire mode', () => {
        AEMPurchaseobj.verifyLandingPage();
        AEMPurchaseobj.selectBlockValue();
        AEMPurchaseobj.VerifyPricing();
        cy.wait(5000);
        AEMPurchaseobj.selectPaymentModeBankwire();
        AEMPurchaseobj.verifyInvoiceDetailsForBankWire();
        AEMPurchaseobj.VerifyPAymentbyBankwire();
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

    it.only('Verify the AEM payment scenario using online mode', () => {
        AEMPurchaseobj.verifyLandingPage();
        AEMPurchaseobj.selectBlockValue();
       // AEMPurchaseobj.VerifyPricing();
        AEMPurchaseobj.selectPaymentModeCC();
        AEMPurchaseobj.VerifyPAymentbyCC();
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })
})
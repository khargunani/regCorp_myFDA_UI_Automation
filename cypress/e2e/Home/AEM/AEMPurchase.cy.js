/// <reference types="cypress" />
//import AEMDetails from "../../../pages/ContactDirect/AEM/AEMDetailsPage"
import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import AEMPurchase from "../../../pages/HomePage/AEMPage/AEMPurchasePage"

const startTime = Date.now();
//const AEMDEtailsObj = new AEMDetails();
const AEMPurchaseobj = new AEMPurchase();
const data1 = {
    Inboxid: 'da8f96f2-886f-4b6d-956b-4521baf42e0e'
};
describe('Validate AEM purchase scenarios from myFDA to CD side ', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);

        })
        cy.logger('MyFDA application', "Validated success Login Msg-->Login Test");
    });

    it('Verify on myFDA if nothing is updated on CD the user on login get lands on landing page', ()=>{
        cy.logger('MyFDA application', 'Verifying the landing page')
        AEMPurchaseobj.verifyLandingPage();
    })

    it.only('Verify the Payment page, the amount should get change as per the block size on myDA side', ()=>{
        cy.logger('MyFDA application', "Verifying the blocks and its price showing correctly");
        AEMPurchaseobj.verifyLandingPage();
        AEMPurchaseobj.verifyAllBlockPricing();
    })

    it('Verify the AEM payment scenario using bankwire mode', () => {
        cy.fixture('./Home/AEM/AEMPurchase.json').then((input) => {
        cy.logger('MyFDA application', 'Verifying the landing page')
        AEMPurchaseobj.verifyLandingPage();
        cy.logger('MyFDA application', 'selecting block value')
        AEMPurchaseobj.selectBlockValue();
        cy.logger('MyFDA application', 'selecting block pricing')
        AEMPurchaseobj.VerifyPricing();
        cy.wait(5000);
        cy.logger('MyFDA application', 'selecting payment mode as bankwire')
        AEMPurchaseobj.selectPaymentModeBankwire();
        cy.logger('MyFDA application', 'verifying invoice details for bankwire')
        AEMPurchaseobj.verifyInvoiceDetailsForBankWire();
        cy.logger('MyFDA application', 'Verifying payment by bankwire mode')
        AEMPurchaseobj.VerifyPAymentbyBankwire(input.Input);
        cy.logger('MyFDA application', 'Verifying email triggered after payment complete')
        AEMPurchaseobj.configureEmail(input.Input);
        //AEMPurchaseobj.verifyEmailOnCheckPayment(data1.Inboxid);
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
        })
    })

    it('Verify the AEM payment scenario using online mode', () => {
        cy.logger('MyFDA application', 'Verifying the landing page')
        AEMPurchaseobj.verifyLandingPage();
        cy.logger('MyFDA application', 'selecting block value')
        AEMPurchaseobj.selectBlockValue();
        cy.logger('MyFDA application', 'selecting block payment mode as online cc')
        AEMPurchaseobj.selectPaymentModeCC();
        cy.logger('MyFDA application', 'verify payment done by online mode cc')
        AEMPurchaseobj.VerifyPAymentbyCC();
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })
})
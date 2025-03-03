/// <reference types="cypress" />
import AEMUpgrade from "../../../pages/HomePage/AEMPage/AEMUpgradePage";
import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import AEMPurchase from "../../../pages/HomePage/AEMPage/AEMPurchasePage";
import AEMDetails from "../../../pages/ContactDirect/AEM/AEMDetailsPage";

const startTime = Date.now();
const AEMUpgradeObj = new AEMUpgrade();
const AEMPurchaseobj = new AEMPurchase();
const AEMDetailsObj = new AEMDetails();
describe('Validate upgrade block AEM functionality on myFDA', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('CDurl'), { failOnStatusCode: false });
        cy.logger('applicationCD', "CD Launched Application-->Login Test");
        cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
            cy.logger('CDLogin', 'Logging to CD using valid credentials')
            const { username, password } = data;
            cy.LoginCD(username, password);
            cy.wait(2000);
        })
        cy.logger('application', "Validated success Login Msg-->Login Test");
        const homepage = new HomePage();
        homepage.goForCompany();
        cy.logger('CD application', 'Search for NewTest company');
    });

    it('Verify that user is able to upgrade payment block with bank-wire mode on myFDA side', () => {

        cy.fixture('./Home/FDARegistration/AEM/AEMUpgrade.json').then((data) => {
            AEMDetailsObj.verifyAEMDetails();
            cy.logger('AEM', 'Verifing AEM details are filled successfully');
            AEMUpgradeObj.verifyCheckboxForUncheckPayment();
            cy.logger('AEM', 'Verifing checkbox status for payment');
            cy.contains(`Return to Company`).should('be.visible').click();
            cy.logger('CD application', 'Return to company for Automation test');
            cy.CDSignOut();
            cy.logger('CD application', 'Sign Out from Automation Test Company');

            //Login to MyFDA application
            cy.visit(Cypress.env('myFDAurl'));
            cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
            cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
                const { desiredUserId, password } = data.subUser;
                cy.login(desiredUserId, password);
            })
            cy.logger('application', "Validated success Login Msg-->Login Test");

            cy.fixture('./Home/FDARegistration/AEM/AEMPurchase.json').then((input) => {
            AEMPurchaseobj.verifyLandingPage();
            cy.logger('AEM', 'Click on Adverse Event Management tickler');
            AEMPurchaseobj.selectBlockValue();
            cy.logger('AEM', 'Selecting block values');
            AEMPurchaseobj.VerifyPricing();
            cy.logger('AEM', 'Verifing pricing price');
            cy.wait(5000);
            AEMPurchaseobj.selectPaymentModeBankwire();
            cy.logger('AEM', 'Selecting payment mode i.e. Bankwire mode');
            AEMPurchaseobj.verifyInvoiceDetailsForBankWire();
            cy.logger('AEM', 'Verifing invoice details for bankwire');
            AEMPurchaseobj.VerifyPAymentbyBankwire(input.Input);
            cy.logger('AEM', 'Verifing payment is successfully done for bankwire mode');
            cy.MyFDALogOut();

            //Login to CD application
            cy.visit(Cypress.env('CDurl'), { failOnStatusCode: false });
            cy.logger('applicationCD', "CD Launched Application-->Login Test");
            cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
                cy.logger('CDLogin', 'Logging to CD using valid credentials')
                const { username, password } = data;
                cy.LoginCD(username, password);
                cy.wait(2000);
            })
            cy.logger('application', "Validated success Login Msg-->Login Test");
            const homepage = new HomePage();
            homepage.goForCompany();
            cy.logger('CD application', 'Search for NewTest company');

            AEMDetailsObj.verifyAEMDetails();
            cy.logger('AEM', 'Verifing AEM details are filled successfully');
            AEMUpgradeObj.verifyCheckboxForCheckPayment();
            cy.logger('AEM', 'Verifing checkbox status for payment');
            cy.contains(`Return to Company`).should('be.visible').click();
            cy.logger('CD application', 'Return to company for Automation test');
            cy.CDSignOut();
            cy.logger('CD application', 'Sign Out from Automation Test Company');

            //Login to MyFDA application
            cy.visit(Cypress.env('myFDAurl'));
            cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
            cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
                const { desiredUserId, password } = data.subUser;
                cy.login(desiredUserId, password);
            })
            cy.logger('application', "Validated success Login Msg-->Login Test");
            AEMUpgradeObj.verifyLandingPage();
            cy.logger('AEM', 'Click on Adverse Event Management tickler');
            const index = 3;
            AEMUpgradeObj.verifyLandingPage();
            cy.logger('AEM', 'Click on Adverse Event Management tickler');
            console.log('Block Values:', data.BlockValues);
            AEMUpgradeObj.verifyBlockValues(data.BlockValues, index);
            cy.logger('AEM', 'Selecting block values');
            AEMPurchaseobj.selectPaymentModeBankwire();
            cy.logger('AEM', 'Selecting payment mode i.e. Bankwire mode');
            AEMUpgradeObj.verifyInvoiceDetailsForBankWireMode(data.BlockPrice, index);
            cy.logger('AEM', 'Verifing invoice details for bankwire');
            AEMPurchaseobj.VerifyPAymentbyBankwire(input.Input);
            cy.logger('AEM', 'Verifing payment is successfully done for bankwire mode');
            cy.MyFDALogOut();
            cy.logger('MyFDA application', 'Login out from myfda for Automation Test user');

            //Login to CD application
            cy.visit(Cypress.env('CDurl'), { failOnStatusCode: false });
            cy.logger('applicationCD', "CD Launched Application-->Login Test");
            cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
                cy.logger('CDLogin', 'Logging to CD using valid credentials')
                const { username, password } = data;
                cy.LoginCD(username, password);
                cy.wait(2000);
            })
            cy.logger('application', "Validated success Login Msg-->Login Test");
            homepage.goForCompany();
            cy.logger('CD application', 'Search for NewTest company');
            AEMUpgradeObj.verifyNotepadIsUpdated(data.NotepadInfo,data.BlockPrice, index);
            cy.logger('CD application', 'Verifing notepad is updated after doing payment');
            AEMPurchaseobj.verifyEmailOnCheckPayment();
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
        })
    })
    })

    it.only('Verify that user is able to upgrade payment block with online mode on myFDA side', () => {

        cy.fixture('./Home/FDARegistration/AEM/AEMUpgrade.json').then((data) => {
            AEMDetailsObj.verifyAEMDetails();
            cy.logger('AEM', 'Verifing AEM details are filled successfully');
            AEMUpgradeObj.verifyCheckboxForUncheckPayment();
            cy.logger('AEM', 'Verifing checkbox status for payment');
            cy.contains(`Return to Company`).should('be.visible').click();
            cy.logger('CD application', 'Return to company for Automation test');
            cy.CDSignOut();
            cy.logger('CD application', 'Sign Out from Automation Test Company');

            //Login to MyFDA application
            cy.visit(Cypress.env('myFDAurl'));
            cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
            cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
                const { desiredUserId, password } = data.subUser;
                cy.login(desiredUserId, password);
            })
            cy.logger('application', "Validated success Login Msg-->Login Test");

            cy.fixture('./Home/AEM/AEMPurchase.json').then((input) => {
            AEMPurchaseobj.verifyLandingPage();
            cy.logger('AEM', 'Click on Adverse Event Management tickler');
            AEMPurchaseobj.selectBlockValue();
            cy.logger('AEM', 'Selecting block values');
            AEMPurchaseobj.VerifyPricing();
            cy.logger('AEM', 'Verifing pricing price');
            cy.wait(5000);
            AEMPurchaseobj.selectPaymentModeBankwire();
            cy.logger('AEM', 'Selecting payment mode i.e. Bankwire mode');
            AEMPurchaseobj.verifyInvoiceDetailsForBankWire();
            cy.logger('AEM', 'Verifing invoice details for bankwire');
            AEMPurchaseobj.VerifyPAymentbyBankwire(input.Input);
            cy.logger('AEM', 'Verifing payment is successfully done for bankwire mode');
            cy.MyFDALogOut();

            //Login to CD application
            cy.visit(Cypress.env('CDurl'), { failOnStatusCode: false });
            cy.logger('applicationCD', "CD Launched Application-->Login Test");
            cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
                cy.logger('CDLogin', 'Logging to CD using valid credentials')
                const { username, password } = data;
                cy.LoginCD(username, password);
                cy.wait(2000);
            })
            cy.logger('application', "Validated success Login Msg-->Login Test");
            const homepage = new HomePage();
            homepage.goForCompany();
            cy.logger('CD application', 'Search for NewTest company');

            AEMDetailsObj.verifyAEMDetails();
            cy.logger('AEM', 'Verifing AEM details are filled successfully');
            AEMUpgradeObj.verifyCheckboxForCheckPayment();
            cy.logger('AEM', 'Verifing checkbox status for payment');
            cy.contains(`Return to Company`).should('be.visible').click();
            cy.logger('CD application', 'Return to company for Automation test');
            cy.CDSignOut();
            cy.logger('CD application', 'Sign Out from Automation Test Company');

            //Login to MyFDA application
            cy.visit(Cypress.env('myFDAurl'));
            cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
            cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
                const { desiredUserId, password } = data.subUser;
                cy.login(desiredUserId, password);
            })
            cy.logger('application', "Validated success Login Msg-->Login Test");
            AEMUpgradeObj.verifyLandingPage();
            cy.logger('AEM', 'Click on Adverse Event Management tickler');
            const index = 1;
            AEMUpgradeObj.verifyLandingPage();
            cy.logger('AEM', 'Click on Adverse Event Management tickler');
            console.log('Block Values:', data.BlockValues);
            AEMUpgradeObj.verifyBlockValues(data.BlockValues, index);
            cy.logger('AEM', 'Selecting block values');
            AEMPurchaseobj.selectPaymentModeCC();
            cy.logger('AEM', 'Selecting payment mode i.e. Bankwire mode');
            AEMPurchaseobj.VerifyPAymentbyCC(input.Input);
            cy.logger('AEM', 'Verifing payment is successfully done for bankwire mode');
            cy.MyFDALogOut();
            cy.logger('MyFDA application', 'Login out from myfda for Automation Test user');

            //Login to CD application
            cy.visit(Cypress.env('CDurl'), { failOnStatusCode: false });
            cy.logger('applicationCD', "CD Launched Application-->Login Test");
            cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
                cy.logger('CDLogin', 'Logging to CD using valid credentials')
                const { username, password } = data;
                cy.LoginCD(username, password);
                cy.wait(2000);
            })
            cy.logger('application', "Validated success Login Msg-->Login Test");
            homepage.goForCompany();
            cy.logger('CD application', 'Search for NewTest company');
            AEMUpgradeObj.verifyNotepadIsUpdatedCC(data.NotepadInfo,data.BlockPrice, index);
            cy.logger('CD application', 'Verifing notepad is updated after doing payment');
            AEMPurchaseobj.configureEmail(input.Input);
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
        })
    })
    })
})
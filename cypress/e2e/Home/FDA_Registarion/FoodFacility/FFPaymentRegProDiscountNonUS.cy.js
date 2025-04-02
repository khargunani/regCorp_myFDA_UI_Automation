import HomePage from "../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import FFPayment from "../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFPaymentPage";
import BTAPayment from "../../../../pages/ContactDirect/BTA/BTAPaymentPage";
import CreateInquiry from "../../../../pages/ContactDirect/Home/Inquiry/CreateInquiryBTAPage";
import FFRegProPayment from "../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFRegProPaymentPage";
import RegPro from "../../../../pages/ContactDirect/RegistrarProfessional/RegProPage";
import RegProNonUS from "../../../../pages/ContactDirect/RegistrarProfessional/RegProNonUSPage";
import FFRegProPaymentPageNonUS from "../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFRegProPaymentPageNonUS";

const startTime = Date.now();
const FFobjpay = new FFPayment();
const homepage = new HomePage();
const createinquiry = new CreateInquiry();
const FFRegProObj = new FFRegProPayment();
const RegProObj = new RegPro();
const FFNonUSObj = new FFRegProPaymentPageNonUS();
const RegProNonUSObj = new RegProNonUS();

describe('Validate all payment flow with different mode on myFDA', () => {

    beforeEach(() => {
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
        homepage.goForNonUSCompany();
        cy.logger('CD application', 'Search for Kimmy Test company');
        RegProObj.monitorSetting();
        cy.logger('Monitor', 'Changing monitor settings');
        RegProObj.updateBTASetting();
        cy.logger('Update BTA', 'Changing BTA settings');
    });

    it('Verify user can do payment for custom or discount price if it is configured in CD', () => {
        RegProNonUSObj.regProSettingFor3YearNonUS();
        cy.logger('Registrar Professional', 'Changing regPro settings for 1 year');
        RegProObj.returnToPage();
        cy.logger('CD application', 'Return to Home page');
        FFobjpay.verifyDiscountCustomPrice();
        cy.logger('Cd application', 'checking if custom or discount price is configured if yes then payment will be done for that price')
        homepage.returnToCompany();
        createinquiry.openInquiryTabFor3Year();
        cy.logger('CD application', 'Open and create an inquiry');
        homepage.returnToCompany();
        cy.logger('CD application', 'Return to a Kimmy Test company');
        cy.CDSignOut();
        cy.logger('CD application', 'Sign Out from Kimmy Test Company');
        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('ContactDirect/MyFDA/BTANonUSCompany.json').then((data) => {
            const { desiredUserId, password } = data.NonUS;
            cy.loginNonUS(desiredUserId, password);
        })
        cy.fixture('Home/FDARegistration/FoodFacility/FFPayment').then((data) => {
            FFRegProObj.verifyFF3YearPayment();
            cy.logger('MyFDA application', '1 year Payment');
            FFNonUSObj.fillDetailsForCheckPayment(data.PaymentDetails);
            cy.logger('MyFDA application', 'Details for online payment');
            FFNonUSObj.verifyInvoiceDetailsFor3BankWire();
            cy.logger('MyFDA application', 'Verifying invoice details for Bankwire');
            cy.MyFDALogOut();
            cy.logger('MyFDA application', 'Logout successfully');

            cy.visit(Cypress.env('CDurl'), { failOnStatusCode: false });
            cy.logger('applicationCD', "CD Launched Application-->Login Test");
            cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
                cy.logger('CDLogin', 'Logging to CD using valid credentials')
                const { username, password } = data;
                cy.LoginCD(username, password);
                cy.wait(10000);
            })
            cy.logger('application', "Validated success Login Msg-->Login Test");
            homepage.goForNonUSCompany();
            cy.logger('CD application', 'Search for test company');
            createinquiry.verifyInquiryIsUpdatedFor3Year();
            cy.logger('CD application', 'Verifying inquiry stage is updated or not');
            RegProObj.returnToPage();
            cy.logger('CD application', 'Return to Home page');
            RegProNonUSObj.paymentVerificationFor3YearNonUSBankwire();
            cy.logger('CD application', 'Payment verification on CD side');
            FFNonUSObj.configureEmail(data.PaymentDetails);
            cy.logger('CD application', 'Verifying email on successful payemnt for 1 year renewal');
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);
        })
    })
})

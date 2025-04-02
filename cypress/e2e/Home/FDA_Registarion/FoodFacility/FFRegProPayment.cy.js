import HomePage from "../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import BTAPayment from "../../../../pages/ContactDirect/BTA/BTAPaymentPage";
import CreateInquiry from "../../../../pages/ContactDirect/Home/Inquiry/CreateInquiryBTAPage";
import FFRegProPayment from "../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFRegProPaymentPage";
import RegPro from "../../../../pages/ContactDirect/RegistrarProfessional/RegProPage";

const startTime = Date.now();
const FFRegProObj = new FFRegProPayment();
const homepage = new HomePage();
const createinquiry = new CreateInquiry();
const RegProObj = new RegPro();

describe('Validate all payment flow with different mode on myFDA for US Company', () => {

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
        homepage.goForUSCompany();
        cy.logger('CD application', 'Search for Kimmy Test company');
        RegProObj.monitorSetting();
        cy.logger('Monitor', 'Changing monitor settings');
        RegProObj.updateBTASetting();
        cy.logger('Update BTA', 'Changing BTA settings');
    });

    it('Verify user can do payment for 1 year via bankwire mode', () => {
        RegProObj.regProSettingFor1YearUS();
        cy.logger('Registrar Professional', 'Changing regPro settings for 1 year');
        RegProObj.returnToPage();
        cy.logger('CD application', 'Return to Home page');
        createinquiry.openInquiryTab();
        cy.logger('CD application', 'Open and create an inquiry');
        homepage.returnToCompany();
        cy.logger('CD application', 'Return to a Kimmy Test company');
        cy.CDSignOut();
        cy.logger('CD application', 'Sign Out from Kimmy Test Company');

        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
        })
        cy.fixture('Home/FDARegistration/FoodFacility/FFPayment').then((data) => {
            FFRegProObj.verifyFFPayment();
            cy.logger('MyFDA application', '1 year Payment');
            FFRegProObj.fillDetailsForCheckPayment(data.PaymentDetails);
            cy.logger('MyFDA application', 'Details for check payment');

            FFRegProObj.verifyInvoiceDetailsForBankWire();
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
            homepage.goForUSCompany();
            cy.logger('CD application', 'Search for NewTest company');
            createinquiry.verifyAutoInquiryForRegPro();
            createinquiry.verifyInquiryIsUpdated();
            cy.logger('CD application', 'Verifying inquiry stage is updated or not');
            RegProObj.returnToPage();
            cy.logger('CD application', 'Return to Home page');
            RegProObj.paymentVerificationFor1YearUSBankwire();
            cy.logger('CD application', 'Payment verification on CD side');
            FFRegProObj.configureEmail(data.PaymentDetails);
            cy.logger('CD application', 'Verifying email after payment is done');
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);
        })
    })

    it('Verify user can do payment for 2 year via bankwire mode', () => {
        RegProObj.regProSettingFor2YearUS();
        cy.logger('Registrar Professional', 'Changing regPro settings for 1 year');
        RegProObj.returnToPage();
        cy.logger('CD application', 'Return to Home page');
        const createinquiry = new CreateInquiry();
        createinquiry.openInquiryTabFor2Year();
        cy.logger('CD application', 'Open and create an inquiry');
        homepage.returnToCompany();
        cy.logger('CD application', 'Return to a Kimmy Test company');
        cy.CDSignOut();
        cy.logger('CD application', 'Sign Out from Kimmy Test Company');

        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
        })
        cy.fixture('Home/FDARegistration/FoodFacility/FFPayment').then((data) => {
            FFRegProObj.verifyFF2YearPayment();
            cy.logger('MyFDA application', '2 year Payment');
            FFRegProObj.fillDetailsForCheckPayment(data.PaymentDetails);
            cy.logger('MyFDA application', 'Details for check payment');
            FFRegProObj.verifyInvoiceDetailsForBankWire();
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
            homepage.goForUSCompany();
            cy.logger('CD application', 'Search for NewTest company');
            createinquiry.verifyAutoInquiryForRegPro2();
            createinquiry.verifyInquiryIsUpdatedFor2Year();
            cy.logger('CD application', 'Verifying inquiry stage is updated or not');
            RegProObj.returnToPage();
            cy.logger('CD application', 'Return to Home page');
            RegProObj.paymentVerificationFor2YearUSBankwire();
            cy.logger('CD application', 'Payment verification on CD side');
            FFRegProObj.configureEmail(data.PaymentDetails);
            cy.logger('CD application', 'Verifying email after payment is done');
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);
        })
    })

    it('Verify user can do payment for 3 year via bankwire mode', () => {
        RegProObj.regProSettingFor3YearUS();
        cy.logger('Registrar Professional', 'Changing regPro settings for 1 year');
        RegProObj.returnToPage();
        cy.logger('CD application', 'Return to Home page');
        const createinquiry = new CreateInquiry();
        createinquiry.openInquiryTabFor3Year();
        cy.logger('CD application', 'Open and create an inquiry');
        homepage.returnToCompany();
        cy.logger('CD application', 'Return to a Kimmy Test company');
        cy.CDSignOut();
        cy.logger('CD application', 'Sign Out from Kimmy Test Company');

        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
        })
        cy.fixture('Home/FDARegistration/FoodFacility/FFPayment').then((data) => {
            FFRegProObj.verifyFF3YearPayment();
            cy.logger('MyFDA application', '3 year Payment');
            FFRegProObj.fillDetailsForCheckPayment(data.PaymentDetails);
            cy.logger('MyFDA application', 'Details for check payment');
            FFRegProObj.verifyInvoiceDetailsFor3BankWire();
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
            homepage.goForUSCompany();
            cy.logger('CD application', 'Search for NewTest company');
            createinquiry.verifyAutoInquiryForRegPro3();
            createinquiry.verifyInquiryIsUpdatedFor3Year();
            cy.logger('CD application', 'Verifying inquiry stage is updated or not');
            RegProObj.returnToPage();
            cy.logger('CD application', 'Return to Home page');
            RegProObj.paymentVerificationFor3YearUSBankwire();
            cy.logger('CD application', 'Payment verification on CD side');
            FFRegProObj.configureEmail(data.PaymentDetails);
            cy.logger('CD application', 'Verifying email after payment is done');
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);
        })
    })

    it('Verify user can do payment for 1 year via CC mode', () => {
        RegProObj.regProSettingFor1YearUS();
        cy.logger('Registrar Professional', 'Changing regPro settings for 1 year');
        RegProObj.returnToPage();
        cy.logger('CD application', 'Return to Home page');
        createinquiry.openInquiryTab();
        cy.logger('CD application', 'Open and create an inquiry');
        homepage.returnToCompany();
        cy.logger('CD application', 'Return to a Kimmy Test company');
        cy.CDSignOut();
        cy.logger('CD application', 'Sign Out from Kimmy Test Company');

        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
        })
        cy.fixture('Home/FDARegistration/FoodFacility/FFPayment').then((data) => {
            FFRegProObj.verifyFFPayment();
            cy.logger('MyFDA application', '1 year Payment');
            FFRegProObj.fillDetailsForOnlinePayment(data.PaymentDetails);
            cy.logger('MyFDA application', 'Details for online payment');
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
            homepage.goForUSCompany();
            cy.logger('CD application', 'Search for test company');
            const BTAobj = new BTAPayment();
            BTAobj.verifyBTAPaymentIsDone();
            cy.logger('CD application', 'Verified payment details updated on CD side');
            homepage.returnToCompany();
            createinquiry.verifyAutoInquiryForRegProOnline();
            createinquiry.verifyInquiryIsUpdatedForOnlinePayment1Year();
            cy.logger('CD application', 'Verifying inquiry stage is updated or not');
            RegProObj.returnToPage();
            cy.logger('CD application', 'Return to Home page');
            RegProObj.paymentVerificationFor1YearUS();
            cy.logger('CD application', 'Payment verification on CD side');
            FFRegProObj.configureEmail(data.PaymentDetails);
            cy.logger('CD application', 'Verifying email on successful payemnt for 1 year renewal');
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);
        })
    })

    it.only('Verify user can do payment for 2 year via CC mode', () => {
        RegProObj.regProSettingFor2YearUS();
        cy.logger('Registrar Professional', 'Changing regPro settings for 1 year');
        RegProObj.returnToPage();
        cy.logger('CD application', 'Return to Home page');
        createinquiry.openInquiryTabFor2Year();
        cy.logger('CD application', 'Open and create an inquiry');
        homepage.returnToCompany();
        cy.logger('CD application', 'Return to a Kimmy Test company');
        cy.CDSignOut();
        cy.logger('CD application', 'Sign Out from Kimmy Test Company');

        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
        })
        cy.fixture('Home/FDARegistration/FoodFacility/FFPayment').then((data) => {
            FFRegProObj.verifyFF2YearPayment();
            cy.logger('MyFDA application', '1 year Payment');
            FFRegProObj.fillDetailsForOnlinePayment(data.PaymentDetails);
            cy.logger('MyFDA application', 'Details for online payment');
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
            homepage.goForUSCompany();
            cy.logger('CD application', 'Search for test company');
            const BTAobj = new BTAPayment();
            BTAobj.verifyBTAPaymentIsDone();
            cy.logger('CD application', 'Verified payment details updated on CD side');
            homepage.returnToCompany();
            cy.logger('CD application', 'redirecting to homepage');
            createinquiry.verifyAutoInquiryForRegPro2Online();
            createinquiry.verifyInquiryIsUpdatedForOnlinePayment2Year();
            cy.logger('CD application', 'Verifying inquiry stage is updated or not');
            RegProObj.returnToPage();
            cy.logger('CD application', 'Return to Home page');
            RegProObj.paymentVerificationFor2YearUS();
            cy.logger('CD application', 'Payment verification on CD side');
            FFRegProObj.configureEmail(data.PaymentDetails);
            cy.logger('CD application', 'Verifying email on successful payemnt for 1 year renewal');
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);
        })
    })

    it('Verify user can do payment for 3 year via CC mode', () => {
        RegProObj.regProSettingFor3YearUS();
        cy.logger('Registrar Professional', 'Changing regPro settings for 1 year');
        RegProObj.returnToPage();
        cy.logger('CD application', 'Return to Home page');
        createinquiry.openInquiryTabFor3Year();
        cy.logger('CD application', 'Open and create an inquiry');
        homepage.returnToCompany();
        cy.logger('CD application', 'Return to a Kimmy Test company');
        cy.CDSignOut();
        cy.logger('CD application', 'Sign Out from Kimmy Test Company');

        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
        })
        cy.fixture('Home/FDARegistration/FoodFacility/FFPayment').then((data) => {
            FFRegProObj.verifyFF3YearPayment();
            cy.logger('MyFDA application', '1 year Payment');
            FFRegProObj.fillDetailsForOnlinePayment(data.PaymentDetails);
            cy.logger('MyFDA application', 'Details for online payment');
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
            homepage.goForUSCompany();
            cy.logger('CD application', 'Search for test company');
            const BTAobj = new BTAPayment();
            BTAobj.verifyBTAPaymentIsDone();
            cy.logger('CD application', 'Verified payment details updated on CD side');
            homepage.returnToCompany();
            cy.logger('CD application', 'redirecting to homepage');
            createinquiry.verifyAutoInquiryForRegPro3Online();
            createinquiry.verifyInquiryIsUpdatedForOnlinePayment3Year();
            cy.logger('CD application', 'Verifying inquiry stage is updated or not');
            RegProObj.returnToPage();
            cy.logger('CD application', 'Return to Home page');
            RegProObj.paymentVerificationFor3YearUS();
            cy.logger('CD application', 'Payment verification on CD side');
            FFRegProObj.configureEmail(data.PaymentDetails);
            cy.logger('CD application', 'Verifying email on successful payemnt for 1 year renewal');
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);
        })
    })
})




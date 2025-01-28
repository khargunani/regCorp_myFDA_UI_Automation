import HomePage from "../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import FFPayment from "../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFPaymentPage";
import BTAPayment from "../../../../pages/ContactDirect/BTA/BTAPaymentPage";
import CreateInquiry from "../../../../pages/ContactDirect/Home/Inquiry/CreateInquiryBTAPage";

const startTime = Date.now();
const FFobjpay = new FFPayment();
const homepage = new HomePage();
const createinquiry = new CreateInquiry();
const data = {
    email: 'btapayment@mailslurp.biz',
    inboxid: '17a6b9af-f29d-4a4a-b557-f98d549a0ff5'
};
describe('Validate add drug registration process on myFDA', () => {

    beforeEach(() => {
        cy.visit('https://dev.contactdirect.com/cdlogin.jsp', { failOnStatusCode: false });
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
    });


    it('Verify user can do payment for 1 year via bankwire mode', () => {
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
        cy.fixture('Home/FDARegistration/FoodFacility/FFPayment').then((data)=>{
            FFobjpay.verifyFFPayment();
            cy.logger('MyFDA application', '1 year Payment');
            FFobjpay.fillDetailsForCheckPayment(data.PaymentDetails);
            cy.logger('MyFDA application', 'Details for check payment');
        })
            FFobjpay.verifyInvoiceDetailsForBankWire();
            cy.logger('MyFDA application', 'Verifying invoice details for Bankwire');
            cy.MyFDALogOut();
            cy.logger('MyFDA application', 'Logout successfully');
        cy.visit('https://dev.contactdirect.com/cdlogin.jsp', { failOnStatusCode: false });
        cy.logger('applicationCD', "CD Launched Application-->Login Test");
        cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
            cy.logger('CDLogin', 'Logging to CD using valid credentials')
            const { username, password } = data;
            cy.LoginCD(username, password);
            cy.wait(10000);
        })
        cy.logger('application', "Validated success Login Msg-->Login Test");
        homepage.goForCompany();
        cy.logger('CD application', 'Search for NewTest company');
        createinquiry.verifyInquiryIsUpdated();
        cy.logger('CD application', 'Verifying inquiry stage is updated or not');
        FFobjpay.verifyEmailOnCheckPayment(data.inboxid);
        cy.logger('CD application', 'Verifying email after payment is done');
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);
    })

    it('Verify user can do payment for 2 year via bankwire mode', () => {
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
        cy.fixture('Home/FDARegistration/FoodFacility/FFPayment').then((data)=>{
            FFobjpay.verifyFF2YearPayment();
            cy.logger('MyFDA application', '2 year Payment');
            FFobjpay.fillDetailsForCheckPayment(data.PaymentDetails);
            cy.logger('MyFDA application', 'Details for check payment');
            FFobjpay.verifyInvoiceDetailsForBankWire();
            cy.logger('MyFDA application', 'Verifying invoice details for Bankwire');
            cy.MyFDALogOut();
            cy.logger('MyFDA application', 'Logout successfully');

        })

        cy.visit('https://dev.contactdirect.com/cdlogin.jsp', { failOnStatusCode: false });
        cy.logger('applicationCD', "CD Launched Application-->Login Test");
        cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
            cy.logger('CDLogin', 'Logging to CD using valid credentials')
            const { username, password } = data;
            cy.LoginCD(username, password);
            cy.wait(10000);
        })
        cy.logger('application', "Validated success Login Msg-->Login Test");
        homepage.goForCompany();
        cy.logger('CD application', 'Search for NewTest company');
        createinquiry.verifyInquiryIsUpdatedFor2Year();
        cy.logger('CD application', 'Verifying inquiry stage is updated or not');
        FFobjpay.verifyEmailOnCheckPayment(data.inboxid);
        cy.logger('CD application', 'Verifying email after payment is done');
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);
    })


    it('Verify user can do payment for 3 year via bankwire mode', () => {
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
        cy.fixture('Home/FDARegistration/FoodFacility/FFPayment').then((data)=>{
            FFobjpay.verifyFF3YearPayment();
            cy.logger('MyFDA application', '3 year Payment');
            FFobjpay.fillDetailsForCheckPayment(data.PaymentDetails);
            cy.logger('MyFDA application', 'Details for check payment');
            FFobjpay.verifyInvoiceDetailsForBankWire();
            cy.logger('MyFDA application', 'Verifying invoice details for Bankwire');
            cy.MyFDALogOut();
            cy.logger('MyFDA application', 'Logout successfully');
        })

        cy.visit('https://dev.contactdirect.com/cdlogin.jsp', { failOnStatusCode: false });
        cy.logger('applicationCD', "CD Launched Application-->Login Test");
        cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
            cy.logger('CDLogin', 'Logging to CD using valid credentials')
            const { username, password } = data;
            cy.LoginCD(username, password);
            cy.wait(10000);
        })
        cy.logger('application', "Validated success Login Msg-->Login Test");
        homepage.goForCompany();
        cy.logger('CD application', 'Search for NewTest company');
        createinquiry.verifyInquiryIsUpdatedFor3Year();
        cy.logger('CD application', 'Verifying inquiry stage is updated or not');
        FFobjpay.verifyEmailOnCheckPayment(data.inboxid);
        cy.logger('CD application', 'Verifying email after payment is done');
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);
    })

    it('Verify user can do payment for 1 year via CC mode', () => {
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
        cy.fixture('Home/FDARegistration/FoodFacility/FFPayment').then((data)=>{
            FFobjpay.verifyFFPayment();
            cy.logger('MyFDA application', '1 year Payment');
            FFobjpay.fillDetailsForOnlinePayment(data.PaymentDetails);
            cy.logger('MyFDA application', 'Details for online payment');
            cy.MyFDALogOut();
            cy.logger('MyFDA application', 'Logout successfully');

        })
        cy.visit('https://dev.contactdirect.com/cdlogin.jsp', { failOnStatusCode: false });
        cy.logger('applicationCD', "CD Launched Application-->Login Test");
        cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
            cy.logger('CDLogin', 'Logging to CD using valid credentials')
            const { username, password } = data;
            cy.LoginCD(username, password);
            cy.wait(10000);
        })
        cy.logger('application', "Validated success Login Msg-->Login Test");
        homepage.goForCompany();
        cy.logger('CD application', 'Search for test company');
        const BTAobj = new BTAPayment();
        BTAobj.verifyBTAPaymentIsDone();
        cy.logger('CD application', 'Verified payment details updated on CD side');
        homepage.returnToCompany();
        createinquiry.verifyInquiryIsUpdatedForOnlinePayment1Year();
        cy.logger('CD application', 'Verifying inquiry stage is updated or not');
        FFobjpay.verifyEmailOnOnlinePayment(data.inboxid);
        cy.logger('CD application', 'Verifying email on successful payemnt for 1 year renewal');
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);

    })

    it('Verify user can do payment for 2 year via CC mode', () => {
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
        cy.fixture('Home/FDARegistration/FoodFacility/FFPayment').then((data)=>{
            FFobjpay.verifyFF2YearPayment();
            cy.logger('MyFDA application', '1 year Payment');
            FFobjpay.fillDetailsForOnlinePayment(data.PaymentDetails);
            cy.logger('MyFDA application', 'Details for online payment');
            cy.MyFDALogOut();
            cy.logger('MyFDA application', 'Logout successfully');

        })

        cy.visit('https://dev.contactdirect.com/cdlogin.jsp', { failOnStatusCode: false });
        cy.logger('applicationCD', "CD Launched Application-->Login Test");
        cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
            cy.logger('CDLogin', 'Logging to CD using valid credentials')
            const { username, password } = data;
            cy.LoginCD(username, password);
            cy.wait(10000);
        })
        cy.logger('application', "Validated success Login Msg-->Login Test");
        homepage.goForCompany();
        cy.logger('CD application', 'Search for test company');
        const BTAobj = new BTAPayment();
        BTAobj.verifyBTAPaymentIsDone();
        cy.logger('CD application', 'Verified payment details updated on CD side');
        homepage.returnToCompany();
        cy.logger('CD application', 'redirecting to homepage');
        createinquiry.verifyInquiryIsUpdatedForOnlinePayment2Year();
        cy.logger('CD application', 'Verifying inquiry stage is updated or not');
        FFobjpay.verifyEmailOnOnlinePayment(data.inboxid);
        cy.logger('CD application', 'Verifying email on successful payemnt for 1 year renewal');
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);

    })


    it('Verify user can do payment for 3 year via CC mode', () => {
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
        cy.fixture('Home/FDARegistration/FoodFacility/FFPayment').then((data)=>{
            FFobjpay.verifyFF3YearPayment();
            cy.logger('MyFDA application', '1 year Payment');
            FFobjpay.fillDetailsForOnlinePayment(data.PaymentDetails);
            cy.logger('MyFDA application', 'Details for online payment');
            cy.MyFDALogOut();
            cy.logger('MyFDA application', 'Logout successfully');

        })

        cy.visit('https://dev.contactdirect.com/cdlogin.jsp', { failOnStatusCode: false });
        cy.logger('applicationCD', "CD Launched Application-->Login Test");
        cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
            cy.logger('CDLogin', 'Logging to CD using valid credentials')
            const { username, password } = data;
            cy.LoginCD(username, password);
            cy.wait(10000);
        })
        cy.logger('application', "Validated success Login Msg-->Login Test");
        homepage.goForCompany();
        cy.logger('CD application', 'Search for test company');
        const BTAobj = new BTAPayment();
        BTAobj.verifyBTAPaymentIsDone();
        cy.logger('CD application', 'Verified payment details updated on CD side');
        homepage.returnToCompany();
        cy.logger('CD application', 'redirecting to homepage');
        createinquiry.verifyInquiryIsUpdatedForOnlinePayment3Year();
        cy.logger('CD application', 'Verifying inquiry stage is updated or not');
        FFobjpay.verifyEmailOnOnlinePayment(data.inboxid);
        cy.logger('CD application', 'Verifying email on successful payemnt for 1 year renewal');
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);

    })

    it.only('Verify user can do payment for custom or discount price if it is configured in CD', () => {
        FFobjpay.verifyDiscount();
        cy.logger('Cd application','checking if custom or discount price is configured if yes then payment will be done for that price')
        homepage.returnToCompany();
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
        cy.fixture('Home/FDARegistration/FoodFacility/FFPayment').then((data)=>{

            FFobjpay.verifyFF3YearPayment();
            cy.logger('MyFDA application', '1 year Payment');
            FFobjpay.fillDetailsForOnlinePayment(data.PaymentDetails);
            cy.logger('MyFDA application', 'Details for online payment');
            cy.MyFDALogOut();
            cy.logger('MyFDA application', 'Logout successfully');

        })

        cy.visit('https://dev.contactdirect.com/cdlogin.jsp', { failOnStatusCode: false });
        cy.logger('applicationCD', "CD Launched Application-->Login Test");
        cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
            cy.logger('CDLogin', 'Logging to CD using valid credentials')
            const { username, password } = data;
            cy.LoginCD(username, password);
            cy.wait(10000);
        })
        cy.logger('application', "Validated success Login Msg-->Login Test");
        homepage.goForCompany();
        cy.logger('CD application', 'Search for test company');
        const BTAobj = new BTAPayment();
        BTAobj.verifyBTAPaymentIsDone();
        cy.logger('CD application', 'Verified payment details updated on CD side');
        homepage.returnToCompany();
        cy.logger('CD application', 'redirecting to homepage');
        createinquiry.verifyInquiryIsUpdatedForOnlinePayment3Year();
        cy.logger('CD application', 'Verifying inquiry stage is updated or not');
        FFobjpay.verifyEmailOnOnlinePayment(data.inboxid);
        cy.logger('CD application', 'Verifying email on successful payemnt for 1 year renewal');
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);

    })

})




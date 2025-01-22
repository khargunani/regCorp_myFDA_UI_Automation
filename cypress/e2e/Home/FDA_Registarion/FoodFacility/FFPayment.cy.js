import HomePage from "../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import FFPayment from "../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFPaymentPage";
import BTAPayment from "../../../../pages/ContactDirect/BTA/BTAPaymentPage";
const startTime = Date.now();
const FFobjpay = new FFPayment();
describe('Validate add drug registration process on myFDA', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('myFDA'));
        cy.logger('application', "Launched Application-->Login Test");
        cy.wait(1000);
        cy.logger('application', "Validated success Login Msg-->Login Test");
    });

    it('Verify user can do payment for 1 year via CC mode', () => {
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
            FFobjpay.verifyFFPayment();
            FFobjpay.fillDetailsForOnlinePayment();
            //FFobjpay.verifyInvoiceDetailsForBankWire();    
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
        const homepage = new HomePage();
        homepage.goForCompany();
        cy.logger('CD application', 'Search for NewTest company');
        const BTAobj = new BTAPayment();
        BTAobj.verifyBTAPaymentIsDone();
        
})

it('Verify user can do payment for 2 year via CC mode', () => {
    cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
        const { desiredUserId, password } = data.subUser;
        cy.login(desiredUserId, password);
        FFobjpay.verifyFF2YearPayment();
        FFobjpay.fillDetailsForOnlinePayment();
        //FFobjpay.verifyInvoiceDetailsForBankWire();    
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
    const homepage = new HomePage();
    homepage.goForCompany();
    cy.logger('CD application', 'Search for NewTest company');
    const BTAobj = new BTAPayment();
    BTAobj.verifyBTAPaymentIsDone();
    
})


it('Verify user can do payment for 3 year via CC mode', () => {
    cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
        const { desiredUserId, password } = data.subUser;
        cy.login(desiredUserId, password);
        FFobjpay.verifyFF3YearPayment();
        FFobjpay.fillDetailsForOnlinePayment();
        //FFobjpay.verifyInvoiceDetailsForBankWire();    
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
    const homepage = new HomePage();
    homepage.goForCompany();
    cy.logger('CD application', 'Search for NewTest company');
    const BTAobj = new BTAPayment();
    BTAobj.verifyBTAPaymentIsDone();
    
})

it('Verify user can do payment for 1 year via bankwire mode', () => {
    cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
        const { desiredUserId, password } = data.subUser;
        cy.login(desiredUserId, password);
        FFobjpay.verifyFFPayment();
        FFobjpay.fillDetailsForCheckPayment();
        FFobjpay.verifyInvoiceDetailsForBankWire();    
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
    const homepage = new HomePage();
    homepage.goForCompany();
    cy.logger('CD application', 'Search for NewTest company');
    const BTAobj = new BTAPayment();
    BTAobj.verifyBTAPaymentIsDone();
    
})

it.only('Verify user can do payment for 2 year via bankwire mode', () => {
    cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
        const { desiredUserId, password } = data.subUser;
        cy.login(desiredUserId, password);
        FFobjpay.verifyFF2YearPayment();
        FFobjpay.fillDetailsForCheckPayment();
        FFobjpay.verifyInvoiceDetailsForBankWire();    
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
    const homepage = new HomePage();
    homepage.goForCompany();
    cy.logger('CD application', 'Search for NewTest company');
    const BTAobj = new BTAPayment();
    BTAobj.verifyBTAPaymentIsDone();
    
})

it('Verify user can do payment for 3 year via bankwire mode', () => {
    cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
        const { desiredUserId, password } = data.subUser;
        cy.login(desiredUserId, password);
        FFobjpay.verifyFF3YearPayment();
        FFobjpay.fillDetailsForCheckPayment();
        FFobjpay.verifyInvoiceDetailsForBankWire();    
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
    const homepage = new HomePage();
    homepage.goForCompany();
    cy.logger('CD application', 'Search for NewTest company');
    const BTAobj = new BTAPayment();
    BTAobj.verifyBTAPaymentIsDone();
    
})

    it('Verify user can do payment for a discount price via CC mode', () => {

        // cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
        //     const { desiredUserId, password } = data.subUser;
        //     cy.login(desiredUserId, password);
        //     FFobjpay.verifyFF2YearPayment();
        //     //FFobjpay.verifyInvoiceDetailsForBankWire();    
        // })

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
        cy.logger('CD application', 'Search for NewTest company');
        const BTAobj = new BTAPayment();
        BTAobj.verifyDiscountOfferedOnCD();
       // BTAobj.verifyBTAPaymentIsDone();
        
})
})

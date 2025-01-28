import HomePage from "../../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import FFPayment from "../../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFPaymentPage"
import BTAPayment from "../../../../../pages/ContactDirect/BTA/BTAPaymentPage"
import CDLogin from "../../../../../pages/ContactDirect/LoginPage/LoginPage"
const startTime = Date.now();
const FFobjpay = new FFPayment();
describe('Validate add drug registration process on myFDA', () => {


    it('Verify user can do payment for 1 year via CC mode', () => {

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
        cy.logger('CD application', 'Search for NewTest company');
        FFobjpay.verifyDiscount();


        cy.visit(Cypress.env('myFDA'));
        cy.logger('application', "Launched Application-->Login Test")
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
            FFobjpay.verifyFFPayment();
            FFobjpay.fillDetailsForOnlinePayment();
            //FFobjpay.verifyInvoiceDetailsForBankWire();    
        })

        cy.visit(Cypress.env('CDurl'),{failOnStatusCode: false});
        cy.logger('CDLogin','Logging to CD using valid credentials');
        cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {
         const loginobj = new CDLogin()
         loginobj.userLogin(login.username, login.password);
         cy.wait(5000);
         cy.logger('CDHome', 'Go For test company and verify edited details on cosmetic tickler');
         loginobj.goForCompany();
         const BTAobj = new BTAPayment();
         BTAobj.verifyBTAPaymentIsDone();
         

        })
      
        
})


    // it('Verify that user can see custom price or discount offered price in Update BTA and do payment for that price', () => {
    //     //Visit CD application
    //     cy.visit(Cypress.env('CDurl'), { failOnStatusCode: false });
    //     cy.logger('applicationCD', "CD Launched Application-->Login Test");
    //     cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
    //         cy.logger('CDLogin', 'Logging to CD using valid credentials')
    //         const { username, password } = data;
    //         cy.LoginCD(username, password);
    //         cy.wait(10000);
    //     })
    //     cy.logger('application', "Validated success Login Msg-->Login Test");
    //     const homepage = new HomePage();
    //     homepage.goForCompany();
    //     cy.logger('CD application', 'Search for NewTest company');
    //     FFobjpay.verifyDiscount();
    //     const loadTime = Date.now() - startTime;
    //     cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    // })

})

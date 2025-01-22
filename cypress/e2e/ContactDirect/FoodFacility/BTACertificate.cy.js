import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import BTACertificate from "../../../pages/ContactDirect/BTA/BTACertificatePage"
//import BTACertificate from "../../../pages/ContactDirect/FoodFacility/BTACertificatePage";
const startTime = Date.now();
const BTACertObj = new BTACertificate();
describe('Validate upload food facility certification process on myFDA', () => {

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
        homepage.goForCompany();
       // homepage.goForKimmyCompany();
        cy.logger('CD application', 'Search for NewTest company');
    });

    it('Verify that user is able to upload the certificate on cd side', () => {
        BTACertObj.verifyUploadBTACertificates();
        cy.logger('CD application', 'Verified upload certicate functionality');
        BTACertObj.verifyUpdateBTACertificates();
        cy.logger('CD application', 'Verified update uploaded certicate functionality');
        BTACertObj.verifyDeleteBTACertificates();
        cy.logger('CD application', 'Verified delete uploaded certicate functionality');
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })
})
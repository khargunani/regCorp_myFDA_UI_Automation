/// <reference types="cypress" />
import CreateInquiry from "../../../../pages/ContactDirect/Home/Inquiry/CreateInquiryBTAPage";
import CDLogin from "../../../../pages/ContactDirect/LoginPage/LoginPage";
import HomePage from "../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";

const startTime = Date.now();

describe('Validate CD login functionality', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('CDurl'), { failOnStatusCode: false });
        cy.logger('applicationCD', "CD Launched Application-->Login Test");
    });

    it('Verify user is able to create the Inquiry', () => {
        // Load login credentials and perform login
        cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {
            const loginobj = new CDLogin();
            cy.logger('CDLogin', 'Logging to CD using valid credentials');
            loginobj.userLogin(login.username, login.password);

            // Navigate to the homepage after login
            const homepage = new HomePage();
            homepage.goForCompany();
        });
        const createinquiry = new CreateInquiry();
        createinquiry.openInquiryTab();
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);
    });
});

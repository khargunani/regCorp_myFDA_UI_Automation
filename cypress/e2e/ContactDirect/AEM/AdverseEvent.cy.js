/// <reference types="cypress" />
import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import AEMDetails from "../../../pages/ContactDirect/AEM/AEMDetailsPage"


describe('Validate upload food facility certification process on myFDA', () => {

    const startTime = Date.now();
    const AEMDEtailsObj = new AEMDetails();

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
        cy.logger('CD application', 'Search for NewTest company');
    });

    it('Verify CD admin can select the details under AEM tickler for test company', () => {
        AEMDEtailsObj.verifyAEMDetails();
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

    it('Verify that user is able to see all blocks the correct pricing is appearing on CD side', () => {
        AEMDEtailsObj.verifyAllBlockPricing();
        cy.logger('AEM', 'Verifing all block and its pricing');
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

})
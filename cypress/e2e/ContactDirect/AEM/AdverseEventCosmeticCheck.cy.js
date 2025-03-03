/// <reference types="cypress" />
import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import AdverseEventCosmeticCheckPage from "../../../pages/ContactDirect/AEM/AdverseEventCosmeticCheckPage";

const AdverseEventCosmeticCheckObj = new AdverseEventCosmeticCheckPage();
const startTime = Date.now();

describe('Validate AEM service settings on CD', () => {

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
    })

    it('Verify for AEM service the checkbox should be checked under cosmetic tickler', () => {
        AdverseEventCosmeticCheckObj.verifyCosmeticCheckbox();
        cy.logger('AEM', 'Verified that cosmetic checkbox should be checked for AEM tickler');
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })
})
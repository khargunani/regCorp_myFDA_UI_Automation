/// <reference types="Cypress-xpath" />
import DrugEstablishment from "../../../pages/ContactDirect/Drugs/DrugEstablishmentPage";
import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
const startTime = Date.now();
const drugEstablishmentObj = new DrugEstablishment();

describe('Validate Drug Establishment functionality', () => {

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
    });

    it('Verify user can add fields in General Information of Drugs tickler in CD', () => {

        drugEstablishmentObj.generalInformation();
        cy.logger('CD Application', `Validated general information`);
        drugEstablishmentObj.businessOperationQualifier();
        cy.logger('CD Application', `Validated business operation qualifier and company functions`);
        drugEstablishmentObj.submit();
        cy.logger('CD Application', `Validated submit functionality`);
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })
})
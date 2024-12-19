/// <reference types="Cypress-xpath" />
import Labels from "../../../pages/ContactDirect/Drugs/LabelsPage";
import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
const startTime = Date.now();
const labelsObj = new Labels();

describe('Validate Labels functionality', () => {

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

    it('Verify that user can upload labels in CD', () => {
        labelsObj.uploadLabels();
        cy.logger('CD application', 'Verified upload labels functionality');
        labelsObj.editLabels();
        cy.logger('CD application', 'Verified edit labels functionality');
        labelsObj.deleteLabels();
        cy.logger('CD application', 'Verified delete labels functionality');
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

    // it('Verify updated labels are viewable to the user in MyFDA', () => {
    //     labelsObj.uploadManualLabels();
    //     cy.logger('CD application', 'Verified upload manual labels functionality');
    //     cy.visit(Cypress.env('myFDA'));
    //     cy.logger('application', "Launched Application-->Login Test");
    //     cy.wait(1000);
    //     cy.fixture('./Login/LoginPage').then((data) => {
    //         const { UserName, UserPassword } = data.validUser;
    //         cy.login(UserName, UserPassword);
    //     })
    //     cy.logger('application', "Validated success Login Msg-->Login Test");
    //     labelsObj.labelsViewable();
    //     cy.logger('My FDA', "Verified updated labels are viewable in MyFDA");
    //     const loadTime = Date.now() - startTime;
    //     cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    // })
})
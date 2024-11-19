import LeftNavigationPage from "../../../pages/HomePage/HomePage/LeftNavigationPage"

const startTime = Date.now();
const leftNavObj = new LeftNavigationPage();
describe('Validate Left Navigation Icons functionality', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('myFDA'));
        cy.logger('application', "Launched Application-->Login Test");
        cy.wait(1000);
        cy.fixture('./Login/LoginPage').then((data) => {
            const { UserName, UserPassword } = data.validUser;
            cy.login(UserName, UserPassword);
        })
        cy.logger('application', "Validated success Login Msg-->Login Test");
    });

    it('Verify that user can view Left Navgation menu icons', () => {
        //User can view Left navigation icons
        leftNavObj.verifyLeftNavigationIcon();
        cy.logger('application', "Verified Home Icon");
        //User can view Left navigation collapsable icons
        leftNavObj.verifyCollapsableLeftNavigationIcon();
        cy.logger('application', "Verified Home Icon");
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to LoginUser: ${loadTime}ms`);
    })
})

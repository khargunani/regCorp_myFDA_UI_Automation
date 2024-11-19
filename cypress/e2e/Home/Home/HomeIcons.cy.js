import HomePage from "../../../pages/HomePage/HomePage/HomeIconsPage"

const startTime = Date.now();
const homeObj = new HomePage();
describe('Validate Home Icons functionality', () => {

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

    it('Verify that user can view All icons on Home Page', () => {
        //User can view Home icon
        homeObj.verifyHomeIcon();
        cy.logger('application', "Verified Home Icon");
        //User can view icons on home page
        homeObj.verifyHomeIcons();
        cy.logger('application', "Verified Home Page Icons");
        //User can view My account icon
        homeObj.verifyMyAccountIcon();
        cy.logger('application', "Verified My Account Icon");
        //User can view Sign out icon
        homeObj.verifySignOutIcon();
        cy.logger('application', "Verified Sign Out Icon");
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to LoginUser: ${loadTime}ms`);
    })
})
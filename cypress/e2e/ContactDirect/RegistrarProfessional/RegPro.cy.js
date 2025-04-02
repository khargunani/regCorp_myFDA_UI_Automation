import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import RegPro from "../../../pages/ContactDirect/RegistrarProfessional/RegProPage";

const RegProObj = new RegPro();
const startTime = Date.now();
describe('Validate Registrar Professional process on CD side', () => {

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
        homepage.goForUSCompany();
        cy.logger('CD application', 'Search for Kimmy Test company');
    });

    it('Verify that user is able to see Banner visibility when any new message is there & Verify the menus when registered client record is viewed', () => {
        RegProObj.verifyNoviConnectBanner();
        cy.logger('Registrar Professional', 'Adding and verifing Banner visibility');
        RegProObj.menuVerification();
        cy.logger('Registrar Professional', 'Verifing menus of Registrar professional');
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

    it('Verify that user is able to see Banner visibility when user scroll downs & Maximize/Minimize the page', () => {
        RegProObj.scrollBannerVisibility();
        cy.logger('Registrar Professional', 'Verifing Banner visibility after scrolling page');
        RegProObj.maxminBannerVisibility();
        cy.logger('Registrar Professional', 'Verifing Banner visibility after maximizing and minimizing the page');
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

    it('Verify that user is able see an error message when invalid dates are entered in Registrar professional & Save/Cancel button functionality', () => {
        RegProObj.invalidDateVerification();
        cy.logger('Registrar Professional', 'Verifing error message after entering invalid dates');
        RegProObj.saveCancelVerification();
        cy.logger('Registrar Professional', 'Verifing save/cancel button functionality');
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })
})
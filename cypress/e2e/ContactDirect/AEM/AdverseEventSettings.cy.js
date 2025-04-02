/// <reference types="cypress" />
import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import AEMDetails from "../../../pages/ContactDirect/AEM/AEMDetailsPage"
import AEMSetting from "../../../pages/ContactDirect/AEM/AEMSettingsPage";


describe('Validate upload food facility certification process on myFDA', () => {

    const startTime = Date.now();
    const AdverseEventSettingobj = new AEMSetting();

    beforeEach(() => {
        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);

        })
        cy.logger('application', "Validated success Login Msg-->Login Test");
        
    })

    it('Verify AEM settings done on AEM portal those should refelct on CD side ', () => {

        AdverseEventSettingobj.verifyAEMSettings();
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
        cy.logger('CD application', 'Search for Test company');
        AdverseEventSettingobj.verifyAEMSettingsOnCD();
        cy.logger('MyFDA application', 'Configure setting details on AEM portal and verifying on CD side')
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })
})
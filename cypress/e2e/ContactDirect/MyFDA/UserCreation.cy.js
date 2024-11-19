/// <reference types="cypress" />
import UserCreation from "../../../pages/ContactDirect/MyFDA/UserCreationPage";
import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
const startTime = Date.now();
const userObj = new UserCreation();
describe('Validate User creation functionality', () => {

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

    it('Verify that user can create admin user from CD app', () => {
        cy.fixture('/ContactDirect/MyFDA/UserCreation').then((data) => {
            userObj.verifyAdminUserCreation(data.adminUser);
            cy.logger('CD app', 'Successfully created admin user');
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `TotalTime taken to LoginUser: ${loadTime}ms`);
        })
    })

    it('Verify that user can create sub user from CD app with Cosmetic permission', () => {
        cy.fixture('/ContactDirect/MyFDA/UserCreation').then((data) => {
            userObj.verifySubUserCreation(data.subUser);
            cy.logger('CD app', 'Successfully created admin user');

            const index = 7; // Change this to access different items
            const specificUser = data.subUser;

            // Call with specificAccess and index
            userObj.verifyEditUserPermissions(specificUser, index);

            const loadTime = Date.now() - startTime;
            cy.logger('performance', `TotalTime taken to LoginUser: ${loadTime}ms`);
        });
    });

    it.only('Verify that user can create sub user from CD app with Drugs permission', () => {
        cy.fixture('/ContactDirect/MyFDA/UserCreation').then((data) => {
            userObj.verifySubUserCreation(data.subUser);
            cy.logger('CD app', 'Successfully created admin user');

            const index = 6; // Change this to access different items
            const specificUser = data.subUser;

            // Call with specificAccess and index
            userObj.verifyEditUserPermissions(specificUser, index);

            const loadTime = Date.now() - startTime;
            cy.logger('performance', `TotalTime taken to LoginUser: ${loadTime}ms`);
        });
    });

    it.skip('Verify that user can create sub user from CD app', () => {
        cy.fixture('/ContactDirect/MyFDA/UserCreation').then((data) => {
            userObj.verifySubUserCreation(data.subUser);
            cy.logger('CD app', 'Successfully created admin user');
            cy.fixture('/ContactDirect/MyFDA/UserCreation').then((data) => {
                const index = 0; // Change this to access different items
                const specificAccess = data.subUserAccess[index];
                const specificUser = data.subUser;
                userObj.verifyEditUserPermissions(specificUser, specificAccess, index);
                const loadTime = Date.now() - startTime;
                cy.logger('performance', `TotalTime taken to LoginUser: ${loadTime}ms`);
            })

        })
    })
})
import CosmeticUser from "../../../../pages/HomePage/FDARegistrationPage/CosmeticPage/CosmeticUserPage";
const userObj = new CosmeticUser();
describe('Validate Cosmetic tickler functionality', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('myFDA'));
        cy.logger('application', "Launched Application-->Login Test");
        cy.wait(1000);
        cy.logger('application', "Validated success Login Msg-->Login Test");
    });

    it('Verify that admin user can see cosmetic tickler on MyFDA app', () => {
        cy.fixture('/ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.adminUser;
            cy.login(desiredUserId, password);
        })
        //cy.fixture('/ContactDirect/MyFDA/UserCreation').then((adminUser) => {

            userObj.verifyCosmeticTickler();
            cy.get("a[title='Sign Out']").click()
        //     cy.visit('https://dev.contactdirect.com/cdlogin.jsp', { failOnStatusCode: false });
        //     cy.logger('applicationCD', "CD Launched Application-->Login Test");
        //     const specificUser = adminUser.desiredUserId;
        //     cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
        //         cy.logger('CDLogin', 'Logging to CD using valid credentials')
        //         const { username, password } = data;
        //         cy.LoginCD(username, password);
        //     })
        //     cy.logger('application', "Validated success Login Msg-->Login Test");
         })
    })

    it('Verify that sub user can see cosmetic tickler on MyFDA app', () => {
        cy.fixture('/ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
        })
        userObj.verifyCosmeticTickler();
        cy.get("a[title='Sign Out']").click()
        // cy.visit('https://dev.contactdirect.com/cdlogin.jsp', { failOnStatusCode: false });
        // cy.logger('applicationCD', "CD Launched Application-->Login Test");

        // cy.fixture('./ContactDirect/Login/LoginPage').then((data) => {
        //     cy.logger('CDLogin', 'Logging to CD using valid credentials')
        //     const { username, password } = data;
        //     cy.LoginCD(username, password);
        // })
        // cy.fixture('/ContactDirect/MyFDA/UserCreation').then((UserCreation) => {
        //     cy.logger('application', "Validated success Login Msg-->Login Test");
          //  const specificUserId = UserCreation.subUser.desiredUserId;
           // cy.DeleteSubUser({ desiredUserId: specificUserId });
       // })
   // })
})
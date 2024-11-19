import SignUpPage from "../../../pages/SignUpPage/SignUpPage";
import LoginPage from "../../../pages/LoginPage/LoginPage";

const startTime = Date.now();
describe('Validate SignUp functionality', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('application', "Launched application --> SignUp Test");
    });

    // it.skip('Verify user can signup with valid credentials', () => {
    //     const signUpObj = new SignUpPage();
    //     cy.fixture('SignUp/SignUpPage').then((data) => {
    //         // Call the method to fill the signup form with valid user data
    //         signUpObj.fillValidUserCredentials(data.validUser);
    //         signUpObj.verifySuccessSignUp();
    //     });
    // })

    it('Verify that user can signup with valid credentials and login with same credentials', () => {
        const signUpObj = new SignUpPage();
        const loginobj = new LoginPage();
        cy.fixture('SignUp/SignUpPage').then(() => {
            // Call the method to fill the signup form with valid user data
            signUpObj.fillValidUserCredentials();
            // signUpObj.verifySuccessSignUp();
            cy.logger('My FDA application', "Validated SignUp Functionality with valid credentials-->SignUp Test for Valid user");
            loginobj.verifyLoginSuccess();
            cy.logger('application', "Validated success Login Msg-->Login Test");
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
        });
    })

    it('Verify that user can signup with invalid credentials', () => {
        const signUpObj = new SignUpPage();
        cy.fixture('SignUp/SignUpPage').then((data) => {
            // Call the method to fill the signup form with invalid user data
            signUpObj.fillinValidUserCredentials(data.invalidUser);
            signUpObj.verifyUnSuccessSignUp();
            cy.logger('My FDA application', "Validated SignUp Functionality with invalid credentials-->SignUp Test for Invalid user");
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
        });
    })
})
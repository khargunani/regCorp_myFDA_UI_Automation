import DrugAddRegistration from "../../../../pages/HomePage/FDARegistrationPage/DrugsPage/DrugAddRegistrationPage";
import HomePage from "../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import FFAddRegistration from "../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFAddRegistrationPage";
const startTime = Date.now();
const FFobj = new FFAddRegistration
describe('Validate add drug registration process on myFDA', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('myFDA'));
        cy.logger('application', "Launched Application-->Login Test");
        cy.wait(1000);
        cy.logger('application', "Validated success Login Msg-->Login Test");
    });

    it('Verify that user can add registration data on myFDA', () => {
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
            FFobj.verifyFFAddRegistration();
           // drugObj.verifyAddRegistration();
        })
})
})

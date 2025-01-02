import HomePage from "../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import FFPayment from "../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFPaymentPage";
import FFAddRegistration from "../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFAddRegistrationPage";
import FFViewCertificates from "../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFViewCertificatesPage";
const startTime = Date.now();
const FFobjpay = new FFPayment();
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
            FFobjpay.verifyFFPayment();
            
            
        })
})
})

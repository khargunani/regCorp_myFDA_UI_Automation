import HomePage from "../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import FFAddRegistration from "../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFAddRegistrationPage";
import FFViewCertificates from "../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFViewCertificatesPage";
const startTime = Date.now();
const FFobjcert = new FFViewCertificates();
describe('Validate add drug registration process on myFDA', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('myFDA'));
        cy.logger('application', "Launched Application-->Login Test");
        cy.wait(1000);
        cy.logger('application', "Validated success Login Msg-->Login Test");
    });

    it('Verify that user downlaod and share the certificates on myFDA side', () => {
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
            FFobjcert.verifyFFDownloadAndShareCertificates();
            
        })
})
})

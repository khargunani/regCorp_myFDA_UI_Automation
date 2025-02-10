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

    it('Verify that user can add registration data on myFDA', () => {
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
            FFobjcert.verifyFFDownloadAndShareCertificates();
            cy.logger('MyFDA application', 'Verified food facilty certificated');
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);
        })
    })
})

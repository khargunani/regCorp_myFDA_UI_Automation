import DrugEditRegistration from "../../../../pages/HomePage/FDARegistrationPage/DrugsPage/DrugEditRegistrationPage";
const startTime = Date.now();
const drugObj = new DrugEditRegistration();
describe('Validate edit drug registration process on myFDA', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('myFDA'));
        cy.logger('application', "Launched Application-->Login Test");
        cy.wait(1000);
        cy.logger('application', "Validated success Login Msg-->Login Test");
    });

    it('Verify that user can edit registration data on myFDA', () => {
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
            drugObj.verifyEditRegistration();

            cy.fixture('Home/FDARegistration/Drugs/DrugEditRegistration.json').then((registrationData) => {
                console.log(registrationData);
                drugObj.establishmentPhysicalAddress(registrationData.establishmentPhysicalAddress);
                cy.logger('Drug', "Edited establishment physical address");
                drugObj.mailingAddress(registrationData.mailingAddress);
                cy.logger('Drug', "Edited mailing address");
                drugObj.ownerOperator(registrationData.ownerOperator);
                cy.logger('Drug', "Edited owner operator details");
                drugObj.businessOperations(registrationData.businessOperations);
                cy.logger('Drug', "Edited business operations detail");
                drugObj.importers(registrationData.importers);
                cy.logger('Drug', "Edited importers detail");
                drugObj.reviewListings(registrationData.reviewListings);
                cy.logger('Drug', "Edited review listings detail");
                drugObj.payment(registrationData.payment);
                cy.logger('Drug', "Edited payment details");
                drugObj.confirmation(registrationData.confirmation);
                cy.logger('Drug', "Validated confirmation message after editing all details");
                const loadTime = Date.now() - startTime;
                cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
            });
        })
    })
})
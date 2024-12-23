import DrugAddRegistration from "../../../../pages/HomePage/FDARegistrationPage/DrugsPage/DrugAddRegistrationPage";
import HomePage from "../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
const startTime = Date.now();
const drugObj = new DrugAddRegistration();
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
            drugObj.verifyAddRegistration();

            cy.fixture('Home/FDARegistration/Drugs/DrugAddRegistration.json').then((registrationData) => {
                console.log(registrationData);
                drugObj.establishmentPhysicalAddress(registrationData.establishmentPhysicalAddress);
                cy.logger('Drug', "Added establishment physical address");
                drugObj.mailingAddress(registrationData.mailingAddress);
                cy.logger('Drug', "Added mailing address");
                drugObj.ownerOperator(registrationData.ownerOperator);
                cy.logger('Drug', "Added owner operator details");
                drugObj.businessOperations(registrationData.businessOperations);
                cy.logger('Drug', "Added business operation details");
                // drugObj.importers(registrationData.importers);
                // cy.logger('Drug', "Added importers details");
                drugObj.reviewListings(registrationData.reviewListings);
                cy.logger('Drug', "Added review listings detail");
                drugObj.payment(registrationData.payment);
                cy.logger('Drug', "Added payment details");
                drugObj.confirmation(registrationData.confirmation);
                cy.logger('Drug', "Validated confirmation message after adding all details");

                //Visit CD application
                cy.visit('https://testweb.myfda.com:8743/cdlogin.jsp', { failOnStatusCode: false });
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
                cy.logger('CD application', 'Search for NewTest company');
                drugObj.verifyRecordInCD(registrationData.establishmentPhysicalAddress, registrationData.mailingAddress
                    , registrationData.ownerOperator
                );
                cy.logger('CD application', 'Verify drug registration edites records on CD app');
                const loadTime = Date.now() - startTime;
                cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
            });
        })
    })
})
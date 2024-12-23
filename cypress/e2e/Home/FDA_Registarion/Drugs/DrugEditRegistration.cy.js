import DrugEditRegistration from "../../../../pages/HomePage/FDARegistrationPage/DrugsPage/DrugEditRegistrationPage";
import HomePage from "../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";

const startTime = Date.now();
const drugObj = new DrugEditRegistration();
describe('Validate edit drug registration process on myFDA', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('myFDA'));
        cy.logger('application', "Launched Application-->Login Test");
        cy.wait(1000);
        cy.logger('application', "Validated success Login Msg-->Login Test");
    });

    it('Verify that user can edit registration data on myFDA and also verified that edited data can be displayed on CD', () => {
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
            drugObj.verifyEditRegistration();

            cy.fixture('Home/FDARegistration/Drugs/DrugEditRegistration.json').then((registrationData) => {
                console.log(registrationData);
                drugObj.establishmentPhysicalAddress(registrationData.establishmentPhysicalAddress);
                cy.logger('MyFDA', "Edited establishment physical address");
                drugObj.mailingAddress(registrationData.mailingAddress);
                cy.logger('MyFDA', "Edited mailing address");
                drugObj.ownerOperator(registrationData.ownerOperator);
                cy.logger('MyFDA', "Edited owner operator details");
                drugObj.businessOperations(registrationData.businessOperations);
                cy.logger('MyFDA', "Edited business operations detail");
                // drugObj.importers(registrationData.importers);
                // cy.logger('MyFDA', "Edited importers detail");
                drugObj.reviewListings(registrationData.reviewListings);
                cy.logger('MyFDA', "Edited review listings detail");
                drugObj.payment(registrationData.payment);
                cy.logger('MyFDA', "Edited payment details");
                drugObj.confirmation(registrationData.confirmation);
                cy.logger('MyFDA', "Validated confirmation message after editing all details");
                drugObj.signOut();
                cy.logger('MyFDA', "Validated signout functionality");

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
                    , registrationData.ownerOperator, registrationData.importers
                );
                cy.logger('CD application', 'Verify drug registration edites records on CD app');
                const loadTime = Date.now() - startTime;
                cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
            });
        })
    })
})
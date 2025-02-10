import FFAddRegistration from "../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFAddRegistrationPage";
import HomePage from "../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import CreateInquiry from "../../../../pages/ContactDirect/Home/Inquiry/CreateInquiryBTAPage";
const startTime = Date.now();
const FFobj = new FFAddRegistration();
const createinquiry = new CreateInquiry();
const emailId = {
    inboxid: '28489ee5-b458-4092-8dc6-9b76266586d5'
};
describe('Validate add food facility registration process on myFDA', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('CDurl'), { failOnStatusCode: false });
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
        cy.logger('CD application', 'Search for Kimmy Test company');
        createinquiry.verifyCheckboxForCheckPayment();
        cy.logger('CD application', 'Verify if payment checkbox is checked');
        cy.CDSignOut();
        cy.logger('CD application', 'Sign Out from Kimmy Test Company');
    });

    it('Verify that user can add registration data on myFDA and gets reflected on CD side', () => {
        cy.visit(Cypress.env('myFDA'));
        cy.logger('application', "Launched Application-->Login Test");
        cy.wait(1000);
        cy.logger('application', "Validated success Login Msg-->Login Test");
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
            FFobj.verifyFFAddRegistration();
            cy.fixture('Home/FDARegistration/FoodFacility/FFAddRegistration.json').then((registrationData) => {
                console.log(registrationData);
                FFobj.facilityPhysicalAddress(registrationData.facilityPhysicalAddress);
                cy.logger('Food facility', "Added establishment physical address details");
                FFobj.facilityPostalAddress(registrationData.facilityPostalAddress);
                cy.logger('Food facility', "Added postal address details");
                FFobj.emergencyContact(registrationData.emergencyContact);
                cy.logger('Food facility', "Added emergency contact details");
                FFobj.parentCompany(registrationData.parentCompany);
                cy.logger('Food facility', "Added parent company details");
                FFobj.activityConductedFacility(registrationData.activityConductedFacility);
                cy.logger('Food facility', "Added activity conducted facility");
                FFobj.agreement(registrationData.agreement);
                cy.logger('Food Facility', "Added agreement details");
                FFobj.confirmation(registrationData.confirmation);
                cy.logger('Food facility', "Validated confirmation message after adding all details");
                cy.MyFDALogOut();
                cy.logger('MyFDA application', 'Logout successfully');

                //Visit CD application
                cy.visit(Cypress.env('CDurl'), { failOnStatusCode: false });
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
                FFobj.verifyRecordInCD(registrationData.facilityPhysicalAddress, registrationData.facilityPostalAddress
                    , registrationData.emergencyContact, registrationData.parentCompany, registrationData.agreement
                );
                cy.logger('CD application', 'Verify drug registration edites records on CD app');
                FFobj.verifyAddEmail(emailId.inboxid);
                cy.logger('CD application', 'Verify email header triggered successfully on mailslurp ');
                const loadTime = Date.now() - startTime;
                cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
            })
        })
    })
})

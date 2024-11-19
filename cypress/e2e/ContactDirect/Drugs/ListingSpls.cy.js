import ListingSpls from "../../../pages/ContactDirect/Drugs/ListingsSplsPage";
import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
/// <reference types="Cypress-xpath" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'
const startTime = Date.now();
const listingObj = new ListingSpls();
describe('Validate Listing SPLs functionality', () => {

    beforeEach(() => {
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
    });

    it.skip('Verify that user can upload an xml file in listing SPLs on CD app', () => {

        listingObj.uploadFile();
        cy.logger('Drug on CD side', "Validated upload file functionality");
        listingObj.verifyUploadedData();
        cy.logger('Drug on CD side', "Validated uploaded data on Listings Reporting");
        cy.visit(Cypress.env('myFDA'));
        cy.logger('application', "Launched Application-->Login Test");
        cy.wait(1000);
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
        })
        listingObj.verifyUploadedDataOnMyFDA();
        cy.logger('Drug on MyFDA side', "Validated uploaded drug data on MyFDA side");
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })
    it.only('Verify that user can upload an xml file in listing SPLs on CD app', () => {
        listingObj.uploadFile();
        cy.logger('Drug on CD side', "Validated upload file functionality");
        listingObj.verifyManualAddListing();
        //listingObj.VerifyEditListing();
       // listingObj.verifyDeleteListing();
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })
})
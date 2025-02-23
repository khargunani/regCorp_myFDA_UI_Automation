import ListingSpls from "../../../pages/ContactDirect/Drugs/ListingsSplsPage";
import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
/// <reference types="Cypress-xpath" />
/// <reference types = "Cypress-iframe"/>
import 'cypress-iframe'
const startTime = Date.now();
const listingObj = new ListingSpls();

describe('Validate Listing SPLs functionality', () => {

    beforeEach(() => {
        cy.visit('https://dev.contactdirect.com/cdlogin.jsp', { failOnStatusCode: false });
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

    it('Verify user can upload,update and delete Reg SPL file successfully in CD', () => {

        listingObj.uploadRegSPLFile();
        cy.logger('Drug on CD side', "Validated upload RegSPL file functionality");
        listingObj.verifyUpdateRegSPLFile();
        cy.logger('Drug on CD side', "Validated update RegSPL file functionality");
        listingObj.verifyDeleteRegSPLFile();
        cy.logger('Drug on CD side', "Validated delete RegSPL file functionality");
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

    it('Verify user can upload,update and delete file Labeler SPL in CD', () => {

        listingObj.uploadLablerSPLFile();
        cy.logger('Drug on CD side', "Validated upload Labeler SPL file functionality");
        listingObj.verifyUpdateLabelerSPLFile();
        cy.logger('Drug on CD side', "Validated update Labeler SPL file functionality");
        listingObj.verifyDeleteLabelerSPLFile();
        cy.logger('Drug on CD side', "Validated delete Labeler SPL file functionality");
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

    it('Verify user can view “View Importers” and “View Qualifiers” in CD for Reg SPL.', () => {

        listingObj.uploadRegSPLFile();
        cy.logger('Drug on CD side', "Validated upload Labeler SPL file functionality");
        listingObj.verifyRegSPLQualifierFile();
        cy.logger('Drug on CD side', "Validated Reg SPL qualifier file functionality");
    })

    it(' Verify user can view “View Importers” and “View Qualifiers” in CD for Labeler SPL.', () => {

        listingObj.uploadLablerSPLFile();
        cy.logger('Drug on CD side', "Validated upload Labeler SPL file functionality");
        listingObj.verifyLabelerQualifierFile();
        cy.logger('Drug on CD side', "Validated Labeler SPL qualifier file functionality");
    })
})
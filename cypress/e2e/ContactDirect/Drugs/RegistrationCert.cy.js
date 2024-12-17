import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import RegistrationCert from "../../../pages/ContactDirect/Drugs/RegistrationCertPage";
/// <reference types="Cypress-xpath" />
const startTime = Date.now();
const registrationCertObj = new RegistrationCert();

describe('Validate Registration Certification functionality', () => {

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

    it('Verify user can generate new domestic Registration Certificate for 2025 in CD', () => {
        registrationCertObj.createRegistrationCertification();
        cy.logger('Registration Certificate on CD side', "Validated Create registartion certification");
        registrationCertObj.newDomesticLetter2025();
        cy.logger('Registartion Certificated on CD side', "Validated new domestic registration certificate for 2025");
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

    it('Verify user can generate new foreign Registration Certificate for 2025 in CD', () => {
        registrationCertObj.createRegistrationCertification();
        cy.logger('Registration Certificate on CD side', "Validated Create registartion certification");
        registrationCertObj.newForeignLetter2025();
        cy.logger('Registartion Certificated on CD side', "Validated new foreign registration certificate for 2025");
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

    it('Verify user can generate renewal registration letter domestic Certificate for 2025 in CD', () => {
        registrationCertObj.createRegistrationCertification();
        cy.logger('Registration Certificate on CD side', "Validated Create registartion certification");
        registrationCertObj.renewalDomesticLetter2025();
        cy.logger('Registartion Certificated on CD side', "Validated new foreign registration certificate for 2025");
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

    it('Verify user can generate renewal registration letter foreign Certificate for 2025 in CD', () => {
        registrationCertObj.createRegistrationCertification();
        cy.logger('Registration Certificate on CD side', "Validated Create registartion certification");
        registrationCertObj.renewalForeignLetter2025();
        cy.logger('Registartion Certificated on CD side', "Validated new foreign registration certificate for 2025");
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

    it('Verify user can generate listing registration letter domestic Certificate for 2025 in CD', () => {
        registrationCertObj.createRegistrationCertification();
        cy.logger('Registration Certificate on CD side', "Validated Create registartion certification");
        registrationCertObj.listingDomesticLetter2025();
        cy.logger('Registartion Certificated on CD side', "Validated new foreign registration certificate for 2025");
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

    it('Verify user can generate listing registration letter foreign Certificate for 2025 in CD', () => {
        registrationCertObj.createRegistrationCertification();
        cy.logger('Registration Certificate on CD side', "Validated Create registartion certification");
        registrationCertObj.listingForeignLetter2025();
        cy.logger('Registartion Certificated on CD side', "Validated new foreign registration certificate for 2025");
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

    it('Verify user can cancel registration letter Certificate in CD', () => {
        registrationCertObj.createRegistrationCertification();
        cy.logger('Registration Certificate on CD side', "Validated Create registartion certification");
        registrationCertObj.cancelRegistrationCertificate();
        cy.logger('Registartion Certificated on CD side', "Validated cancel registration certificate");
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })

    it('Verify user can create labeler code assignment Certificate in CD', () => {
        registrationCertObj.createLabelerCertification();
        cy.logger('Registartion Certificated on CD side', "Validated cancel registration certificate");
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `TotalTime taken to SignUpUser: ${loadTime}ms`);
    })
})
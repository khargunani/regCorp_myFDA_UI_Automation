/// <reference types="cypress" />
import { should } from "chai";
import Login from "../../../../pages/LoginPage/LoginPage";
import CosmeticEdit from "../../../../pages/HomePage/FDARegistrationPage/CosmeticPage/CosmeticEditPage";
import CDLogin from "../../../../pages/ContactDirect/LoginPage/LoginPage";
import CosmeticPayment from "../../../../pages/HomePage/FDARegistrationPage/CosmeticPage/CosmeticPaymentPage";
import CosmeticEditCD from "../../../../pages/ContactDirect/Cosmetic/CosmeticEditPageCD";




const startTime = Date.now();
describe('Validate login functionality',()=>{    
   
    it('Verify user is able to edit the details on cosmetic tab',()=>{   
      
      cy.visit(Cypress.env('myFDAurl'));
      cy.logger('application',"Launched Application-->Login Test");
        
      cy.fixture('./Login/LoginPage').then((data) => {
        cy.logger('application',"Launched Application-->Login Test");  
        const loginobj = new Login();
        loginobj.validUserLogin(data.validUser);
        cy.wait(2000);
       // loginobj.verifyLoginSuccess();
        cy.logger('application', "Validated success Login Msg-->Login Test");
        cy.logger('application','Redirecting to cosmetic menu to verify edit functionality')
        const cosmeticedit = new CosmeticEdit();
        cosmeticedit.goToCosmeticMenu();
        cy.logger('check for physical address section edit')
        cosmeticedit.editPhysicalAddressSection();
        cy.logger('check for mailing address section edit')
        cosmeticedit.editMailingAddress();
        cy.logger('check for emergency contact section edit')
        cosmeticedit.editEmergencyConatact();
        cy.logger('check for owner and operator section edit')
        cosmeticedit.editOwnerandOpreator();
        cy.logger('check for product details section edit')
        cosmeticedit.editProductName();
        cy.logger('Done with Edit')
        cosmeticedit.clickToNext();      
        const cosmeticpayment = new CosmeticPayment();
        cosmeticpayment.SelectYearPlan();
        cosmeticpayment.SelectPaymentModeOnline();
        cosmeticpayment.payByStoredOnlineMode();
        cosmeticpayment.verifyPaymentConfirmation();
        //cy.getText(".uk-text-bold").should('have.value',"Your request was successfully submitted. Registrar Corp's Regulatory Specialists will make any necessary updates to your cosmetic registration with FDA and provide you a 2025 Certificate of Registration issued by Registrar Corp.");
        const loadTime = Date.now() - startTime;
        cy.logger('application','performance',`TotalTime taken to LoginUser: ${loadTime}ms`);
           })
        
    })

    it('Verify CD login with valid credentials',()=>{
      cy.visit(Cypress.env('CDurl'),{failOnStatusCode: false});
      cy.logger('CDLogin','Logging to CD using valid credentials');
      cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {
       const loginobj = new CDLogin()
       loginobj.userLogin(login.username, login.password);
       cy.logger('CDHome', 'Go For test company and verify edited details on cosmetic tickler');
       loginobj.goForCompany();
      const cosmeticeditCD = new CosmeticEditCD();
      cy.logger('Cosmetic','Redirecting to Cosmetic tickler');
      cosmeticeditCD.goToCosmeticTickler();
      cosmeticeditCD.VerifyOwnerOperatorEditDetails();
      cosmeticeditCD.verifyEmergencyContactEditDetails();
      cosmeticeditCD.verifyEditBrandOnCD();
      cy.wait(2000);
      const loadTime = Date.now() - startTime;
      cy.logger('CDPerformance',`TotalTime taken to LoginUser: ${loadTime}ms`);
   
       })

      })

    
})
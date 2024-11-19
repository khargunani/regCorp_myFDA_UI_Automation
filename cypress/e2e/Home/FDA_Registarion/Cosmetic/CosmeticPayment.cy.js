/// <reference types="cypress" />
import { should } from "chai";
import Login from "../../../../pages/LoginPage/LoginPage";
import CosmeticEdit from "../../../../pages/HomePage/FDARegistrationPage/CosmeticPage/CosmeticEditPage";
import CosmeticPayment from "../../../../pages/HomePage/FDARegistrationPage/CosmeticPage/CosmeticPaymentPage";



const startTime = Date.now();
describe('Validate login functionality',()=>{

     beforeEach(() => {
          cy.visit('https://testweb.myfda.com:5643/signin');
          cy.logger('application',"Launched Application-->Login Test");
            
      }); 
    
   
    it('Verify user is able to edit the details on cosmetic tab',()=>{        
        
      cy.fixture('./Login/LoginPage').then((data) => {
        cy.logger('application',"Launched Application-->Login Test");  
        const loginobj = new Login();
        loginobj.validUserLogin(data.validUser);
        cy.wait(2000);
       // loginobj.verifyLoginSuccess();
        cy.logger('application', "Validated success Login Msg-->Login Test");
        const cosmeticedit = new CosmeticEdit();
        cy.logger('application','Redirecting to cosmetic menu to verify edit functionality')
        cosmeticedit.goToCosmeticMenu();
        cy.logger('check for product details section edit')
        cosmeticedit.editProductName();
        cy.logger('Done with Edit')
        cosmeticedit.clickToNext();  
        const cosmeticpayment = new CosmeticPayment();
        cosmeticpayment.SelectYearPlan();
        cosmeticpayment.SelectPaymentModeOnline();
        cosmeticpayment.payByStoredOnlineMode();
        cy.getText(".uk-text-bold").should('have.value',"Your request was successfully submitted. Registrar Corp's Regulatory Specialists will make any necessary updates to your cosmetic registration with FDA and provide you a 2025 Certificate of Registration issued by Registrar Corp.")
        const loadTime = Date.now() - startTime;
        cy.logger('application','performance',`TotalTime taken to LoginUser: ${loadTime}ms`);


    })
        
})


})
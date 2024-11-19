/// <reference types="cypress" />
import { should } from "chai";
import CDLogin from "../../../../pages/ContactDirect/LoginPage/LoginPage";
import Login from "../../../../pages/LoginPage/LoginPage";
import CosmeticEdit from "../../../../pages/HomePage/FDARegistrationPage/CosmeticPage/CosmeticEditPage";
import CosmeticAddProduct from "../../../../pages/HomePage/FDARegistrationPage/CosmeticPage/CosmeticAddProductPage";
import CosmeticProduct from "../../../../pages/ContactDirect/Cosmetic/CosmeticProductPage";
import CosmeticPayment from "../../../../pages/HomePage/FDARegistrationPage/CosmeticPage/CosmeticPaymentPage";


const startTime = Date.now();
describe('Validate end to end scenario add/update on myFDA should reflect on CD side ',()=>{


    it('Login to myFDA with valid credentials',()=>{
      cy.visit(Cypress.env('myFDAurl'));
      cy.fixture('./Login/LoginPage').then((data) => {
      cy.logger('application',"Launched Application-->Login Test");  
      const loginobj = new Login();
      loginobj.validUserLogin(data.validUser);
      cy.wait(2000);
      loginobj.verifyLoginSuccess();
      cy.logger('application', "Validated success Login Msg-->Login Test");
      // cy.fixture('./Login/LoginPage').then((login) => {
      //   const loginobj = new Login();
      //   loginobj.userLogin(login.UserName, login.UserPassword);
      //   cy.wait(2000);
      //   loginobj.verifyLoginSuccess();
      //   cy.logger('myFDALogin',"Validated success Login Msg-->Login Test");

        cy.logger('myFDACosmetic','Redirecting to cosmetic menu to verify edit functionality')
        const cosmeticedit = new CosmeticEdit();
        cosmeticedit.goToCosmeticMenu();
        cy.logger('myFDACosmetic', 'Adding a product');
        const cosmeticaddproduct = new CosmeticAddProduct();
        cosmeticaddproduct.addNewBrand();
        cy.logger('myFDACosmetic', 'Product added successfully');
        cosmeticedit.clickToNext(); 
        const cosmeticpayment = new CosmeticPayment();
        cy.logger('myFDACosmetic', 'on payment page, selecting yearly plan');
        cosmeticpayment.SelectYearPlan();
        cy.logger('myFDACosmetic', 'on payment page, selecting mode for payment');
        cosmeticpayment.SelectPaymentModeOnline();
        cy.logger('myFDACosmetic', 'on payment page, Payment via online mode');
        cy.wait(200);
        cosmeticpayment.payByStoredOnlineMode();
        cy.wait(200);
        cosmeticpayment.verifyPaymentConfirmation();
        //cy.getText(".uk-text-bold").should('have.value',"Your request was successfully submitted. Registrar Corp's Regulatory Specialists will make any necessary updates to your cosmetic registration with FDA and provide you a 2025 Certificate of Registration issued by Registrar Corp.");
        const loadTime = Date.now() - startTime;
        cy.logger('myFDAPerformance','performance',`TotalTime taken to LoginUser: ${loadTime}ms`);
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
    })
      const cosmeticproduct = new CosmeticProduct();
      cy.logger('Cosmetic','Redirecting to Cosmetic tickler');
      cosmeticproduct.goToCosmeticTickler();
      cy.logger('Cosmetic','Verifying the newly added brand');
      cosmeticproduct.verifyAddedBrandOnCD();
      cy.logger('Cosmetic','Verified brand');
      cy.logger('Cosmetic','Verifying online payment');
      cosmeticproduct.verifyPaymentIsDone();
      cy.logger('Cosmetic','Verified online payment');
      cosmeticproduct.returnToCompany();
      cy.logger('Cosmetic','Return to company');
      cosmeticproduct.verifyNotepadEmail();
      cy.logger('Cosmetic','Verifying CD note,capturing screenshot');
      cy.wait(2000);
      const loadTime = Date.now() - startTime;
      cy.logger('CDPerformance',`TotalTime taken to LoginUser: ${loadTime}ms`);
   
       })
    
  
  })

/// <reference types="cypress" />
import { should } from "chai";
import Login from "../../../../pages/LoginPage/LoginPage";
import CosmeticEdit from "../../../../pages/HomePage/FDARegistrationPage/CosmeticPage/CosmeticEditPage";
import CosmeticPayment from "../../../../pages/HomePage/FDARegistrationPage/CosmeticPage/CosmeticPaymentPage";
import CosmeticRenewalProcess from "../../../../pages/HomePage/FDARegistrationPage/CosmeticPage/CosmeticRenewalProcessPage";
import CDLogin from "../../../../pages/ContactDirect/LoginPage/LoginPage";
import CosmeticRenewal from "../../../../pages/ContactDirect/Cosmetic/CosmeticRenewal";
import CosmeticProduct from "../../../../pages/ContactDirect/Cosmetic/CosmeticProductPage";
import CreateInquiry from "../../../../pages/ContactDirect/Home/Inquiry/CreateInquiryPage";
import HomePage from "../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";



const startTime = Date.now();
describe('Validate cosmetic renewal process end to end, Steps which covers under this test are, Login to CD -> Check for Preconditions dor renewal ->Check for Inquiry is present or not -> myFDA renewal ->come back to CD check post check and update inquiry',()=>{
    
    it.skip('Verify renewal process for 1 year using Bankwire payment mode',()=>{ 

      cy.visit(Cypress.env('CDurl'),{failOnStatusCode: false});
      cy.logger('CDLogin','Logging to CD using valid credentials');
      cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {
       const loginobj = new CDLogin()
       loginobj.userLogin(login.username, login.password);
       cy.logger('CDHome', 'Go For test company and verify edited details on cosmetic tickler');
       loginobj.goForCompany();
       cy.wait(5000);
    })
      const createinquiry = new CreateInquiry();
      createinquiry.openInquiryTab();
      const homepage = new HomePage();
      homepage.returnToCompany();
      cy.logger('Cosmetic','Redirecting to Cosmetic tickler');
      const cosmeticproduct = new CosmeticProduct();
      cosmeticproduct.goToCosmeticTickler();
      const cosmeticrenewal = new CosmeticRenewal();
      cosmeticrenewal.verifyCompanyRenewalPreconditions().then((flag)=>{
        cy.log("falg value",flag);  
        if(flag==1){

        cy.visit(Cypress.env('myFDAurl'));
        cy.fixture('./Login/LoginPage').then((data) => {
          cy.logger('application',"Launched Application-->Login Test");  
          const loginobj = new Login();
          loginobj.validUserLogin(data.validUser);
          cy.wait(2000);
         // loginobj.verifyLoginSuccess();
          cy.logger('application', "Validated success Login Msg-->Login Test");
        })
        const cosmeticedit = new CosmeticEdit();
        cy.logger('application','Redirecting to cosmetic menu to verify edit functionality')
        cosmeticedit.goToCosmeticMenu();
        const cosmeticrenewalprocess = new CosmeticRenewalProcess();
        cosmeticrenewalprocess.goForRenewalProcess();  
        const cosmeticpayment = new CosmeticPayment();
        cosmeticpayment.SelectYearPlan();
        cosmeticpayment.SelectPaymentModeBankwire();
       cosmeticpayment.verifyPaymentConfirmation();
      }else{
        cy.log("precondition for renewal is not satisfied")
      }
      })
        cy.wait(5000);
        cy.visit(Cypress.env('CDurl'),{failOnStatusCode: false});
        cy.logger('CDLogin','Logging to CD using valid credentials');
        cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {
         const loginobj = new CDLogin()
         loginobj.userLogin(login.username, login.password);
         cy.logger('CDHome', 'Go For test company and verify edited details on cosmetic tickler');
         loginobj.goForCompany();
         cy.wait(5000);
         const cosmeticproduct = new CosmeticProduct();
         cy.logger('Cosmetic','Redirecting to Cosmetic tickler');
         cosmeticproduct.goToCosmeticTickler();
        // cosmeticproduct.verifyPaymentHistoryfor1Year();
         cosmeticproduct.returnToCompany();
         const createinquiry = new CreateInquiry();
         createinquiry.verifyInquiryIsUpdatedForBankwire();

        })

        
        const loadTime = Date.now() - startTime;
        cy.logger('application','performance',`TotalTime taken to LoginUser: ${loadTime}ms`);


    
  })

  it.only('Verify renewal process for 2 year using online payment mode',()=>{ 

    cy.visit(Cypress.env('CDurl'),{failOnStatusCode: false});
    cy.logger('CDLogin','Logging to CD using valid credentials');
    cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {
     const loginobj = new CDLogin()
     loginobj.userLogin(login.username, login.password);
     cy.logger('CDHome', 'Go For test company and verify edited details on cosmetic tickler');
     loginobj.goForCompany();
     cy.wait(5000);
  })
    const createinquiry = new CreateInquiry();
    createinquiry.openInquiryTab();
    const homepage = new HomePage();
    homepage.returnToCompany();
    cy.logger('Cosmetic','Redirecting to Cosmetic tickler');
    const cosmeticproduct = new CosmeticProduct();
    cosmeticproduct.goToCosmeticTickler();
    const cosmeticrenewal = new CosmeticRenewal();
    cosmeticrenewal.verifyCompanyRenewalPreconditions().then((flag)=>{
      cy.log("falg value",flag);  
      if(flag==1){

      cy.visit(Cypress.env('myFDAurl'));
      cy.logger('application',"Launched Application-->Login Test");  
      
      cy.fixture('./Login/LoginPage').then((data) => {
        cy.logger('application',"Launched Application-->Login Test");  
        const loginobj = new Login();
        loginobj.validUserLogin(data.validUser);
        cy.wait(2000);
      })
      const cosmeticedit = new CosmeticEdit();
      cy.logger('application','Redirecting to cosmetic menu to verify edit functionality')
      cosmeticedit.goToCosmeticMenu();
      const cosmeticrenewalprocess = new CosmeticRenewalProcess();
      cosmeticrenewalprocess.goForRenewalProcess();  
      const cosmeticpayment = new CosmeticPayment();
      cosmeticpayment.Select2YearPlan();
      cosmeticpayment.SelectPaymentModeOnline();
      cosmeticpayment.payByStoredOnlineMode();
    }else{
      cy.log("precondition for renewal is not satisfied")
    }
    })
      cy.wait(5000);
      cy.visit(Cypress.env('CDurl'),{failOnStatusCode: false});
      cy.logger('CDLogin','Logging to CD using valid credentials');
      cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {
       const loginobj = new CDLogin()
       loginobj.userLogin(login.username, login.password);
       cy.logger('CDHome', 'Go For test company and verify edited details on cosmetic tickler');
       loginobj.goForCompany();
       cy.wait(5000);
       const cosmeticproduct = new CosmeticProduct();
       cy.logger('Cosmetic','Redirecting to Cosmetic tickler');
       cosmeticproduct.goToCosmeticTickler();
       cosmeticproduct.verifyPaymentIsDone();
       cosmeticproduct.returnToCompany();
       const createinquiry = new CreateInquiry();
       createinquiry.verifyInquiryIsUpdatedForOnline();

      })

      
      const loadTime = Date.now() - startTime;
      cy.logger('application','performance',`TotalTime taken to LoginUser: ${loadTime}ms`);


  
})

it.only('Verify renewal process for 3 year using online payment mode',()=>{ 

  cy.visit(Cypress.env('CDurl'),{failOnStatusCode: false});
  cy.logger('CDLogin','Logging to CD using valid credentials');
  cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {
   const loginobj = new CDLogin()
   loginobj.userLogin(login.username, login.password);
   cy.logger('CDHome', 'Go For test company and verify edited details on cosmetic tickler');
   loginobj.goForCompany();
   cy.wait(5000);
})
  const createinquiry = new CreateInquiry();
  createinquiry.openInquiryTab();
  const homepage = new HomePage();
  homepage.returnToCompany();
  cy.logger('Cosmetic','Redirecting to Cosmetic tickler');
  const cosmeticproduct = new CosmeticProduct();
  cosmeticproduct.goToCosmeticTickler();
  const cosmeticrenewal = new CosmeticRenewal();
  cosmeticrenewal.verifyCompanyRenewalPreconditions().then((flag)=>{
    cy.log("falg value",flag);  
    if(flag==1){

    cy.visit(Cypress.env('myFDAurl'));
    cy.logger('application',"Launched Application-->Login Test");  
    
    cy.fixture('./Login/LoginPage').then((data) => {
      cy.logger('application',"Launched Application-->Login Test");  
      const loginobj = new Login();
      loginobj.validUserLogin(data.validUser);
      cy.wait(2000);
    cy.logger('application',"Validated success Login Msg-->Login Test");
    })
    const cosmeticedit = new CosmeticEdit();
    cy.logger('application','Redirecting to cosmetic menu to verify edit functionality')
    cosmeticedit.goToCosmeticMenu();
    const cosmeticrenewalprocess = new CosmeticRenewalProcess();
    cosmeticrenewalprocess.goForRenewalProcess();  
    const cosmeticpayment = new CosmeticPayment();
    cosmeticpayment.Select3YearPlan();
    cosmeticpayment.SelectPaymentModeOnline();
    cosmeticpayment.payByStoredOnlineMode();
  }else{
    cy.log("precondition for renewal is not satisfied")
  }
  })
    cy.wait(5000);
    cy.visit(Cypress.env('CDurl'),{failOnStatusCode: false});
    cy.logger('CDLogin','Logging to CD using valid credentials');
    cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {
     const loginobj = new CDLogin()
     loginobj.userLogin(login.username, login.password);
     cy.logger('CDHome', 'Go For test company and verify edited details on cosmetic tickler');
     loginobj.goForCompany();
     cy.wait(5000);
     const cosmeticproduct = new CosmeticProduct();
     cy.logger('Cosmetic','Redirecting to Cosmetic tickler');
     cosmeticproduct.goToCosmeticTickler();
     cosmeticproduct.verifyPaymentIsDone();
     cosmeticproduct.returnToCompany();
     const createinquiry = new CreateInquiry();
     createinquiry.verifyInquiryIsUpdatedForOnline();

    })

})

  it.skip('Verify user can do Remind me later on renewal popup and proceed',()=>{
    cy.visit(Cypress.env('myFDAurl'));
    cy.logger('application',"Launched Application-->Login Test");  
    cy.fixture('./Login/LoginPage').then((login) => {
    const loginobj = new Login();
    loginobj.userLogin(login.UserName, login.UserPassword);
    cy.wait(2000);
    cy.logger('application',"Validated success Login Msg-->Login Test");
    })
    const cosmeticedit = new CosmeticEdit();
    cy.logger('application','Redirecting to cosmetic menu to verify edit functionality')
    cosmeticedit.goToCosmeticMenu();
    const cosmeticrenewalprocess = new CosmeticRenewalProcess();
    cosmeticrenewalprocess.remindMeLaterForRenewal();

  })

})

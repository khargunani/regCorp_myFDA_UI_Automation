/// <reference types="cypress" />
import { should } from "chai";
import CDLogin from "../../../pages/ContactDirect/LoginPage/LoginPage";
import CosmeticProduct from "../../../pages/ContactDirect/Cosmetic/CosmeticProductPage";
import CosmeticRenewal from "../../../pages/ContactDirect/Cosmetic/CosmeticRenewal";
import CreateInquiry from "../../../pages/ContactDirect/Home/Inquiry/CreateInquiryPage";
import HomePage from "../../../pages/ContactDirect/Home/Home/SearchCompanyPage";


const startTime = Date.now();
describe('Validate ',()=>{

   beforeEach(() => {
      cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {
          cy.LoginCD(login.username, login.password)
          cy.visit(Cypress.env('CDurl'),{failOnStatusCode: false})
      })
  });
    
  
   it('Verify login using valid credentials',()=>{        
    cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {
       const loginobj = new CDLogin();
       cy.logger('CDLogin','Logging to CD using valid credentials');
       loginobj.userLogin(login.username, login.password);
       loginobj.goForCompany();
       cy.wait(2000);
       const createinquiry = new CreateInquiry();
       createinquiry.createInquiry();
       const homepage = new HomePage();
       homepage.returnToCompany();
       const cosmeticproduct = new CosmeticProduct();
       cy.logger('Cosmetic','Redirecting to Cosmetic tickler');
       cosmeticproduct.goToCosmeticTickler();
       const cosmeticrenewal = new CosmeticRenewal();
       cosmeticrenewal.printLog();
      cosmeticrenewal.verifyCompanyRenewalPreconditions();
      
       const loadTime = Date.now() - startTime;
       cy.logger('performance',`TotalTime taken to LoginUser: ${loadTime}ms`);
          })

       })
    
       
     })

/// <reference types="cypress" />
import { should } from "chai";
import CDLogin from "../../../pages/ContactDirect/LoginPage/LoginPage";
import CosmeticProduct from "../../../pages/ContactDirect/Cosmetic/CosmeticProductPage";


const startTime = Date.now();
describe('Validaterenewal on CD',()=>{

    
  
   it('Verify login using valid credentials',()=>{        
    
    cy.visit('https://dev.contactdirect.com/cdlogin.jsp',{failOnStatusCode: false}); 
    cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {

       
       const loginobj = new CDLogin();
       cy.logger('CDLogin','Logging to CD using valid credentials');
       loginobj.userLogin(login.username, login.password);
       cy.wait(2000);
       const cosmeticproduct = new CosmeticProduct();
       cy.logger('Cosmetic','Redirecting to Cosmetic tickler');
       cosmeticproduct.goToCosmeticTickler();
       cy.logger('Cosmetic','Verify newly added brand');
       cosmeticproduct.verifyAddedBrandOnCD();
       const loadTime = Date.now() - startTime;
       cy.logger('performance',`TotalTime taken to LoginUser: ${loadTime}ms`);
          })

       })
    
       
     })

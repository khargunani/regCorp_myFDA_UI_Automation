/// <reference types="cypress" />
import { should } from "chai";
import CDLogin from "../../../pages/ContactDirect/LoginPage/LoginPage";
import CosmeticPayment from "../../../../pages/HomePage/FDARegistrationPage/CosmeticPage/CosmeticPaymentPage";


const startTime = Date.now();

describe('Validate CD login functionality',()=>{

     beforeEach(() => {
          cy.visit('https://dev.contactdirect.com/cdlogin.jsp',{failOnStatusCode: false});
          cy.logger('applicationCD',"CD Launched Application-->Login Test");
            
      }); 
    
   
    it('Verify CD login using valid credentials',()=>{        
        
     cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {

        const loginobj = new CDLogin();
        cy.logger('CDLogin','Logging to CD using valid credentials')
        loginobj.userLogin(login.username, login.password);
      
        cy.wait(2000);
        const loadTime = Date.now() - startTime;
        cy.logger('performance',`TotalTime taken to LoginUser: ${loadTime}ms`);
           })

        })
     
        
      })

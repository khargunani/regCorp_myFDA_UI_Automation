/// <reference types="cypress" />
import { should } from "chai";
import CreateInquiry from "../../../../pages/ContactDirect/Home/Inquiry/CreateInquiryPage";
import CDLogin from "../../../../pages/ContactDirect/LoginPage/LoginPage";


const startTime = Date.now();

describe('Validate CD login functionality',()=>{

     beforeEach(() => {
          cy.visit(Cypress.env('CDurl'),{failOnStatusCode: false});
          cy.logger('applicationCD',"CD Launched Application-->Login Test");

            
      }); 
    
   
    it('Verify user is able to create the Inquiry',()=>{        
        
     cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {

        const loginobj = new CDLogin();
        cy.logger('CDLogin','Logging to CD using valid credentials')
        loginobj.userLogin(login.username, login.password);
        loginobj.goForCompany();
        const createinquiry = new CreateInquiry();
        createinquiry.openInquiryTab();
        //createinquiry.createInquiry();
        cy.wait(2000);
        const loadTime = Date.now() - startTime;
        cy.logger('performance',`TotalTime taken to LoginUser: ${loadTime}ms`);
           })

        })
     
        
      })

/// <reference types="cypress" />
import HomePage from "../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";


describe('Validate CD login functionality',()=>{

     
    beforeEach(() => {
            // cy.fixture('./ContactDirect/Login/LoginPage').then((login) => {
            //     cy.LoginCD(login.username, login.password)
            //     cy.visit(Cypress.env('CDurl'),{failOnStatusCode: false});
            cy.fixture('./Login/LoginPage').then((login) => {
                 cy.loginMyFDA(login.UserName, login.UserPassword)
                 cy.visit(Cypress.env('myFDAurl'))


            })
            
            

        }) 
   
    it('Verify CD login using valid credentials',()=>{     
        
        const homepage = new HomePage();
        homepage.goForCompany();
       
      })

    })

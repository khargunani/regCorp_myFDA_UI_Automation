// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-downloadfile/lib/downloadFileCommand');
import CDLogin from "../pages/ContactDirect/LoginPage/LoginPage";
import Login from "../pages/LoginPage/LoginPage";
import 'cypress-file-upload';




Cypress.Commands.add('getText', (element) => {
    return cy.get(element)
      // will invoke .text() and return it
      .invoke('text')
  })

cy.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
})

Cypress.on('uncaught:exception',(err,runnable)=>{
    return false;
})


Cypress.Commands.add('logger', (filename, message) => {
    // Define the log file path based on the filename parameter
    const logFilePath = `cypress/logs/${filename}.log`;
  
    // Create or append to the log file
    cy.writeFile(logFilePath, `[${new Date().toISOString()}] ${message}\n`, { flag: 'a+' });
  });

  Cypress.Commands.add('loginMyFDA', (username, password) => {
    cy.session([username, password], () => {
        const loginObj = new Login()
        cy.visit(Cypress.env('myFDAurl'));
        loginObj.userLogin(username, password);
        cy.wait(2000);
        cy.logger('myFDALogin', "Validated success Login Msg-->Login Test");
    })                                                                                         // { cacheAcrossSpecs: true }
});

Cypress.Commands.add('LoginCD', (username, password) => {
    cy.session([username, password], () => {
        const loginObj = new CDLogin();
        cy.visit(Cypress.env('CDurl'),{failOnStatusCode: false})
        loginObj.userLogin(username, password);
        cy.wait(2000);
       // cy.url().should('contain', '/loginserv');
        //loginObj.verifyLoginSuccess();
        cy.logger('CDLogin', "Validated success Login Msg-->Login Test");
    })                                                                                         // { cacheAcrossSpecs: true }
});
Cypress.Commands.add('LoginCD', (username, password) => {
    cy.xpath("//input[@name='email']").should('be.visible').type(username);
    cy.get("input[name='password']").should('be.visible').type(password);
    cy.get("a[class='Copy'] b nobr").should('be.visible').click();
    cy.url().should('include', '/loginserv');
})

Cypress.Commands.add('DeleteSubUser', (subUser) => {
    const specificUser = subUser.desiredUserId;
    cy.wait(20000);
    cy.get("a[onclick='document.MyFdaAdminForm.submit(); return false;']").should('be.visible').and('contain.text', "MyFDA").click();
    cy.get(".uk-text-large.uk-margin-large-right").and('contain.text', "MyFDA Tickler");
    // Locate the user in the table
    cy.get('table').contains('tr', specificUser).then(($userCell) => {
        const $row = $userCell.closest('tr'); // Get the parent <tr> element
        // Assuming there's a delete button within the row
        cy.wrap($row).contains('Delete this Account').click();
        //cy.contains('Yes').click({force:true});
        //cy.get("div[id='deleteSubUserModal-0'] center").should('be.visible').contains('Yes').click();
        cy.get('.uk-modal-dialog > form > center').should('be.visible').contains('Yes').click({ force: true });
        // Verify the user is no longer in the table
        cy.get('table').contains('td', specificUser).should('not.exist');
    });
})
Cypress.Commands.add('login', (UserName, UserPassword) => {
    cy.get("input[placeholder='User ID']").type(UserName);
    cy.get("#password-field").type(UserPassword);
    //cy.get("input[name='captchaTxt']").type("anyText"); 
    cy.wait(10000);
    cy.get(":nth-child(12) > .uk-width-1-1").click();
    cy.url().should('include', '/login');
});
// Cypress.Commands.add('getIframe', (iframeSelector) => {
//     cy.get('iframe') // Get the iframe
//       .its('0.contentDocument') // Access the iframe's contentDocument
//       .should('exist') // Ensure the document inside the iframe exists
//       .then((doc) => cy.wrap(doc)); // Wrap the iframe document to make it chainable
//   });
//   Cypress.Commands.add('getIframe' => {
//     return cy.get(`iframe[src="/fda/intranet/drug/spl/read.xhtml?company=2474005"]`)
//         .its('0.contentDocument.body')
//         .should('be.visible')
//         .then(cy.wrap);
// })





  
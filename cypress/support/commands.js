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

//   Cypress.on('uncaught:exception', (err, runnable) => {
//     expect(err.message).to.eq('my error')
//     return false;
//   })
  

Cypress.on('uncaught:exception',(err,runnable)=>{
  console.error('Suppressed error:', err.message);
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
    cy.xpath("//input[@name='email']").should('be.visible').clear().type(username);
    cy.get("input[name='password']").should('be.visible').clear().type(password);
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
    cy.reload();
    cy.get("input[placeholder='User ID']").type(UserName);
    cy.get("#password-field").type(UserPassword);
    cy.get("input[name='captchaTxt']").type("anyText");
    cy.wait(10000);
    cy.get(":nth-child(12) > .uk-width-1-1").click();
    cy.url().should('include', '/login');
});

Cypress.Commands.add('loginUS', (UserName, UserPassword) => {
    cy.reload();
    cy.get("input[placeholder='User ID']").type(UserName);
    cy.get("#password-field").type(UserPassword);
    cy.get("input[name='captchaTxt']").type("anyText");
    cy.wait(10000);
    cy.get(":nth-child(12) > .uk-width-1-1").click();
    cy.url().should('include', '/login');
});

Cypress.Commands.add('loginNonUS', (UserName, UserPassword) => {
    cy.reload();
    cy.get("input[placeholder='User ID']").type(UserName);
    cy.get("#password-field").type(UserPassword);
    cy.get("input[name='captchaTxt']").type("anyText");
    cy.wait(10000);
    cy.get(":nth-child(12) > .uk-width-1-1").click();
    cy.url().should('include', '/login');
});

Cypress.Commands.add('MyFDALogOut', () => {
    cy.get('a[title="Sign Out"]').click();
});

Cypress.Commands.add('CDSignOut',() => {
cy.get(`img[name='memberSignOut']`).click({force: true});
})


function processNextAssign() {
    cy.get("table[id='regCodeOverviewsTab'] tbody tr").then($rows => {
      let found = false;
  
      // Look for the first row with "Assign"
      Cypress._.some($rows, (row, index) => {
        const $cell = Cypress.$(row).find('td').eq(5);
        if ($cell.text().trim() === "Assign") {
          found = true;
  
          cy.wrap($cell).find('a').click({ force: true });
  
          cy.get('.odd > :nth-child(4) > a').should('be.visible').click();
          cy.get('#assignRegCodeOption2').check();
          cy.get("select[name='userid']").select("Automation_subuser");
          cy.get('.uk-form-controls > .uk-button').click();
          cy.get('.center > .uk-button').should('be.visible').click();
  
          // Wait for table to reload or settle
          cy.get("table[id='regCodeOverviewsTab']").should('exist');
  
          cy.log(`Assigned row ${index + 1}`);
  
          // Recursively process the next one
          processNextAssign();
  
          return true; // Stop looping further
        }
        return false;
      });
  
      if (!found) {
        cy.log("No more 'Assign' links found.");
      }
    });
  }
  

  







  
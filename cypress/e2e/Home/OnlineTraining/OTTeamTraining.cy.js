
import OTGeneric from "../../../pages/HomePage/OnlineTrainingPage/OTGenericPage";
import OTTeamTraining from "../../../pages/HomePage/OnlineTrainingPage/OTTeamTrainingPage";

const otgeneric = new OTGeneric();
const otteamtraining = new OTTeamTraining();
const startTime = Date.now();

describe('Validate all payment flow with different mode on myFDA', () => {

  beforeEach(() => {


    cy.visit(Cypress.env('myFDAurl'));
    cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
    cy.fixture('/ContactDirect/MyFDA/UserCredentials.json').then((data) => {
      const { desiredUserId, password } = data.OnlineUser;
      cy.login(desiredUserId, password);
    })
  });

  it('Verify user can redirect to submenu Team Training and see the details', () => {

    cy.fixture('Home/OnlineTraining/OTMyTraining.json').then((data) => {
      otgeneric.redirectToOTMenu();
      cy.logger('MyFDA application', 'Redirecting to Online Training menu');
      otteamtraining.redirectToTeamTraining();
      cy.logger('MyFDA application', 'Redirecting to Team training');
      otteamtraining.getTeamTrainingDetails();
      cy.logger('MyFDA application', 'Get team training details');
      const loadTime = Date.now() - startTime;
      cy.logger('performance', `TotalTime taken to execute test scenario: ${loadTime}ms`);
    })
  })

  it('Verify the user can assign the trainings to team by selecting subusers ', () => {

    cy.fixture('Home/OnlineTraining/OTMyTraining.json').then((data) => {
      otgeneric.redirectToOTMenu();
      cy.logger('MyFDA application', 'Redirecting to Online Training menu');
      otteamtraining.redirectToTeamTraining();
      cy.logger('MyFDA application', 'Redirecting to Team training');
      function processNextAssign(startIndex = 0) {
        cy.get("table[id='regCodeOverviewsTab'] tbody tr").then($rows => {
          let found = false;

          // Loop only from startIndex forward
          Cypress._.some($rows.slice(startIndex), (row, offset) => {
            const index = startIndex + offset;
            const $cell = Cypress.$(row).find('td').eq(5);

            if ($cell.text().trim() === "Assign") {
              found = true;

              cy.wrap($cell).find('a').click({ force: true });

              cy.get('.odd > :nth-child(4) > a').should('be.visible').click();
              cy.get('#assignRegCodeOption2').check();
              cy.get("select[name='userid']").select("Automation_subuser");
              cy.get('.uk-form-controls > .uk-button').click();
              cy.get('.center > .uk-button').should('be.visible').click();

              // Wait for UI update, then call again starting from next index
              cy.get("table[id='regCodeOverviewsTab']").should('exist').then(() => {
                cy.log(`✅ Assigned row ${index + 1}`);
                processNextAssign(index + 1); // move to next row
              });

              return true; // break loop after handling
            }

            return false;
          });

          if (!found) {
            cy.log("✅ No more 'Assign' links found.");
          }
        });
      }




      // Call the function to start the loop
      processNextAssign();



    })

  })

  it('Verify the user can assign the trainings to team by adding new email', () => {

    cy.fixture('Home/OnlineTraining/OTMyTraining.json').then((data) => {
      otgeneric.redirectToOTMenu();
      cy.logger('MyFDA application', 'Redirecting to Online Training menu');
      otteamtraining.redirectToTeamTraining();
      cy.logger('MyFDA application', 'Redirecting to Team training');
      function processNextAssign(startIndex = 0) {
        cy.get("table[id='regCodeOverviewsTab'] tbody tr").then($rows => {
          let found = false;

          // Loop only from startIndex forward
          Cypress._.some($rows.slice(startIndex), (row, offset) => {
            const index = startIndex + offset;
            const $cell = Cypress.$(row).find('td').eq(5);

            if ($cell.text().trim() === "Assign") {
              found = true;

              cy.wrap($cell).find('a').click({ force: true });

              cy.get('.odd > :nth-child(4) > a').click();
              cy.get('.uk-margin-bottom > .uk-form-row > .uk-width-1-1').type("ntelagar@registrarcorp.com");
              cy.get(':nth-child(2) > .uk-form-row > .uk-width-1-1').type("komal");
              cy.get(':nth-child(3) > .uk-form-row > .uk-width-1-1').type("H");
              cy.get('.uk-form-controls > .uk-button').click();
              cy.get('.uk-margin-large-top > .uk-button').click();
              cy.get('.center > .uk-button').should('be.visible').click();

              // Wait for UI update, then call again starting from next index
              cy.get("table[id='regCodeOverviewsTab']").should('exist').then(() => {
                cy.log(`✅ Assigned row ${index + 1}`);
                processNextAssign(index + 1); // move to next row
              });

              return true; // break loop after handling
            }

            return false;
          });

          if (!found) {
            cy.log("✅ No more 'Assign' links found.");
          }
        });
      }




      // Call the function to start the loop
      processNextAssign();



    })

  })

})




import LoginPage from "../../pages/LoginPage/LoginPage"
import Landing from "../../pages/HomePage/LandingPage";

const startTime = Date.now();
describe('Validate login functionality', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('myFDAurl'));
    cy.logger('application', "Launched Application-->Login Test");
  });


  it('Verify that user can login with valid credentials', () => {

    cy.fixture('./Login/LoginPage').then((data) => {

      const loginobj = new LoginPage();
      loginobj.validUserLogin(data.validUser);
      cy.wait(2000);
      loginobj.verifyLoginSuccess();
      cy.logger('application', "Validated success Login Msg-->Login Test");
      const landingpage = new Landing();
      landingpage.verifyTilesPresentOnHomePage();
      const loadTime = Date.now() - startTime;
      cy.logger('performance', `TotalTime taken to LoginUser: ${loadTime}ms`);
    })
  })

  it('Verify that user can login with invalid credentials', () => {

    cy.fixture('./Login/LoginPage').then((data) => {

      const loginobj = new LoginPage();
      loginobj.invalidUserLogin(data.invalidUser);
      loginobj.verifyLoginUnSuccess();
      cy.logger('application', "Validated unsuccess Login Msg-->Login Test");
      const loadTime = Date.now() - startTime;
      cy.logger('performance', `TotalTime taken to LoginUser: ${loadTime}ms`);
    })
  })
})
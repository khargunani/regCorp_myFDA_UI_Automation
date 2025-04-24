class HomePage {

    CompanySearchButton = "#image1"
    CompanySearch = "[colspan='3'] > table > tbody > tr > :nth-child(2) > .tinyCopy"
    ReturnToCompany = "Return to Company"


    goForCompany() {
        cy.get(this.CompanySearch).click().type("Registrar Corp");
        cy.wait(200);
        cy.get(this.CompanySearchButton).click();
    }

    goForUSCompany() {
        cy.get(this.CompanySearch).click().type("KimmyTest007");
        cy.wait(200);
        cy.get(this.CompanySearchButton).click();
    }

    goForNonUSCompany() {
        cy.get(this.CompanySearch).click().type("US Test Company Kim 2");
        cy.wait(200);
        cy.get(this.CompanySearchButton).click();
    }

    goForCosmeticCompany() {
        cy.get(this.CompanySearch).click().type("DemoTest");
        cy.wait(200);
        cy.get(this.CompanySearchButton).click();
    }

    goForOnlineTraining(){
        cy.get(this.CompanySearch).click().type("Automation1");
        cy.wait(200);
        cy.get(this.CompanySearchButton).click();

    }

    returnToCompany() {
        cy.contains(this.ReturnToCompany).click();
    }

} export default HomePage;
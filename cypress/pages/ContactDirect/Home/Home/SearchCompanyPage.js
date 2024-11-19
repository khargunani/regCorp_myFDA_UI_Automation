class HomePage{

    CompanySearchButton = "#image1"
    CompanySearch = "[colspan='3'] > table > tbody > tr > :nth-child(2) > .tinyCopy"
    ReturnToCompany = "Return to Company"


    goForCompany(){
        cy.get(this.CompanySearch).click().type("NewTest Company");
        cy.wait(200);
        cy.get(this.CompanySearchButton).click(); 
    }

    returnToCompany(){
        cy.contains(this.ReturnToCompany).click();
    }

}export default HomePage;
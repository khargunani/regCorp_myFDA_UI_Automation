class CDLogin{

    ClickMicrosoftSignIn = "div[class='bsk-container'] button[class='bsk-btn bsk-btn-default']"

    username = '[type="text"]'
    password = '[type="password"]'
    signInBtn = 'a.Copy > b > nobr'
   
    
    
    CosmeticTickler = "[name='cosmeticForm'] > .tinyCopy";
    CompanySearchButton = "#image1"
    CompanySearch = "[colspan='3'] > table > tbody > tr > :nth-child(2) > .tinyCopy";

  


    userLogin(username,password){
        cy.wait(2000)
        cy.get(this.username).click().clear().type(username);
        cy.get(this.password).click().clear().type(password);
        cy.get(this.signInBtn).click();

    }
    goForCompany(){
        cy.get(this.CompanySearch).click().type("NewTest Company");
        cy.wait(200);
        cy.get(this.CompanySearchButton).click(); 
    }



}

export default CDLogin;
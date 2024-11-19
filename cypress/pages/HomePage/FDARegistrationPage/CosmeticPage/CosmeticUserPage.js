class CosmeticUser {

    fdaIcon = ".registrationRenew > a > .uk-overlay-panel";
    fdaRegistartionText = "FDA Registration";
    cosmetic = "//ul[@class='uk-navbar-nav my-sub-navbar']//a[normalize-space()='Cosmetic']";
    cosmeticText = "Cosmetic";

    verifyCosmeticTickler(){
        cy.get(this.fdaIcon).should('be.visible').and('have.text', this.fdaRegistartionText).click();
        cy.xpath(this.cosmetic).should('be.visible').and('have.text', this.cosmeticText).click();
    }

}

export default CosmeticUser;
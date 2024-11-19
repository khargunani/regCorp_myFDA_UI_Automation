class HomeIcon {
    homeIcon = ".uk-icon-home";
    myAccountIcon = "a[title='My Account'] h2";
    signOutIcon = "a[title='Sign Out']";
    account = ".uk-h1.red-title";
    fdaIcon = ".registrationRenew > a > .uk-overlay-panel";
    priorNoticeIcon = ".userStartPN > a > .uk-overlay-panel";
    complyHubIcon = ".monitorNow > a > .uk-overlay-panel";
    onlineTrainingIcon = ".onlineTraining > a > .uk-overlay-panel";
    adverseEventIcon = ".adverseEventReporting > a > .uk-overlay-panel";
    recipeManagementIcon = ".alacalcLink > .uk-overlay-panel";
    fdaRegistartionText = "FDA Registration";
    priorNoticeText = "Prior Notice Express";
    complyHubText = "ComplyHub";
    onlineTrainingText = "Online Training";
    adverseEventText = "Adverse Event Management";
    recipeManagementText = "Recipe Management & Nutrition Labeling Software";

    verifyHomeIcon() {
        cy.get(this.homeIcon).should('be.visible');
        cy.url().should('include', '/login');
    }

    verifyMyAccountIcon() {
        cy.get(this.myAccountIcon).should('be.visible').click();
        cy.get(this.account).and('contain.text', "My Account");
        cy.go('back');
        cy.url().should('include', '/login');
    }

    verifySignOutIcon() {
        cy.get(this.signOutIcon).should('be.visible').click();
        cy.url().should('include', '/signin');
    }

    verifyHomeIcons() {
        cy.get(this.fdaIcon).should('be.visible').and('have.text', this.fdaRegistartionText);
        cy.get(this.priorNoticeIcon).should('be.visible').and('have.text', this.priorNoticeText);
        cy.get(this.complyHubIcon).should('be.visible').and('have.text', this.complyHubText);
        cy.get(this.onlineTrainingIcon).should('be.visible').and('have.text', this.onlineTrainingText);
        cy.get(this.adverseEventIcon).should('be.visible').and('have.text', this.adverseEventText);
        cy.get(this.recipeManagementIcon).should('be.visible').and('have.text', this.recipeManagementText);
    }

}

export default HomeIcon;
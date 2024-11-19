class LeftNavIcon {
    leftIcon = "#left-menu-toggle";
    companyName = ".uk-text-center.company-name";
    fdaRegistration = ".uk-nav > :nth-child(1) > a";
    priorNotice = ".uk-nav > :nth-child(2) > a";
    complyHub = '.uk-nav > :nth-child(3) > a';
    onlineTraining = ':nth-child(4) > [href="#"]';
    adverseManagement = '.uk-nav > :nth-child(5) > a';
    recipeManagement = ':nth-child(6) > .alacalcLink';
    myAccount = ':nth-child(7) > [href="#"]';
    signOut = ':nth-child(8) > a';
    medicalDevice = "a[href='/med.do?action=basic']";
    drug = "a[href='/drug.do?action=basic']";
    cosmetic = "a[href='/cosmetic.do?action=basic']";
    file = "li[class='uk-parent uk-open'] li:nth-child(1) a:nth-child(1)";
    purchase = "a[href='/filing.do?action=pn-prepay']";
    history = "a[href='/filing.do?action=pn-history']";
    preference = "a[href='/filing.do?action=pn-preferences']";
    myTraining = "a[href='/Cart.aspx?action=filesNtraining']";
    orderHistory = "a[href='/Cart.aspx?action=orderHistory']";
    teamTraining = "a[href='/Cart.aspx?action=regCodeOverviews']";
    browse = "a[href='https://online-training.registrarcorp.com/']";
    general = "a[href='/action.do?action=myaccount-general']";
    payment = "a[href='/action.do?action=myaccount-payment']";
    users = "a[href='/action.do?action=myaccount-users']";
    expandButton = '[href="#"]';
    companyNameText = "NewTest Company";
    fdaRegistartionText = "FDA Facility Registration";
    priorNoticeText = "Prior Notice Express";
    complyHubText = "ComplyHub";
    onlineTrainingText = "Online Training";
    adverseEventText = "Adverse Event Management";
    recipeManagementText = "Recipe Management & Nutrition Labeling";
    myAccountText = "My Account";
    signOutText = "Sign Out";
    medicalDeviceText = "Medical Device";
    drugText = "Drug";
    cosmeticText = "Cosmetic";
    fileText = "File";
    purchaseText = "Purchase";
    historyText = "History";
    preferenceText = "Preference";
    myTrainingText = "My Training";
    orderHistoryText = "Order History";
    teamTrainingText = "Team Training"
    browseText = "Browse";
    generalText = "General";
    paymentText = "Payment";
    usersText = "Users";

    verifyLeftNavigationIcon() {
        cy.get(this.leftIcon).should('be.visible').click();
        cy.get(this.companyName).should('be.visible').and('have.text', this.companyNameText);
        cy.get(this.fdaRegistration).should('be.visible').and('have.text', this.fdaRegistartionText);
        cy.get(this.priorNotice).should('be.visible').and('have.text', this.priorNoticeText);
        cy.get(this.complyHub).should('be.visible').and('have.text', this.complyHubText);
        cy.get(this.onlineTraining).should('be.visible').and('have.text', this.onlineTrainingText);
        cy.get(this.adverseManagement).should('be.visible').and('have.text', this.adverseEventText);
        cy.get(this.recipeManagement).should('be.visible').and('have.text', this.recipeManagementText);
        cy.get(this.myAccount).should('be.visible').and('have.text', this.myAccountText);
        cy.get(this.signOut).should('be.visible').and('have.text', this.signOutText);
    }

    verifyCollapsableLeftNavigationIcon() {
        // cy.get(this.expandButton).eq(0).click({ force: true })
        //     .then(($el) => {
        //         cy.wait(1000);
        //         cy.wrap($el).parent().contains(this.fdaRegistartionText)
        //             .should('be.visible');
        //         cy.get(this.medicalDevice).should('be.visible').contains(this.medicalDeviceText);
        //         cy.get(this.drug).should('be.visible').contains(this.drugText);
        //         cy.get(this.cosmetic).should('be.visible').contains(this.cosmeticText);

        //     })
        cy.get(this.expandButton).eq(0).click({ force: true })
            .then(($el) => {
                cy.wait(1000);
                cy.wrap($el).parent().contains(this.priorNoticeText)
                    .should('be.visible');
                cy.get(this.file).should('be.visible').contains(this.fileText);
                cy.get(this.purchase).should('be.visible').contains(this.purchaseText);
                cy.get(this.history).should('be.visible').contains(this.historyText);
                cy.get(this.preference).should('be.visible').contains(this.preferenceText);
            });
        cy.get(this.expandButton).eq(1).click({ force: true })
            .then(($el) => {
                cy.wait(1000);
                cy.wrap($el).parent().contains(this.onlineTrainingText)
                    .should('be.visible');
                cy.get(this.myTraining).should('be.visible').contains(this.myTrainingText);
                cy.get(this.orderHistory).should('be.visible').contains(this.orderHistoryText);
                cy.get(this.teamTraining).should('be.visible').contains(this.teamTrainingText);
                cy.get(this.browse).should('be.visible').contains(this.browseText);
            });
        cy.get(this.expandButton).eq(2).click({ force: true })
            .then(($el) => {
                cy.wait(1000);
                cy.wrap($el).parent().contains(this.myAccountText)
                    .should('be.visible');
                cy.get(this.general).should('be.visible').contains(this.generalText);
                cy.get(this.payment).should('be.visible').contains(this.paymentText);
                cy.get(this.users).should('be.visible').contains(this.usersText);
            });
        cy.get(this.signOut).should('be.visible').and('have.text', this.signOutText).click();
        cy.url().should('include', '/signin');
    }
}

export default LeftNavIcon;
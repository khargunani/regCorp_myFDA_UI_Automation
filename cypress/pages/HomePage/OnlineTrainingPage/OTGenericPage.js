const Texts = {
    OnlineTraining: 'Online Training'
}

class OTGeneric {
    redirectToOTMenu() {
        cy.contains(Texts.OnlineTraining).should('be.visible').click();
    }
}

export default OTGeneric;
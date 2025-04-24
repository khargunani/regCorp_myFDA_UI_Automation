const Locators = {
    
}

const Texts = {
    Browse: 'Browse',
    selectTraining: 'PCQI Training: Preventive Controls for Human Food'
}





class OTBrowse {

    redirectToBrowse(){
        cy.contains(Texts.Browse).click();

    }

    // onBeforeLoad(win) {
    //     // Example: prefill localStorage if cart uses this
    //     win.localStorage.setItem('cartItems', JSON.stringify([
    //       { id: 1075, quantity: 1 }
    //     ]));
    //   }

    exploreAndAddTrainingsToCart(){
        cy.get("a[href ='#compliance-courses']").click();
        cy.contains(Texts.selectTraining).click();
        cy.get("div[class='add-to-cart']").click();
       // cy.visit('/Cart.aspx');
       // cy.reload();
    //    cy.viewport(1280, 800);
    //    cy.get('.cart', { timeout: 10000 }).should('be.visible');
    //    cy.get('.cart').should('not.have.class', 'uk-hidden');
    //    cy.get('#instruction').should('not.have.class', 'uk-hidden');
    //    cy.url().then((currentUrl) => {
    //    cy.log('Current URL is: ' + currentUrl);
    //    const updatedUrl = currentUrl.replace('www', 'dev');
    //    cy.visit(updatedUrl);
          
    
}
}


export default OTBrowse;
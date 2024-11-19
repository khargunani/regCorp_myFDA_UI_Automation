class CosmeticProduct{


    ListofBrandsPage1 = "#productTable tbody tr td[class='sorting_1']"
    CosmeticTickler = "[name='cosmeticForm'] > .tinyCopy";
    paymentInfoRecieved = "#renew_status2"
    paymentRecieved = "#renew_status3"
    BackToCompany = "Return to Company"
    CDHomeNotepad = "//tbody/tr[2]/td[6]"
    PathForScreenshot = "CD\\AddNotepad"
    ProductToBeSearched = "Automation Test"
    Payment1Year = "#renewal_date_2025"
    Payment2Year = "#renewal_date_2026"
    Payment3Year = "#renewal_date_2027"
    RegRecievedDocs = "#regCorpRcvdDocs"

    goToCosmeticTickler(){
        cy.get(this.CosmeticTickler).click(); 
    }


    verifyAddedBrandOnCD(){
        cy.wait(200);
        cy.contains("Cosmetic Products Manufactured at Facility");
        cy.get(this.ListofBrandsPage1).each(($ele) => {
            cy.wrap($ele.text());
            if ($ele.text() == "Automation Test") {
                cy.log("Product found");
                
        }
    })
}


   verifyPaymentIsDone(){
    cy.get(this.paymentInfoRecieved).should("be.checked");
    cy.get(this.paymentRecieved).should("be.checked");  
    return 1;  
   
}

   verifyPaymentHistoryfor1Year()
   {
    cy.scrollTo("center");
    const todaysDate = Cypress.moment().format('DD/MM/YYYY');
    cy.get(this.Payment1Year).invoke('val').should('equal',todaysDate);
    // cy.get(this.Payment1Year).invoke('val').then((val)=>{
    //     const dateValue = val;
    //     cy.log("Here is the date:"+dateValue);
    //   })
   }

   verifyPaymentHistoryfor2Year()
   {
    
    
   }

   verifyPaymentHistoryfor3Year()
   {
    
   }

   returnToCompany(){
    cy.contains(this.BackToCompany).click();
   }

   verifyNotepadEmail(){
    cy.xpath(this.CDHomeNotepad).screenshot(this.PathForScreenshot);

   }

   
            
                   
      


}
export default CosmeticProduct;
class CosmeticEditCD{

    ListofBrandsPage1 = "#productTable tbody tr td[class='sorting_1']"
    CosmeticTickler = "[name='cosmeticForm'] > .tinyCopy";
    paymentInfoRecieved = "#renew_status2"
    paymentRecieved = "#renew_status3"
    BackToCompany = "Return to Company"
    CDHomeNotepad = "//tbody/tr[2]/td[6]"
    PathForScreenshot = "CD\\EditNotepad"
    ProductToBeSearched = "Automation Test"
    OwnerOperatorEmail = "#ownerOperatorEmail"
    EmergencyPhoneContact = "#emergencyContactPhoneExchange"
    
    

    goToCosmeticTickler(){
        cy.get(this.CosmeticTickler).click(); 
    }


    verifyEditBrandOnCD(){
        cy.wait(200);
        cy.contains("Cosmetic Products Manufactured at Facility");
        cy.get(this.ListofBrandsPage1).each(($ele) => {
            cy.wrap($ele.text());
            if ($ele.text() == "automation@gmail.com") {
                cy.log("Product found");
                
        }
    })
}


VerifyOwnerOperatorEditDetails(){
    cy.get(this.OwnerOperatorEmail).should('have.value', 'automation@gmail.com');
    cy.log("Email is matched")
}

verifyEmergencyContactEditDetails(){
    cy.get(this.EmergencyPhoneContact).should('have.value','123456789')
        cy.log("Phone Number is matched")
}


verifyNotepadEmailforEdit(){
    cy.xpath(this.CDHomeNotepad).screenshot(this.PathForScreenshot);

   }


}
export default CosmeticEditCD;
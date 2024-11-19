class CreateInquiry{

    InquiryTab = "Inquiries"
    AddInquiryLink = "Add an Inquiry"
    InquiryTypeList = "table[class='uk-table'] tbody tr td"
    InquiryTypeSelect = "Renewal: US Reg Service"
    ButtonNo = "No"
    SelectInquiry = "select[name='inquiryType']"
    SubInquiryClick = "#select2-inqTypes-container"
    SelectsubInquiry = "span.select2-results ul li"
    SelectContact = "select[name='contact']"
    SelectSalesRep = "select[name='salesrep']"
    SelectStage = "select[name='stage']"
    SelectInquiryType ="Renewal: Cosmetic Registration"
    InquiryManagementLink = "Inquiry Management"
    InquiryStage = "#inqStage"



    openInquiryTab(){
        var inquiry = true;
        cy.contains(this.InquiryTab).click();
        cy.contains(this.AddInquiryLink).invoke("removeAttr","target").click();
        
        cy.get(this.InquiryTypeList).each(($el) => {
            cy.log($el.text());
            var inquirytype = $el.text();
            if (inquirytype.includes(" Renewal: Cosmetic Registration ")) {
                cy.get('#activeInquiries > .uk-modal-dialog > .uk-form > center > .uk-button-primary').click();
                    return false;  
                } else{
                    cy.get('#activeInquiries > .uk-modal-dialog > .uk-form > center > .uk-button-primary').click();
                    this.createInquiry();
                    return false;
                }
            })
    
}

    createInquiry(){
        cy.get(this.SelectInquiry).select("Renewal");
        cy.get(this.SubInquiryClick).click();
        cy.get(this.SelectsubInquiry).each(($ele) => {
            cy.log($ele.text());
            if ($ele.text() == "Cosmetic Registration") {
                cy.wrap($ele).click();
            }
        })
        cy.get(this.SelectContact).select("Priyanka Pathak(Main)");
        cy.get(this.SelectSalesRep).select("Atal Pandey");
        cy.get(this.SelectStage).select("In Queue")
        cy.contains('Submit').click();

    }

    verifyInquiryIsUpdatedForBankwire(){
        cy.contains(this.InquiryTab).click();
        cy.contains(this.SelectInquiryType).then(newTab=>{
            const hrefTab = newTab.prop('href')
            cy.visit(hrefTab);
        cy.contains(this.InquiryManagementLink).click();
        cy.get(this.InquiryStage).should('have.value','Closed-Pending-Payment')


        })
        cy.go('back');
    }

    verifyInquiryIsUpdatedForOnline(){
        cy.contains(this.InquiryTab).click();
        cy.contains(this.SelectInquiryType).then(newTab=>{
            const hrefTab = newTab.prop('href')
            cy.visit(hrefTab);
        cy.contains(this.InquiryManagementLink).click();
        cy.get(this.InquiryStage).should('have.value','Closed-Won')


        })
        cy.go('back');
    }





}

export default CreateInquiry;
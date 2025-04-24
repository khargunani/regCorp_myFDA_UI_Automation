const Locators = {
    FFtable: "table[class='food_regi-table uk-table uk-table-divider'] tbody",
    FFtablerow: "tr" ,
    FFtablecolumn: "td"


    
}

const Texts = {
    
}

class FFDashboard {


 viewFFDashboardDetails(){
    cy.get(Locators.FFtable).should('be.visible').then($tbody => {
        const rows = $tbody.find(Locators.FFtablerow)
        if (rows.length) {
            cy.wrap(rows).each($row => {
                cy.get(Locators.FFtablecolumn).should('be.visible').then($Columnvalue => {
                    const productname = $Columnvalue.text();
                    cy.log(productname);
                })
            })
        }
    })
}

}
export default FFDashboard;
const Locators = {
    ProductTable: `table[id='productsTab'] tbody`,
    TableRow: `tr`,
    TableData: `td`
}

const Texts = {
    MyTraining: 'My Training'
}

class OTMyTraining {

    redirectToMyTraining() {
        cy.contains(Texts.MyTraining).should('be.visible').click();
    }

    getTrainingProduct() {
        cy.get(Locators.ProductTable).should('be.visible').then($tbody => {
            const rows = $tbody.find(Locators.TableRow)
            if (rows.length) {
                cy.wrap(rows).each($row => {
                    cy.get(Locators.TableData).should('be.visible').then($Columnvalue => {
                        const productname = $Columnvalue.text();
                        cy.log(productname);
                    })
                })
            }
        })
    }

    // verifyTrainingContentOnLaunchCourse(){
    //     cy.get("table[id='productsTab'] tbody tr").each(($row, index, $rows)=>{
    //         cy.wrap($row).within(()=>{
    //             cy.get('td').each(($col, index, $cols)=>{
    //                 cy.log($col.text()); 
    //                         cy.wrap($row).find('td').eq(1).then(($cell) => {
    //                             if ($cell.text().trim() === "Launch Training") {
    //                                 // Click the "Assign" link in this row
    //                                 cy.wrap($cell).find('button.asLink').click({ force: true });

    //                                 // Wait for the Assign popup to appear and complete the process
    //                                 cy.get('.odd > :nth-child(4) > a').should('be.visible').click();
    //                                 cy.get('#assignRegCodeOption2').check();
    //                                 cy.get("select[name='userid']").select("Automation_subuser");

    //                                 cy.get('.uk-form-controls > .uk-button').click();

    //                                 // Wait for confirmation modal or page to update before proceeding
    //                                 cy.get('.center > .uk-button').should('be.visible').click();

    //                                 // Wait for the page to return to a stable state (you can improve this if there's a loading spinner or table reload)
    //                                 cy.get("table[id='regCodeOverviewsTab']").should('exist');

    //                                 cy.log(`Successfully assigned in row ${index + 1}`);
    //                             }
    //                         });
    //                     });
    //                 })
    //             })

    // }

    // function verifyTrainingContentOnLaunchCourse(rowIndex = 0) {
    //     cy.get("table[id='productsTab'] tbody tr").then($rows => {
    //         if (rowIndex >= $rows.length) return; // Stop when all rows are processed

    //         cy.wrap($rows[rowIndex]).within(() => {
    //             cy.get('td').eq(1).then($cell => {
    //                 const cellText = $cell.text().trim();
    //                 if (cellText === "Launch Training") {
    //                     cy.wrap($cell).find('button.asLink').click({ force: true });

    //                     // Wait for the popup and verify
    //                     cy.contains('Launch Course').should('be.visible');

    //                     // Simulate going back (could be via a back button or route)
    //                     cy.go('back'); // or cy.get('selector-for-back-button').click();

    //                     // Wait for the table to load again before continuing
    //                     cy.get("table[id='productsTab'] tbody tr").should('exist');

    //                     // Recursively call for the next row
    //                     verifyTrainingContentOnLaunchCourse(rowIndex + 1);
    //                 } else {
    //                     // If not "Launch Training", move to the next row
    //                     verifyTrainingContentOnLaunchCourse(rowIndex + 1);
    //                 }
    //             })
    //         })
    //     })



}
export default OTMyTraining;
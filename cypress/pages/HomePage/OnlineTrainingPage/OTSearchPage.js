const Locators = {
  SearchButton: `input[type='search']`,
  ProductTable: `table[id='productsTab'] tbody tr`,
  TdValue: `td`,
  HistoryTable: `table[id='historyTab'] tbody tr`,
  OverviewTable: `table[id='regCodeOverviewsTab'] tbody tr`
}

class OTSearch {

    searchOnMyTraining(Input){
       cy.get(Locators.SearchButton).should('be.visible').clear().type(Input.ProductName);
       cy.get(Locators.ProductTable).should('be.visible').each(($row) => {
        cy.wrap($row).within(() => {
          cy.get(Locators.TdValue).should('be.visible').then($cells => {
            if ($cells.text().includes(Input.ProductName)) {
              cy.log('Correct Match Found!')
            }
            else{
                cy.log('No match found')
            }
          })
        })
      })
    }

    searchOnMyOrderHistory(Input){
        cy.get(Locators.SearchButton).should('be.visible').clear().type(Input.OrderId);
       cy.get(Locators.HistoryTable).should('be.visible').each(($row) => {
        cy.wrap($row).within(() => {
          cy.get(Locators.TdValue).should('be.visible').then($cells => {
            if ($cells.text().includes(Input.OrderId)) {
              cy.log('Correct Match Found!')
            }
            else{
                cy.log('No match found')
            }
          })
        })
      })
    }

    SearchOnTeamTraining(Input){
        cy.get(Locators.SearchButton).should('be.visible').clear().type(Input.TeamTraining);
       cy.get(Locators.OverviewTable).should('be.visible').each(($row) => {
        cy.wrap($row).within(() => {
          cy.get(Locators.TdValue).should('be.visible').then($cells => {
            if ($cells.text().includes(Input.TeamTraining)) {
              cy.log('Correct Match Found!')
            }
            else{
                cy.log('No match found')
            }
          })
        })
      })
    }
}
export default OTSearch;
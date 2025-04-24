const Locators = {
    OverviewTab: `table[id='regCodeOverviewsTab'] tbody tr`,
    TableData: `td`
}

const Texts = {
    TeamTraining: 'Team Training'
}

class OTTeamTraining {

    redirectToTeamTraining() {
        cy.contains(Texts.TeamTraining).should('be.visible').click();
    }

    getTeamTrainingDetails() {
        cy.get(Locators.OverviewTab).should('be.visible').each(($row) => {
            cy.wrap($row).within(() => {
                cy.get(Locators.TableData).should('be.visible').each(($col) => {
                    cy.log($col.text());
                })
            })
        })
    }
}

export default OTTeamTraining;
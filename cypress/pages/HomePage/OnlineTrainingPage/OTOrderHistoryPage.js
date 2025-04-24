const Locators = {
    HistoryTable: `table[id='historyTab'] tbody tr`,
    TdValue: `td`,
    GrandTotal: `tbody tr:nth-child(4) td:nth-child(2)`,
    Total: `tbody > tr > :nth-child(4)`
}

const Texts = {
    OrderHistory: `Order History`,
    Details: `Details`,
    ViewInvoice: `View Invoice`
}

class OTOrderHistory {

    redirectToOrderHistory() {
        cy.contains(Texts.OrderHistory).click();
    }

    getOrderHistoryDetails() {
        cy.get(Locators.HistoryTable).should('be.visible').each(($row) => {
            cy.wrap($row).within(() => {
                cy.get(Locators.TdValue).should('be.visible').each(($col) => {
                    cy.log($col.text());
                })
            })
        })
    }

    verifyOrderHistoryInvoiceDetail() {
        cy.contains(Texts.Details).should('be.visible').first().click();
        cy.wait(5000);
        cy.get(Locators.GrandTotal).should('be.visible').invoke('text').then((originalValue) => {
            const trimmedOriginalValue = originalValue.trim();
            cy.log('Original Value: ' + trimmedOriginalValue);
            cy.contains(Texts.ViewInvoice)
                .should('be.visible')
                .invoke('removeAttr', 'target')
                .click();
            cy.log("Invoice generated");
            cy.get(Locators.Total, { timeout: 10000 })
                .should('be.visible')
                .invoke('text')
                .then((invoiceValue) => {
                    const trimmedInvoiceValue = invoiceValue.trim();
                    cy.log('Invoice Value: ' + trimmedInvoiceValue);
                    if (trimmedOriginalValue === trimmedInvoiceValue) {
                        cy.log('Correct Amount: ' + trimmedOriginalValue);
                    } else {
                        cy.log('Wrong Amount! Expected: ' + trimmedOriginalValue + ', Got: ' + trimmedInvoiceValue);
                    }
                });
        })

    }
}

export default OTOrderHistory;
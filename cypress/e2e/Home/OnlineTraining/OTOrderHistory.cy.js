import OTGeneric from "../../../pages/HomePage/OnlineTrainingPage/OTGenericPage";
import OTOrderHistory from "../../../pages/HomePage/OnlineTrainingPage/OTOrderHistoryPage";

const otgeneric = new OTGeneric();
const otorderhistory = new OTOrderHistory();
const startTime = Date.now();

describe('Validate all payment flow with different mode on myFDA', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('/ContactDirect/MyFDA/UserCredentials.json').then((data) => {
            const { desiredUserId, password } = data.OnlineUser;
            cy.login(desiredUserId, password);
        })
    });

    it.only('Verify user can redirect to submenu Order History and see the details', () => {
            otgeneric.redirectToOTMenu();
            cy.logger('MyFDA application', 'Redirecting to Online training menu');
            otorderhistory.redirectToOrderHistory();
            cy.logger('MyFDA application', 'Redirecting to Order History');
            otorderhistory.getOrderHistoryDetails();
            cy.logger('MyFDA application', 'Get Order history details');
            otorderhistory.verifyOrderHistoryInvoiceDetail();
            cy.logger('MyFDA application', 'Verifing order history details with invoice details');
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `TotalTime taken to execute test scenario: ${loadTime}ms`);
    })

    it.skip('Verify the menu My Trainings, Product name has the correct details and On launch training it redirect to other link where user can see the link to launch the course', () => {
        cy.fixture('Home/OnlineTraining/OTMyTraining.json').then((data) => {

        })
    })
})




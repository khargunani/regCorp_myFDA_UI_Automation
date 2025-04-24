import OTGeneric from "../../../pages/HomePage/OnlineTrainingPage/OTGenericPage";
import OTOrderHistory from "../../../pages/HomePage/OnlineTrainingPage/OTOrderHistoryPage";
import OTMyTraining from "../../../pages/HomePage/OnlineTrainingPage/OTMyTrainingPage";
import OTTeamTraining from "../../../pages/HomePage/OnlineTrainingPage/OTTeamTrainingPage";
import OTSearch from "../../../pages/HomePage/OnlineTrainingPage/OTSearchPage";

const otgeneric = new OTGeneric();
const otorderhistory = new OTOrderHistory();
const otmytraining = new OTMyTraining();
const otteamtraining = new OTTeamTraining();
const otsearch = new OTSearch();
const startTime = Date.now();

describe('Validate all Online training scenarios on myFDA', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('/ContactDirect/MyFDA/UserCredentials.json').then((data) => {
            const { desiredUserId, password } = data.OnlineUser;
            cy.login(desiredUserId, password);
        })
    });

    it('Verify search functionality on my training tab', () => {

        cy.fixture('Home/OnlineTraining/OTSearch.json').then((data) => {
            otgeneric.redirectToOTMenu();
            cy.logger('MyFDA application', 'Redirecting to Online training menu');
            otmytraining.redirectToMyTraining();
            cy.logger('MyFDA application', 'Redirecting to My training');
            otsearch.searchOnMyTraining(data.Input);
            cy.logger('MyFDA application', 'Search functionality is completed for Online training menu');
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `TotalTime taken to execute test scenario: ${loadTime}ms`);
        })
    })

    it('Verify search functionality on order history tab', () => {

        cy.fixture('Home/OnlineTraining/OTSearch.json').then((data) => {
            otgeneric.redirectToOTMenu();
            cy.logger('MyFDA application', 'Redirecting to Online training menu');
            otorderhistory.redirectToOrderHistory();
            cy.logger('MyFDA application', 'Redirecting to Order History');
            otsearch.searchOnMyOrderHistory(data.Input);
            cy.logger('MyFDA application', 'Search functionality is completed for Order History');
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `TotalTime taken to execute test scenario: ${loadTime}ms`);
        })
    })

    it('Verify search functionality on team training tab', () => {

        cy.fixture('Home/OnlineTraining/OTSearch.json').then((data) => {
            otgeneric.redirectToOTMenu();
            cy.logger('MyFDA application', 'Redirecting to Online training menu');
            otteamtraining.redirectToTeamTraining();
            cy.logger('MyFDA application', 'Redirecting to Team training');
            otsearch.SearchOnTeamTraining(data.Input);
            cy.logger('MyFDA application', 'Search functionality is completed for Team training');
            const loadTime = Date.now() - startTime;
            cy.logger('performance', `TotalTime taken to execute test scenario: ${loadTime}ms`);
        })
    })
})




import OTGeneric from "../../../pages/HomePage/OnlineTrainingPage/OTGenericPage";
const otgeneric = new OTGeneric();

describe('Validate all payment flow with different mode on myFDA', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('/ContactDirect/MyFDA/UserCredentials.json').then((data) => {
            const { desiredUserId, password } = data.OnlineUser;
            cy.login(desiredUserId, password);
        })
    });

    it('Verify the menu My Trainings, Product name has the correct details and On launch training it redirect to other link where user can see the link to launch the course', () => {
        otgeneric.redirectToOTMenu();
    })
})






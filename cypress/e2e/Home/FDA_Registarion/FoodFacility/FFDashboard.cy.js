import HomePage from "../../../../pages/ContactDirect/Home/Home/SearchCompanyPage";
import FFDashboard from "../../../../pages/HomePage/FDARegistrationPage/FoodFacility/FFDashboardPage";

const startTime = Date.now();
const ffdashboard = new FFDashboard();



describe('Validate all payment flow with different mode on myFDA', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('myFDA_rcup'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
            cy.wait(10000);
        })
    })

    it('Verify Food facility dahboard details',()=>{

        ffdashboard.viewFFDashboardDetails();
        const loadTime = Date.now() - startTime;
        cy.logger('performance', `Total time taken to Login and Create Inquiry: ${loadTime}ms`);

    })
})
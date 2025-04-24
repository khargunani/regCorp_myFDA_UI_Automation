
import OTBrowse from "../../../pages/HomePage/OnlineTrainingPage/OTBrowsePage";
import OTGeneric from "../../../pages/HomePage/OnlineTrainingPage/OTGenericPage";


const otgeneric = new OTGeneric();
const otbrowse = new OTBrowse();

describe('Validate all payment flow with different mode on myFDA', () => {

    beforeEach(() => {

        
        cy.visit(Cypress.env('myFDAurl'));
        cy.logger('MyFDA application', "MyFDA Launched Application-->Login Test");
        cy.fixture('ContactDirect/MyFDA/UserCreation').then((data) => {
            const { desiredUserId, password } = data.subUser;
            cy.login(desiredUserId, password);
        })
        
    });

    
    it('Verify on click to Browse tab user redirects to website for purchasing trainings', () => {

        cy.fixture('Home/OnlineTraining/OTMyTraining.json').then((data) => {
            otgeneric.redirectToOTMenu();
            otbrowse.redirectToBrowse();

          
           
        })
        
    })

    it.only('Verify user can explore add to cart the trainings', () => {

        cy.fixture('Home/OnlineTraining/OTMyTraining.json').then((data) => {
            otgeneric.redirectToOTMenu();
            otbrowse.redirectToBrowse();
            otbrowse.exploreAndAddTrainingsToCart();

          
           
        })
        
    })
})




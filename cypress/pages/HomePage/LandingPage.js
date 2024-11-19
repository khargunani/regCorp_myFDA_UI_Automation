/// <reference types="cypress" />
import { should } from "chai";

class Landing{
verifyTilesPresentOnHomePage(){ 
cy.xpath("//div[@class='uk-overlay-panel uk-overlay-background uk-overlay-bottom uk-ignore']")
.its('length')
.then(count => {
  for (let index = 0; index < 6; index++) {

    cy.xpath("//div[@class='uk-overlay-panel uk-overlay-background uk-overlay-bottom uk-ignore']").eq(index).invoke('text').then((text) => {
        cy.log(text);
   
  })
}
})
   

    


}
}
export default Landing;
/// <reference types="cypress" />
import { should } from "chai";

class CosmeticAddProduct{

    AddBrand = ":nth-child(3) > .uk-icon"
    BrandName = ".blockKey > .uk-form-controls > .uk-form-width-extra-large"
    ProductCategory = ":nth-child(7) > .uk-form-controls > .select2 > .selection > .select2-selection > .select2-search > .select2-search__field"
    ResponsiblePerson = ":nth-child(6) > .uk-form-controls > .uk-form-width-extra-large"
    SaveButton = ":nth-child(8) > .uk-form-controls > .uk-button"
    DropDownOption = "span.select2-results ul[role='listbox'] li"


    addNewBrand(brandname,responsibleperson,category){

        cy.get(this.AddBrand).click();
        cy.get(this.BrandName).clear().type("Automation Test");
        cy.get(this.ResponsiblePerson).clear().type("Komal");
        cy.get(this.ProductCategory).click() 
       
        cy.get(this.DropDownOption).each(($ele) => {
          if ($ele.text() == "(01)(A) Baby Shampoos") {
              cy.wrap($ele).click();
          }        
    })

        cy.log("clciking on save button");
        cy.get(this.SaveButton).click();

    }


}
export default CosmeticAddProduct;
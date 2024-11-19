/// <reference types="cypress" />
import { should } from "chai";

export class CosmeticRenewalProcess{

  RenewNowPopup = "Renew Now"
  RemindMeLater = ""

  goForRenewalProcess(){
    cy.wait(10000);
    cy.contains(this.RenewNowPopup).click({force: true});
  }

  remindMeLaterForRenewal(){

  }
}

export default CosmeticRenewalProcess;

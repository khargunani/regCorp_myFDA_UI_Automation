

class CosmeticRenewal {

    CUF = "#renew_status0"
    paymentInfoRecieved = "#renew_status2"
    paymentRecieved = "#renew_status3"

    printLog(){
        cy.log("Renewal Process");
    }


    verifyCompanyRenewalPreconditions() {
        return cy.get(this.CUF).then(($inputElem) => {
     
            if ($inputElem.is(':checked')) {
                //cy.log("Renewal precondition is not satisfied, please check C.U.F checkbox status on CD side");
                return 0;
            } else {
                //cy.log("Applicable for renewal process");
                return 1;
            }
        })
    }

  




}
export default CosmeticRenewal;

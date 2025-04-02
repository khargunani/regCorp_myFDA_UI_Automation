const Locators = {
    InquiryTab: `Inquiries`,
    AddInquiryLink: `Add an Inquiry`,
    InquiryTypeList: `table[class='uk-table'] tbody tr td`,
    InquiryTypeSelect: `Renewal: US Reg Service`,
    ButtonNo: `No`,
    SelectInquiry: `select[name='inquiryType']`,
    SubInquiryClick: `#select2-inqTypes-container`,
    SelectsubInquiry: `span.select2-results ul li`,
    SelectContact: `select[name='contact']`,
    SelectSalesRep: `select[name='salesrep']`,
    SelectRepPlaceholder: `#repPlaceholder`,
    SelectStage: `select[name='stage']`,
    SelectInquiryType: `Renewal: US Reg Service`,
    SelectInquiryType2: `Renewal: US Reg Service 2 year`,
    SelectInquiryType3: `Renewal: US Reg Service 3 year`,
    SelectRegProInquiryType: 'RC Professional Food 1 year',
    SelectRegProInquiryType2: 'RC Professional Food 2 year',
    SelectRegProInquiryType3: 'RC Professional Food 3 year',
    InquiryManagementLink: `Inquiry Management`,
    InquiryStage: `#inqStage`,
    Submit: `Submit`,
    YesButton: `div[id='deleteInquiry'] button[type='submit']`,
    DeleteButton: `#deleteeInquiry`,
    UpdateBTATickler: `//a[normalize-space()='Update BTA']`,
    PaymentCheckbox : `input[value="3"][name="renew_status"]`,
    SubmitButton: `.uk-text-center.uk-margin-top > .uk-button`
}

const BTAInquiry = {
    Contact: "Prachi Lonkar",
    Stage: "In Queue",
    Type: "Renewal",
    SubType: "US Reg Service",
    RepPlaceholder: "Rep Unassigned",
    SubType2: "US Reg Service 2 year",
    SubType3: "US Reg Service 3 year"
}

class CreateInquiry {

    openInquiryTab() {
        let createNewInquiry = false;

        cy.contains(Locators.InquiryTab).click();
        cy.contains(Locators.AddInquiryLink).invoke("removeAttr", "target").click();

        cy.get(Locators.InquiryTypeList).each(($el) => {
            cy.log($el.text());
            var inquirytype = $el.text();
            if (inquirytype.includes(" Renewal: US Reg Service ")) {
                cy.get('#activeInquiries > .uk-modal-dialog > .uk-form > center > .uk-button-primary').click();
                return false;
            } else {
                cy.get('#activeInquiries > .uk-modal-dialog > .uk-form > center > .uk-button-primary').click();
                this.createInquiry();
                return false;
            }
        })
    }

    createInquiry() {
        cy.get(Locators.SelectInquiry).select(BTAInquiry.Type);
        cy.get(Locators.SubInquiryClick).click();

        cy.get(Locators.SelectsubInquiry).each(($ele) => {
            cy.log($ele.text());
            if ($ele.text() === BTAInquiry.SubType) {
                cy.wrap($ele).click();
            }
        });
        cy.get(Locators.SelectContact).select(BTAInquiry.Contact);
        cy.get(Locators.SelectStage).select(BTAInquiry.Stage);
        cy.get(Locators.SelectRepPlaceholder).select(BTAInquiry.RepPlaceholder);
        cy.contains(Locators.Submit).click();
    }

    createInquiryNonUS() {
        cy.contains(Locators.InquiryTab).click();
        cy.contains(Locators.AddInquiryLink).invoke("removeAttr", "target").click();
        cy.get(Locators.SelectInquiry).select(BTAInquiry.Type);
        cy.get(Locators.SubInquiryClick).click();

        cy.get(Locators.SelectsubInquiry).each(($ele) => {
            cy.log($ele.text());
            if ($ele.text() === BTAInquiry.SubType) {
                cy.wrap($ele).click();
            }
        });
        cy.get(Locators.SelectContact).select(BTAInquiry.Contact);
        cy.get(Locators.SelectStage).select(BTAInquiry.Stage);
        cy.get(Locators.SelectRepPlaceholder).select(BTAInquiry.RepPlaceholder);
        cy.contains(Locators.Submit).click();
    }

    verifyAutoInquiryForRegPro(){
        cy.contains(Locators.InquiryTab).click();
        cy.wait(10000);
        cy.contains(Locators.SelectRegProInquiryType).then((newTab) => {
            const hrefTab = newTab.prop('href');
            cy.visit(hrefTab);
            cy.contains(Locators.InquiryManagementLink).click();
            let expectedStage = 'Closed-Pending-Payment';
            cy.get(Locators.InquiryStage).should('have.value', expectedStage);
            cy.get(Locators.DeleteButton).click();
            cy.window().then(() => {
                cy.get(Locators.YesButton).click({ force: true });
            })
        })
    }

        verifyAutoInquiryForRegPro2(){
            cy.contains(Locators.InquiryTab).click();
            cy.wait(10000);
            cy.contains(Locators.SelectRegProInquiryType2).then((newTab) => {
                const hrefTab = newTab.prop('href');
                cy.visit(hrefTab);
                cy.contains(Locators.InquiryManagementLink).click();
                let expectedStage = 'Closed-Pending-Payment';
                cy.get(Locators.InquiryStage).should('have.value', expectedStage);
                cy.get(Locators.DeleteButton).click();
                cy.window().then(() => {
                    cy.get(Locators.YesButton).click({ force: true });
                })
            })
        }

            verifyAutoInquiryForRegPro3(){
                cy.contains(Locators.InquiryTab).click();
                cy.wait(10000);
                cy.contains(Locators.SelectRegProInquiryType3).then((newTab) => {
                    const hrefTab = newTab.prop('href');
                    cy.visit(hrefTab);
                    cy.contains(Locators.InquiryManagementLink).click();
                    let expectedStage = 'Closed-Pending-Payment';
                    cy.get(Locators.InquiryStage).should('have.value', expectedStage);
                    cy.get(Locators.DeleteButton).click();
                    cy.window().then(() => {
                        cy.get(Locators.YesButton).click({ force: true });
                    })
                })
            }

            verifyAutoInquiryForRegProOnline(){
                cy.contains(Locators.InquiryTab).click();
                cy.wait(10000);
                cy.contains(Locators.SelectRegProInquiryType).then((newTab) => {
                    const hrefTab = newTab.prop('href');
                    cy.visit(hrefTab);
                    cy.contains(Locators.InquiryManagementLink).click();
                    let expectedStage = 'Closed-Won';
                    cy.get(Locators.InquiryStage).should('have.value', expectedStage);
                    cy.get(Locators.DeleteButton).click();
                    cy.window().then(() => {
                        cy.get(Locators.YesButton).click({ force: true });
                    })
                })
            }

            verifyAutoInquiryForRegPro2Online(){
                cy.contains(Locators.InquiryTab).click();
                cy.wait(10000);
                cy.contains(Locators.SelectRegProInquiryType2).then((newTab) => {
                    const hrefTab = newTab.prop('href');
                    cy.visit(hrefTab);
                    cy.contains(Locators.InquiryManagementLink).click();
                    let expectedStage = 'Closed-Won';
                    cy.get(Locators.InquiryStage).should('have.value', expectedStage);
                    cy.get(Locators.DeleteButton).click();
                    cy.window().then(() => {
                        cy.get(Locators.YesButton).click({ force: true });
                    })
                })
            }

            verifyAutoInquiryForRegPro3Online(){
                cy.contains(Locators.InquiryTab).click();
                cy.wait(10000);
                cy.contains(Locators.SelectRegProInquiryType3).then((newTab) => {
                    const hrefTab = newTab.prop('href');
                    cy.visit(hrefTab);
                    cy.contains(Locators.InquiryManagementLink).click();
                    let expectedStage = 'Closed-Won';
                    cy.get(Locators.InquiryStage).should('have.value', expectedStage);
                    cy.get(Locators.DeleteButton).click();
                    cy.window().then(() => {
                        cy.get(Locators.YesButton).click({ force: true });
                    })
                })
            }

    verifyInquiryIsUpdated() {
        cy.contains(Locators.InquiryTab).click();
        cy.wait(10000);
        cy.contains(Locators.SelectInquiryType).then((newTab) => {
            const hrefTab = newTab.prop('href');
            cy.visit(hrefTab);
            cy.contains(Locators.InquiryManagementLink).click();

            // Verify the inquiry stage based on type
            let expectedStage = 'Closed-Pending-Payment';
            cy.get(Locators.InquiryStage).should('have.value', expectedStage);
            cy.get(Locators.DeleteButton).click();
            cy.window().then(() => {
                cy.get(Locators.YesButton).click({ force: true });
            })
        });
       // cy.go('back');
    }

    openInquiryTabFor2Year() {
        let createNewInquiry = false;

        cy.contains(Locators.InquiryTab).click();
        cy.contains(Locators.AddInquiryLink).invoke("removeAttr", "target").click();

        cy.get(Locators.InquiryTypeList).each(($el) => {
            cy.log($el.text());
            var inquirytype = $el.text();
            if (inquirytype.includes(" Renewal: US Reg Service 2 year ")) {
                cy.get('#activeInquiries > .uk-modal-dialog > .uk-form > center > .uk-button-primary').click();
                return false;
            } else {
                cy.get('#activeInquiries > .uk-modal-dialog > .uk-form > center > .uk-button-primary').click();
                this.createInquiryFor2Year();
                return false;
            }
        })
    }

    createInquiryFor2Year() {
        cy.get(Locators.SelectInquiry).select(BTAInquiry.Type);
        cy.get(Locators.SubInquiryClick).click();

        cy.get(Locators.SelectsubInquiry).each(($ele) => {
            cy.log($ele.text());
            if ($ele.text() === BTAInquiry.SubType2) {
                cy.wrap($ele).click();
            }
        });
        cy.get(Locators.SelectContact).select(BTAInquiry.Contact);
        cy.get(Locators.SelectStage).select(BTAInquiry.Stage);
        cy.get(Locators.SelectRepPlaceholder).select(BTAInquiry.RepPlaceholder);
        cy.contains(Locators.Submit).click();
    }

    verifyInquiryIsUpdatedFor2Year() {
        cy.contains(Locators.InquiryTab).click();
        cy.wait(10000);
        cy.contains(Locators.SelectInquiryType2).then((newTab) => {
            const hrefTab = newTab.prop('href');
            cy.visit(hrefTab);
            cy.contains(Locators.InquiryManagementLink).click();

            // Verify the inquiry stage based on type
            let expectedStage = 'Closed-Pending-Payment';
            cy.get(Locators.InquiryStage).should('have.value', expectedStage);
            cy.get(Locators.DeleteButton).click();
            cy.window().then(() => {
                cy.get(Locators.YesButton).click({ force: true });
            })
        });
        //cy.go('back');
    }

    openInquiryTabFor3Year() {
        let createNewInquiry = false;

        cy.contains(Locators.InquiryTab).click();
        cy.contains(Locators.AddInquiryLink).invoke("removeAttr", "target").click();

        cy.get(Locators.InquiryTypeList).each(($el) => {
            cy.log($el.text());
            var inquirytype = $el.text();
            if (inquirytype.includes(" Renewal: US Reg Service 3 year ")) {
                cy.get('#activeInquiries > .uk-modal-dialog > .uk-form > center > .uk-button-primary').click();
                return false;
            } else {
                cy.get('#activeInquiries > .uk-modal-dialog > .uk-form > center > .uk-button-primary').click();
                this.createInquiryFor3Year();
                return false;
            }
        })
    }

    createInquiryFor3Year() {
        cy.get(Locators.SelectInquiry).select(BTAInquiry.Type);
        cy.get(Locators.SubInquiryClick).click();

        cy.get(Locators.SelectsubInquiry).each(($ele) => {
            cy.log($ele.text());
            if ($ele.text() === BTAInquiry.SubType3) {
                cy.wrap($ele).click();
            }
        });
        cy.get(Locators.SelectContact).select(BTAInquiry.Contact);
        cy.get(Locators.SelectStage).select(BTAInquiry.Stage);
        cy.get(Locators.SelectRepPlaceholder).select(BTAInquiry.RepPlaceholder);
        cy.contains(Locators.Submit).click();
    }

    verifyInquiryIsUpdatedFor3Year() {
        cy.contains(Locators.InquiryTab).click();
        cy.wait(10000);
        cy.contains(Locators.SelectInquiryType3).then((newTab) => {
            const hrefTab = newTab.prop('href');
            cy.visit(hrefTab);
            cy.contains(Locators.InquiryManagementLink).click();

            // Verify the inquiry stage based on type
            let expectedStage = 'Closed-Pending-Payment';
            cy.get(Locators.InquiryStage).should('have.value', expectedStage);
            cy.get(Locators.DeleteButton).click();
            cy.window().then(() => {
                cy.get(Locators.YesButton).click({ force: true });
            })
        });
        //cy.go('back');
    }

    verifyInquiryIsUpdatedForOnlinePayment1Year() {
        cy.contains(Locators.InquiryTab).click();
        cy.wait(10000);
        cy.contains(Locators.SelectInquiryType).then((newTab) => {
            const hrefTab = newTab.prop('href');
            cy.visit(hrefTab);
            cy.contains(Locators.InquiryManagementLink).click();

            // Verify the inquiry stage based on type
            let expectedStage = 'Closed-Won';
            cy.get(Locators.InquiryStage).should('have.value', expectedStage);
            cy.get(Locators.DeleteButton).click();
            cy.window().then(() => {
                cy.get(Locators.YesButton).click({ force: true });
            })
        });
       // cy.go('back');
    }

    verifyInquiryIsUpdatedForOnlinePayment2Year() {
        cy.contains(Locators.InquiryTab).click();
        cy.wait(10000);
        cy.contains(Locators.SelectInquiryType2).then((newTab) => {
            const hrefTab = newTab.prop('href');
            cy.visit(hrefTab);
            cy.contains(Locators.InquiryManagementLink).click();

            // Verify the inquiry stage based on type
            let expectedStage = 'Closed-Won';
            cy.get(Locators.InquiryStage).should('have.value', expectedStage);
            cy.get(Locators.DeleteButton).click();
            cy.window().then(() => {
                cy.get(Locators.YesButton).click({ force: true });
            })
        });
       // cy.go('back');
    }

    verifyInquiryIsUpdatedForOnlinePayment3Year() {
        cy.contains(Locators.InquiryTab).click();
        cy.wait(10000);
        cy.contains(Locators.SelectInquiryType3).then((newTab) => {
            const hrefTab = newTab.prop('href');
            cy.visit(hrefTab);
            cy.contains(Locators.InquiryManagementLink).click();

            // Verify the inquiry stage based on type
            let expectedStage = 'Closed-Won';
            cy.get(Locators.InquiryStage).should('have.value', expectedStage);
            cy.get(Locators.DeleteButton).click();
            cy.window().then(() => {
                cy.get(Locators.YesButton).click({ force: true });
            })
        });
        //cy.go('back');
    }

    verifyCheckboxForUncheckPayment() {
        cy.xpath(Locators.UpdateBTATickler).should('be.visible').click();
        cy.get(Locators.PaymentCheckbox).then(($checkbox) => {
            if ($checkbox.prop('checked')) {
                cy.wrap($checkbox).uncheck();
            }
            cy.get(Locators.SubmitButton).should('be.visible').click();
            cy.wait(10000);
        });
    }

    verifyCheckboxForCheckPayment() {
        cy.xpath(Locators.UpdateBTATickler).should('be.visible').click();
        cy.get(Locators.PaymentCheckbox).then(($checkbox) => {
            if (!$checkbox.prop('checked')) {
                cy.wrap($checkbox).check();
            }
        });
        cy.get(Locators.SubmitButton).should('be.visible').click();
        cy.wait(10000);
    }

}

export default CreateInquiry;
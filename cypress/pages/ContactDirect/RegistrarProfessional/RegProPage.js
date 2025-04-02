const Locators = {
    RegProTickler: `//a[normalize-space()='Registrar Professional']`,
    MonitorTickler: `//a[normalize-space()='Monitor']`,
    UpdateBTATickler: `//a[normalize-space()='Update BTA']`,
    Update: `//a[normalize-space()='Update']`,
    OkButton: `OK`,
    PartnerShipName: `#partnershipName`,
    UpdateOnly: `#updateOnly`,
    Finished: `input[value='Finished']`,
    NoviConnectBanner: `.partnershipMsg`,
    RegProBanner: `.rcProMsg`,
    ProfessionalProduct: `#product`,
    EffectiveStartDate: `//input[@name='startDate']`,
    EffectiveEndDate: `//input[@name='endDate']`,
    SaveButton: `#saveButton`,
    CancelButton: `a[class='uk-button uk-margin-right']`,
    Services: `.service-caption`,
    ShipmentMonitoring: `//h4[normalize-space()='Shipment Monitoring']`,
    PaymentRecDate: `//input[@name='shipment_hist_payment_recd']`,
    ExpDate: `//input[@name='shipment_hist_payment_expired']`,
    MonitoringEnabled: `input[value='1'][name='shipment_hist_enabled']`,
    UpdateShipment: `//div[@class='uk-accordion-content uk-active']//button[@type='submit'][normalize-space()='Update']`,
    MarketplaceExporter: `//h4[normalize-space()='Marketplace Exporter']`,
    PaymentRec: `//input[@name='marketplace_exporter_pymt_recd']`,
    ExpireDate: `//input[@name='marketplace_exporter_pymt_expired']`,
    MonitoringEnable: `input[value='1'][name='marketplace_exporter_enabled']`,
    ProductCount: `//input[@name='marketplace_exporter_product_count']`,
    Updates: `(//button[@type='submit'][normalize-space()='Update'])[6]`,
    PaymentCheckbox: `input[value="3"][name="renew_status"]`,
    SubmitButton: `.uk-text-center.uk-margin-top > .uk-button`,
    RenewDate25: `input[name='renewal_date_23']`,
    RenewDate26: `input[name='renewal_date_24']`,
    RenewDate27: `input[name='renewal_date_25']`,
    CalendarClose: `a[href='javascript:hideCalendarControl();']`,
    ErrorMessage: `.uk-margin.uk-modal-content`
}

const Texts = {
    VIPRegistration: `VIP Registration`,
    FreeOnlineCourse: `Free Online Course`,
    Marketplace: `Marketplace`,
    ShipmentMonitoring: `Shipment Monitoring`,
    RegistrarCorp10offAdditionalServices: `Registrar Corp 10% off Additional Services`,
    offOnlineCertificationTraining: `50% off Online Certification Training`,
    RegProBannerText: `
                This client has purchased Registrar Professional and will enjoy a 10% discount off any additional Registrar services and 50% Online Training. 
                Please ensure you apply the discounts for your client. 
            `,
    NoviConnectBannerText: `
                The client has signed on to a Cosmetic service via NoviConnect.
                Please escalate any Cosmetics questions to the NoviConnect point of contact, instead of reaching out directly to the client.                    
            `,
    ErrorMessageText: `End Date must be later than Start Date!`,


}

const ProfessionalProduct = {
    OneYearUS: `Registrar Professional 1 year - Version 2.0 (US)`,
    TwoYearUS: `Registrar Professional 2 year - Version 2.0 (US)`,
    ThreeYearUS: `Registrar Professional 3 year - Version 2.0 (US)`,
    ChoosePackage: `Choose Package Here`
}

const currentDate = new Date();
const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
const day = ('0' + currentDate.getDate()).slice(-2);
const year = currentDate.getFullYear();
const startDate = `${month}/${day}/${year}`;
const endDate = '12/31/2025';
const endDate2 = '12/31/2026';
const endDate3 = '12/31/2027';

class RegPro {

    monitorSetting() {
        cy.xpath(Locators.MonitorTickler).should('be.visible').click();
        cy.xpath(Locators.ShipmentMonitoring).should('be.visible').click();
        cy.xpath(Locators.PaymentRecDate).should('be.visible').click().clear();
        cy.get('body').click(0, 0);
        cy.xpath(Locators.ExpDate).should('be.visible').click().clear();
        cy.get('body').click(0, 0);
        cy.get(Locators.MonitoringEnabled).then(($checkbox) => {
            if ($checkbox.prop('checked')) {
                cy.wrap($checkbox).uncheck();
            }
            cy.xpath(Locators.UpdateShipment).should('be.visible').click();
        });

        cy.xpath(Locators.MarketplaceExporter).should('be.visible').click();
        cy.xpath(Locators.PaymentRec).should('be.visible').click().clear();
        cy.get('body').click(0, 0);
        cy.xpath(Locators.ExpireDate).should('be.visible').click().clear();
        cy.get('body').click(0, 0);
        cy.xpath(Locators.ProductCount).click().clear().type('5');
        cy.get(Locators.MonitoringEnable).then(($checkbox) => {
            if ($checkbox.prop('checked')) {
                cy.wrap($checkbox).uncheck();
            }
            cy.xpath(Locators.Updates).should('be.visible').click();
        });
    }

    returnToPage() {
        cy.contains('Return to').click();
    }

    updateBTASetting() {
        this.returnToPage();
        cy.xpath(Locators.UpdateBTATickler).should('be.visible').click();
        cy.get(Locators.PaymentCheckbox).then(($checkbox) => {
            if ($checkbox.prop('checked')) {
                cy.wrap($checkbox).uncheck();
            }
            cy.get(Locators.RenewDate25).should('be.visible').click().clear().blur();
            cy.get(Locators.CalendarClose).click();
            cy.get(Locators.RenewDate26).should('be.visible').click().clear();
            cy.get(Locators.CalendarClose).click();
            cy.get(Locators.RenewDate27).should('be.visible').click().clear();
            cy.get(Locators.CalendarClose).click();
            cy.get(Locators.SubmitButton).should('be.visible').click();
            cy.wait(10000);
        });
    }

    verifyNoviConnectBanner() {
        cy.xpath(Locators.Update).should('be.visible').click();
        cy.get(Locators.PartnerShipName).should('be.visible').select('NoviConnect');
        cy.get(Locators.UpdateOnly).should('be.visible').click();
        cy.get(Locators.Finished).should('be.visible').click();
        cy.get(Locators.NoviConnectBanner).should('have.text', Texts.NoviConnectBannerText);
        cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
        cy.get(Locators.NoviConnectBanner).then(($firstBanner) => {
            const firstBannerRect = $firstBanner[0].getBoundingClientRect();
            console.log('First banner (partnershipMsg) position:', firstBannerRect);
            cy.get(Locators.RegProBanner).then(($secondBanner) => {
                const secondBannerRect = $secondBanner[0].getBoundingClientRect();
                console.log('Second banner (rcProMsg) position:', secondBannerRect);
                expect(secondBannerRect.top).to.be.greaterThan(firstBannerRect.bottom - 1);
            });
        })
        cy.xpath(Locators.Update).should('be.visible').click();
        cy.get(Locators.PartnerShipName).should('be.visible').select('Select value');
        cy.get(Locators.UpdateOnly).should('be.visible').click();
        cy.get(Locators.Finished).should('be.visible').click();
    }

    regProSettingFor1YearUS() {
        cy.xpath(Locators.RegProTickler).should('be.visible').click();
        cy.get(Locators.ProfessionalProduct).should('be.visible').select(ProfessionalProduct.OneYearUS);
        cy.xpath(Locators.EffectiveStartDate).should('be.visible').click().clear();
        cy.xpath(Locators.EffectiveEndDate).should('be.visible').click().clear();
        cy.get(Locators.SaveButton).should('be.visible').click();
        cy.contains('Ok').click();
    }

    paymentVerificationFor1YearUS() {
        cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
        cy.xpath(Locators.RegProTickler).should('be.visible').click();
        cy.xpath(Locators.EffectiveStartDate).should('have.value', startDate);
        cy.xpath(Locators.EffectiveEndDate).should('have.value', endDate);
        this.returnToPage();
        cy.xpath(Locators.MonitorTickler).should('be.visible').click();
        cy.xpath(Locators.ShipmentMonitoring).should('be.visible').click();
        cy.get(Locators.MonitoringEnabled).should('be.checked');
        cy.xpath(Locators.MarketplaceExporter).should('be.visible').click();
        cy.get(Locators.MonitoringEnable).should('be.checked');
        this.returnToPage();
        cy.xpath(Locators.UpdateBTATickler).should('be.visible').click();
        cy.get(Locators.PaymentCheckbox).should('be.checked');
    }

    regProSettingFor2YearUS() {
        cy.xpath(Locators.RegProTickler).should('be.visible').click();
        cy.get(Locators.ProfessionalProduct).should('be.visible').select(ProfessionalProduct.TwoYearUS);
        cy.xpath(Locators.EffectiveStartDate).should('be.visible').click().clear();
        cy.xpath(Locators.EffectiveEndDate).should('be.visible').click().clear();
        cy.get(Locators.SaveButton).should('be.visible').click();
        cy.contains('Ok').click();
    }

    paymentVerificationFor2YearUS() {
        cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
        cy.xpath(Locators.RegProTickler).should('be.visible').click();
        cy.xpath(Locators.EffectiveStartDate).should('have.value', startDate);
        cy.xpath(Locators.EffectiveEndDate).should('have.value', endDate2);
        this.returnToPage();
        cy.xpath(Locators.MonitorTickler).should('be.visible').click();
        cy.xpath(Locators.ShipmentMonitoring).should('be.visible').click();
        cy.get(Locators.MonitoringEnabled).should('be.checked');
        cy.xpath(Locators.MarketplaceExporter).should('be.visible').click();
        cy.get(Locators.MonitoringEnable).should('be.checked');
        this.returnToPage();
        cy.xpath(Locators.UpdateBTATickler).should('be.visible').click();
        cy.get(Locators.PaymentCheckbox).should('be.checked');
    }

    regProSettingFor3YearUS() {
        cy.xpath(Locators.RegProTickler).should('be.visible').click();
        cy.get(Locators.ProfessionalProduct).should('be.visible').select(ProfessionalProduct.ThreeYearUS);
        cy.xpath(Locators.EffectiveStartDate).should('be.visible').click().clear();
        cy.xpath(Locators.EffectiveEndDate).should('be.visible').click().clear();
        cy.get(Locators.SaveButton).should('be.visible').click();
        cy.contains('Ok').click();
    }

    paymentVerificationFor3YearUS() {
        cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
        cy.xpath(Locators.RegProTickler).should('be.visible').click();
        cy.xpath(Locators.EffectiveStartDate).should('have.value', startDate);
        cy.xpath(Locators.EffectiveEndDate).should('have.value', endDate3);
        this.returnToPage();
        cy.xpath(Locators.MonitorTickler).should('be.visible').click();
        cy.xpath(Locators.ShipmentMonitoring).should('be.visible').click();
        cy.get(Locators.MonitoringEnabled).should('be.checked');
        cy.xpath(Locators.MarketplaceExporter).should('be.visible').click();
        cy.get(Locators.MonitoringEnable).should('be.checked');
        this.returnToPage();
        cy.xpath(Locators.UpdateBTATickler).should('be.visible').click();
        cy.get(Locators.PaymentCheckbox).should('be.checked');
    }

    paymentVerificationFor1YearUSBankwire() {
        cy.xpath(Locators.RegProTickler).should('be.visible').click();
        cy.get(Locators.ProfessionalProduct).select(ProfessionalProduct.OneYearUS);
        cy.xpath(Locators.EffectiveStartDate).should('be.visible').click().clear().type(startDate);
        cy.xpath(Locators.EffectiveEndDate).should('be.visible').click().clear().type(endDate);
        cy.get(Locators.SaveButton).should('be.visible').click();
        this.returnToPage();
        cy.xpath(Locators.MonitorTickler).should('be.visible').click();
        cy.xpath(Locators.ShipmentMonitoring).should('be.visible').click();
        cy.get(Locators.MonitoringEnabled).should('be.checked');
        cy.xpath(Locators.MarketplaceExporter).should('be.visible').click();
        cy.get(Locators.MonitoringEnable).should('be.checked');
        this.returnToPage();
        cy.xpath(Locators.UpdateBTATickler).should('be.visible').click();
        cy.get(Locators.PaymentCheckbox).then(($checkbox) => {
            if (!$checkbox.prop('checked')) {
                cy.wrap($checkbox).check();
            }
        });
        cy.get(Locators.SubmitButton).should('be.visible').click();
        cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
    }

    paymentVerificationFor2YearUSBankwire() {
        cy.xpath(Locators.RegProTickler).should('be.visible').click();
        cy.get(Locators.ProfessionalProduct).select(ProfessionalProduct.TwoYearUS);
        cy.xpath(Locators.EffectiveStartDate).should('be.visible').click().clear().type(startDate);
        cy.xpath(Locators.EffectiveEndDate).should('be.visible').click().clear().type(endDate2);
        cy.get(Locators.SaveButton).should('be.visible').click();
        this.returnToPage();
        cy.xpath(Locators.MonitorTickler).should('be.visible').click();
        cy.xpath(Locators.ShipmentMonitoring).should('be.visible').click();
        cy.get(Locators.MonitoringEnabled).should('be.checked');
        cy.xpath(Locators.MarketplaceExporter).should('be.visible').click();
        cy.get(Locators.MonitoringEnable).should('be.checked');
        this.returnToPage();
        cy.xpath(Locators.UpdateBTATickler).should('be.visible').click();
        cy.get(Locators.PaymentCheckbox).then(($checkbox) => {
            if (!$checkbox.prop('checked')) {
                cy.wrap($checkbox).check();
            }
        });
        cy.get(Locators.SubmitButton).should('be.visible').click();
        cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
    }

    paymentVerificationFor3YearUSBankwire() {
        cy.xpath(Locators.RegProTickler).should('be.visible').click();
        cy.get(Locators.ProfessionalProduct).select(ProfessionalProduct.ThreeYearUS);
        cy.xpath(Locators.EffectiveStartDate).should('be.visible').click().clear().type(startDate);
        cy.xpath(Locators.EffectiveEndDate).should('be.visible').click().clear().type(endDate3);
        cy.get(Locators.SaveButton).should('be.visible').click();
        this.returnToPage();
        cy.xpath(Locators.MonitorTickler).should('be.visible').click();
        cy.xpath(Locators.ShipmentMonitoring).should('be.visible').click();
        cy.get(Locators.MonitoringEnabled).should('be.checked');
        cy.xpath(Locators.MarketplaceExporter).should('be.visible').click();
        cy.get(Locators.MonitoringEnable).should('be.checked');
        this.returnToPage();
        cy.xpath(Locators.UpdateBTATickler).should('be.visible').click();
        cy.get(Locators.PaymentCheckbox).then(($checkbox) => {
            if (!$checkbox.prop('checked')) {
                cy.wrap($checkbox).check();
            }
        });
        cy.get(Locators.SubmitButton).should('be.visible').click();
        cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
    }

    shipmentMonitoringUpdate() {
        this.monitorSetting();
        this.returnToPage();
        cy.xpath(Locators.RegProTickler).should('be.visible').click();
        cy.xpath(Locators.EffectiveStartDate).should('have.value', startDate);
        cy.xpath(Locators.EffectiveEndDate).should('have.value', endDate);
    }

    scrollBannerVisibility() {
        cy.wait(2000);
        cy.scrollTo(0, 60000);
        cy.wait(4000);
        cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
        cy.wait(4000);
        cy.scrollTo(0, 0);
        cy.wait(4000);
        cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
        cy.scrollTo(2000, 0);
        cy.wait(4000);
        cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
    }

    maxminBannerVisibility() {
        cy.viewport(320, 480);
        cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
        cy.viewport(1280, 720);
        cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
    }

    menuVerification() {
        cy.xpath(Locators.RegProTickler).should('be.visible').click();
        cy.contains(Texts.VIPRegistration).should('be.visible');
        cy.contains(Texts.FreeOnlineCourse).should('be.visible');
        cy.contains(Texts.Marketplace).should('be.visible');
        cy.contains(Texts.RegistrarCorp10offAdditionalServices).should('be.visible');
        cy.contains(Texts.offOnlineCertificationTraining).should('be.visible');
    }

    invalidDateVerification() {
        cy.xpath(Locators.RegProTickler).should('be.visible').click();
        cy.get(Locators.ProfessionalProduct).contains(ProfessionalProduct.OneYearUS);
        cy.xpath(Locators.EffectiveStartDate).should('be.visible').click().clear().type(endDate2);
        cy.xpath(Locators.EffectiveEndDate).should('be.visible').click().clear().type(startDate);
        cy.get(Locators.SaveButton).should('be.visible').click();
        cy.get(Locators.ErrorMessage).should('have.text', Texts.ErrorMessageText);
        cy.contains('Ok').click();
    }

    saveCancelVerification() {
        cy.get(Locators.ProfessionalProduct).select(ProfessionalProduct.ChoosePackage);
        cy.get(Locators.SaveButton).should('be.disabled');
        cy.get(Locators.ProfessionalProduct).select(ProfessionalProduct.ThreeYearUS);
        cy.get(Locators.CancelButton).should('be.visible').click();
        cy.get(Locators.ProfessionalProduct).contains(ProfessionalProduct.OneYearUS);
    }

    






}

export default RegPro;

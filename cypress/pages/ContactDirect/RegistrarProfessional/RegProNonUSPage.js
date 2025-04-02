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
    CalendarClose: `a[href='javascript:hideCalendarControl();']`
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

}

const ProfessionalProduct = {
    OneYearNonUS: `Registrar Professional 1 year - Version 1.0 (Non-US)`,
    TwoYearNonUS: `Registrar Professional 2 year - Version 1.0 (Non-US)`,
    ThreeYearNonUS: `Registrar Professional 3 year - Version 1.0 (Non-US)`
}

const currentDate = new Date();
const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
const day = ('0' + currentDate.getDate()).slice(-2);
const year = currentDate.getFullYear();
const startDate = `${month}/${day}/${year}`;
const endDate = '12/31/2025';
const endDate2 = '12/31/2026';
const endDate3 = '12/31/2027';

class RegProNonUS {

    returnToPage() {
        cy.contains('Return to').click();
    }

regProSettingFor1YearNonUS() {
    cy.xpath(Locators.RegProTickler).should('be.visible').click();
    cy.get(Locators.ProfessionalProduct).should('be.visible').select(ProfessionalProduct.OneYearNonUS);
    cy.xpath(Locators.EffectiveStartDate).should('be.visible').click().clear();
    cy.xpath(Locators.EffectiveEndDate).should('be.visible').click().clear();
    cy.get(Locators.SaveButton).should('be.visible').click();
    cy.contains('Ok').click();
}

paymentVerificationFor1YearNonUS() {
    cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
    cy.xpath(Locators.RegProTickler).should('be.visible').click();
    cy.get(Locators.ProfessionalProduct).contains(ProfessionalProduct.OneYearNonUS);
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

regProSettingFor2YearNonUS() {
    cy.xpath(Locators.RegProTickler).should('be.visible').click();
    cy.get(Locators.ProfessionalProduct).should('be.visible').select(ProfessionalProduct.TwoYearNonUS);
    cy.xpath(Locators.EffectiveStartDate).should('be.visible').click().clear();
    cy.xpath(Locators.EffectiveEndDate).should('be.visible').click().clear();
    cy.get(Locators.SaveButton).should('be.visible').click();
    cy.contains('Ok').click();
}

paymentVerificationFor2YearNonUS() {
    cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
    cy.xpath(Locators.RegProTickler).should('be.visible').click();
    cy.get(Locators.ProfessionalProduct).contains(ProfessionalProduct.TwoYearNonUS);
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

regProSettingFor3YearNonUS() {
    cy.xpath(Locators.RegProTickler).should('be.visible').click();
    cy.get(Locators.ProfessionalProduct).should('be.visible').select(ProfessionalProduct.ThreeYearNonUS);
    cy.xpath(Locators.EffectiveStartDate).should('be.visible').click().clear();
    cy.xpath(Locators.EffectiveEndDate).should('be.visible').click().clear();
    cy.get(Locators.SaveButton).should('be.visible').click();
    cy.contains('Ok').click();
}

paymentVerificationFor3YearNonUS() {
    cy.get(Locators.RegProBanner).should('have.text', Texts.RegProBannerText);
    cy.xpath(Locators.RegProTickler).should('be.visible').click();
    cy.get(Locators.ProfessionalProduct).contains(ProfessionalProduct.ThreeYearNonUS);
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

paymentVerificationFor1YearNonUSBankwire() {
    cy.xpath(Locators.RegProTickler).should('be.visible').click();
    cy.get(Locators.ProfessionalProduct).select(ProfessionalProduct.OneYearNonUS);
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

paymentVerificationFor2YearNonUSBankwire() {
    cy.xpath(Locators.RegProTickler).should('be.visible').click();
    cy.get(Locators.ProfessionalProduct).select(ProfessionalProduct.TwoYearNonUS);
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

paymentVerificationFor3YearNonUSBankwire() {
    cy.xpath(Locators.RegProTickler).should('be.visible').click();
    cy.get(Locators.ProfessionalProduct).select(ProfessionalProduct.ThreeYearNonUS);
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
}

export default RegProNonUS;

class SignUp {
  signUpLink = "#signupLink";
  userId = "input[placeholder='User ID']";
  invalidUserId = "//small[contains(text(),'Only alpha-numeric characters without space are al')]";
  password = "input[placeholder='Password']";
  emailId = "input[placeholder='Email']";
  confirmPassword = "#password-field";
  companyName = "input[placeholder='Company Name']";
  contactName = "input[placeholder='Contact Name']";
  jobTitle = "input[placeholder='Job Title']";
  addressLine = "input[placeholder='Address Line 1']";
  city = "input[placeholder='City']";
  selectCountry = "select[name='phys_country']";
  dialCode = ".selected-dial-code";
  countryCode = "India (भारत)";
  phoneNumber = "input[placeholder='Phone Number']";
  exportFda = "input[value='Exporter']";
  importFda = "input[value='Importer']";
  terms = "input[value='Agree to Terms']";
  createAccount = "//button[normalize-space()='Create Account']";
  signUpText = "/signup";
  signInNow = "Sign in Now";
  userName = "input[placeholder='User ID']";
  userPassword = "#password-field";
  signInBtn = ":nth-child(12) > .uk-width-1-1";
  CaptchaText = "input[name='captchaTxt']";
  userIdInvalid = "//small[contains(text(),'Only alpha-numeric characters without space are al')]";
  passwordInvalid = "//small[@data-fv-for='password'][normalize-space()='Please enter a value']";
  emailInvalid = ".uk-text-danger[data-fv-validator='emailAddress']";
  contactNameInvalid = ".uk-text-danger[data-fv-validator='whitespaceInMiddle']";
  successfullMessage = ".red-title";
  userIdInvalidText = "Only alpha-numeric characters without space are allowed";
  passwordInvalidText = "Please enter a value";
  emailInvalidText = "Please enter a valid email address";
  contactNameInvalidText = "Please enter full name";
  successfullMessageText = "\n    Thank You";

  generateRandomUser() {
    const randomSuffix = Math.floor(Math.random() * 1000); // Generates a random number
    return {
      username: `automationTest${randomSuffix}`,
      email: `user${randomSuffix}@example.com`,
      password: `Password${randomSuffix}!`,
      companyName: `AutoTest${randomSuffix}`,
      contactName: `user Test${randomSuffix}`,
      jobTitle: `QA${randomSuffix}`,
      addressLine: `Flat no: ${randomSuffix} Hill View`,
      city: `City${randomSuffix}`,
      country: `India`,
      phoneNumber: `995${String(randomSuffix).padStart(7, '0')}`
    };
  }

  fillValidUserCredentials() {
    const validUser = this.generateRandomUser();
    cy.wait(2000);
    cy.get(this.signUpLink).click().should('be.visible');
    cy.url().should('include', this.signUpText);
    cy.get(this.userId).type(validUser.username).should('have.value', validUser.username);
    cy.get(this.password).type(validUser.password).should('have.value', validUser.password);;
    cy.get(this.emailId).type(validUser.email).should('have.value', validUser.email);;
    cy.get(this.confirmPassword).type(validUser.password).should('have.value', validUser.password);;
    cy.get(this.companyName).type(validUser.companyName).should('have.value', validUser.companyName);
    cy.get(this.contactName).type(validUser.contactName).should('have.value', validUser.contactName);
    cy.get(this.jobTitle).type(validUser.jobTitle).should('have.value', validUser.jobTitle);
    cy.get(this.addressLine).type(validUser.addressLine).should('have.value', validUser.addressLine);
    cy.get(this.city).type(validUser.city).should('have.value', validUser.city);
    cy.get(this.selectCountry).select(validUser.country).should('have.value', 'IN');
    cy.get(this.dialCode).click({ force: true });
    cy.contains(this.countryCode).scrollIntoView().click();
    cy.get(this.phoneNumber).type(validUser.phoneNumber).should('have.value', validUser.phoneNumber);
    cy.get(this.exportFda).check().should('be.checked');
    cy.get(this.importFda).check().should('be.checked');
    cy.get(this.terms).check().should('be.checked');
    cy.wait(10000);
    //cy.get(this.CaptchaText).type("anyText");
    cy.xpath(this.createAccount).should('be.enabled').click();
    cy.get(this.successfullMessage).should('have.text', this.successfullMessageText);
    cy.contains(this.signInNow).should('be.exist').click();
    cy.get(this.userName).type(validUser.username).should('have.value', validUser.username);
    cy.get(this.userPassword).type(validUser.password).should('have.value', validUser.password);
    cy.get(this.CaptchaText);
    cy.wait(10000);
    cy.get(this.signInBtn).should('be.enabled').click();
  }

  verifySuccessSignUp() {
    cy.get(this.successfullMessage).should('have.text', this.successfullMessageText);
  }


  fillinValidUserCredentials(invalidUser) {
    cy.wait(2000);
    cy.get(this.signUpLink).should('be.visible').click();
    cy.url().should('include', this.signUpText);
    cy.get(this.userId).type(invalidUser.userId);
    cy.xpath(this.userIdInvalid).and('contain.text', this.userIdInvalidText);
    cy.get(this.password).type(invalidUser.password);
    cy.xpath(this.passwordInvalid).and('contain.text', this.passwordInvalidText);
    cy.get(this.emailId).type(invalidUser.emailId);
    cy.get(this.emailInvalid).should('be.visible').and('contain.text', this.emailInvalidText);
    cy.get(this.confirmPassword).type(invalidUser.confirmPassword);
    cy.get(this.companyName).type(invalidUser.companyName);
    cy.get(this.contactName).type(invalidUser.contactName);
    cy.get(this.contactNameInvalid).and('contain.text', this.contactNameInvalidText);
    cy.get(this.jobTitle).type(invalidUser.jobTitle);
    cy.get(this.addressLine).type(invalidUser.addressLine);
    cy.get(this.city).type(invalidUser.city);
    cy.get(this.exportFda).uncheck();
    cy.get(this.importFda).uncheck();
    cy.get(this.terms).uncheck();
  }

  verifyUnSuccessSignUp() {
    cy.xpath(this.createAccount).should('be.disabled');
  }

}

export default SignUp;

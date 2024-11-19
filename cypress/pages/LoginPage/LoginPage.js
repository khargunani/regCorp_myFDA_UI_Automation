class Login {

    username = "input[placeholder='User ID']";
    password = "#password-field";
    signInBtn = ":nth-child(12) > .uk-width-1-1";
    LoginBtn = "Login";
    signOutBtn = ".uk-active > a";
    CaptchaText = "input[name='captchaTxt']";
    userNameInvalid = "//small[@data-fv-for='userid'][normalize-space()='Please enter a value']";
    passwordInvalid = "//small[@data-fv-for='password'][normalize-space()='Please enter a value']";
    loginSuccessLogo = "img[alt='Registrar Corp Logo']";
    userNameInvalidText = "Please enter a value";
    passwordInvalidText = "Please enter a value";

    verifyLoginSuccess() {
        cy.scrollTo('top');
        cy.get(this.loginSuccessLogo).should('be.visible');
    }

    validUserLogin(validUser) {
        cy.wait(2000);
        cy.get(this.username).type(validUser.UserName);
        cy.get(this.password).type(validUser.UserPassword);
        cy.get(this.CaptchaText);
        cy.wait(10000);
        cy.get(this.signInBtn).click();
    }

    invalidUserLogin(invalidUser) {
        cy.wait(2000);
        cy.get(this.username).type(invalidUser.UserName)
        cy.xpath(this.userNameInvalid).and('contain.text', this.userNameInvalidText);
        cy.get(this.password).type(invalidUser.UserPassword);
        cy.xpath(this.passwordInvalid).and('contain.text', this.passwordInvalidText);
        cy.get(this.CaptchaText).type("anyText");
    }

    verifyLoginUnSuccess() {
        cy.get(this.signInBtn).should('be.disabled');
    }
}

export default Login;
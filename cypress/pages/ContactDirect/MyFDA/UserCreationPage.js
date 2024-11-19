class UserCreation {
    myFDA = "a[onclick='document.MyFdaAdminForm.submit(); return false;']";
    myFDATickler = ".uk-text-large.uk-margin-large-right";
    adminUser = 'input[type="radio"][name="admin"][value="1"]';
    subUser = 'input[type="radio"][name="admin"][value="0"]';
    addUser = "div[class='uk-form uk-form-stacked uk-margin-top'] button[type='submit']";
    desiredUserId = "div[class='uk-form-row fv-has-feedback fv-has-error'] input[name='userid']";
    emailAddress = "div[class='uk-form-row fv-has-feedback fv-has-error'] input[name='email']";
    contactName = "form[id='addUserForm'] input[name='contact_name']";
    jobTitle = "form[id='addUserForm'] input[name='contact_title']";
    password = "input[name='password'][type='text']";
    confirmPassword = "input[name='cpassword'][type='text']";
    editModal = '#editSubUserModal-0 > .uk-modal-dialog';
    deleteModal = "div[id='deleteSubUserModal-0'] center";
    updateModal = "form[id='updateSubUserPermissionForm-1'] fieldset button[type='submit']";
    myFDAText = "MyFDA";
    myFDATicklerText = "MyFDA Tickler";
    addUserText = "Add User";
    editText = "Edit this Account";
    deleteText = "Delete this Account";



    verifyAdminUserCreation(adminUser) {

        cy.get(this.myFDA).should('be.visible').and('contain.text', this.myFDAText).click();
        cy.get(this.myFDATickler).and('contain.text', this.myFDATicklerText);
        cy.get(this.adminUser).check({ force: true });
        cy.get(this.adminUser).should('be.checked');
        cy.get(this.addUser).should('be.visible').and('contain.text', this.addUserText).click();
        cy.get(this.desiredUserId).should('be.visible').type(adminUser.desiredUserId);
        cy.get(this.emailAddress).should('be.visible').type(adminUser.emailAddress);
        cy.get(this.contactName).should('be.visible').type(adminUser.contactName);
        cy.get(this.jobTitle).should('be.visible').type(adminUser.jobTitle);
        cy.get(this.password).should('be.visible').type(adminUser.password);
        cy.get(this.confirmPassword).should('be.visible').type(adminUser.confirmPassword);
        cy.get(this.addUser).should('be.visible').and('contain.text', this.addUserText).click();
        cy.get('.mainbody').contains(adminUser.desiredUserId);
    }

    verifySubUserCreation(subUser) {

        cy.get(this.myFDA).should('be.visible').and('contain.text', this.myFDAText).click();
        cy.get(this.myFDATickler).and('contain.text', this.myFDATicklerText);
        cy.get(this.subUser).check({ force: true });
        cy.get(this.subUser).should('be.checked');
        cy.get(this.addUser).should('be.visible').and('contain.text', this.addUserText).click();
        cy.get(this.desiredUserId).should('be.visible').type(subUser.desiredUserId);
        cy.get(this.emailAddress).should('be.visible').type(subUser.emailAddress);
        cy.get(this.contactName).should('be.visible').type(subUser.contactName);
        cy.get(this.jobTitle).should('be.visible').type(subUser.jobTitle);
        cy.get(this.password).should('be.visible').type(subUser.password);
        cy.get(this.confirmPassword).should('be.visible').type(subUser.confirmPassword);
        // cy.get("div[class='uk-form uk-form-stacked uk-margin-top'] select[name='cosmetic_permit']").select('Edit / Submit');
        cy.get(this.addUser).should('be.visible').and('contain.text', this.addUserText).click();
        cy.get('.mainbody').contains(subUser.desiredUserId);
    }

    verifyEditUserPermissions(subUser, index) {
        const specificUser = subUser.desiredUserId;

        // Locate the row containing the specific user
        cy.get('table').contains('td', specificUser).then(($userCell) => {
            const $row = $userCell.closest('tr');

            // Click the "Edit this Account" link in the row
            cy.wrap($row).contains(this.editText).click();
            cy.get('#updateSubUserPermissionForm-1 > fieldset > .uk-form > .uk-form-row > .uk-form-controls > div .uk-form-small')
                .eq(index).select('Edit / Submit'); // Use accessKey here for selection
            cy.get(this.updateModal).should('be.visible').click();
        });
    }

    verifySubUserdeletion(subUser) {

        const specificUser = subUser.desiredUserId;
        cy.get('table').contains('td', specificUser).then(($userCell) => {
            const $row = $userCell.closest('tr');
            cy.wrap($row).contains(this.deleteText).click();
            cy.get(this.deleteModal).should('be.visible').contains('Yes').click();
            // Verify the user is no longer in the table
            cy.get('table').contains('td', specificUser).should('not.exist');
        });
    }
}

export default UserCreation;
describe('test mailslupr', ()=>{

    it('test it mailslurp', ()=>{
      cy.then(()=>{
        const MailSlurp = require('mailslurp-client').default;
        const mailslurp = new MailSlurp({apiKey:Cypress.env('MAILSLURP_API_KEY')})
        cy.wrap(mailslurp).as('mailslurp')
  
      cy.then(function(){
        return this.mailslurp.createInbox();
      }).then(inbox=>{
        cy.wrap(inbox.emailAddress).as('emailAddress');
        cy.wrap(inbox.id).as('inboxId')
      })
      cy.visit("https://newsletter.mailslurp.biz/");
      cy.then(function(){
        cy.wait(3000);
        cy.get('#name').type("jack");
        cy.get('#email').type(this.emailAddress);
        cy.get('#submit').click();
        cy.wait(120_000);
  
      })
      cy.then(function () {
        return this.mailslurp.waitForLatestEmail(this.inboxId,120_000,true);
      }).then(email =>{
        expect(email.body).to.contain('Welcome Jack')
      })
      
    })
    })
  })
describe('User Registration',()=>{
    it('should register a user',()=>{


        cy.viewport(1280, 720);


        cy.visit('https://antarangcrafts.com/register')
        
       
        cy.get('#hoot_login_signin_submit').click()

        cy.get('#first-name-error').contains('Please enter your first name').should('be.visible')
        cy.get('#last-name-error').contains('Please enter your last name').should('be.visible')
        cy.get('#user_mobile-error').contains('This field is required').should('be.visible')
        cy.get('#emailid-error').contains('Please enter your emailid').should('be.visible')
        cy.get('#passord-error').contains('Please enter a password').should('be.visible')

        cy.get('#first-name').type('Harsh').should('be.visible')
        cy.get('#last-name').type('Test').should('be.visible')
        cy.get('#user_mobile').type('7383809039').should('be.visible')
        cy.get('#emailid').type('harshsiddhpura6337@gmail.com').should('be.visible')
        cy.get('#passord').type('123Harsh@').should('be.visible')
        cy.get('#hoot_login_signin_submit').click()

       
        
        
    })
})





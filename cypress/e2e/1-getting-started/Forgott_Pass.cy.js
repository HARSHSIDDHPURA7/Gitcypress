describe('Forgott Password',()=>{
    it ('Checking Forgott Password',()=>{

        cy .visit('https://antarangcrafts.com/login')
        // cy.get('.forgot-password-link').click()
        cy.get('.d-flex > .forgot-link > .forgot-password-link').click()

        cy.get('#user_email').type('harshsiddhpura6337@gmail.com')
        cy.get('#hoot_login_signin_submit').click()

        cy.get('#desc').should('have.text','Email sent successfully')
    })
})
    it('Cheking without filling detail',()=>{

        cy .visit('https://antarangcrafts.com/login')
        
        cy.get('.d-flex > .forgot-link > .forgot-password-link').click()
        cy.get('#hoot_login_signin_submit').click()

        cy.get('#user_email-error').should('have.text','Please enter your email')
        //user_email-error


    })
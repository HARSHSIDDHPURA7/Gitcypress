
        describe('Checking the Pagination', () => {
 
  
            it('Checking the Pagination', () => {
        
              cy.visit('https://ehackathon.online/antarang/login');
          
        
              cy.get('input[name="user_email"]').type('harshsiddhpura6337@gmail.com');
              cy.get('input[name="user_password"]').type('123Harsh@');
        
              cy.get('#hoot_login_signin_submit').click();
           
              cy.viewport(1280, 720);
        
              cy.get(':nth-child(2) > .header__menu-link').click()

              cy.get('footer').scrollIntoView()
              cy.get(':nth-child(3) > .custpagination',{timeout:100000}).click()
              cy.get(':nth-child(3) > .custpagination').should('be.visible')
           
              cy.get(':nth-child(4) > .custpagination').click()
    })
})
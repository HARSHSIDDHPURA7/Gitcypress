
describe('Navigate to Contact Us page', () => {
    it('should navigate to Contact Us page by clicking the button in the header', () => {
    
      cy.viewport(1280, 720);
  

      cy.visit('https://antarangcrafts.com/login');
  

      cy.get('.header__menu-link.contact-us')
        .should('be.visible')
        .click();
  

      cy.url().should('include', '/contact-us');
      cy.get('#first_name').type('123')
      cy.get('#last_name').type('Test')
      cy.get('#email').type('harsh@gmail.com')
      cy.get('#mobile_number').type('7383809039')
      cy.get('#message').type('Hello This Is Automation Test' )
      
      cy.get('.col-form-btn').click({force:true})
     
     cy.get('#first_name-error')
      .should('be.visible')
      .and('contain', 'First Name should not contain digits');

    cy.get('#first_name').clear()

    cy.get('.col-form-btn').click({force:true})

    cy.get('#first_name-error')
    .should('be.visible')
    .and('contain', 'Please enter your first name');


    });
    it.skip('Contacting the Owner',()=>{
        
        cy.get('#first_name').type('Harsh')
        cy.get('.last_name').type('Test')
        cy.get('.email').type('harsh@gmail.com')
        cy.get('.mobile_number').type('7383809039')
        cy.get('.message').type('Hello This Is Automation Test' )
    })
  });
  
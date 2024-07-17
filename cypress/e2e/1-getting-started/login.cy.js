

describe('Login and Add to Cart Test', () => {
    beforeEach(() => {
  
      Cypress.on('uncaught:exception', (err, runnable) => {
    
        return false;
      });
    });
  
   
    // it('should visit the product page and click the add to cart button', () => {

    //   cy.visit('https://ehackathon.online/antarang/shop-detail/evileyeelegancebeadwork-blue-white'); 
    
  

    //   cy.wait(2000); 

    //   cy.get('.add-cart-btn.addcartbtn.full-width') 
    //     .scrollIntoView()
    //     .should('be.visible');
   
    //   cy.get('.add-cart-btn.addcartbtn.full-width')
    //     .click( ); 
    // });
    it('should login successfully with valid credentials', () => {
    
      cy.visit('https://ehackathon.online/antarang/login');
  

      cy.get('input[name="user_email"]').type('harshsiddhpura6337@gmail.com');
      cy.get('input[name="user_password"]').type('123Harsh@');
      cy.get('.col-form-btn').click()

      // cy.get('body').click()

      // cy.get('.hoot_login_signin_submit').click();
      // cy.get('.product-title fw-500').should('be.visible').click()
      
  
      cy.url().should('include', '/home');

    });
  
  
  });
  
   
    

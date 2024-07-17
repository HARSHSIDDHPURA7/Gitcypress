describe('Before Login Add',()=>{
    it.only('Add to Cart Before Login',()=>{

        cy.viewport(1280, 720);
        cy.visit('https://antarangcrafts.com/login')
        cy.get(':nth-child(2) > .header__menu-link').click()
 
        cy.get(':nth-child(1) > .product-detail > .product-detail-block > .product-desc > a',{timeout:10000}).click()
  
        
        cy.get('.add-cart-btn').click()
  
        cy.get('#desc').should('have.text','Item added to cart successfully')
        cy.get('.header-cart-icon > picture > img').click()
        cy.get('.view-cart-btn').click()
        cy.get('.total > .close-btn').click()
        cy.get('.swal2-cancel').click()
        cy.get('#pe-none').click()
        // cy,get('.section-title js-scroll fade-in-left scrolled').should('have.text','Check out')
        cy.url('eq','https://antarangcrafts.com/checkout')
        cy.get('h2').contains('Check out').should('be.visible');
    })
    it('Add to Wishlist Before login',()=>{
        cy.viewport(1280, 720);

        cy.visit('https://antarangcrafts.com/login')
        cy.get(':nth-child(2) > .header__menu-link').click()
 
        cy.get(':nth-child(1) > .product-detail > .product-detail-block > .product-desc > a',{timeout:10000}).click()
        cy.get('.add-wishlist-btn').click()

  
    })
})
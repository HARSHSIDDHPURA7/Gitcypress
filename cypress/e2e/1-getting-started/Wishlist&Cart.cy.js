import { login, Sitevisit, View } from "../../support/helpers";

describe('Automation Of Wishlist And Cart',()=>{
    beforeEach(() => {
        View()
        login('harshsiddhpura6337@gmail.com','123Harsh@')
      });
    it ('Verify that wishlist icon is visible in header ',()=>{

        View()
        Sitevisit()
    
        cy.get('.header-wishlist-icon > picture > img')
        .should('be.visible')
       .click()
       cy.get(':nth-child(2) > .wishlist-sidebar-detail > .wishlist-sidebar-desc > .wishlist-sidebar-block > .sidebar-hear-icon > picture > .remove-wishlist-item').should('be.visible')
       cy.get(':nth-child(2) > .wishlist-sidebar-detail > .wishlist-sidebar-desc > .wishlist-sidebar-block > .sidebar-hear-icon > picture > .remove-wishlist-item').click({multiple:true})

       cy.get('.swal2-popup').should('be.visible')
       cy.get('#swal2-title').should('have.text','Are you sure?')
       cy.get('.swal2-cancel').should('be.visible')
       cy.get('.swal2-cancel').click()
      
  })
  it('wishlist Item is deleted in Sidebar or not ',()=>{

                View()
                    Sitevisit()

                    cy.get('.header-wishlist-icon > picture > img')
                    .should('be.visible')
                    .click()

                    cy.get(':nth-child(2) > .wishlist-sidebar-detail > .wishlist-sidebar-desc > .wishlist-sidebar-block > .sidebar-hear-icon > picture > .remove-wishlist-item').click({force:true})

                    
                    cy.get('.swal2-popup').should('be.visible')
                    cy.get('#swal2-title').should('have.text','Are you sure?')
                    cy.get('.swal2-confirm').click()
                
                    cy.get('.swal2-popup').should('be.visible')
                    .and('contain','Your wishlist item has been deleted.')

                    cy.get('.swal2-confirm').should('be.visible')
                    cy.get('.swal2-confirm').click()


         })
    it.only('Go to the wishlist ',()=>{
             View()
            Sitevisit()
    
        cy.get('.header-wishlist-icon > picture > img')
        .should('be.visible')
       .click()

        cy.get("a[class='theme-btn red-btn full-width']").should('be.visible')
        cy.get("a[class='theme-btn red-btn full-width']").click()

        cy.url().should('eq', 'https://ehackathon.online/antarang/wishlist')

        cy.get(':nth-child(1) > :nth-child(4) > .wishlist-varient-detail > .close-btn').should('be.visible')
        cy.get(':nth-child(1) > :nth-child(4) > .wishlist-varient-detail > .close-btn').click()

        cy.get('.swal2-popup').should('be.visible')
        cy.get('#swal2-title').should('have.text','Are you sure?')
        cy.get('.swal2-cancel').should('be.visible')
        cy.get('.swal2-cancel').click()

    })

 
})
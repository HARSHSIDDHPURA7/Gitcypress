describe('Automation Of PageDetail Page',()=>{
    
    it('Verified Page Of Url',()=>{
                
        cy.viewport(1280, 720);
        Cypress.on('uncaught:exception', (err, runnable) => {
                
            if (err.message.includes('addEventListener')) {
                return false;
            }
        
            return true;
        });

                cy.visit('https://ehackathon.online/antarang/shop-detail/upcyclerakhi-red')
                cy.url('eq','https://ehackathon.online/antarang/shop-detail/upcyclerakhi-red').should('be.visible')

    })

    it('Verify that product name is exaclty which we cliked ',()=>{

                cy.viewport(1280, 720);

                Cypress.on('uncaught:exception', (err, runnable) => {
                    
                    if (err.message.includes('addEventListener')) {
                        return false;
                    }
                
                    return true;
                });

                cy.visit('https://ehackathon.online/antarang/shop-detail/upcyclerakhi-red')
                cy.get('h3.text-capitalize').contains('upcycle rakhi, Red');
    })
    it('Verify that product price is exaclty which we cliked ',()=>{
                cy.viewport(1280, 720);
                Cypress.on('uncaught:exception', (err, runnable) => {
                    
                    if (err.message.includes('addEventListener')) {
                        return false;
                    }
                
                    return true;
                });


                cy.visit('https://ehackathon.online/antarang/shop-detail/upcyclerakhi-red')
                cy.get('.product_price').contains(' ₹ 199.00')
    })
    it('Verify that category is visible in product detail or not ',()=>{
                cy.viewport(1280, 720);
                Cypress.on('uncaught:exception', (err, runnable) => {
                    
                    if (err.message.includes('addEventListener')) {
                        return false;
                    }
                
                    return true;
                });

                
                cy.visit('https://ehackathon.online/antarang/shop-detail/upcyclerakhi-red')
                cy.get('.category').should('be.visible')
            
                cy.get('body > section:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > p:nth-child(1) > a:nth-child(4) > span:nth-child(1)').click()
                cy.get('.tag').should('be.visible')
                // cy.get('body > section:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > p:nth-child(1) > a:nth-child(7) > span:nth-child(1)').click()


    })
    it('Verify that Quantity counter is visible or not ',()=>{
                cy.viewport(1280, 720);
                Cypress.on('uncaught:exception', (err, runnable) => {
                    
                    if (err.message.includes('addEventListener')) {
                        return false;
                    }
                
                    return true;
                });


                cy.visit('https://ehackathon.online/antarang/shop-detail/upcyclerakhi-red')
                cy.get('.quantity-detail').should('be.visible')
                cy.get('.increment').click()
                cy.get('#cart_quantity').should('have.text','2')  

    })
    it('Verify that Add to Wishlist button is visible or not',()=>{
                cy.viewport(1280, 720);

                Cypress.on('uncaught:exception', (err, runnable) => {
                    
                    if (err.message.includes('addEventListener')) {
                        return false;
                    }
                
                    return true;
                });

                
                cy.visit('https://ehackathon.online/antarang/shop-detail/upcyclerakhi-red')
                cy.get('.add-wishlist-btn').should('be.visible')
                cy.get('.add-wishlist-btn').click()
                cy.get('#desc').should('have.text','we have noted to your wishlist')
    })
    it('Verify that add to cart button is visible in product-detail page ',()=>{
                cy.viewport(1280, 720);

                
                Cypress.on('uncaught:exception', (err, runnable) => {
                    
                    if (err.message.includes('addEventListener')) {
                        return false;
                    }
                
                    return true;
                });

                cy.visit('https://ehackathon.online/antarang/shop-detail/upcyclerakhi-red')
                cy.get('.cart-button').should('be.visible')
                cy.get('.cart-button').click()
                cy.get('.test').should('have.text','Item added to cart successfully')

    })
    it('Verify that the product description is visible or not',()=>{
            cy.viewport(1280, 720);
            Cypress.on('uncaught:exception', (err, runnable) => {
                    
                if (err.message.includes('addEventListener')) {
                    return false;
                }
            
                return true;
            });

            cy.visit('https://ehackathon.online/antarang/shop-detail/upcyclerakhi-red')
            
            // Ensure the tab is clicked or activated
                cy.get('[onclick="openTab(event, \'description\', \'about-product\')"]').click()

                // Wait for the content to be fully loaded or become visible
                cy.get('.tab-list > .is-active').should('be.visible')

                // Scroll into view if necessary
                cy.get('.tab-list > .is-active').scrollIntoView()

                // Ensure the correct content is loaded and assert its text
                cy.get('.tab-list > .is-active')
                // .should('contain', 'Usage/Utility : Rakhi, Fashion Jewellery Craft : Patwa and mirror work')
                // .and('contain', 'Color : Red, white')
                // .and('contain', 'Material : 100% cotton')
                .and('be.visible')

                cy.wait(6000)


             cy.get('[onclick="openTab(event, \'wash-care\', \'about-product\')"]').click()
             cy.get('.wash-care-detail > .list-point').should('be.visible')
             .and('contain','Hand wash')

             cy.wait(6000)

             cy.get('[onclick="openTab(event, \'shipping-returns\', \'about-product\')"]').click()
             cy.get('.shipping-block-detail > .list-point').should('be.visible')
               .and('contain','Please Note - Custom Made Handicrafts - No Returns No Refund')
    })
    
 it.only('Verify that related product is visible or not ',()=>{
                cy.viewport(1280, 720);
                Cypress.on('uncaught:exception', (err, runnable) => {
                            
                    if (err.message.includes('addEventListener')) {
                        return false;
                    }
                
                    return true;
                }); 

        
        cy.visit('https://ehackathon.online/antarang/shop-detail/upcyclerakhi-red')
        cy.get('body > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)').scrollIntoView().should('be.visible')
        cy.get("li[id='realted-product-slider-clone09'] a[class='block-link']").click()
         cy.get('#realted-product-slider-clone11 > .most-populer-detail > .block-link').click()
         cy.get("li[id='realted-product-slider-clone09'] a[class='block-link']").should('have.text','Upcycle Rakhi')
         cy.get('#visitors-count').should('have.text',' People have recently viewed')

    })
   
})
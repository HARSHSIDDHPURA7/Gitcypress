describe('Automation of Shop page',()=>{
    
    it('Automation of Shop page',()=>{
        cy.viewport(1280, 720);

                    // cy.wait(10000)
                    Cypress.on('uncaught:exception', (err, runnable) => {
                    
                        if (err.message.includes('addEventListener')) {
                            return false;
                        }
                    
                        return true;
                    });
                
                    
                    cy.visit('https://ehackathon.online/antarang/shop')
                    cy.url('eq','https://ehackathon.online/antarang/shop')

    })
   it('should open the low to high Sortby', () => {
    cy.viewport(1280, 720);
                    Cypress.on('uncaught:exception', (err, runnable) => {
                    
                        if (err.message.includes('addEventListener')) {
                            return false;
                        }
                    
                        return true;
                    });


                  cy.visit('https://ehackathon.online/antarang/shop'); 
                  
             
                //  cy.get('.loader-img > picture > img').should('not.be.visible');
                  cy.get('.dropdown-btn').click({force:true});
    
                  cy.get('#dropdown-content').should('be.visible');
                  cy.get('.sortdata').contains('Price: low to high').click({force:true})
    
                  cy.get('.showing-product-detail', { timeout: 10000 })
                    .should('be.visible')
                    .and('contain.text', 'Showing 20 of 44 Products');
          })
   it('should open the A to Z Sortby', () => {
    cy.viewport(1280, 720);
            Cypress.on('uncaught:exception', (err, runnable) => {
                            
                if (err.message.includes('addEventListener')) {
                    return false;
                }
            
                return true;
            });

            cy.visit('https://ehackathon.online/antarang/shop'); 
            
            // cy.get('.loader-img > picture > img').should('not.be.visible');
            cy.get('.dropdown-btn').click({force:true});
      
            cy.get('#dropdown-content').should('be.visible');
            cy.get('.sortdata').contains('A to Z').click({force:true})
      
            cy.get('.showing-product-detail', { timeout: 10000 })
              .should('be.visible')
              .and('contain.text', 'Showing 20 of 44 Products');
        });
    it('should open the Z to A Sortby', () => {
        cy.viewport(1280, 720);

                Cypress.on('uncaught:exception', (err, runnable) => {
                            
                    if (err.message.includes('addEventListener')) {
                        return false;
                    }
                
                    return true;
                });

            cy.visit('https://ehackathon.online/antarang/shop'); 
            
            // cy.get('.loader-img > picture > img').should('not.be.visible');
            cy.get('.dropdown-btn').click({force:true});
      
            cy.get('#dropdown-content').should('be.visible');
            cy.get('.sortdata').contains('Z to A').click({force:true})
      
            cy.get('.showing-product-detail', { timeout: 10000 })
              .should('be.visible')
              .and('contain.text', 'Showing 20 of 44 Products');
        });
     it('should open the Most Popular Sortby', () => {
        cy.viewport(1280, 720);

                Cypress.on('uncaught:exception', (err, runnable) => {
                            
                    if (err.message.includes('addEventListener')) {
                        return false;
                    }
                
                    return true;
                });

            cy.visit('https://ehackathon.online/antarang/shop'); 
            
            // cy.get('.loader-img > picture > img').should('not.be.visible');
            cy.get('.dropdown-btn').click({force:true});
      
            cy.get('#dropdown-content').should('be.visible');
            cy.get('.sortdata').contains('Most Popular').click({force:true})
      
            cy.get('.showing-product-detail', { timeout: 10000 })
              .should('be.visible')
              .and('contain.text', 'Showing 20 of 44 Products');
        });
     it('should open the high to low Sortby', () => {
        cy.viewport(1280, 720);

                Cypress.on('uncaught:exception', (err, runnable) => {
                            
                    if (err.message.includes('addEventListener')) {
                        return false;
                    }
                
                    return true;
                });

            cy.visit('https://ehackathon.online/antarang/shop'); 
            
             //cy.get('.loader-img > picture > img').should('not.be.visible');
            cy.get('.dropdown-btn').click({force:true})
      
            cy.get('#dropdown-content').should('be.visible');
            cy.get('.sortdata').contains('Price: high to low').click({force:true})
      
            cy.get('.showing-product-detail', { timeout: 10000 })
              .should('be.visible')
              .and('contain.text', 'Showing 20 of 44 Products');
      });
      it('should filter is visible or not ',()=>{
        cy.viewport(1280, 720);

        Cypress.on('uncaught:exception', (err, runnable) => {
                    
            if (err.message.includes('addEventListener')) {
                return false;
            }
        
            return true;
        });

        cy.visit('https://ehackathon.online/antarang/shop');
        cy.get('.filter > h3').should('be.visible')
        cy.get('.filter-wrapper > .filter > .reset-btn').should('be.visible')
        // cy.get('.filter-wrapper > .filter > .reset-btn',{timeout:9000}).click()


      })

      it('Verified that Category is cheked  or not ',()=>{

        cy.viewport(1280, 720);

        Cypress.on('uncaught:exception', (err, runnable) => {
                    
            if (err.message.includes('addEventListener')) {
                return false;
            }
        
            return true;
        });

        cy.visit('https://ehackathon.online/antarang/shop');
        
       cy.contains('Filter').click({force:true})
       cy.contains('Category').click({force:true})
       cy.get('.card__title').should('be.visible')
    //    cy.contains('Color').click({force:true})
       cy.get('.theme-sidebar-detail > .section_accordion > .accordion > :nth-child(2) > .card__title').click({force:true})

       

       cy.get('input[name="category"]', { timeout: 10000 }).check('Patwa Bhai Rakhi',{force:true})
       cy.get('input[name="category"][value="Patwa Bhai Rakhi"]').should('be.checked');
       cy.wait(5000)
    //    cy.get('.product-item-detail').should('have.text','Patwa Bhai Rakhi ')
    //    cy.get('#product-count').should('have.text','Showing 5 of 5 Products')

      })
      it('Verified that Color is checked or not ',()=>{

        cy.viewport(1280, 720);

                    Cypress.on('uncaught:exception', (err, runnable) => {
                                
                        if (err.message.includes('addEventListener')) {
                            return false;
                        }
                    
                        return true;
                    });

                    
        cy.visit('https://ehackathon.online/antarang/shop');
        
        cy.contains('Filter').click({force:true})
        cy.contains('Category').click({force:true})
        cy.get('.card__title').should('be.visible')
     //    cy.contains('Color').click({force:true})
        cy.get('.theme-sidebar-detail > .section_accordion > .accordion > :nth-child(2) > .card__title').click({force:true})




                 //    cy.get('input[name="color"]').check('#color-117')
                cy.get('#mobile-color-list > :nth-child(1) > .filter-name > #color-117').click({force:true})
                cy.get('#mobile-color-list > :nth-child(1) > .filter-name > #color-117').should('be.checked')
                
                // cy.get('.product-item-detail').should('have.text','Upcycle Rakhi,Red')
                // cy.get('#product-count').should('have.text','Showing 11 of 11 Products')
        })
      it('verified that Category and Color  is Unchecked or not ',()=>{
        cy.viewport(1280, 720);

                Cypress.on('uncaught:exception', (err, runnable) => {
                            
                    if (err.message.includes('addEventListener')) {
                        return false;
                    }
                
                    return true;
                });

                 cy.visit('https://ehackathon.online/antarang/shop');
                
                cy.contains('Filter').click({force:true})
                cy.contains('Category').click({force:true})

                //Checked the category
                cy.get('input[name="category"]', { timeout: 10000 }).check('Patwa Bhai Rakhi',{force:true})
                cy.get('input[name="category"][value="Patwa Bhai Rakhi"]').should('be.checked');
                cy.wait(5000)
              
                //Unchecked the Category
                cy.get('input[name="category"]', { timeout: 10000 }).uncheck('Patwa Bhai Rakhi',{force:true})
                cy.get('input[name="category"][value="Patwa Bhai Rakhi"]').should('not.be.checked');
                
                //Checked the Color 
                cy.get('#mobile-color-list > :nth-child(1) > .filter-name > #color-117').click({force:true})
                cy.get('#mobile-color-list > :nth-child(1) > .filter-name > #color-117').should('be.checked')
                

                //Uncheked the Color 
                cy.get('#mobile-color-list > :nth-child(1) > .filter-name > #color-117',{timeout:20000}).click({force:true})
                cy.get('#mobile-color-list > :nth-child(1) > .filter-name > #color-117',{timeout:5000}).should('not.be.checked')
   
            })
     it('Applying the filter ',()=>{
        cy.viewport(1280, 720);
        Cypress.on('uncaught:exception', (err, runnable) => {
                            
            if (err.message.includes('addEventListener')) {
                return false;
            }
        
            return true;
        });


        cy.visit('https://ehackathon.online/antarang/shop')
        cy.contains('Price').should('be.visible')
        cy.contains('Price').click({force:true})

         cy.get('#minprice').should('be.visible')
         cy.get('#maxprice').should('be.visible').clear({force:true})

         
         cy.get('#minprice',{force:true}).type('10')
         cy.get('#maxprice',{force:true}).type('250')

         cy.get('.card.is-active > #section-accordian-content4 > .card__content > .price-detail > .col-form > .theme-btn').should('be.visible')
         cy.get('.card.is-active > #section-accordian-content4 > .card__content > .price-detail > .col-form > .theme-btn').click()

     })


})
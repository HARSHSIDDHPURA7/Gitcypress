
// describe('handle dropdown',()=>{

//     it.skip('Dropdown with select',()=>{
//         cy.visit('https://ehackathon.online/antarang/shop')

//         cy.get('.dropdown-btn').select('Price: low to high').should('have.value','low')

//     })
// })
describe('Custom Dropdown Test', () => {
    it('should open the low to high Sortby', () => {
              cy.visit('https://ehackathon.online/antarang/shop'); 
              
              cy.get('#section-loader').should('not.be.visible');
              cy.get('.dropdown-btn').click();

              cy.get('#dropdown-content').should('be.visible');
              cy.get('.sortdata').contains('Price: low to high').click()

              cy.get('.showing-product-detail', { timeout: 10000 })
                .should('be.visible')
                .and('contain.text', 'Showing 20 of 44 Products');
      });
   
        
  it('should open the A to Z Sortby', () => {
              cy.visit('https://ehackathon.online/antarang/shop'); 
              
              cy.get('#section-loader').should('not.be.visible');
              cy.get('.dropdown-btn').click();
        
              cy.get('#dropdown-content').should('be.visible');
              cy.get('.sortdata').contains('A to Z').click()
        
              cy.get('.showing-product-detail', { timeout: 10000 })
                .should('be.visible')
                .and('contain.text', 'Showing 20 of 44 Products');
          });
   it('should open the Z to A Sortby', () => {
            cy.visit('https://ehackathon.online/antarang/shop'); 
            
            cy.get('#section-loader').should('not.be.visible');
            cy.get('.dropdown-btn').click();
      
            cy.get('#dropdown-content').should('be.visible');
            cy.get('.sortdata').contains('Z to A').click()
      
            cy.get('.showing-product-detail', { timeout: 10000 })
              .should('be.visible')
              .and('contain.text', 'Showing 20 of 44 Products');
        });
  it('should open the Most Popular Sortby', () => {
          cy.visit('https://ehackathon.online/antarang/shop'); 
          
          cy.get('#section-loader').should('not.be.visible');
          cy.get('.dropdown-btn').click();
    
          cy.get('#dropdown-content').should('be.visible');
          cy.get('.sortdata').contains('Most Popular').click()
    
          cy.get('.showing-product-detail', { timeout: 10000 })
            .should('be.visible')
            .and('contain.text', 'Showing 20 of 44 Products');
      });
      it('should open the high to low Sortby', () => {
        cy.visit('https://ehackathon.online/antarang/shop'); 
        
        cy.get('#section-loader').should('not.be.visible');
        cy.get('.dropdown-btn').click();
  
        cy.get('#dropdown-content').should('be.visible');
        cy.get('.sortdata').contains('Price: high to low').click()
  
        cy.get('.showing-product-detail', { timeout: 10000 })
          .should('be.visible')
          .and('contain.text', 'Showing 20 of 44 Products');
  });
  
  });
  

 








// describe('handle dropdown',()=>{

//     it.skip('Dropdown with select',()=>{
//         cy.visit('https://testautomationpractice.blogspot.com/')

//         cy.get('#country').select('india').should('have.value','india')

//     })

//     // bootstrap dropdown
//     it.skip('Dropdown with select',()=>{
//         cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

//         cy.get('#select2-billing_country-container').click()
        
//         cy.get('.select2-search__field').type('india').type('{enter}')

//         cy.get('#select2-billing_country-container').should('have.text','India')

//     }) 

//          it.skip('dropdown with auto suggestion',()=>{
           
       
//             cy.visit('https://www.wikipedia.org/')
    
//             cy.get('#searchInput').type('delhi')
    
//             cy.get('.suggestion-title').contains('Delhi University').click()
//         })
        
//         it('dynamic dropdown ',()=>{

//             cy.visit('https://www.google.com/')

//             cy.get('.gLFyf').type('cypress automation')

//             cy.wait(3000)

//             cy.get('div.wM6W7d>span').should('have.length',13)

//             cy.get('div.wM6W7d>span').each( ($el, index, $list)=>{
//                 if($el.text()=='cypress automation tutorial')
//                     {

//                     cy.wrap($el).click()
//                 }

//             })
//             cy.get('.gLFyf').should('have.value','cypress automation tutorial')
//         })
    
// })
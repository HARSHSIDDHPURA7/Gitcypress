describe('checkbox',()=>{
    it('checkbox',()=>{
  
        cy.viewport(1280,720);
        cy.visit('https://antarangcrafts.com/shop')

        

        // cy.get("input[name='category']").click()

       cy.contains('Filter').click({force:true})
       cy.contains('Category').click({force:true})
    //    cy.contains('Color').click({force:true})
       cy.get('.theme-sidebar-detail > .section_accordion > .accordion > :nth-child(2) > .card__title').click({force:true})

       

       cy.get('input[name="category"]', { timeout: 10000 }).check('Suraj Rakhi',{force:true})
       cy.get('input[name="category"][value="Suraj Rakhi"]').should('be.checked');



    //    cy.get('input[name="color"]').check('#color-117')
    cy.get('#mobile-color-list > :nth-child(1) > .filter-name > #color-117',{timeout:20000}).click({force:true})
    cy.get('#mobile-color-list > :nth-child(1) > .filter-name > #color-117',{timeout:5000}).should('be.checked')
   

       
    //    cy.get('input[name="color"]', { timeout: 10000 }).check('Red',{force:true})


  
   

    //    cy.get('input[name="category"]',{timeout : 1000}).check('Red',{force:true}).should('have.lenghth',1)


      
    })
})

// describe('filter',()=>{
//     beforeEach(()=>{

//         cy .visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//         cy.get("[name='username']").clear().type('Admin')
//         cy.get("[name='password']").clear().type('admin123')
//         cy.get("form").submit()

//     })
//     it('filter',()=>{
//         cy.contains('Admin').click()
        
//         cy.contains('  Nationality').click()

        
//     })
// })
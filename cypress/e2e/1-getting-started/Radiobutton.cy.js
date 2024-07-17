describe('check ui elements',()=>{
    // it('checking radio buttons',()=>{

    //     cy.visit('https://testautomationpractice.blogspot.com/')
    //     cy.get('#male').should('be.visible')
    //     cy.get('#female').should('be.visible')

    //     cy.get('#male').check().should('be.checked')
    //     cy.get('#female').check().should('not.be.checked')

    //     cy.get('#female').check().should('be.checked')
    //     cy.get('#male').check().should('not.be.checked')
    // })

    it('checking the check buttons',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        // cy.get('input#sunday').should('be.visible')
        // cy.get('input#monday').check().should('be.checked')
        // cy.get('input#tuesday').check().should('be.checked')
        // cy.get('input#wednesday').check().should('be.checked')
        // cy.get('input#friday').check().should('be.checked')
        // cy.get('input#friday').uncheck().should('not.be.checked')

        cy.get('input.form-check-input[type=checkbox]').check().should('be.checked')

    })
})
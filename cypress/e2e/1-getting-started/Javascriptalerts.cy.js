describe('Alerts',()=>{
    it('Javascript Alerts',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (str) => {
            expect(str).to.contain('I am a JS Not Alert')
        })

        cy.get('#result').should('have.text','You successfully clicked an alert')
    })
    
    it('Javascript Conformation Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (str) => {
            expect(str).to.contain('I am a JS Confirm')
        })

        
        cy.get('#result').should('have.text','You clicked: Ok')


    })

     
    it('Javascript Conformation Alert cancel',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (str) => {
            expect(str).to.contain('I am a JS Confirm')
        })
        cy.on('window:confirm', () => false)
        
        cy.get('#result').should('have.text','You clicked: Cancel')


    })

    it('js prompted alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
            cy.stub(win ,'prompt').returns('welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click()

        cy.get('#result').should('have.text','You entered: welcome')
    })

    it('js auth alert',()=>{

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
     
        
        // cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
 
    })
    
})
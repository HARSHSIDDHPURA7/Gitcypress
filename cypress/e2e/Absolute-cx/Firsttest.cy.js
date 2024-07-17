import { View } from "../../support/helpers"

describe('Cheking flutter web app',()=>{
    it('Cheking flutter web app',()=>{
        View()
        cy.visit('https://webapp-a875c.web.app/', { timeout: 120000 })
    })
})
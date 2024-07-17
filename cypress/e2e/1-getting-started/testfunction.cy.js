import { login,Sitevisit,View } from "../../support/helpers";

describe('Test function',()=>{

    beforeEach(()=>{
        login('harshsiddhpura6337@gmail.com', '123Harsh@')
        // View()
     View()
   
        
    })

  it('should verify login by checking for a user-specific element', () => {

                Sitevisit()
                cy.contains('Logout').should('be.visible'); 
  })


})
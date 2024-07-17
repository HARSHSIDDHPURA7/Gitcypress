export const login = (email, password) => {
    cy.visit('https://ehackathon.online/antarang/login');
    cy.get('input[name="user_email"]').type(email);
    cy.get('input[name="user_password"]').type(password);
    cy.get('.col-form-btn').click();
  };

  export const View = () =>{
    cy.viewport(1280, 720);

    Cypress.on('uncaught:exception', (err, runnable) => {
        
        if (err.message.includes('addEventListener')) {
            return false;
        }
    
        return true;
    });
  }

  export const Sitevisit = ()=>{
    cy.visit('https://ehackathon.online/antarang/home');
  }
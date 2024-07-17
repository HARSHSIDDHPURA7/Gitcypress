describe('Verify related products increase with each visit', () => {
    let initialCount;
  
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Ignore uncaught exceptions related to addEventListener and Splide
      if (err.message.includes('addEventListener') || err.message.includes('Splide')) {
        return false;
      }
      return true;
    });
  
    before(() => {
      cy.viewport(1280, 720);
  
      // Initial visit to the page and store the initial count of related products
      cy.visit('https://ehackathon.online/antarang/shop-detail/upcyclerakhi-red');
      cy.get('body > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)')
        .scrollIntoView()
        .should('be.visible');
  
      // Wait for the slider element to be initialized and visible
      cy.get('#realted-product-slider-slide03 > .most-populer-detail > .block-link')
        .should('be.visible')
        .click();
  
      // Get the count of related products and store it in initialCount
      cy.get('#visitors-count') // Use the actual selector for related products count
        .should('exist')
        .invoke('text')
        .then(text => {
          const count = parseInt(text.trim(), 10);
          cy.log(`Initial count: ${count}`);
          initialCount = count;
        });
    });
  
    it('should increase the number of related products on subsequent visits', () => {
      // Visit the page again and check if the number of related products has increased
      cy.visit('https://ehackathon.online/antarang/shop-detail/upcyclerakhi-red');
      cy.get('body > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)')
        .scrollIntoView()
        .should('be.visible');
  
      // Wait for the slider element to be initialized and visible
      cy.get('#realted-product-slider-slide03 > .most-populer-detail > .block-link')
        .should('be.visible')
        .click();
  
      // Get the new count of related products and verify it has increased
      cy.get('#visitors-count') // Use the actual selector for related products count
        .should('exist')
        .invoke('text')
        .then(text => {
          const newCount = parseInt(text.trim(), 10);
          cy.log(`New count: ${newCount}`);
          expect(newCount).to.be.greaterThan(initialCount);
          initialCount = newCount; // Update the initialCount for the next iteration
        });
  
      // Repeat the visit to check again
      cy.visit('https://ehackathon.online/antarang/shop-detail/upcyclerakhi-red');
      cy.get('body > section:nth-child(7) > div:nth-child(1) > div:nth-child(1) > h2:nth-child(1)')
        .scrollIntoView()
        .should('be.visible');
  
      // Wait for the slider element to be initialized and visible
      cy.get('#realted-product-slider-slide03 > .most-populer-detail > .block-link')
        .should('be.visible')
        .click();
  
      // Get the new count of related products and verify it has increased
      cy.get('#visitors-count') // Use the actual selector for related products count
        .should('exist')
        .invoke('text')
        .then(text => {
          const newCount = parseInt(text.trim(), 10);
          cy.log(`Final count: ${newCount}`);
          expect(newCount).to.be.greaterThan(initialCount);
        });
    });
  });
  
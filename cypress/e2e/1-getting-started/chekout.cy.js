
  describe('Visit Product Page and Click Add to Cart Button', () => {
 
  
    it.skip('should visit the product page and click the add to cart button', () => {

      cy.visit('https://antarangcrafts.com/login');
  

      cy.get('input[name="user_email"]').type('harshsiddhpura6337@gmail.com');
      cy.get('input[name="user_password"]').type('123Harsh@');

      cy.get('#hoot_login_signin_submit').click();
   
      cy.viewport(1280, 720);

      cy.get(':nth-child(2) > .header__menu-link').click()
 
      cy.get(':nth-child(1) > .product-detail > .product-detail-block > .product-desc > a',{timeout:10000}).click()

      
      cy.get('.add-cart-btn').click()

      cy.get('#desc').should('have.text','Item added to cart successfully')

      cy.wait(1000)

 });
      it
      ('Go to the cart and checkout',()=>{
        cy.viewport(1280, 720);

        
      cy.visit('https://antarangcrafts.com/login');
  

      cy.get('input[name="user_email"]').type('harshsiddhpura6337@gmail.com');
      cy.get('input[name="user_password"]').type('123Harsh@');

      cy.get('#hoot_login_signin_submit').click();

      cy.wait(6000)

        cy.get('.header-cart-icon > picture > img').click()
        cy.get('.checkout-btn').click()
        cy.get('#user_first_name').clear()
        cy.get('#user_phone').clear()
        cy.get('#billing_pincode').clear()
       
        cy.get('#billing_address').clear()
        cy.get('#billing_landmark').clear()
        
        cy.get('#ship-different-address').click()
        cy.get('#shipping_pincode').clear()
        cy.get('#shipping_address').clear()
        
        cy.get('#shipping_landmark').clear()

       // cy.get('td').should('have.text','You have not added any product in cart')
        
    
        

       
        cy.get('#rzp-button1').click()

        //checking the error message is shown or not
        cy.get('#user_first_name-error').should('have.text','Please enter your full name')
        cy.get('#user_first_name-error').should('be.visible')

        cy.get('#user_phone-error').should('have.text','This field is required')
        cy.get('#user_phone-error').should('be.visible')

        cy.wait(10000)

        cy.get('#billing_pincode-error').should('have.text','This field is required')
        cy.get('#billing_pincode-error').should('be.visible')

        cy.get('#billing_address-error').should('have.text','This field is required')
        cy.get('#billing_address-error').should('be.visible')

        cy.get('#billing_landmark-error').should('have.text','This field is required')
        cy.get('#billing_landmark-error').should('be.visible')

        cy.get('#shipping_pincode-error').should('have.text','This field is required')
        cy.get('#shipping_pincode-error').should('be.visible')

        cy.get('#shipping_address-error').should('have.text','This field is required')
        cy.get('#shipping_address-error').should('be.visible')

        cy.get('#shipping_landmark-error').should('have.text','This field is required')
        cy.get('#shipping_landmark-error').should('be.visible')

        cy.get('#user_phone').type('123')
        cy.get('#user_phone-error').should('have.text','Please enter at least 10 characters.')

        cy.get('#billing_pincode').type('36400')
        cy.get('#billing_pincode-error').should('have.text','Please enter at least 6 characters.')

        cy.get('#billing_pincode').clear()
        cy.get('#billing_pincode').type('000000')
        cy.get('#swal2-html-container').should('have.text','Please enter a valid pincode!')
        cy.get('.swal2-confirm').click()

        cy.get('#user_phone').clear()
        cy.get('#billing_pincode').clear()
       
        //Now All the Validation Is Checked And We Enter The New Value
        
        cy.get('#user_first_name').type('Automation Testing ')
        cy.get('#user_phone').type('7383809039')
        cy.get('#billing_pincode').type('364001')
        cy.get('#billing_address').type('Street:1')
        cy.get('#billing_landmark').type('Test COlony')
        cy.get('#ship-different-address').click()

 

  

        //Applying Coupen Code And Check It Valid Or Not
        // cy.get('#coupon_code').type('Antarang25')
        // cy.get('#coupan-code-submit').click()

        //If We Enter a Invalid Coupen Than Check

        cy.get('#coupon_code').type('Antarang26')
        cy.get('#coupan-code-submit').click()


        cy.get('#desc').should('have.text','Please enter valid Coupon code')

        //Click On The Guidline 

        cy.get('#aggree_delays-error').should('have.text','This field is required')
        cy.get('#aggree_delays-error').should('be.visible')
        cy.get('.agree-for-delays > input.error').click()

        //Ensure that Cash On Delivery Option Is Checked
        cy.get('input#cash-on-delivery').should('be.checked');

        //Now Finally All the Test Is done Now we Placede the order
       
        cy.get('#rzp-button1',{timeout:6000}).click()
        cy.get('#desc').should('have.text','Order Successfully')
        

        cy.wait(10000)

    
       
        cy.get(':nth-child(1) > :nth-child(6) > .theme-btn').click({force:true})

      })
    });

  
        //main end
   
  // cy.get("li[id='kurtas-slider-clone07'] a[class='block-link category']").click()
      
    
  // // cy.visit('https://ehackathon.online/antarang/shop-detail/evileyeelegancebeadwork-blue-white'); 

  // cy.wait(2000); 


  // cy.get('.add-cart-btn.addcartbtn.full-width') 
  //   .scrollIntoView()
  //   .should('be.visible');

  // cy.get('.add-cart-btn.addcartbtn.full-width')
  //   .click({ force: true }); 

  // cy.get('.cart').should('contain', 'Item added'); 

  //first name code
  // cy.get('#rzp-button1').click()
  // cy.get('#user_first_name-error').should('have.text','Please enter your full name')

  // cy.get('#user_first_name').type('0000');
  // cy.get('#user_first_name')
  //   .siblings('#user_first_name-error') 
  //    .should('have.text', 'Name should not contain digits');
  
  
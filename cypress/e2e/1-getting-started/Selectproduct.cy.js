describe('Click on the product',()=>{
    it ('Wishlist',()=>{
        cy .visit('https://ehackathon.online/antarang/shop')

        cy.get("('.product-detail > .product-img > :nth-child(1) > img')").trigger('mouseover').click()

  
    })
})
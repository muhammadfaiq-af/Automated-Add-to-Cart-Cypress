describe("Signup Functionality", () => {
    
    it("Verify that the user is able to sign up", () => {

        cy.get('[href="https://magento.softwaretestingboard.com/customer/account/create/"]').eq(0).click()
        cy.get('#firstname').type("Muhammad")
        cy.get('#lastname').type("Faiq")
        cy.get('#is_subscribed').check()
        cy.get('#email_address').type('faiqqadri123@gmail.com')
        cy.get('#password').type(password)
        cy.get('#password-confirmation').type(password)
        cy.get('#password-strength-meter').should("be.visible")
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('[class="cf-tweet-this cf-tt-target cf-tt-element-attached-bottom cf-tt-element-attached-center cf-tt-target-attached-top cf-tt-target-attached-center"]').should("be.visible")
})
})
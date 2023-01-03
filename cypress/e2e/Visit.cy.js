/// <reference types="cypress" />
import loactors from "../fixtures/Selector.json"
const {compnayField} = loactors



const email = "teacher-clothes@lf6p6vr8.mailosaur.net"
const serverId = "lf6p6vr8"
const [random, domain] = email.split('@')
const newEmail = `${random}${Math.ceil(Math.random() * 3000)}${domain}`
const password = "Peshawarpakistan123"

describe("Verify that the user is able to signin", () => {
    
    beforeEach(() => {
        cy.visit("/")
        cy.contains('a', 'Sign In').click()
        cy.get('#email').type("faiqqadri123@gmail.com")
        cy.get('#pass').type("Peshawarpakistan123")
        cy.get('#send2').click()
    })

    it("Verify that the user is able to add the product into the cart and place the order", () => {

        cy.get('#search').type("Diva Gym Tee")
        cy.get('[title="Search"]').click()
        cy.get('[src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/2a213d0c937b30e310c8ee797a880cef/w/s/ws11-yellow_main_1.jpg"]').click()
        cy.get('#option-label-size-143-item-168').click()
        cy.get('#option-label-color-93-item-60').click()
        cy.get('#qty').clear()
        cy.get('#qty').type("3")
        cy.get('#product-addtocart-button').click()
        cy.get('.showcart').click()
        cy.wait(13000)
        cy.get('#top-cart-btn-checkout').click()

        cy.wait(15000)
        cy.get('.new-address-popup > .action > span').click()
        cy.wait(2000)
        cy.get('#opc-new-shipping-address').should("be.visible")
        cy.get(compnayField).eq(7).type("Workbox")
        cy.get('[class="input-text"]').eq(8).type("10")
        cy.get(compnayField).eq(11).type("Newyork")
        cy.get('.select').eq(0).select("California")
        cy.get(compnayField).eq(13).type("10001")
        cy.get('.select').eq(1).select("United States")
        cy.get(compnayField).eq(14).type("0123546987")
        cy.get('#shipping-save-in-address-book').check()
        cy.get('.modal-footer > .primary > span').click()
        cy.wait(2000)
        cy.get('.radio').eq(1).check()
        cy.get('.button').click()
        cy.get('#billing-address-same-as-shipping-checkmo').check()
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()

        cy.get('.order-number').click()
        cy.contains('Grand Total').should("be.visible")
        
    })
})  
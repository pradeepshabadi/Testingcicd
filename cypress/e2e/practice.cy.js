describe('training cypress',()=>{

    it('visit site', ()=>{
        cy.visit("https://example.cypress.io")
        cy.contains("type").click()
        cy.url().should('include','example.cypress.io')
        cy.get('input[id="email1"]').type('pradeep')
    })
})
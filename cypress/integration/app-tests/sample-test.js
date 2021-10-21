describe('My First Test', () => {
    it('cypress works', () => {
        expect(true).to.equal(true)
    })

    it('Visits the kitchen sink', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        cy.url().should('include', '/commands/actions')

        cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
    })
})
describe(`Cypress: Do's and Don't`, () => {
  it('1: Cypress Asynchronous Behaviour', () => {
    //. Note: Cypress commands are asynchronous and non-blocking by default. Cypress commands like cy.visit() and cy.request() are added to the command queue
    //. and executed asynchronously. Meanwhile, the synchronous expect() statement is executed immediately, without waiting for the preceding commands to finish.
    cy.visit('/')
    cy.request('/').its('status').should('eq', 200)
    expect(true).to.be.true
  })
})

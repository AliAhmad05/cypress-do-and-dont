describe(`Cypress: Increase Execution Speed - Do's and Dont's`, () => {
  it('0: Not Using Anything', () => {
    // Test without any delay or optimization.
    // This test will run with Cypress's default behavior.
    const startTime = new Date() // Get start time, so I can show the execution time in the log [Ignore This]
    cy.visit('/contact')
    cy.get('[data-test="first-name"]').type('Ali')
    cy.get('[data-test="last-name"]').type('Ahmad')
    cy.get('[data-test="email"]').type('qa.aliahmad05@gmail.com')
    cy.get('[data-test="subject"]').select('Status of my order')
    cy.get('[data-test="message"]').type('Could you please share the order number or details about the purchase (e.g., product, retailer, or date)?')
    cy.get('[data-test="contact-submit"]').click()
    cy.get('[role="alert"]').should('contain', ' Thanks for your message! We will contact you shortly. ')

    // Get end time, so I can show the execution time in the log [Ignore This]
    cy.then(() => {
      const endTime = new Date()
      const duration = endTime - startTime
      cy.log(`Test duration: ${duration}ms`)
    })
  })

  it('0: Using Delay', () => {
    // Test using `{ delay: 0 }` to disable typing delay.
    // This reduces the time spent on typing, making the test faster.
    const startTime = new Date() // Get start time, so I can show the execution time in the log [Ignore This]
    cy.visit('/contact')
    // Disable typing delay for faster test execution
    cy.get('[data-test="first-name"]').type('Ali', { delay: 0 })
    cy.get('[data-test="last-name"]').type('Ahmad', { delay: 0 })
    cy.get('[data-test="email"]').type('qa.aliahmad05@gmail.com', { delay: 0 })
    cy.get('[data-test="subject"]').select('Status of my order')
    // Disable typing delay for faster test execution
    cy.get('[data-test="message"]').type('Could you please share the order number or details about the purchase (e.g., product, retailer, or date)?', { delay: 0 })
    cy.get('[data-test="contact-submit"]').click()
    cy.get('[role="alert"]').should('contain', ' Thanks for your message! We will contact you shortly. ')

    // Get end time, so I can show the execution time in the log [Ignore This]
    cy.then(() => {
      const endTime = new Date()
      const duration = endTime - startTime
      cy.log(`Test duration: ${duration}ms`)
    })
  })
})

describe(`Cypress: Basics - Do's and Don't`, () => {
  it('0: Set BaseUrl', () => {
    //.  BaseUrl: Set baseurl in the cypress.config.js file and use it in your tests by using / or nothing (keeping it empty) in your cy.visit()
    // cy.visit('https://practicesoftwaretesting.com/') // <--- Don't
    // cy.visit('') <--- Do
    // cy.visit('/') // <--- Do

    // Let's say if you want to visit an endpoint, how would you do this keeping the baseurl in the cypress.config.js file?
    // Cypress Automatically apends the endpoint with the baseurl in the cypress.config.js file

    // cy.visit('https://practicesoftwaretesting.com/contact') // <--- Don't
    // cy.visit('contact') // <--- Do
    cy.visit('/contact') // <--- Do
  })

  it('1: Cypress Asynchronous Behaviour', () => {
    //. Note: Cypress commands are asynchronous and non-blocking by default. Cypress commands like cy.visit() and cy.request() are added to the command queue
    //. and executed asynchronously. Meanwhile, the synchronous expect() statement is executed immediately, without waiting for the preceding commands to finish.
    cy.visit('/')
    cy.request('/').its('status').should('eq', 200)
    expect(true).to.be.true
  })

  it('2: Implicit vs Explicit Wait', () => {
    
    cy.visit('/')
    
    // Explicit wait: Manually waiting for 2 seconds before proceeding.
    // This kind of wait is not ideal as it pauses the test for a fixed amount of time, regardless of whether the condition is met.
    //cy.wait(5000) // <--- Don't (Uncomment ths to see the difference)
    
    // Implicit wait: Cypress automatically waits for the element to be present and interactable before clicking it.
    // This means that Cypress will retry checking for the element's visibility and ability to be clicked for up to 5000ms (default timeout).
    // And as soon as the coniditon is met (example: the element is visible), cypress will move to the next step. Wether the elements take 100 ms to load or 3000 ms to load.
    cy.get('[data-test="nav-contact"]').click() // <--- Do
  })

})

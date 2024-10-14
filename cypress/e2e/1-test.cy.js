describe(`Cypress: Do's and Don't`, () => {
  it('Set BaseUrl', () => {
    //.  BaseUrl: Set baseurl in the cypress.config.js file and use it in your tests by using / or nothing (keeping it empty) in your cy.visit()
    // cy.visit('https://practicesoftwaretesting.com/') // <--- Don't
    // cy.visit('') <--- Do
    // cy.visit('/') // <--- Do
    
    // Let's say if you want to visit an endpoint, how would you do this keeping the baseurl in the cypress.config.js file?
    
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
    //cy.visit('/',{timeout:100})
  }
)
})

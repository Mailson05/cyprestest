context('Logins', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login valido com usuario padrão', () => { 
    cy.get('#user-name').type('standard_user')    
 
  })
})
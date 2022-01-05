describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  it('should arithmetical operations update the display with the result of the operation', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '27');
  });

  it('should chain multiple operations together (90-8) / 2', () => {
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '41');
  });

});
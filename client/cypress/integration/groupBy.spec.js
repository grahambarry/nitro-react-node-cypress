// cypress/integration/groupBy.spec.js
describe('Group By Functionality', () => {
  it('Groups data by week', () => {
    cy.visit('/');
    cy.get('.toggleFilter.week').should('contain', 'week');
    cy.get('ul li').should('have.length.greaterThan', 0);
  });

  it('Groups data by author', () => {
    cy.visit('/');
    cy.get('.toggleFilter.author').should('contain', 'author');
    cy.get('ul li').should('have.length.greaterThan', 0);
  });

  it('Groups data by location', () => {
    cy.visit('/');
    cy.get('.toggleFilter.location').should('contain', 'location');
    cy.get('ul li').should('have.length.greaterThan', 0);
  });
});
// cypress/integration/dataLoading.spec.js
describe('Data Loading', () => {
  it('Loads data from the server', () => {
    cy.visit('/'); // Assuming your app is served at the root URL

    // Assuming the request is made to /api/data
    cy.intercept('GET', '/api/data').as('getData');

    // Wait for the data to be loaded (adjust the timeout if needed)
    cy.wait('@getData', { timeout: 10000 });

    // Assert that the data is displayed in the UI
    cy.get('ul li').should('have.length.greaterThan', 0);
  });
});

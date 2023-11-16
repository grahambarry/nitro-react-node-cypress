// cypress/integration/errorHandling.spec.js
import fetchData from '../../src/ApiService.js';

describe('Error Handling', () => {
  it('Displays an error message when data loading fails', () => {
    // Replace the URL with your actual API endpoint
    cy.intercept('GET', 'http://localhost:3000/api/data', {
      statusCode: 500,
      body: 'Internal Server Error',
    });

    cy.visit('/'); // Adjust the port if needed

    // Assuming your application displays an error message when data loading fails
    cy.get('.error-message').should('contain', 'No data available.');
  });

  it('Handles errors thrown by apiService', () => {
    // Intercept the API call and force it to respond with an error
    cy.intercept('GET', 'http://localhost:3001/api/data', {
      statusCode: 500,
      body: 'Internal Server Error',
      onRequest: (req) => {
        // Call the actual fetchData function in your application
        // and catch the error
        try {
          fetchData();
        } catch (error) {
          // Do something with the error, e.g., log it
          console.error('Caught error from fetchData:', error);
        }
      },
    });

    cy.visit('/'); // Adjust the port if needed

    // Assuming your application displays an error message when data loading fails
    cy.get('.error-message').should('contain', 'No data available.');
  });
});

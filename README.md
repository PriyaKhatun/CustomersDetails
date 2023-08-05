

# Customer Management System

This project is a simple web application that allows users to manage customer data using a set of APIs. The application provides basic functionalities to authenticate users, create, read, update, and delete customer records.


### Prerequisites

- Web browser (Chrome, Firefox, etc.)
- Internet connection
- API access credentials (provided separately)

### Installation and Setup

1. Clone the repository or download the ZIP file.
2. Open the `index.html` file in your web browser.

## Usage

1. Login:
   - Enter your login credentials (email and password) in the login form and click the "Login" button. If the authentication is successful, you will receive a bearer token.
   - The token will be used for subsequent API calls.

2. Create a New Customer:
   - Fill in the customer details (first name, last name, street, address, city, state, email, phone) in the "Create New Customer" form and click the "Create Customer" button.
   - If successful, the new customer will be added to the system.

3. Get Customer List:
   - Click the "Get Customer List" button to fetch the list of all customers from the server.
   - The list will be displayed in a table format.

4. Delete a Customer:
   - Enter the UUID of the customer you want to delete in the "Delete Customer" form and click the "Delete Customer" button.
   - If successful, the customer with the specified UUID will be deleted from the system.

5. Update a Customer:
   - Enter the UUID of the customer you want to update in the "Update Customer" form and fill in the updated details in the form fields.
   - Click the "Update Customer" button to update the customer record.

const baseUrl = "https://qa2.sunbasedata.com/sunbase/portal/api/assignment.jsp";
let token = "";

// Function to perform the login and get the bearer token
async function login(event) {
    event.preventDefault();
    const loginForm = document.getElementById("loginForm");
    const formData = new FormData(loginForm);

    try {
        const response = await fetch("https://qa2.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp", {
            method: "POST",
            body: JSON.stringify({
                login_id: formData.get("login_id"),
                password: formData.get("password"),
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            console.log("Authentication failed");
            return;
        }

        const data = await response.json();
        token = data.token;
        console.log("Authentication successful");
    } catch (error) {
        console.error("Error during authentication:", error);
    }
}

// Function to create a new customer
async function createCustomer(event) {
    event.preventDefault();
    const createCustomerForm = document.getElementById("createCustomerForm");
    const formData = new FormData(createCustomerForm);

    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify({
                cmd: "create",
                first_name: formData.get("first_name"),
                last_name: formData.get("last_name"),
                street: formData.get("street"),
                // Add other customer attributes here
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const data = await response.json();
            console.log("Error creating customer:", data.message);
            return;
        }

        console.log("Customer created successfully");
    } catch (error) {
        console.error("Error creating customer:", error);
    }
}

// Function to get the customer list
async function getCustomerList(event) {
    event.preventDefault();

    try {
        const response = await fetch(baseUrl + "?cmd=get_customer_list", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            console.log("Error fetching customer list");
            return;
        }

        const data = await response.json();
        displayCustomerList(data);
    } catch (error) {
        console.error("Error fetching customer list:", error);
    }
}

// Function to display the customer list in a table
function displayCustomerList(customers) {
    const customerTable = document.getElementById("customerTable");
    customerTable.innerHTML = "";

    customers.forEach(customer => {
        const row = document.createElement("tr");
        for (const key in customer) {
            const cell = document.createElement("td");
            cell.textContent = customer[key];
            row.appendChild(cell);
        }
        customerTable.appendChild(row);
    });
}

// Function to delete a customer
async function deleteCustomer(event) {
    event.preventDefault();
    const deleteCustomerForm = document.getElementById("deleteCustomerForm");
    const formData = new FormData(deleteCustomerForm);

    const uuid = formData.get("uuid");

    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify({
                cmd: "delete",
                uuid: uuid,
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const data = await response.json();
            console.log("Error deleting customer:", data.message);
            return;
        }

        console.log("Customer deleted successfully");
    } catch (error) {
        console.error("Error deleting customer:", error);
    }
}

// Function to update a customer
async function updateCustomer(event) {
    event.preventDefault();
    const updateCustomerForm = document.getElementById("updateCustomerForm");
    const formData = new FormData(updateCustomerForm);

    const uuid = formData.get("uuid");

    try {
        const response = await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify({
                cmd: "update",
                uuid: uuid,
                first_name: formData.get("first_name"),
                last_name: formData.get("last_name"),
                street: formData.get("street"),
                // Add other customer attributes here
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const data = await response.json();
            console.log("Error updating customer:", data.message);
            return;
        }

        console.log("Customer updated successfully");
    } catch (error) {
        console.error

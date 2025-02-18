# Product Search API

Product Search API is a robust application that enables users to search for products using regular expressions and multiple filters including category, name, price, and date. The API is designed to offer an efficient and responsive search experience with a modern user interface featuring debounced input for smooth performance.


## Frontend Screenshot

Below is a screenshot of the website's frontend:

![Website Frontend](https://github.com/user-attachments/assets/e9d5b6f2-8a80-435d-97f0-dce589382362)


## Features

- **Advanced Search:** Leverage regular expressions to perform complex search queries.
- **Filtering:** Easily filter products by category, name, price, and date.
- **Debounced Input:** Reduces unnecessary API calls by implementing debouncing on the client side.
- **Modern UI:** A clean and user-friendly design that enhances the overall experience.

## Tech Stack

### Backend
- **Node.js & Express:** For building a scalable API.
- **MySQL:** To handle robust relational data management.

### Frontend
- **React.js:** For creating dynamic and interactive user interfaces.
- **React-Paginate:** To efficiently paginate through product lists.
- **React-Router-Dom:** For seamless client-side routing.



## Repository Structure

```
.
├── backend   # Contains the Node.js/Express API and MySQL database integration
└── client    # Contains the React.js frontend application
```

## Installation

### Backend Setup
1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2. Install the required dependencies:
    ```bash
    npm install
    ```
3. Configure your MySQL database connection (adjust the configuration file as needed).
4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the `client` directory:
    ```bash
    cd client
    ```
2. Install the required dependencies:
    ```bash
    npm install
    ```
3. Start the React application:
    ```bash
    npm dev
    ```

## Database Setup with Aiven

For testing and development, you can easily set up a free MySQL database using [Aiven](https://aiven.io/). Follow these steps:

1. **Create an Account on Aiven:**
   - Visit [Aiven's website](https://aiven.io/) and sign up for a free account.

2. **Create a MySQL Service:**
   - After logging in, navigate to your dashboard.
   - Click on **Create Service**.
   - Choose **MySQL** as the service type.
   - Select the free tier or a configuration that suits your testing needs.
   - Complete the setup process to provision your MySQL database.

3. **Retrieve Your Database Credentials:**
   - Once your service is created, Aiven will provide you with the necessary connection details (host, port, username, password, and database name).

4. **Configure Your Application:**
   - Update your backend configuration (for example, in your `.env` file) with the provided credentials:
     ```env
     DB_HOST=your-aiven-host
     DB_PORT=your-aiven-port
     DB_USER=your-aiven-username
     DB_PASS=your-aiven-password
     DB_NAME=your-aiven-database-name
     ```
   - Ensure your application is using these environment variables to connect to the database.

5. **Test the Connection:**
   - Start your backend server:
     ```bash
     cd backend
     npm start
     ```
   - Verify that your application connects successfully to the MySQL database.

With these steps, you’ll have a free MySQL database on Aiven ready for testing and development.


## Usage

- Open your browser and navigate to the URL provided by the React app (typically [http://localhost:5173](http://localhost:5173)).
- Use the search bar to input your regex queries and apply filters.
- Enjoy the seamless search experience!

## Contributing

Contributions are welcome. If you find any bugs or have feature suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the terms outlined in the [2025](./LICENSE) file.

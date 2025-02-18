# Product Search API

Product Search API is a robust application that enables users to search for products using regular expressions and multiple filters including category, name, price, and date. The API is designed to offer an efficient and responsive search experience with a modern user interface featuring debounced input for smooth performance.

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
    npm start
    ```

## Usage

- Open your browser and navigate to the URL provided by the React app (typically [http://localhost:3000](http://localhost:3000)).
- Use the search bar to input your regex queries and apply filters.
- Enjoy the seamless search experience!

## Contributing

Contributions are welcome. If you find any bugs or have feature suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the terms outlined in the [2025](./LICENSE) file.

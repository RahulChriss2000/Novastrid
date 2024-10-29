
# Project Node

## Overview

This Node.js application provides user registration and login functionality, token-based authentication, and an option to import chat history from an Excel file. The application is developed using TypeScript for type safety and utilizes Sequelize as the ORM for MySQL database operations.

## Features

- **User Registration**: New users can create an account.
- **User Login**: Authenticates users and generates JWT tokens for secure API access.
- **Chat Import**: Allows users to import chat history from an Excel sheet.
- **Task Filtering**: Provides basic task filtering options (e.g., view all tasks, only completed tasks, or only pending tasks).

## Tech Stack

- **Node.js**: Server-side JavaScript runtime
- **Express**: Web framework for Node.js
- **TypeScript**: Adds static typing to JavaScript
- **Sequelize**: Promise-based ORM for MySQL
- **MySQL**: Relational database management system
- **JWT**: JSON Web Tokens for authentication
- **ExcelJS**: Library for handling Excel files

## Installation

1. **Clone the Repository:**

   ```bash
   git clone YOUR_REPOSITORY_URL
   cd ProjectNode
   ```

2. **Install the Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and configure your database and JWT settings:

   ```plaintext
   DB_HOST=localhost
   DB_USER=your_db_username
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   JWT_SECRET=your_jwt_secret
   ```

## Database Setup

1. **Ensure MySQL is Running:**
   Make sure your MySQL server is up and running.

2. **Create a Database:**

   ```sql
   CREATE DATABASE your_db_name;
   ```

3. **Assign User Privileges:**
   Verify that your MySQL user has the necessary privileges on this database.

## Running the Application

To start the application in development mode, use:

```bash
npm run dev
```

This command starts the server and automatically watches for file changes.

## API Endpoints

### User Registration

- **Endpoint:** `POST /auth/register`
- **Request Body:**

   ```json
   {
     "username": "string",
     "email": "string",
     "password": "string"
   }
   ```

### User Login

- **Endpoint:** `POST /auth/login`
- **Request Body:**

   ```json
   {
     "email": "string",
     "password": "string"
   }
   ```

- **Response on Success:**

   ```json
   {
     "token": "your_jwt_token"
   }
   ```

### Chat Import

- **Endpoint:** `POST /chat/import`
- **Description:** Upload an Excel file containing chat history. The server will parse the file and save the data to the database.

### Task Filtering

- Filtering options can be implemented based on application requirements, such as displaying only completed or pending tasks.

## Contributing

1. **Fork the Repository.**
2. **Create a New Branch:**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes:**

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the Branch:**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request.**

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

Special thanks to all contributors and the open-source community for their support.

---

**Tips for Using This README:**

1. **Customize Placeholders**: Replace `REPOSITORY_URL`, `db_username`, `db_password`, `db_name`, and `jwt_secret` with the actual values for your project.
2. **Additional Sections**: Feel free to add more sections for additional features or setup steps.
3. **View in Markdown**: For the best view, open this file in a Markdown viewer or on GitHub.

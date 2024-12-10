# MERN Authentication System

**Live Link**:  
[**https://mern-auth-n8rb.onrender.com**](https://mern-auth-n8rb.onrender.com)

> _Note_: The website may take 10-20 seconds to load initially due to Render platform limitations.

---

## Table of Contents

1. [Project Setup (Local Development)](#project-setup-local-development)
   - [Clone the Repository](#clone-the-repository)
   - [Client Setup](#client-setup)
   - [Server Setup](#server-setup)
2. [Backend API Documentation](#backend-api-documentation)
   - [`/api/auth/register`](#1-apiauthregister)
   - [`/api/auth/login`](#2-apiauthlogin)
   - [`/api/auth/profile`](#3-apiauthprofile)
   - [`/api/auth/logout`](#4-apiauthlogout)
3. [Frontend Pages](#frontend-pages)
4. [Admin Credentials](#admin-credentials)
5. [Features](#features)
6. [Tech Stack](#tech-stack)
7. [Deployment](#deployment)
8. [Developer Information](#developer-information)

---

## Project Setup (Local Development)

### Clone the Repository

1. Clone this repository to your local system:
   ```bash
   git clone https://github.com/Sohamk130405/mern-auth.git
   cd mern-auth
   ```

### Client Setup

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following content:
   ```env
   VITE_SERVER_BASE_URL="http://localhost:3000/api"
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Server Setup

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following content:
   ```env
   MONGO_URI="enterYourMongoDBConnectionString"
   JWT_SECRET="enterYourJWTSecretKey"
   ```
4. Start the server:
   ```bash
   node app.js
   ```

---

## Backend API Documentation

### Base URL:

`http://localhost:3000/api`

### Authentication Endpoints

#### 1. **`/api/auth/register`**

- **Description**: Registers a new user by creating a user account with the provided information.
- **HTTP Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "string (min. 3 characters, required)",
    "email": "string (valid email, required)",
    "password": "string (min. 6 characters, required)"
  }
  ```
- **Example Response**:
  ```json
  {
    "message": "User registered successfully",
    "token": "JWT Token"
  }
  ```

---

#### 2. **`/api/auth/login`**

- **Description**: Authenticates a user using their email and password, returning a JWT token upon successful login.
- **HTTP Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "string (valid email, required)",
    "password": "string (min. 6 characters, required)"
  }
  ```
- **Example Response**:
  ```json
  {
    "message": "User logged in successfully",
    "token": "JWT Token"
  }
  ```

---

#### 3. **`/api/auth/profile`**

- **Description**: Retrieves the profile information of the currently authenticated user.
- **HTTP Method**: `GET`
- **Authentication**: Requires a valid JWT token in the `Authorization` header:
  ```http
  Authorization: Bearer <token>
  ```
- **Example Response**:
  ```json
  {
    "user": {
      "name": "string (min. 3 characters)",
      "email": "string (valid email)",
      "role": "string (enum [ 'user' , 'admin'])"
    }
  }
  ```

---

#### 4. **`/api/auth/logout`**

- **Description**: Logs out the current user and blacklists the token provided in cookies or headers.
- **HTTP Method**: `GET`
- **Authentication**: Requires a valid JWT token in the `Authorization` header or cookie.

---

## Frontend Pages

### 1. **Home Page (`/`)**

- A personalized dashboard for authenticated users.
- Displays user information (e.g., name, email).
- **Protected**: Only accessible to logged-in users.

### 2. **Admin Dashboard (`/admin`)**

- A dedicated page for admin users with an attractive UI.
- Displays random data and visual analytics with charts.
- **Protected**: Only accessible to logged-in admin users.

### 3. **Login Page (`/login`)**

- Allows users and admin to log in with their credentials.
- User-friendly design with responsive layout.

### 4. **Register Page (`/register`)**

- Enables new users to sign up for the application.
- Collects essential details like name, email, and password.

---

## Admin Credentials

For testing the admin functionalities, a pre-registered admin account is provided:

- **Name**: `Admin`
- **Email**: `admin@mern.com`
- **Password**: `admin@123`

Use these credentials to log in as an admin and access the Admin Dashboard.

---

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Token-Based Authorization**: Protects private routes using token-based middleware.
- **Profile Management**: Retrieve user details using the `/profile` endpoint.
- **Token Blacklisting**: Ensures secure logout by invalidating tokens.

---

## Tech Stack

- **Frontend**: React.js (with Vite for development)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

---

## Deployment

- **Hosting Platform**: Render
- **Frontend**: Deployed using Vite
- **Backend**: Node.js server hosted on Render

---

## Developer Information

- **Author**: Soham Kolhatkar
- **Branch**: CSAI
- **Year**: SY
- **College**: VIT, Pune

---

Feel free to contribute to this project by raising issues or submitting pull requests! 🎉

---

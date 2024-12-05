## Webiste Live Link Endpoint

https://mern-auth-n8rb.onrender.com

# Project Setup On local

- If you want to setup locally then follow these steps

## cd client

1. npm install
2. create .env file as follows:

- VITE_SERVER_BASE_URL="http://localhost:3000/api"

3. npm run dev

## cd server

1. npm install
2. create .env file as follows:

- MONGO_URI="enterYourURI"
- JWT_SECRET="enterYourSecret"

3. node app.js

# Backend API Documentation

## `/api/auth/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `name` (string, required): User's name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `message` (String): User registered successfully
- `token` (String): JWT Token

## `/api/auth/login` Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `message`(String): User Logged In Successfully
- `token` (String): JWT Token

## `/api/auth/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated user.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Example Response

- `user` (object):
  - `firstname` (string): User's name (minimum 3 characters).
  - `email` (string): User's email address (must be a valid email).

## `/api/auth/logout` Endpoint

### Description

Logout the current user and blacklist the token provided in cookie or headers

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or cookie.

# Developer Info

- `Author`: Soham Kolhatkar
- `Branch`: CSAI
- `Year`: SY
- `College`: VIT,Pune

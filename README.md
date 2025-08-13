# REST API with Node.js & Express

A simple REST API implementation demonstrating MVC architecture and RESTful principles using Node.js and Express.

## Features

- MVC Architecture (Model-View-Controller pattern)
- RESTful endpoints for User management
- Input validation middleware
- JSON responses with proper status codes
- In-memory data storage

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

## Installation

```bash
# Clone the repository
git clone https://github.com/scofield144/Rest_API.git

# Install dependencies
npm install
```

## Running the Application

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start at `http://localhost:3000`

## Project Structure

```
├── app.js          # Application entry point
├── models/         # Data models
│   └── user.js     # User model
└── routes/         # Route handlers
    └── users.js    # User routes
```

## Technologies Used

- Node.js
- Express.js
- Body Parser

## Author

- Tales
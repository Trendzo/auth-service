# Auth Service

A microservice for handling authentication with support for multiple user types (users, admins, and stores).

## Features

- User registration and authentication
- Role-based access control
- JWT-based authentication
- MongoDB integration
- Docker support

## Prerequisites

- Docker
- Docker Compose

## Running with Docker

1. Build and start the containers:
```bash
docker-compose up --build
```

2. To run in detached mode:
```bash
docker-compose up -d
```

3. To stop the containers:
```bash
docker-compose down
```

## API Endpoints

### User Authentication
- POST `/user/auth/register` - Register a new user
- POST `/user/auth/login` - Login as a user
- POST `/user/auth/logout` - Logout (requires token)
- GET `/user/profile` - Get user profile (requires token)

### Admin Authentication
- POST `/admin/auth/register` - Register a new admin
- POST `/admin/auth/login` - Login as an admin
- POST `/admin/auth/logout` - Logout (requires token)
- GET `/admin/dashboard` - Get admin dashboard (requires token)

### Store Authentication
- POST `/store/auth/register` - Register a new store
- POST `/store/auth/login` - Login as a store
- POST `/store/auth/logout` - Logout (requires token)
- GET `/store/inventory` - Get store inventory (requires token)

## Environment Variables

The following environment variables can be configured:

- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `JWT_EXPIRATION`: JWT token expiration time in milliseconds
- `NODE_ENV`: Environment (development/production)

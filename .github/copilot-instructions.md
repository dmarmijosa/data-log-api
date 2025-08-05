<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Data Log API - NestJS Project Instructions

## Project Overview

This is a NestJS TypeScript application for storing and retrieving text data with PostgreSQL database, designed for deployment on CapRover with the domain `data-log.nexa-code.net`.

## Development Guidelines

### Architecture

- Follow NestJS modular architecture patterns
- Use TypeORM for database operations
- Implement proper DTO validation with class-validator
- Maintain separation of concerns (Controller -> Service -> Repository)

### Code Style

- Use TypeScript strict mode
- Follow NestJS naming conventions
- Implement proper error handling
- Use environment variables for configuration
- Validate all input data

### Database

- Use PostgreSQL with TypeORM
- Entity relationships should be properly defined
- Use migrations for production (currently using synchronize for development)
- Implement proper indexing for performance

### API Design

- RESTful endpoints with proper HTTP methods
- Consistent response formats
- Implement proper status codes
- Include pagination where appropriate
- Use global prefix '/api'

### Testing

- Write unit tests for services
- Implement e2e tests for endpoints
- Mock database connections in tests
- Aim for good test coverage

### Deployment

- Docker-ready with multi-stage builds
- CapRover compatible configuration
- Environment-based configuration
- Health checks included
- SSL/HTTPS ready

### Security

- Validate all inputs
- Use CORS appropriately
- Environment variables for sensitive data
- Follow NestJS security best practices

## Key Files Structure

- `src/entities/` - TypeORM entities
- `src/dto/` - Data transfer objects with validation
- `src/services/` - Business logic
- `src/controllers/` - HTTP request handlers
- `src/modules/` - NestJS modules

## Available Commands

- `npm run start:dev` - Development mode
- `npm run build` - Build for production
- `npm run test` - Run tests
- `docker-compose up` - Run with PostgreSQL

# Project Overview

This project is a microservice-based system, scalable, sercurity:

- auth-service (NestJS + Prisma + PostgreSQL)
- gateway (NestJS API Gateway)
- AR client (Swift)

# Auth Service

Responsibilities:
- Authentication (JWT + refresh token)
- Role-based access control (RBAC)
- Session management (multi-device)

Tech:
- NestJS
- Prisma ORM
- PostgreSQL

# Current Status

- Login: DONE
- Logout: DONE (no access token revoke yet)
- JWT Guard: DONE
- Role Guard: DONE
- Multi-device session control: DONE
- API Gateway: In progress

# Coding Rules

- Use service + controller pattern (NestJS standard)
- Use Prisma for all DB operations
- Do not write raw SQL unless necessary
- Always validate DTOs
- Use design patterns for easily expanding the application

# Important Notes

- Access token is stateless
- Refresh token stored in DB
- Future: implement refresh token rotation
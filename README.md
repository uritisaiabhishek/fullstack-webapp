# Fullstack Docker App

Production-ready monorepo setup using:

- React + Vite frontend
- Node.js + Express backend API
- React admin panel
- PostgreSQL database
- Docker Compose orchestration

---

# Project Structure

```text
fullstack-docker-app/
│
├── frontend/        # Main React frontend
├── backend/         # Express API
├── admin/           # React admin dashboard
├── docker/          # Docker-related configs
├── postgres/        # Database-related files
├── docker-compose.yml
├── .env.example
└── README.md
```

---

# Tech Stack

| Service | Technology |
|---|---|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Admin Panel | React + Vite |
| Database | PostgreSQL |
| Containerization | Docker |
| Orchestration | Docker Compose |

---

# Requirements

Install:

- Docker Desktop
- Node.js 22+
- Git

---

# Ports

| Service | URL | Port |
|---|---|---|
| Frontend | http://localhost:5173 | 5173 |
| Admin Panel | http://localhost:5174 | 5174 |
| Backend API | http://localhost:8000 | 8000 |
| PostgreSQL | localhost:5432 | 5432 |

---

# Start Application

From project root:

```bash
docker compose up --build
```

Run in background:

```bash
docker compose up -d --build
```

---

# Stop Application

```bash
docker compose down
```

Remove containers + volumes:

```bash
docker compose down -v
```

---

# Verify Services

## Frontend

```text
http://localhost:5173
```

## Admin Panel

```text
http://localhost:5174
```

## Backend Health Check

```text
http://localhost:8000/health
```

Expected response:

```json
{
  "status": "ok"
}
```

---

# Docker Services

View running containers:

```bash
docker ps
```

View logs:

```bash
docker compose logs -f
```

Specific service logs:

```bash
docker compose logs -f backend
docker compose logs -f frontend
docker compose logs -f admin
docker compose logs -f postgres
```

---

# Development Features

- Hot reload enabled
- Docker network communication configured
- PostgreSQL persistent named volume
- Containerized development workflow
- Production-friendly folder structure

---

# Database Connection

PostgreSQL container credentials:

```env
POSTGRES_DB=app_db
POSTGRES_USER=app_user
POSTGRES_PASSWORD=secure_password
```

Internal Docker database URL:

```env
postgresql://app_user:secure_password@postgres:5432/app_db
```

---

# Rebuild Containers

```bash
docker compose up --build
```

Force clean rebuild:

```bash
docker compose down
docker compose build --no-cache
docker compose up
```

---

# Future Improvements

- Nginx reverse proxy
- HTTPS support
- CI/CD pipeline
- VPS deployment
- Redis caching
- Authentication
- Strapi integration
- Production Docker optimizations
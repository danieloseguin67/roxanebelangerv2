# Docker Setup for Roxane Belanger v2

This directory contains Docker configuration files for the Roxane Belanger v2 Angular application.

## Files Created

- `Dockerfile` - Production-ready multi-stage build
- `Dockerfile.dev` - Development environment with hot reloading
- `docker-compose.yml` - Docker Compose configuration
- `nginx.conf` - Custom nginx configuration for SPA routing
- `.dockerignore` - Files to exclude from Docker build context

## Quick Start

### Production Build

```bash
# Build and run the production container
docker-compose up -d

# Access the application at http://localhost:8080
```

### Development Build

```bash
# Run development environment with hot reloading
docker-compose --profile dev up roxane-belanger-dev

# Access the development server at http://localhost:4200
```

### Manual Docker Commands

```bash
# Build production image
docker build -t roxane-belanger-v2 .

# Run production container
docker run -d -p 8080:80 --name roxane-belanger-app roxane-belanger-v2

# Build development image
docker build -f Dockerfile.dev -t roxane-belanger-v2-dev .

# Run development container
docker run -d -p 4200:4200 -v ${PWD}:/app -v /app/node_modules --name roxane-belanger-dev roxane-belanger-v2-dev
```

## Features

### Production Container

- Multi-stage build for optimized image size
- Nginx web server for serving static files
- Custom nginx configuration for Angular SPA routing
- Security headers and caching optimization
- Health check endpoint at `/health`
- Gzip compression enabled

### Development Container

- Hot reloading support
- Volume mounting for live code changes
- Development dependencies included
- Angular CLI dev server

## Configuration

### Environment Variables

- `NODE_ENV`: Set to 'production' or 'development'

### Ports

- Production: 8080 → 80 (nginx)
- Development: 4200 → 4200 (Angular dev server)

### Health Check

The production container includes a health check endpoint at `/health` that returns "healthy" when the application is running properly.

## Troubleshooting

### Common Issues

1. **Port conflicts**: Change the port mappings in `docker-compose.yml` if ports 8080 or 4200 are already in use.

2. **Build failures**: Ensure you have sufficient disk space and Docker has enough memory allocated.

3. **Permission issues on Windows**: Make sure Docker Desktop is running and you have proper permissions.

### Logs

```bash
# View container logs
docker-compose logs roxane-belanger-app

# Follow logs in real-time
docker-compose logs -f roxane-belanger-app
```

### Cleanup

```bash
# Stop and remove containers
docker-compose down

# Remove images
docker rmi roxane-belanger-v2 roxane-belanger-v2-dev

# Clean up all unused containers, networks, and images
docker system prune -a
```
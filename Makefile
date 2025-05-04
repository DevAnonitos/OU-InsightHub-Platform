# Variables
BACKEND_DIR=./backend
FRONTEND_DIR=./frontend

# Backend Project
install-backend:
	@echo "Installing backend dependencies..."
	cd $(BACKEND_DIR) && npm install
	@echo "Backend dependencies installed."

dev-backend:
	@echo "Starting backend development server..."
	cd $(BACKEND_DIR) && npm run dev:cluster
	@echo "Backend development server started."

# Frontend Project
install-frontend:
	@echo "Installing frontend dependencies..."
	cd $(FRONTEND_DIR) && npm install
	@echo "Frontend dependencies installed."

dev-frontend:
	@echo "Starting frontend development server..."
	cd $(FRONTEND_DIR) && npm run dev
	@echo "Frontend development server started."

# Full Project
install-all: install-backend install-frontend
	@echo "All dependencies installed."

dev-all: 
	make -j2 dev-backend dev-frontend
	@echo "All development servers started."

# Compose Commands
compose-dev-up:
	docker-compose -f compose-dev.yml up -d

compose-dev-down:
	docker-compose -f compose-dev.yml down


# Docker Commands
docker-build:
	docker-compose build

docker-up:
	docker-compose up 

docker-down:
	docker-compose down

docker-restart:
	docker-compose down && docker-compose up -d --build
# Base stage
FROM node:20-alpine AS base
WORKDIR /workspace

# Development stage
FROM base AS development
RUN npm install -g npm@latest
COPY package*.json ./
COPY shared/package*.json ./shared/
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/
RUN npm install
COPY . .
RUN npm run build --workspace=shared
WORKDIR /workspace/frontend
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production stage
FROM base AS production
COPY package*.json ./
COPY shared/ ./shared/
COPY frontend/ ./frontend/
RUN npm ci --workspaces --only=production
RUN npm run build --workspace=shared
RUN npm run build --workspace=frontend
WORKDIR /workspace/frontend
EXPOSE 3000
CMD ["npm", "start"]

# Base stage
FROM node:20-alpine AS base
WORKDIR /app

# Development stage
FROM base AS development
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "build:watch"]

# Production build stage
FROM base AS build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM base AS production
COPY --from=build /app/dist ./dist
COPY package*.json ./
CMD ["echo", "Shared package built"]

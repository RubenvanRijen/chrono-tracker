# Base stage - common dependencies
FROM node:20-alpine AS base
WORKDIR /app
RUN npm install -g pnpm

# Development stage
FROM base AS development
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production dependencies stage
FROM base AS prod-deps
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Production build stage
FROM base AS build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM base AS production
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY package*.json ./
EXPOSE 3000
CMD ["npm", "start"]

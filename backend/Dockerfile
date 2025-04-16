# Stage 1: Build Base Image
FROM node:22.14.0-alpine3.20 as base
LABEL author="devanonitos"

WORKDIR /app

COPY package*.json ./

RUN npm ci

# Stage 2: Build Image
FROM node:22.14.0-alpine3.20 as build
LABEL author="devanonitos"

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Stage 3: Build run Image
FROM node:22.14.0-alpine3.20
LABEL author="devanonitos"

WORKDIR /app

USER node

EXPOSE 4000

CMD ["node", "dist/cluster.js"]
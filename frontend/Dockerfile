# Stage 1: Build base
FROM node:22.14.0-alpine3.20 AS base
LABEL author="devanonitos"

WORKDIR /app

COPY package*.json ./

RUN npm ci  

# Stage 2: Build Image App
FROM node:22.14.0-alpine3.20 AS build
LABEL author="devanonitos"

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV="production"

RUN npm run build

# Stage 3: Build a run
FROM node:22.14.0-alpine3.20 AS run
LABEL author="devanonitos"

WORKDIR /app

USER node

COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static

COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/package.json ./package.json
COPY --from=build --chown=node:node /app/next.config.mjs ./next.config.mjs

ENV NODE_ENV="production"

ENV PORT=3000

EXPOSE 3000

CMD ["node", "server.js"]
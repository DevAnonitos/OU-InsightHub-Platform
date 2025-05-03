# Stage 1: Build Base Image
FROM node:22.14.0-alpine3.20 as base
LABEL author="devanonitos"

WORKDIR /app

COPY package*.json tsconfig*.json ./

RUN npm ci

# Stage 2: Build Image
FROM node:22.14.0-alpine3.20 as build
LABEL author="devanonitos"

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY . . 

ENV NODE_ENV="production"

RUN npm run build # <-- Builds TS, creates /app/dist

# Stage 3: Build run Image
FROM node:22.14.0-alpine3.20 AS run
LABEL author="devanonitos"

WORKDIR /app

USER node

COPY --from=build --chown=node:node /app/dist ./dist
COPY --from=build --chown=node:node /app/node_modules ./node_modules 
COPY --from=build --chown=node:node /app/package.json ./package.json
COPY --from=build --chown=node:node /app/tsconfig.json ./tsconfig.json 

ENV NODE_ENV="production"

ENV PORT=4000

EXPOSE 4000

CMD ["node", "-r", "tsconfig-paths/register", "/dist/server.js"]
FROM node:20-alpine AS base

WORKDIR /app

RUN apk add --no-cache libc6-compat curl

COPY package.json package-lock.json ./

RUN npm ci --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

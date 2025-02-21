FROM node:20-alpine AS base

WORKDIR /usr/src/app/frontend

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./

RUN npm ci --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

FROM node:15-alpine

# Create app directory
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

# Disable cache during npm install
RUN npm install --no-cache

# Install last version of prisma
RUN npm i --save-dev prisma@latest
RUN npm i @prisma/client@latest

COPY . . 

RUN npx prisma generate

EXPOSE 8082

FROM node:15-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . . 

# Add Prisma CLI to the container
RUN npm install prisma --save-dev

RUN npx prisma generate

EXPOSE 5000

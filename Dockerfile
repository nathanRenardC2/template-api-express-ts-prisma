FROM node:15-alpine

# Create app directory
WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

# Disable cache during npm install
RUN npm install --no-cache

COPY . . 

EXPOSE 5000

CMD ["./startup.sh"]

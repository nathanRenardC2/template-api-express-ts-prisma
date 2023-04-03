# Définir l'image de base
FROM node:14-alpine

# Créer le répertoire de travail
WORKDIR /app

# Copier les fichiers de l'application dans l'image Docker
COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src

# Installer les dépendances de l'application
RUN npm install

# Exposer le port de l'API
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "run", "start"]

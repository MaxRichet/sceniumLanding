# Étape 1 : Installer les dépendances
FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install

# Étape 2 : Copier les fichiers sources
COPY . .

EXPOSE 5001
CMD ["npm", "start"]

FROM node:lts-buster

# Empêche les erreurs d'interaction durant apt install
ENV DEBIAN_FRONTEND=noninteractive

# Mise à jour et installation des dépendances nécessaires
RUN apt-get update && \
  apt-get install -y --no-install-recommends \
    ffmpeg \
    imagemagick \
    webp \
    curl \
    ca-certificates && \
  rm -rf /var/lib/apt/lists/*

# Définir le dossier de travail
WORKDIR /usr/src/app

# Copier le fichier de dépendances
COPY package.json .

# Installer les dépendances Node.js
RUN npm install && npm install -g qrcode-terminal pm2

# Copier le reste de l'application
COPY . .

# Exposer le port
EXPOSE 5000

# Commande de démarrage
CMD ["npm", "start"]
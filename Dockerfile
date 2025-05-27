FROM node:20-alpine

# Ajout des outils système requis
RUN apk add --no-cache --update \
    ffmpeg \
    imagemagick \
    build-base \
    python3 \
    make \
    g++

WORKDIR /app

# Installation sécurisée des dépendances
COPY package*.json ./
RUN npm config set unsafe-perm true && \
    npm install --production --legacy-peer-deps

COPY . .

EXPOSE 8000

CMD ["npm", "start"]
FROM node:lts-buster

RUN apt-get update && \
    apt-get install -y ffmpeg imagemagick webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

RUN npm config set registry https://registry.npmmirror.com && \
    npm config set strict-ssl false

ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm cache clean --force && \
    npm install --unsafe-perm --legacy-peer-deps

COPY . .

EXPOSE 5000
CMD ["npm", "start"]
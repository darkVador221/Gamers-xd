FROM node:18-bullseye

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
  apt-get install -y --no-install-recommends \
    ffmpeg \
    imagemagick \
    webp \
    curl \
    ca-certificates && \
  rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package.json .

RUN npm install && npm install -g qrcode-terminal pm2

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
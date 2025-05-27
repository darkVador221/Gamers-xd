FROM node:18-alpine

# Install system dependencies
RUN apk add --no-cache ffmpeg imagemagick

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 8000

CMD ["npm", "start"]
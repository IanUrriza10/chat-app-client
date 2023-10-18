FROM node:18-alpine

ENV PORT 3000

WORKDIR /var/www/html/chat-app-client

COPY package.json /var/www/html/chat-app-client
COPY package-lock.json /var/www/html/chat-app-client

RUN yarn

COPY . /var/www/html/chat-app-client

EXPOSE 3000

FROM node:16-alpine

WORKDIR /usr/src/app/

COPY . .
RUN npm install -y -g npm@7.11.2
RUN npm i -y
RUN npm audit fix -y


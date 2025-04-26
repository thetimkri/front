FROM node:20.16.0

COPY package*.json ./

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm ci

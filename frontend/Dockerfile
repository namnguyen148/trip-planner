FROM node:20-alpine as builder

WORKDIR /app/frontend

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

RUN npm run build
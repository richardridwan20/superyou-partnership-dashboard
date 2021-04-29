FROM node:10.15-slim

WORKDIR /app
ENV NODE_ENV development

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install --production

COPY .env.example /app/.env.example
COPY . /app

CMD ["npm","start"]

EXPOSE 3000

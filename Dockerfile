FROM node:10.15-slim

WORKDIR /app
ENV NODE_ENV development

COPY package.json /app/package.json

RUN npm install --production

COPY .env.example /app/.env.example
COPY . /app

CMD ["npm","start"]

EXPOSE 3000

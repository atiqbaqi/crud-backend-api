FROM node:19-alpine

WORKDIR /crud-api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENTRYPOINT ["npm", "start"]
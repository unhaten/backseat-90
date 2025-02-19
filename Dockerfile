FROM node:20-alpine

WORKDIR /home/frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

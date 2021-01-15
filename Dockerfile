FROM node:12-alpine3.10

WORKDIR /app

COPY tsconfig.json ./
COPY package*.json ./
RUN npm install

COPY . .

RUN npm build

EXPOSE 8080

CMD ["npm", "run", "watch"]

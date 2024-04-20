FROM node

WORKDIR /app/lifestyle-microservice

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3003

CMD ["npm", "start"]
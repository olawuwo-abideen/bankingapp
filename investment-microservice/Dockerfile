FROM node

WORKDIR /app/investment-microservice

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "start"]
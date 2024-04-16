FROM node

WORKDIR /app/lifestyle-microservice

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3008

CMD ["npm", "start"]
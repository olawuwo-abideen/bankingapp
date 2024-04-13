FROM node

WORKDIR /app/support-microservice

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3005

CMD ["npm", "start"]
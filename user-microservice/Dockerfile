FROM node

WORKDIR /app/user-microservice

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3008

CMD ["npm", "start"]
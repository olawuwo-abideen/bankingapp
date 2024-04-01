## Banking Application Microservices

## Built With:

- Typescript
- Node
- Express
- dotenv
- mongoose
- nodemon
- Sentry
- amqplib
- axios
- jest

## Installation

- clone the repository

```sh
git clone git@github.com:olawuwo-abideen/bankingapp.git
```

- navigate to the folder

```sh
cd movie.git
```

## Run the app in development mode

Open a terminal window session, or the equivalent on your machine, and enter the following command to install all the
Node modules needed to run the app:

```sh
npm install
```

After doing an `npm install` enter the following `npm start` command:

```sh

npm start

```

This will start the app and set it up to listen for incoming connections on port 3000. Open up your browser of choice
and go to the url

```sh

http://localhost:3000

```

to start using the app.

## API Endpoints

## User Service

- `POST /register` - User create an account
- `POST /login` - User login
- `POST /logout` - User logout
- `UPDATE /reset-password` - User reset password
- `GET /profile` - User view profile
- `UPDATE /updateprofile` - User update profile 
- `DELETE /deleteprofile` - User Delete profile


## Account Service

- `GET /accounts/` - View customer accountS
- `GET /account/:id` - View account by id
- `GET /account/:id/transaction` - View account transaction by id
- `GET /account/:id/balance` - View customer account balance by id
- `GET /account/transfer` - Get customer transfer

## Transaction Service

- `POST /delivery/signup` - Create a delivery account
- `POST /delivery/login` - Delivery login
- `GET /delivery/address` - Get delivery address
- `GET delivery/profile` - Get delivery profile


## Payment Service

- `POST /movie/create` - Create a movie
- `GET /genre/:type` - Get movie by genre type
- `GET /:id` - Get movie by id
- `GET /:id` - Get movie by id


## Notification Service

- `POST /notification/sendEmail` - Send email
- `POST/notification/sendSMS` - Send sms




## Support Service

- `POST /payment/makePurchase` - Make purchase
- `GET /payment/getPurchaseById/:id` - Get purchase by id

## Investment Service

- `POST /cart` - Add movie to cart
- `POST /wishlist` - Add movie to wishlist
- `GET /cart/:id` - Delete movie from cart
- `GET /cart` - Get movie in cart
- `GET /wishlist` - Get all wishlist
- `DELETE /wishlist/:id` - Delete movie in wishlist
- `POST /order` - Create order
- `GET /order/:id` - Get order by id
- `GET /orders` - Get all orders

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/olawuwo-abideen/bankingapp/issues).

## Authors

👤 **Olawuwo Abideen**

- GitHub: [@Olawuwo Abideen](https://github.com/olawuwo-abideen)
- Twitter: [@Olawuwo Abideen](https://twitter.com/olawuwo_abideen)
- LinkedIn: [@Olawuwo Abideen](https://www.linkedin.com/in/olawuwo-abideen/)



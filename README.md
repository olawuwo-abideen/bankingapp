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
- cors
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

http://localhost:

```

to start using the app.

## API Endpoints

## User Service

- `POST /register` - User create an account
- `POST /login` - User login
- `POST /logout` - User logout
- `PATCH /reset-password` - User reset password
- `GET /profile` - User view profile
- `UPDATE /updateprofile` - User update profile 
- `DELETE /deleteprofile` - User Delete profile


## Account Service

- `GET /accounts/` - View users accounts
- `GET /accounts/bill` - View user account bills
- `GET /account/:id` - View account by id
- `GET /account/:id/transaction` - View account transaction by id
- `GET /account/balance` - View user account balance by 
- `POST /account/transfer` - Get user transfer
- `GET /account/statement` - Get user account statement
- `POST /account/beneficiary` - Create account beneficiary
- `GET /account/beneficiary` - Get account beneficiary
- `POST /account/officer` - Create user account officer details
- `GET /account/officer` - Get user account officer details

## Transaction Service

- `GET /transactions` - View user transaction
- `GET /transaction/:id` - View user transaction by id
- `GET /transaction/:id/cancel` - View user cancel transaction


## Payment Service

- `POST /payments/sendmoney` - User send money 
- `GET /payments` - View user payment
- `GET /payment/:id/cancel` - View user cancel payment
- `GET /payment/:id` - View user payment by id


## Notification Service

- `POST /notification/sendEmail` - Send email notification
- `POST/notification/sendSMS` - Send sms notification


## Support Service

- `GET /support/ticket` - View user register tickets
- `GET /support/chat` - View user chat
- `GET /support/settings` - View settings
- `GET /support/branches` - View branches
- `GET /support/contact` - View contact
- `GET /support/about` - View Bank Details


## Investment Service

- `POST /loan` - View user loan history
- `POST /portfolio` - View user portfolio
- `POST /portfolio/transaction` - View user investment
- `GET /portfolio/assets` - View user assets

## Lifestyle Service

- `GET /lifestyle/bookflight` - View flight booking
- `GET /lifestyle/movieticket` - View movie ticket booking
- `GET /lifestyle/eventtickets` - View event ticket booking
- `GET /lifestyle/resturant` - View resturant booking

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/olawuwo-abideen/bankingapp/issues).

## Authors

👤 **Olawuwo Abideen**

- GitHub: [@Olawuwo Abideen](https://github.com/olawuwo-abideen)
- Twitter: [@Olawuwo Abideen](https://twitter.com/olawuwo_abideen)
- LinkedIn: [@Olawuwo Abideen](https://www.linkedin.com/in/olawuwo-abideen/)



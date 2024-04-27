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
- `POST /payments/airtime` - User buy airtime
- `POST /payments/datapurchase` - User buy data
- `POST /payments/cabletv` - User buy for cabletv
- `POST /payments/utility` - User pay for utility bill

## Notification Service

- `POST /notification/sendEmail` - Send email notification
- `GET /notification/sendEmail` - View email notification
- `POST/notification/sendSMS` - Send sms notification
- `GET/notification/sendSMS` - View sms notification

## Support Service

- `POST /support/ticket` - User create tickets
- `GET /support/ticket` - View user register tickets
- `POST /support/chat` - User start chat
- `GET /support/chat` - View user chat
- `GET /support/settings` - View settings
- `POST /support/branches` - Create branches
- `GET /support/branches` - View branches
- `POST /support/contact` - Create contact
- `GET /support/contact` - View contact
- `POST /support/about` - Create Bank Details
- `GET /support/about` - View Bank Details

## Investment Service

- `POST /loan` - User  request for loan 
- `GET /loan` - View user loan history
- `GET /portfolio` - View user portfolio
- `GET /portfolio/transaction` - View user investment
- `GET /portfolio/assets` - View user assets

## Lifestyle Service
- `POST /lifestyle/bookflight` - Book flight Ticket
- `GET /lifestyle/bookflight` - View flight booking
- `POST /lifestyle/movieticket` - Book movie ticket 
- `GET /lifestyle/movieticket` - View movie ticket booking
- `GET /lifestyle/eventtickets` - View event ticket booking
- `POST /lifestyle/eventtickets` - Book event ticket 
- `POST /lifestyle/resturant` - Book resturant 
- `GET /lifestyle/resturant` - View resturant booking
- `POST /lifestyle/food` - Order for Food
- `GET /lifestyle/food` - View food orders 

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/olawuwo-abideen/bankingapp/issues).

## Authors

👤 **Olawuwo Abideen**

- GitHub: [@Olawuwo Abideen](https://github.com/olawuwo-abideen)
- Twitter: [@Olawuwo Abideen](https://twitter.com/olawuwo_abideen)
- LinkedIn: [@Olawuwo Abideen](https://www.linkedin.com/in/olawuwo-abideen/)
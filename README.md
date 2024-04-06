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

- `GET /accounts/` - View user accountS
- `GET /account/:id` - View account by id
- `GET /account/:id/transaction` - View account transaction by id
- `GET /account/:id/balance` - View user account balance by id
- `GET /account/transfer` - Get user transfer

## Transaction Service

- `GET /transactions` - View user transaction
- `GET /transaction/:id` - View user transaction by id
- `GET /transaction/:id/cancel` - View user cancel transaction


## Payment Service

- `GET /payments` - View user payment
- `GET /payment/:id/cancel` - View user cancel payment
- `GET /payment/:id` - View user payment by id



## Notification Service

- `POST /notification/sendEmail` - Send email
- `POST/notification/sendSMS` - Send sms


## Support Service

- `GET /support/ticket` - View user register tickets
- `GET /support/chat` - View user chat
- `GET /support/settings` - View settings
- `GET /support/branches` - View branches
- `GET /support/contact` - View contact


## Investment Service

- `POST /portfolio` - View user portfolio
- `POST /portfolio/transaction` - View user investment
- `GET /portfolio/assets` - View user assets

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/olawuwo-abideen/bankingapp/issues).

## Authors

👤 **Olawuwo Abideen**

- GitHub: [@Olawuwo Abideen](https://github.com/olawuwo-abideen)
- Twitter: [@Olawuwo Abideen](https://twitter.com/olawuwo_abideen)
- LinkedIn: [@Olawuwo Abideen](https://www.linkedin.com/in/olawuwo-abideen/)



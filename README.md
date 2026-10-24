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

All routes are served through the API gateway under `/api/v1`. Every service also exposes `GET /health`, `GET /ready` and `GET /metrics`.

## Identity Service

- `POST /auth/register` - Create a user account
- `POST /auth/verify-email` - Verify email with a one-time code
- `POST /auth/verify-phone` - Verify phone number with an SMS code
- `POST /auth/login` - Log in with email and password
- `POST /auth/mfa/challenge` - Complete login with TOTP or passkey
- `POST /auth/refresh` - Refresh the access token
- `POST /auth/logout` - Log out of the current session
- `POST /auth/logout-all` - Log out of all sessions
- `POST /auth/password/forgot` - Request a password reset code
- `POST /auth/password/reset` - Reset password with the code
- `PATCH /auth/password` - Change password (SCA required)
- `GET /.well-known/jwks.json` - Public keys for verifying JWTs
- `POST /auth/mfa/totp/setup` - Start authenticator app setup
- `POST /auth/mfa/totp/verify` - Confirm and enable authenticator app
- `DELETE /auth/mfa/totp` - Disable authenticator app (SCA required)
- `GET /auth/mfa/status` - View enabled MFA methods
- `POST /auth/mfa/recovery-codes` - Generate MFA recovery codes
- `POST /auth/passkeys/register/options` - Get passkey registration options
- `POST /auth/passkeys/register` - Register a passkey
- `POST /auth/passkeys/login/options` - Get passkey login options
- `POST /auth/passkeys/login` - Log in with a passkey
- `POST /auth/sca/challenge` - Start step-up authentication for a sensitive action
- `POST /auth/sca/verify` - Verify step-up and receive an SCA token
- `POST /users/me/pin` - Set transaction PIN
- `PUT /users/me/pin` - Change transaction PIN (SCA required)
- `GET /users/me` - View profile
- `PATCH /users/me` - Update profile
- `PATCH /users/me/email` - Change email (SCA required)
- `PATCH /users/me/phone` - Change phone number (SCA required)
- `PUT /users/me/address` - Set UK address
- `GET /sessions` - View active sessions
- `DELETE /sessions/{id}` - Revoke a session
- `GET /devices` - View trusted devices
- `DELETE /devices/{id}` - Remove a trusted device
- `POST /devices/{id}/push-token` - Register a device for push notifications
- `GET /admin/users` - Admin: search users
- `GET /admin/users/{id}` - Admin: view a user
- `PATCH /admin/users/{id}/status` - Admin: lock or unlock a user
- `POST /admin/users/{id}/mfa/reset` - Admin: reset a user's MFA

## Compliance Service

- `POST /kyc/applications` - Start identity verification (KYC)
- `POST /kyc/applications/{id}/documents` - Upload passport or driving licence
- `POST /kyc/applications/{id}/liveness` - Submit selfie liveness check
- `POST /kyc/applications/{id}/proof-of-address` - Upload proof of address
- `POST /kyc/applications/{id}/submit` - Submit KYC application for checks
- `GET /kyc/status` - View KYC status
- `POST /fraud/reports` - Report a scam or suspicious activity
- `GET /fraud/reports/{id}` - View a fraud report
- `POST /fraud/app-claims` - Claim APP fraud reimbursement
- `GET /fraud/app-claims/{id}` - View an APP fraud claim
- `POST /webhooks/kyc-provider` - Receive results from the ID verification provider
- `GET /admin/kyc/reviews` - Analyst: view KYC applications needing review
- `PATCH /admin/kyc/{id}/decision` - Analyst: approve or reject a KYC application
- `GET /admin/alerts` - Analyst: view AML and fraud alerts
- `PATCH /admin/alerts/{id}` - Analyst: resolve or escalate an alert
- `GET /admin/sanctions/matches` - Analyst: view possible sanctions matches
- `PATCH /admin/sanctions/matches/{id}` - Analyst: confirm or clear a sanctions match
- `POST /admin/sars` - Analyst: file a Suspicious Activity Report
- `GET /admin/app-claims` - Analyst: view APP fraud claims queue
- `PATCH /admin/app-claims/{id}/decision` - Analyst: reimburse or reject an APP claim

## Account Service

- `POST /accounts` - Open a new account
- `GET /accounts` - View user accounts
- `GET /accounts/{id}` - View account by id
- `PATCH /accounts/{id}` - Rename an account
- `GET /accounts/{id}/details` - View sort code, account number and IBAN (SCA required)
- `PATCH /accounts/{id}/freeze` - Freeze an account
- `PATCH /accounts/{id}/unfreeze` - Unfreeze an account (SCA required)
- `POST /accounts/{id}/close` - Close an account
- `GET /accounts/{id}/statements` - View account statements
- `GET /accounts/{id}/statements/{statementId}` - Download a statement (PDF or CSV)
- `GET /accounts/limits` - View daily payment limits
- `PATCH /accounts/limits` - Change daily payment limits (SCA required)
- `GET /payees` - View saved payees
- `POST /payees/confirmation-of-payee` - Check a payee name with Confirmation of Payee
- `POST /payees` - Save a new payee (SCA required)
- `PATCH /payees/{id}` - Update a payee
- `DELETE /payees/{id}` - Delete a payee
- `GET /sort-codes/{sortCode}` - Validate a sort code and get the bank name
- `POST /cop/inbound` - Answer Confirmation of Payee requests from other banks
- `GET /internal/accounts/{id}` - Internal: account status for payment processing
- `GET /admin/accounts` - Admin: search accounts
- `PATCH /admin/accounts/{id}/status` - Admin: restrict, freeze or close an account

## Ledger Service

- `GET /accounts/{id}/balance` - View account balance
- `GET /accounts/{id}/transactions` - View account transactions
- `GET /transactions/{id}` - View transaction by id
- `GET /transactions/{id}/receipt` - Download a transaction receipt
- `GET /accounts/{id}/pending` - View pending (reserved) transactions
- `POST /internal/holds` - Internal: reserve funds for a payment
- `POST /internal/holds/{id}/release` - Internal: release reserved funds
- `GET /admin/journal` - Admin: view journal entries
- `POST /admin/adjustments` - Admin: create a manual adjustment
- `POST /admin/adjustments/{id}/approve` - Admin: approve an adjustment (second approver)
- `POST /admin/reconciliation/runs` - Admin: run a reconciliation
- `GET /admin/reconciliation/runs/{id}` - Admin: view reconciliation results
- `GET /admin/trial-balance` - Admin: view trial balance

## Payment Service

- `POST /payments/transfers` - Send money by Faster Payments (SCA required)
- `POST /payments/internal-transfers` - Move money between own accounts
- `GET /payments/transfers` - View user transfers
- `GET /payments/transfers/{id}` - View transfer status by id
- `POST /payments/transfers/{id}/cancel` - Cancel a scheduled transfer
- `POST /payments/standing-orders` - Create a standing order (SCA required)
- `GET /payments/standing-orders` - View standing orders
- `PATCH /payments/standing-orders/{id}` - Update a standing order (SCA required)
- `DELETE /payments/standing-orders/{id}` - Cancel a standing order
- `GET /payments/direct-debits` - View Direct Debits
- `GET /payments/direct-debits/{id}` - View a Direct Debit and its collections
- `DELETE /payments/direct-debits/{id}` - Cancel a Direct Debit
- `POST /payments/direct-debits/{id}/indemnity-claims` - Claim under the Direct Debit Guarantee
- `GET /payments/billers` - Search billers
- `POST /payments/bills` - Pay a bill (SCA required)
- `POST /open-banking/payment-consents` - Third-party app requests a payment
- `POST /open-banking/payment-consents/{id}/authorise` - Approve a third-party payment (SCA required)
- `GET /open-banking/connected-apps` - View connected Open Banking apps
- `DELETE /open-banking/connected-apps/{id}` - Revoke a connected app
- `POST /webhooks/faster-payments` - Receive Faster Payments credits and status updates
- `POST /webhooks/bacs` - Receive Direct Debit collections and returns
- `GET /admin/payments` - Admin: search payments
- `POST /admin/payments/{id}/retry` - Admin: retry a failed payment
- `POST /admin/payments/{id}/return` - Admin: return an inbound payment

## Notification Service

- `GET /notifications` - View in-app notifications
- `GET /notifications/unread-count` - View unread notification count
- `PATCH /notifications/{id}/read` - Mark a notification as read
- `POST /notifications/read-all` - Mark all notifications as read
- `DELETE /notifications/{id}` - Delete a notification
- `GET /notifications/preferences` - View notification preferences
- `PUT /notifications/preferences` - Update notification preferences
- `POST /webhooks/email-provider` - Receive email delivery and bounce events
- `POST /webhooks/sms-provider` - Receive SMS delivery receipts
- `GET /admin/templates` - Admin: view message templates
- `PUT /admin/templates/{id}` - Admin: update a message template
- `GET /admin/deliveries` - Admin: view message delivery log

## Privacy Service

- `GET /privacy/notice` - View the privacy notice
- `POST /privacy/notice/acknowledge` - Acknowledge the privacy notice
- `GET /privacy/consents` - View consents
- `PUT /privacy/consents` - Grant or withdraw consent
- `GET /privacy/consents/history` - View consent history
- `POST /privacy/requests/export` - Request a copy of my data (SCA required)
- `POST /privacy/requests/erasure` - Request erasure of my data (SCA required)
- `POST /privacy/requests/restriction` - Request restriction of processing
- `POST /privacy/requests/objection` - Object to processing
- `GET /privacy/requests` - View my privacy requests
- `GET /privacy/requests/{id}` - View a privacy request
- `GET /privacy/requests/{id}/download` - Download my exported data (SCA required)
- `GET /admin/privacy/requests` - DPO: view privacy requests queue
- `PATCH /admin/privacy/requests/{id}` - DPO: verify, extend or refuse a request
- `GET /admin/retention-policies` - DPO: view retention policies
- `PUT /admin/retention-policies/{category}` - DPO: update a retention policy
- `GET /admin/access-logs` - DPO: view personal data access logs
- `POST /admin/breaches` - DPO: log a data breach
- `GET /admin/breaches` - DPO: view the breach register

## Card Service

- `POST /cards` - Order a virtual or physical card (SCA required)
- `GET /cards` - View user cards
- `GET /cards/{id}` - View card by id
- `GET /cards/{id}/sensitive-details` - View full card number and CVV (SCA required)
- `POST /cards/{id}/activate` - Activate a physical card
- `PATCH /cards/{id}/freeze` - Freeze a card
- `PATCH /cards/{id}/unfreeze` - Unfreeze a card
- `POST /cards/{id}/report-lost` - Report a card lost or stolen and order a replacement
- `PUT /cards/{id}/pin` - Change card PIN (SCA required)
- `PATCH /cards/{id}/controls` - Update card controls (online, contactless, ATM, abroad, gambling)
- `PATCH /cards/{id}/limits` - Update card spending limits (SCA required)
- `POST /cards/{id}/wallet-tokens` - Add card to Apple Pay or Google Pay (SCA required)
- `DELETE /cards/{id}` - Cancel a card
- `POST /webhooks/card-processor` - Receive card authorisations, clearing and refunds

## Savings & Lending Service

- `GET /savings/products` - View savings products and rates
- `POST /savings/pots` - Create a savings pot
- `GET /savings/pots` - View savings pots
- `GET /savings/pots/{id}` - View savings pot by id
- `PATCH /savings/pots/{id}` - Update a savings pot
- `POST /savings/pots/{id}/deposits` - Add money to a savings pot
- `POST /savings/pots/{id}/withdrawals` - Withdraw money from a savings pot
- `DELETE /savings/pots/{id}` - Close a savings pot
- `PATCH /savings/round-ups` - Turn round-ups on or off
- `GET /loans/products` - View loan products
- `POST /loans/quotes` - Get a personalised loan quote (soft credit search)
- `POST /loans/applications` - Apply for a loan (SCA required)
- `GET /loans/applications/{id}` - View loan application status
- `POST /loans/applications/{id}/accept` - Accept a loan agreement (SCA required)
- `GET /loans` - View user loans
- `GET /loans/{id}` - View loan by id
- `GET /loans/{id}/schedule` - View loan repayment schedule
- `POST /loans/{id}/overpayments` - Make a loan overpayment
- `POST /loans/{id}/settlement-quote` - Get an early settlement quote
- `GET /overdraft` - View overdraft limit and usage
- `POST /overdraft/applications` - Apply for or change an overdraft
- `GET /admin/loans/applications` - Admin: view loan applications
- `PATCH /admin/loans/applications/{id}/decision` - Admin: approve or decline a loan
- `GET /admin/loans/arrears` - Admin: view customers in arrears

## Support Service

- `POST /support/tickets` - Create a support ticket
- `GET /support/tickets` - View user tickets
- `GET /support/tickets/{id}` - View ticket by id
- `POST /support/tickets/{id}/messages` - Reply to a ticket
- `POST /support/tickets/{id}/attachments` - Attach a file to a ticket
- `POST /support/tickets/{id}/close` - Close a ticket
- `POST /support/chats` - Start a live chat
- `GET /support/chats/{id}/messages` - View chat messages
- `POST /support/disputes` - Dispute a transaction
- `GET /support/disputes` - View user disputes
- `GET /support/disputes/{id}` - View dispute by id
- `POST /support/disputes/{id}/evidence` - Add evidence to a dispute
- `POST /support/complaints` - Make a formal complaint
- `GET /support/complaints/{id}` - View complaint by id
- `GET /support/faqs` - View help articles
- `GET /support/contact` - View contact details
- `GET /support/service-status` - View service status
- `GET /admin/tickets` - Admin: view ticket queues
- `PATCH /admin/tickets/{id}` - Admin: assign or update a ticket
- `PATCH /admin/disputes/{id}/decision` - Admin: uphold or reject a dispute
- `GET /admin/complaints` - Admin: view complaints near the 8-week deadline
- `POST /admin/complaints/{id}/final-response` - Admin: send a final response to a complaint

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/olawuwo-abideen/bankingapp/issues).

## Authors

👤 **Olawuwo Abideen**

- GitHub: [@Olawuwo Abideen](https://github.com/olawuwo-abideen)
- Twitter: [@Olawuwo Abideen](https://twitter.com/olawuwo_abideen)
- LinkedIn: [@Olawuwo Abideen](https://www.linkedin.com/in/olawuwo-abideen/)
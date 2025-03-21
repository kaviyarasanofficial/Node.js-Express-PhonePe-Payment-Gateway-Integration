# Node.js Express PhonePe Payment Gateway Integration

Welcome to the Node.js Express PhonePe Payment Gateway Integration repository! This project demonstrates the seamless integration of the PhonePe payment gateway into a Node.js and Express application. Follow the comprehensive guide below to set up the payment gateway for User Acceptance Testing (UAT).

## Features

/pay API: Initiate payments and redirect users to the PhonePe payment flow.
/payment/validate/:merchantTransactionId API: Validate payment status using merchantTransactionId.

## UAT Testing Credentials

`MERCHANT_ID` = "PGTESTSBUAT";
`SALT_INDEX` = 1;
`SALT_KEY` = "7ab50f0c-a5d9-4bd1-b757-f7fe2fce8a48";

For testing purposes in the UAT environment, use the following credentials:

Card number: `4242424242424242`
Expiry month: `12`
Expiry year: `44`
CVV: `936`
OTP: `123456`

## How to Run

Clone the project:
`git clone https://github.com/kaviyarasanofficial/Node.js-Express-PhonePe-Payment-Gateway-Integration.git`

Install dependencies:
`npm install`

Run the app:
`npm run start`

Pay with amount
`http://localhost:3005/pay?amount=100`

Check merchant Id
`http://localhost:3005/payment/validate/jmrpd90m8fkbh8e`

Refund Id
`http://localhost:3005/refund?amount=100&merchantTransactionId=ftffftffufg7yiyi&originalTransactionId=jmrpd90m8fkbh8e`


## API Endpoints
**/pay API**: Initiate payments.
Method: GET
Endpoint: /pay
Parameters: amount (query parameter)

**/payment/validate** API: Validate payment status.
Method: GET
Endpoint: /payment/validate/:merchantTransactionId

**/refund** API: Refund Status Check.
Method: GET 
Endpoint: /refund?amount=value&merchantTransactionId=value&originalTransactionId=value


## Contact Information
For any inquiries, collaborations, or development work, feel free to reach out:

LinkedIn: `https://www.linkedin.com/in/kavi-m/`
Email: `klscse6@gmail.com`
GitHub: `https://github.com/kaviyarasanofficial/`

Happy coding!
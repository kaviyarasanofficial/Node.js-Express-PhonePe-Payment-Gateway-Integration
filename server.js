const express = require("express");
const { phonePe,phonePePayAmount,phonePeCheckMerchantId,phonePePayRefundCheck } = require('@codemoon/phonepe-lib');
const app = express();
const port = 3005;

const MERCHANT_ID = "PGTESTSBUAT";
const SALT_INDEX = 1;
const SALT_KEY = "7ab50f0c-a5d9-4bd1-b757-f7fe2fce8a48";
const APP_BE_URL = "http://localhost:3005/"; 
const mobile = 6383804203;

app.get("/", (req, res) => {
  res.send(phonePe());
});

app.get("/pay", async function (req, res) {
    try {
    const amount = +req.query.amount;
    let userId = "MUID123";
      
    const result = await phonePePayAmount(false,amount,userId,APP_BE_URL,mobile,MERCHANT_ID,SALT_INDEX,SALT_KEY);
      
    res.json(result);
      
    } catch (error) {
      res.status(500).json({ success: false, error: error.message || "Internal Server Error" });
    }
});

app.get("/payment/validate/:merchantTransactionId", async function (req, res) {
    try {
      const { merchantTransactionId } = req.params;

      const result = await phonePeCheckMerchantId(false,merchantTransactionId,MERCHANT_ID,SALT_INDEX,SALT_KEY)

      res.json(result);
      
    } catch (error) {
      res.status(500).json({ success: false, error: error.message || "Internal Server Error" });
    }
});

app.get("/refund", async function (req, res) {
  try {
    const { amount, merchantTransactionId,originalTransactionId } = req.query;
    let merchantUserId = "PGTESTSBUAT";
    
    const result = await phonePePayRefundCheck(false,amount,MERCHANT_ID,merchantUserId,merchantTransactionId,originalTransactionId,APP_BE_URL,SALT_KEY,SALT_INDEX,)

    res.json(result);    
  } catch (error) {
    res.status(500).json({ success: false, error: error.message || "Internal Server Error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

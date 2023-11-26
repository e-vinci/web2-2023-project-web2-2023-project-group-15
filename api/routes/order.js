/* eslint-disable max-len */
/* eslint-disable spaced-comment */
const express = require('express');
//const path = require('node:path');

// const { parse } = require('../utils/json');

const {
  createOrder,
} = require('../models/orders');

// const jsonDbPath = path.join(__dirname, '/../data/orders.json');

const router = express.Router();

router.post('/addOrder', (req, res) => {
  console.log('ROUTER ORDER TEST1');
  const userName = req?.body?.userName?.length !== 0 ? req.body.userName : undefined;
  // const totalPrice = req?.body?.price > 0 ? req.body.price : undefined;
  // const date = req?.body?.date?.length !== 0 ? req.body.date : undefined;
  const payementMethod = req?.body?.payementMethod?.length !== 0 ? req.body.payementMethod : undefined;

  if (!userName || !payementMethod) {
    return res.sendStatus(400).json({ error: 'Paramètres invalides' }); // error code '400 Bad request'
  }
  const newOrder = createOrder(userName, payementMethod);
  console.log('ROUTER ORDER TEST2');
  return res.json(newOrder);
});

module.exports = router;

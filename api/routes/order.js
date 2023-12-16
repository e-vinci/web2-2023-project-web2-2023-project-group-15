/* eslint-disable max-len */
/* eslint-disable spaced-comment */
const express = require('express');
//const path = require('node:path');

// const { parse } = require('../utils/json');

const {
  createOrder,
  getAllOrders,
  getOrdersOfUser,
} = require('../models/orders');

// const jsonDbPath = path.join(__dirname, '/../data/orders.json');

const router = express.Router();

router.get('/', (req, res) => {
  const orders = getAllOrders();
  return res.json(orders);
});

router.post('/addOrder', (req, res) => {
  console.log('ROUTER ORDER TEST1');
  const buyerId = req?.body?.id?.length !== 0 ? req.body.id : undefined;
  console.log(buyerId);
  const firstName = req?.body?.firstName?.length !== 0 ? req.body.firstName : undefined;
  const lastName = req?.body?.lastName?.length !== 0 ? req.body.lastName : undefined;
  // const totalPrice = req?.body?.price > 0 ? req.body.price : undefined;
  // const date = req?.body?.date?.length !== 0 ? req.body.date : undefined;
  const payementMethod = req?.body?.payementMethod?.length !== 0 ? req.body.payementMethod : undefined;

  if (!buyerId || !firstName || !lastName || !payementMethod) {
    return res.sendStatus(400).json({ error: 'Paramètres invalides' }); // error code '400 Bad request'
  }
  const newOrder = createOrder(buyerId, firstName, lastName, payementMethod);
  console.log('ROUTER ORDER TEST2');
  return res.json(newOrder);
});

router.get('/getOrdersOfUser/:id', (req, res) => {
  const foundOrders = getOrdersOfUser(req.params.id);

  if (!foundOrders) return res.sendStatus(404);

  return res.json(foundOrders);
});

module.exports = router;

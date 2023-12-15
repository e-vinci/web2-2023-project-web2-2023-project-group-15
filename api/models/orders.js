/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-import-module-exports

const path = require('node:path');
const escape = require('escape-html');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/orders.json');

const defaultOrders = [
  {
    id: 1,
    firstName: 'Maureen',
    lastName: 'Renaux',
    totalPrice: 1500,
    date: '21/11/2023',
    payementMethod: 'paypal',

  },
  {
    id: 2,
    firstName: 'Tom',
    lastName: 'Simonis',
    totalPrice: 3500,
    date: '11/06/2023',
    payementMethod: 'card',

  },
  {
    id: 3,
    firstName: 'Pepijn',
    lastName: 'Smeding',
    buyerId: 3,
    totalPrice: 500,
    date: '2/08/2022',
    payementMethod: 'paypal',

  },
  {
    id: 4,
    firstName: 'Pepijn',
    lastName: 'Smeding',
    buyerId: 3,
    totalPrice: 1500,
    date: '12/08/2022',
    payementMethod: 'card',

  },
];

function createOrder(firstName, lastName, payementMethod) {
  const orders = parse(jsonDbPath, defaultOrders);

  // const parsedPrice = parseFloat(totalPrice);
  console.log('MODEL ORDER TEST1');

  const newOrder = {
    id: orders.length + 1,
    firstName: escape(firstName),
    lastName: escape(lastName),
    // totalPrice: parsedPrice,
    // date,
    payementMethod: escape(payementMethod),
  };

  orders.push(newOrder);

  serialize(jsonDbPath, orders);
  console.log('MODEL ORDER TEST2');
  return newOrder;
}

function getAllOrders() {
  const orders = parse(jsonDbPath, defaultOrders);
  return orders;
}

function getOrdersOfUser(id) {
  const idNumber = parseInt(id, 10);
  const orders = parse(jsonDbPath, defaultOrders);
  const ordersFound = [];
  orders.forEach((order) => {
    // eslint-disable-next-line no-cond-assign, no-param-reassign
    if (order.buyerId = id) {
      ordersFound.push(order);
    }
  });

  return ordersFound;
}

module.exports = {
  createOrder,
  getAllOrders,
  getOrdersOfUser,
};

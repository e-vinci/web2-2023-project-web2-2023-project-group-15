/* eslint-disable spaced-comment */
const express = require('express');
const {
  readAllProducts,
  readOneProduct,
} = require('../models/products');
//const { authorize, isAdmin } = require('../utils/auths');

const router = express.Router();

/* Read all the products from the menu
   GET /product?order=name : ascending order by name
   GET /product?order=-name : descending order by name
*/
router.get('/', (req, res) => {
  const allProductsPotentiallyOrdered = readAllProducts(req?.query?.order, req?.query?.category);

  return res.json(allProductsPotentiallyOrdered);
});

// Read the product identified by an id in the menu
router.get('/:id', (req, res) => {
  const foundProduct = readOneProduct(req.params.id);

  if (!foundProduct) return res.sendStatus(404);

  return res.json(foundProduct);
});

module.exports = router;

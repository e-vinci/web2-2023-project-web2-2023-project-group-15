/* eslint-disable spaced-comment */
const express = require('express');
const {
  searchProductsByBrand,
  searchProductsByName,
  renderAllProductsByCategory,
  readOneProduct,
  sortProductsByName,
  defaultProducts,
} = require('../models/products');
//const { authorize, isAdmin } = require('../utils/auths');

const router = express.Router();

/* Read all the products from the menu
   GET /product?order=name : ascending order by name
   GET /product?order=-name : descending order by name
   GET /product?category=man : select man products
   GET /product?category=woman : select woman products
   GET /product?name=rolex : select rolex products

*/
router.get('/', (req, res) => {
  let allProductsPotentiallyOrdered;
  if (req?.query?.order) allProductsPotentiallyOrdered = sortProductsByName(req.query.order);
  // eslint-disable-next-line max-len
  else if (req?.query?.category) allProductsPotentiallyOrdered = renderAllProductsByCategory(req.query.category);
  else if (req?.query?.name) allProductsPotentiallyOrdered = searchProductsByName(req.query.name);
  // eslint-disable-next-line max-len
  else if (req?.query?.brand) allProductsPotentiallyOrdered = searchProductsByBrand(req.query.brand);
  else allProductsPotentiallyOrdered = defaultProducts;
  return res.json(allProductsPotentiallyOrdered);
});

// Read the product identified by an id in the menu
router.get('/:id', (req, res) => {
  const foundProduct = readOneProduct(req.params.id);

  if (!foundProduct) return res.sendStatus(404);

  return res.json(foundProduct);
});

module.exports = router;

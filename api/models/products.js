/* eslint-disable import/first */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
const path = require('node:path');
const escape = require('escape-html');

const categories = require('./categories.js');

const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/products.json');

const defaultProducts = [
  {
    id: 1,
    name: 'Rolex Submarine',
    price: 60000.0,
    description: 'Rolex submarine test test test ',
    categorie: categories.getCategorieWatches(),
    imgList: [],
    model3D: 'Url',
  },
];

function readAllProducts(orderBy) {
  const orderByTitle = orderBy?.includes('name') ? orderBy : undefined;

  let orderedProducts;
  const products = parse(jsonDbPath, defaultProducts);
  if (orderByTitle) orderedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
  if (orderByTitle === '-name') orderedProducts = orderedProducts.reverse();

  const allProdcutsPotentiallyOrderd = orderedProducts ?? products;
  return allProdcutsPotentiallyOrderd;
}

function readOneProduct(id) {
  const idNumber = parseInt(id, 10);
  const products = parse(jsonDbPath, defaultProducts);
  const indexOfProdcutsFound = products.findIndex((product) => product.id === idNumber);
  if (indexOfProdcutsFound < 0) return undefined;

  return products[indexOfProdcutsFound];
}

function createOneProduct(name, price, description, categorieParam, model3D) {
  const products = parse(jsonDbPath, defaultProducts);

  const categoriesBd = categories.readAllCategories();
  let categorieproduct;
  categoriesBd.forEach((categorie) => {
    if (categorie.name === categorieParam) {
      categorieproduct = categorie.name;
    }
  });

  const createdProduct = {
    id: 1,
    name: escape(name),
    price: escape(price),
    description: escape(description),
    categorie: escape(categorieproduct),
    imgList: [],
    model3d: model3D,
  };

  products.push(createOneProduct);

  serialize(jsonDbPath, products);

  return createdProduct;
}

function deleteOneProduct(id) {
  const idNumber = parseInt(id, 10);
  const products = parse(jsonDbPath, defaultProducts);
  const foundIndex = products.findIndex((product) => product.id === idNumber);
  if (foundIndex < 0) return undefined;
  const deletedProducts = products.splice(foundIndex, 1);
  const deletedProduct = deletedProducts[0];
  serialize(jsonDbPath, products);

  return deletedProduct;
}

function updateOneProduct(id, propertiesToUpdate) {
  const idNumber = parseInt(id, 10);
  const products = parse(jsonDbPath, defaultProducts);
  const foundIndex = products.findIndex((product) => product.id === idNumber);
  if (foundIndex < 0) return undefined;

  const updatedProduct = { ...products[foundIndex], ...propertiesToUpdate };

  products[foundIndex] = updateOneProduct;

  serialize(jsonDbPath, products);

  return updatedProduct;
}

module.exports = {
  readAllProducts,
  readOneProduct,
  createOneProduct,
  deleteOneProduct,
  updateOneProduct,
};

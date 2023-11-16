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

const subcategory = require('./Subcategory.js');

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
    subcategory: [subcategory.getCategorieRolex(), subcategory.genderSubcategory.Mans],
    model3D: 'rolexSubmarine',
  },
  {
    id: 2,
    name: 'Ballon Bleu De Cartier',
    price: 9050.99,
    description:
      'La montre Ballon Bleu est née d`une nouvelle vision du rond qui consiste, pour les designers de Cartier, à donner un volume au cercle. Doublement convexe, sa forme réalise l`équilibre entre ligne et volume. Pour éviter toute rupture de lignes, la glace saphir bombée est parfaitement intégrée à la boîte comme le remontoir, avec sa bulle bleue et son protège-couronne intégré sous un arceau de métal à trois heures.',
    categorie: categories.getCategorieWatches(),
    imgList: [],
    subcategory: [subcategory.getCategorieCartier(), subcategory.genderSubcategory.Womans],
    model3D: 'ballonBleu',
  },
  {
    id: 3,
    name: 'Louis Vuitton Dubai',
    price: 6999.99,
    description: 'test sac louis vuitton femme',
    categorie: categories.getCategorieBags(),
    imgList: [],
    subcategory: [subcategory.getCategorieLouisVuitton, subcategory.genderSubcategory.Womans],
    model3D: 'LVDubai',
  },
];
serialize(jsonDbPath, defaultProducts);

function sortProductsByName(param) {
  const orderByTitle = param?.includes('name') ? param : undefined;

  let orderedProducts;
  const products = parse(jsonDbPath, defaultProducts);

  orderedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
  if (orderByTitle === '-name') {
    orderedProducts = orderedProducts.reverse();
  }

  const allProductsPotentiallyOrdered = orderedProducts ?? products;
  return allProductsPotentiallyOrdered;
}

function renderAllProductsByCategory(param) {
  let category = param?.toLowerCase().includes('man') ? param : undefined;
  if (category === undefined) {
    category = param?.toLowerCase().includes('woman') ? param : undefined;
  }
  const products = parse(jsonDbPath, defaultProducts);

  let filteredProducts;

  if (category === 'man') {
    filteredProducts = getAllMenProducts([...products]);
  } else if (category === 'woman') {
    filteredProducts = getAllWomenProducts([...products]);
  }

  const allProductsPotentiallyOrdered = filteredProducts ?? products;
  return allProductsPotentiallyOrdered;
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
    id: products.length + 1,
    name: escape(name),
    price: escape(price),
    description: escape(description),
    categorie: escape(categorieproduct),
    imgList: [],
    model3d: model3D,
  };

  products.push(createdProduct);

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

function getAllMenProducts() {
  const products = parse(jsonDbPath, defaultProducts);
  const menItems = [];
  products.forEach((item) => {
    if (item.subcategory.includes(subcategory.genderSubcategory.Mans)) {
      menItems.push(item);
    }
  });
  return menItems.length > 0 ? menItems : null;
}

function getAllWomenProducts() {
  const products = parse(jsonDbPath, defaultProducts);
  const womenItems = [];
  products.forEach((item) => {
    if (item.subcategory.includes(subcategory.genderSubcategory.Womans)) {
      womenItems.push(item);
    }
  });
  return womenItems.length > 0 ? womenItems : null;
}

module.exports = {
  sortProductsByName,
  renderAllProductsByCategory,
  readOneProduct,
  createOneProduct,
  deleteOneProduct,
  updateOneProduct,
  getAllMenProducts,
  getAllWomenProducts,
};

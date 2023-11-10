/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-import-module-exports

const path = require('node:path');
const escape = require('escape-html');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/subcategory.json');

const genderSubcategory = {
  Mans: 'Mans',
  Womans: 'Womans',
};

const defaultSubcategory = [
  {
    id: 1,
    name: 'Rolex',
  },
  {
    id: 2,
    name: 'Gucci',
  },
  {
    id: 3,
    name: 'Louis Vuitton',
  },
  {
    id: 4,
    name: 'Prada',
  },
];

serialize(jsonDbPath, defaultSubcategory);

function getCategorieRolex() {
  return defaultSubcategory[0].name;
}
function getCategorieGucci() {
  return defaultSubcategory[1].name;
}
function getCategorieLouisVuitton() {
  return defaultSubcategory[2].name;
}
function getCategoriePrada() {
  return defaultSubcategory[3].name;
}
function readAllCategories() {
  const categories = parse(jsonDbPath, defaultSubcategory);

  return categories;
}

module.exports = {
  genderSubcategory,
  getCategorieRolex,
  getCategorieGucci,
  getCategorieLouisVuitton,
  getCategoriePrada,
  readAllCategories,
};

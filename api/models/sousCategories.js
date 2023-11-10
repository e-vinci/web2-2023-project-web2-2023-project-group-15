/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-import-module-exports

const path = require('node:path');
const escape = require('escape-html');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../sousCategories/categories.json');

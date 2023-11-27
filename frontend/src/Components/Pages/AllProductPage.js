/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */

import ProductLibrary from '../../Domain/ProductLibrary';
import SubCategoryLibrary from '../../Domain/SubCategoryLibrary';
import '../../stylesheets/_allproducts.scss';
import { clearPage } from '../../utils/render';
import { importAll } from '../../utils/utilsImages';
import arrowDown from '../../img/icons/small_arrow_down.png';

const productsImgs = importAll(require.context('../../img/products',true,/\.png$/));

let allProducts;
let  i = 0;
let btnAddToCart;

const AllProductPage = async () => {
  const main = document.querySelector('main');
  clearPage();
 

  allProducts = await ProductLibrary.getAllProducts();
  const allSubCategories = await SubCategoryLibrary.getAllSubCategories();
  console.log(mapSubcategories());
  renderSearchBar();
  renderAllProductsCards();


    //create an Map with all the subcategories
    function mapSubcategories(){
      const map = new Map();
       allSubCategories.forEach((subcategory) => {
        map[subcategory.id]=stringModifier(subcategory.name);
      });
      return map;
    }
  // Show search bar generated by the html search bar function
  function renderSearchBar() {
    const containerSearchBar = document.createElement('div');
    containerSearchBar.className = 'container-searchbar-products';
    containerSearchBar.id = 'container-searchbar-products';
    containerSearchBar.innerHTML = htmlSearchbar();
    main.appendChild(containerSearchBar);
  }

  // show the products cards generated by the  addCard Product function
  function renderAllProductsCards() {
    const container = document.createElement('div');
    container.className = 'container-products';
    container.id = 'container-products';
    container.innerHTML = addCardProduct();
    main.appendChild(container);
    const filter = document.getElementById('filter-products');
    filter.innerHTML = AddCategories();
  }

  //create an card for each product
  function addCardProduct() {
    let allCards = '';
    allProducts?.forEach((product) => {
      allCards += `
            <a class="link-products" href="#" data-rui="/products/${product.id}">
                <div class="product-card" id="product-card">
                    <img class="product-img" src=${productsImgs[product.id - 1]} alt="${
        product.name
      } "/>
                    <h1 class="title-product" > ${product.name} </h1>
                    <h2 class="price-product" > ${product.price}€ </h1>
                </div>
            </a>
            `;
      i += 1;
    });
    return allCards;
  }

  // add an categorie to the drop down menu
  function AddCategories() {
    let htmlCategories = '';
    allSubCategories.forEach((subcategory) => {
      htmlCategories += `
            <a href="" onclick="filterProducts(${subcategory.id})" id='link${stringModifier(
        subcategory.name,
      )}'>${subcategory.name}</a>
            `;
    });
    return htmlCategories;
  }

  // generate the html for the search bar
  function htmlSearchbar() {
    let html = '';
    html = `
        <div class="search-bar">
        <input type="text" placeholder="SEARCH BY NAME..." >
        <button class="input-search-bar">SEARCH</button >
    </div>
    <div class="product-filter">
        <div class="order-products">
            <div class="dropdown">
                <button class="dropbtn">Order Products by : <img class="product-img" src=${arrowDown} alt="$arrow down "/>  </button>
                <div class="dropdown-content">
                    <a href="#">Name</a>
                    <a href="#">Price</a>
                </div>
            </div>
        </div>
        <div class="order-products">
            <div class="dropdown">
                <button class="dropbtn">Filter products by :  <img class="product-img" src=${arrowDown} alt="$arrow down "/>  </button>
                <div class="dropdown-content" id="filter-products">
                </div>
            </div>
        </div>
    </div>
        `;
    return html;
  }

  
};
function stringModifier(str) {
  return str.replace(/\s+/g, '').toLowerCase();
}

export default AllProductPage;

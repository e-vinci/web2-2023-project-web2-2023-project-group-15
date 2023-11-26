/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */

import ProductLibrary from '../../Domain/ProductLibrary';
import '../../stylesheets/_allproducts.scss';
import { clearPage } from '../../utils/render';
import { importAll } from '../../utils/utilsImages';

const productsImgs = importAll(require.context('../../img/products',true,/\.png$/));

let allProducts;
let  i = 0;
let btnAddToCart;

const AllProductPage = async () => {
    clearPage();
    allProducts = await ProductLibrary.createOrder();
    console.log(allProducts);
    renderAllProductsCards();

    
    function renderAllProductsCards(){
        const main = document.querySelector('main');
        const  container = document.createElement('div');
        container.className = "container-products";
        container.id = "container-products";
        container.innerHTML = addCardProduct();
        main.appendChild(container);
     
    }
    
    function addCardProduct(){
        let allCards = '';
        allProducts?.forEach(product => {
            allCards += `
            <a class="link-products" href="#" data-rui="/products/${product.id}">
                <div class="product-card" id="product-card">
                    <img class="product-img" src=${productsImgs[product.id-1]} alt="${product.name} "/>
                    <h1 class="title-product" > ${product.name} </h1>
                    <h2 class="price-product" > ${product.price}€ </h1>
                </div>
            </a>
            `;
            i+=1;
        });
        

        
        return allCards;

    }
    function modifyString(nom) {
        return nom.replace(/\s/g, '').toLowerCase();
      }

    
 };




  export default AllProductPage;
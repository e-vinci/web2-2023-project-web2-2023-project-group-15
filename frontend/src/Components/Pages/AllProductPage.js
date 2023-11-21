/* eslint-disable spaced-comment */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import productLibrary from '../../Domain/ProductLibrary';
//import {importAll} from '../../img/products';

const AllProducts = await productLibrary.prototype.createOrder();

const AllProductPage = () => {
    renderAllProductsCards()
  };

function renderAllProductsCards(){
    const main = document.querySelector('main');
    const  container = document.createElement('div');
    container.className = 'flex-container';
    container.id = 'flex-container';
    container.innerHTML = addCardProduct(AllProducts);
    main.appendChild(container);
}

function addCardProduct(products){
    let allCards = '';
    products?.array.forEach(product => {
        allCards += `
            <div class="product-card" id="product-card">
                <div class="product-img-div>
                <img class="product-img" src="" alt="${product.name} " />
                </div>
                <h1 class="title-product" > ${product.name} </h1>
                <h2 class="price-product" > ${product.price} </h1>
            </div>
        `;
    });
}
  export default AllProductPage;
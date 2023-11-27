/* eslint-disable spaced-comment */
import imgCaroussel1 from '../../img/home/carroulsel1.jpg';
import imgCaroussel2 from '../../img/home/carroulsel2.png';
import imgCaroussel3 from '../../img/home/carroulsel3.png';
import imgBags from '../../img/home/home_categories_bags.png';
import imgClothing from '../../img/home/home_categories_clothing.png';
import imgCosmetics from '../../img/home/home_categories_cosmetics.png';
import imgWatches from '../../img/home/home_categories_watches.png';
import popularImgWatches from '../../img/home/home_popular_category_watches.png';
//import popularImgBags from '../../img/home/home_popular_category_bags.png';
//import popularImgCosmetics from '../../img/home/home_popular_category_cosmetics.png';
import popularImgWatchesBallonBleu from '../../img/products/2.png';
import popularImgWatchesRolexSubmarinier from '../../img/products/1.png';
import popularImgWatchesPPGrandComplications from '../../img/products/7.png';
import popularImgBagsLVDubai from '../../img/products/3.png';
import popularImgBagsPradaSaffiano from '../../img/products/6.png';
import popularImgBagsPradaBP from '../../img/products/8.png';
import popularImgCosmeticsArmaniCode from '../../img/products/4.png';
import popularImgCosmeticsPenhaligons from '../../img/products/9.png';
import popularImgCosmeticsChanel5 from '../../img/products/5.png';

import '../../stylesheets/_home.scss';
// Importe le fichier Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importe le fichier Bootstrap JavaScript (avec les fonctionnalités JavaScript nécessaires, y compris jQuery)
import 'bootstrap/dist/js/bootstrap.bundle.min';

const html = `
<div class="container-home">

 <!-- Banniere de la HomePage -->

  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="${imgCaroussel1}" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${imgCaroussel2}" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${imgCaroussel3}" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>

 <!-- Categories section -->

  <div class="container-categorie-home"> 
      <h1> Categories </h1>
      <div class="flex-container-categories">
        <div class="card text-center mx-auto" >
          <img class="card-img-top" src="${imgBags}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Bags</h5>
            <a href="#" class="btn btn-dark">Check</a>
          </div>
        </div>
        <div class="card text-center mx-auto" id="card-main-categorie">
          <img class="card-img-top" src="${imgCosmetics}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Cosmetics</h5>
          <a href="#" class="btn btn-dark">Check</a>
        </div>
      </div>
      <div class="card text-center mx-auto" >
        <img class="card-img-top" src="${imgClothing}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Clothing</h5>
          <a href="#" class="btn btn-dark">Check</a>
        </div>
      </div>
      <div class="card text-center mx-auto" >
        <img class="card-img-top" src="${imgWatches}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Watches</h5>
          <a href="#" class="btn btn-dark">Check</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Popular section -->

  <div> 
  <h1> Popular </h1>
  <div class="flex-container-popular">

      <div class="container-products-popular" id="container-products-popular">
                <img class="product-img-popular" id="id="category-popular-img" src=${popularImgWatches} alt="Picture Watch Cartier"/>
             <a class="link-products-popular" href="#" data-rui="" >
                <div class="product-card-popular" id="product-card">
                    <img class="product-img-popular" src=${popularImgWatchesBallonBleu} alt="Picture Watch Cartier"/>
                    <h1 class="title-product" >Ballon Bleu de Cartier</h1>
                    <h2 class="price-product" >9.050.99 €</h1>
                </div>
             </a>
             <a class="link-products-popular" href="#" data-rui="" >
                <div class="product-card-popular" id="product-card">
                    <img class="product-img-popular" src=${popularImgWatchesRolexSubmarinier} alt="Picture Watch Rolex"/>
                    <h1 class="title-product" >Rolex Submariner</h1>
                    <h2 class="price-product" >25.190.00 €</h1>
                </div>
             </a>
             <a class="link-products-popular" href="#" data-rui="">
                <div class="product-card-popular" id="product-card">
                    <img class="product-img-popular" src=${popularImgWatchesPPGrandComplications} alt="Picture Watch Patek Philippe"/>
                    <h1 class="title-product" >Patek Philippe Grand Complications </h1>
                    <h2 class="price-product" >89.650.99 €</h1>
                </div>
             </a>
       </div>

      <div class="container-products-popular" id="container-products-popular">
        <a class="link-products" href="#" data-rui="" id="card-popular-products">
          <div class="product-card-img" id="category-popular-img">
          <h1> watches </h1>
          </div>
        </a>
        <a class="link-products-popular" href="#" data-rui="" >
          <div class="product-card-popular" id="product-card">
              <img class="product-img-popular" src=${popularImgBagsLVDubai} alt="Picture Bag Louis Vuitton"/>
              <h1 class="title-product" >Louis Vuitton Dubai</h1>
              <h2 class="price-product" >6.999.99 €</h1>
          </div>
        </a>
        <a class="link-products-popular" href="#" data-rui="" >
          <div class="product-card-popular" id="product-card">
              <img class="product-img-popular" src=${popularImgBagsPradaSaffiano} alt="Picture Bag Prada Saffiano"/>
              <h1 class="title-product" >Prada Saffiano Bag</h1>
              <h2 class="price-product" >2.199.99 €</h1>
          </div>
        </a>
        <a class="link-products-popular" href="#" data-rui="">
          <div class="product-card-popular" id="product-card">
              <img class="product-img-popular" src=${popularImgBagsPradaBP} alt="Picture Bag Prada Backpack"/>
              <h1 class="title-product" >Prada backpack</h1>
              <h2 class="price-product" >3.580.99 €</h1>
          </div>
        </a>
     </div>

     <div class="container-products-popular" id="container-products-popular">
     <a class="link-products" href="#" data-rui="" id="card-popular-products">
       <div class="product-card-img" id="category-popular-img">
       <h1> watches </h1>
       </div>
     </a>
     <a class="link-products-popular" href="#" data-rui="" >
       <div class="product-card-popular" id="product-card">
           <img class="product-img-popular" src=${popularImgCosmeticsArmaniCode} alt="Picture Perfum Armani Code"/>
           <h1 class="title-product" >Armani code</h1>
           <h2 class="price-product" >289,99 €</h1>
       </div>
     </a>
     <a class="link-products-popular" href="#" data-rui="" >
     <div class="product-card-popular" id="product-card">
         <img class="product-img-popular" src=${popularImgCosmeticsPenhaligons} alt="Picture Perfum Penhaligons"/>
         <h1 class="title-product" >Penhaligon's</h1>
         <h2 class="price-product" >489,99 €</h1>
     </div>
     </a>
     <a class="link-products-popular" href="#" data-rui="">
       <div class="product-card-popular" id="product-card">
           <img class="product-img-popular" src=${popularImgCosmeticsChanel5} alt="Picture Perfum Chanel5"/>
           <h1 class="title-product" >Chanel N°5</h1>
           <h2 class="price-product" >229.99€</h1>
       </div>
     </a>
    
  </div>
</div>
</div>

</div>   `;
const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = html;
};

export default HomePage;

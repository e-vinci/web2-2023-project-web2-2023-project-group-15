import imgCaroussel1 from '../../img/home/carroulsel1.jpg';
import imgBags from '../../img/home/home_categories_bags.png'
import imgClothing from '../../img/home/home_categories_clothing.png'
import imgCosmetics from '../../img/home/home_categories_cosmetics.png'
import imgWatches from '../../img/home/home_categories_watches.png'
import popularImgWatches from '../../img/home/home_popular_category_watches.png'
import popularImgBags from '../../img/home/home_popular_category_bags.png'
import popularImgCosmetics from '../../img/home/home_popular_category_cosmetics.png'

import '../../stylesheets/_home.scss'
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
      <img class="d-block w-100" src="${imgCaroussel1}" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${imgCaroussel1}" alt="Third slide">
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

  <div class="popular-section">
    <div class="popular-row">
      <div class="popular-column">
        <img class="category-img" src="${popularImgWatches}" alt="Bags">
        <h5 class="category-title">Bags</h5>
        <!-- Ajoutez ici vos trois produits pour la catégorie Bags -->
      </div>
      <div class="popular-column">
        <img class="category-img" src="${popularImgBags}" alt="Cosmetics">
        <h5 class="category-title">Cosmetics</h5>
        <!-- Ajoutez ici vos trois produits pour la catégorie Cosmetics -->
      </div>
      <div class="popular-column">
        <img class="category-img" src="${popularImgCosmetics}" alt="Clothing">
        <h5 class="category-title">Clothing</h5>
        <!-- Ajoutez ici vos trois produits pour la catégorie Clothing -->
      </div>

    <!-- Ajoutez ici deux autres lignes avec le même format pour d'autres catégories -->

  </div>

</div>  `;
const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = html;
};

export default HomePage;

import imgCaroussel1 from '../../img/home/carroulsel1.jpg';
import imgCaroussel2 from '../../img/home/carroulsel2.png';
import imgCaroussel3 from '../../img/home/carroulsel3.png';
import imgBags from '../../img/home/home_categories_bags.png';
import imgClothing from '../../img/home/home_categories_clothing.png';
import imgCosmetics from '../../img/home/home_categories_cosmetics.png';
import imgWatches from '../../img/home/home_categories_watches.png';
import popularImgWatches from '../../img/home/home_popular_category_watches.png';
import popularImgBags from '../../img/home/home_popular_category_bags.png';
import popularImgCosmetics from '../../img/home/home_popular_category_cosmetics.png';

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

  <div class="flex-container-popular">

    <div class="popular-row">
     
      <div class="card text-center" style="width: 20rem;">
        <img src="${popularImgWatches}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">Watches</h4>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
         <img src="..." class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
      </div>

      <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      </div>

      <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
     </div>

    </div>

    <div class="popular-row">

      <div class="card text-center" style="width: 20rem;">
        <img src="${popularImgBags}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">Bags</h4>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
         <img src="..." class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
      </div>

      <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      </div>

      <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
     </div>

   </div>

    <div class="popular-row">

      <div class="card text-center" style="width: 20rem;">
        <img src="${popularImgCosmetics}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">Cosmetics</h4>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
         <img src="..." class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
      </div>

      <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      </div>

      <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
     </div>

    </div>  

  </div>

</div>   `;
const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = html;
};

export default HomePage;

// import { addItemToCart } from "../../utils/shoppingCart";
// import { useParams } from 'react-router-dom';

const html = `
        <!-- Product section-->
       <div class="flex-container-product-page">
            <div class="container-product-imgs" >
            </div>
            <div class="container-product-description" >
            </div>
       </div>
        `

const ProductPage = () => {
    const main = document.querySelector('main');
    main.innerHTML = html;
    // const { useParams } = useParams();
    // const btnAddToCart = document.getElementById('addToCart')

    
    // btnAddToCart.addEventListener('click', async (e) => {
    //     e.preventDefault();
    //    // addItemToCart(products.id, products.name, products.price,1);

    //   }); 
  };
  
  export default ProductPage;
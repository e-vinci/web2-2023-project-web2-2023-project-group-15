/* eslint-disable no-unused-vars */
import { loadCart, countProductCart, getCartTotal , removeItemFromCart, addItemToCart, deleteItem } from "../../utils/shoppingCart";
import { getAuthenticatedUser } from "../../utils/auths";
import Navigate from "../Router/Navigate";
import Navbar from "../Navbar/Navbar";
import { importAll } from '../../utils/utilsImages';
import '../../stylesheets/_shoppingCart.scss';

const productsImgs = importAll(require.context('../../img/products', true, /\.png$/));


const ShoppingCartPage = () => {

    Navbar();
    const user = getAuthenticatedUser();

    if(user === undefined){
      Navigate('/login');
    }

    let html = `
    <section class="h-100 h-custom" id="container-shopping" >
    <div class="container-shopping">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12">
          <div class="card card-registration card-registration-2" style="border-radius: 15px;">
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="col-lg-8">
                  <div class="p-5" id="container-products-added">
                    <div class="d-flex justify-content-between align-items-center mb-5" id="container-products-added">
                      <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                      <h6 class="mb-0 text-muted">${countProductCart()} items</h6>
                    </div>
                    
                    `;

    const product = loadCart(user.email);
    const productList = product.objects;
    

    if(productList.length === 0){ 
      html +=`
      <h3>Your shopping cart is empty</h3>
      <picture>
      <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.webp" type="image/webp">
      <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f62d/512.gif" alt="😭" width="42" height="42">
    </picture>`
    }
    else{
      for(let i = 0; i < productList.length; i += 1){

        html += `<hr class="my-4">

        <div class="row mb-4 d-flex justify-content-between align-items-center">
          <div class="col-md-2 col-lg-2 col-xl-2">
            <img src="${productsImgs[productList[i].id - 1]}" class="img-fluid rounded-3">
          </div>
          <div class="col-md-3 col-lg-3 col-xl-3">
            <h6 class="text-muted">Category</h6>
            <a class="productName" href=""><h6 class="text-black mb-0">${productList[i].name}</h6></a>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button class="minus">-</button>
            <input class="form text-center" id="productQuantity" type="num" value="${productList[i].count}" style="max-width: 3rem" />
            <button class="add">+</button>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h6 class="mb-0">${productList[i].price} €</h6>
          </div>
          <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button class="delete btn btn-outline-danger"><i class="bi bi-trash3"></i></button>
          </div>
        
          <div class="shoppingCart-modal">
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Purchase successfully completed</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Thank you for your purchase</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary">No</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Yes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br>
        </div>
        `
  
      }
  
  
    }
    
  html +=`
 
  <div id="arrow_2" class="arrow-wrapper">
  <div class="arrow arrow--left">
    <span><button id="backToShop" >Back to shop </button></span>
  </div>
</div>

</div>
</div>
<div class="col-lg-4 bg-grey">
  <div class="p-5">
    <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
    <hr class="my-4">

    <h5 class="text-uppercase mb-3">Shipping</h5>

    <div class="mb-4 pb-2">
      <select class="select">
        <option value="1">Standard-Delivery- €5.00</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        <option value="4">Four</option>
      </select>
    </div>

    <h5 class="text-uppercase mb-3">Give code</h5>

    <div class="mb-5">
      <div class="form-outline">
        <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
      </div>
    </div>

    <hr class="my-4">

    <div class="d-flex justify-content-between mb-5">
      <h5 class="text-uppercase">Total price</h5>
      <h5>${getCartTotal()}€</h5>
    </div>

    <button id="btnCheckout" type="button" class="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark">Checkout </button>

  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
`;



    const main = document.querySelector('main');

    main.innerHTML = html;

    const btnBackToShop = document.getElementById('backToShop');
    btnBackToShop.addEventListener('click', async (e) => {
      e.preventDefault();
    Navigate('/allProducts')
    }); 
  

    if(productList.length !== 0){

      const btnCheckout = document.getElementById('btnCheckout');
      btnCheckout.addEventListener('click', async (e) => {
        e.preventDefault();
        Navigate('/checkout')
      });

      const btnProduct = document.getElementsByClassName('productName');
      for (let y = 0; y <  btnProduct.length; y += 1) {
      
        btnProduct[y].addEventListener('click' , async (e) => {
          e.preventDefault();
          Navigate(`/product?id=${productList[y].id}`);
        });
      }

      const btnAddOne = document.getElementsByClassName('add');
      for (let y = 0; y <  btnAddOne.length; y += 1) {
        
        let nb = parseInt(document.querySelector('#productQuantity').value,10);


        btnAddOne[y].addEventListener('click' , async (e) => {
          e.preventDefault();
          nb += 1; 
          document.querySelector('#productQuantity').value = nb;
          addItemToCart(productList[y].id,productList[y].name,productList[y].price,productList[y].count);
          ShoppingCartPage();
          Navbar();
          
         
        });
      }
    
      const btnMinusOne = document.getElementsByClassName('minus');
      for (let y = 0; y <  btnMinusOne.length; y += 1) {

        let nb = parseInt(document.querySelector('#productQuantity').value,10);

        btnMinusOne[y].addEventListener('click' , async (e) => {
          e.preventDefault();
          nb -= 1; 
          document.querySelector('#productQuantity').value = nb;
          removeItemFromCart(productList[y].name);
          ShoppingCartPage();
          Navbar();
          
        })
      }
        // eslint-disable-next-line no-undef
        const myModal = new bootstrap.Modal(document.getElementById('myModal'));

        const btnDelete = document.getElementsByClassName('delete');
        for (let y = 0; y < btnDelete.length; y += 1) {
            btnDelete[y].addEventListener('click', async (e) => {
                e.preventDefault();
                console.log("modal " , myModal);
                myModal.show();
                setTimeout(() => {
                    myModal.hide();
                }, 3000);
                deleteItem(productList[y].name)
                ShoppingCartPage();
                Navbar();
            })
        }

    

    }
    

  };
  
  export default ShoppingCartPage;
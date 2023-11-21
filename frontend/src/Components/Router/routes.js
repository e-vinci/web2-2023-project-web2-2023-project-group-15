import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import ShoppingCartPage from '../Pages/ShoppingCartPage';
import AllProductPage from '../Pages/AllProductPage';
import ProductPage from '../Pages/ProductPage';
import UserPage from '../Pages/UserPage'

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/shoppingCart':ShoppingCartPage,
  '/allProducts':AllProductPage,
  '/product':ProductPage,
  '/user':UserPage,

};

export default routes;

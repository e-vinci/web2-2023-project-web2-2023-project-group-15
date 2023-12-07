import HomePage from '../Pages/HomePage';
import ShoppingCartPage from '../Pages/ShoppingCartPage';
import AllProductPage from '../Pages/AllProductPage';
import ProductPage from '../Pages/ProductPage';
import UserPage from '../Pages/UserPage'
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';
import Logout from '../Logout/Logout';
import AdminPage from '../Pages/AdminPage';
import CheckoutPage from '../Pages/CheckoutPage';
import WatchesProducts from '../Pages/WatchesProducts';
import CosmeticsProducts from '../Pages/CosmeticsProducts';
import BagsProducts from '../Pages/BagsProducts';
import ClothingProducts from '../Pages/ClothingProducts';

const routes = {
  '/': HomePage,
  '/shoppingCart':ShoppingCartPage,
  '/allProducts':AllProductPage,
<<<<<<< HEAD
  '/product':ProductPage,
=======
  '/product/':ProductPage,
>>>>>>> 65df8e2bc4cf99989014f5051b79566aa6d12019
  '/user':UserPage,
  '/logout': Logout,
  '/login':LoginPage,
  '/register': RegisterPage,
  '/admin':AdminPage, 
  '/checkout': CheckoutPage , 
  '/AllProducts=Watches': WatchesProducts,
  '/AllProducts=Cosmetics': CosmeticsProducts,
  '/AllProducts=Bags': BagsProducts,
  '/AllProducts=Clothing': ClothingProducts
};

export default routes;

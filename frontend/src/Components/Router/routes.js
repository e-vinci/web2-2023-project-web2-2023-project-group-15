import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import ShoppingCartPage from '../Pages/ShoppingCartPage';
import AllProductPage from '../Pages/AllProductPage';
import ProductPage from '../Pages/ProductPage';
import RegisterPage from '../Pages/RegisterPage';
import Logout from '../Logout/Logout';
import AdminPage from '../Pages/AdminPage';

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/shoppingCart':ShoppingCartPage,
  '/allProducts':AllProductPage,
  '/product':ProductPage,
  '/logout': Logout,
  '/login':RegisterPage,
  '/register': RegisterPage,
  '/admin':AdminPage

};

export default routes;

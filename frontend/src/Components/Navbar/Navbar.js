/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import '../../stylesheets/_navbar.scss';
import profileIcon from '../../img/navbar/profileIcon.svg';
import shoppingCart from '../../img/navbar/shoppingCart.svg';
import GrandiosoVinciText from '../../img/navbar/GrandiosoVinci.svg';
import logo from '../../img/navbar/logo.svg';


/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */
const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = `
  <div class="container-nav">
    
    <div class="topnav">
      <div class="containerLogos">
        <div class="logoDiv">
          <a href="#home  class="logo" "><img src="${logo}" alt="profile icon"></a>
        </div>
        <img src="${GrandiosoVinciText}" id="shoppingCart" alt="profile icon">
      </div>

      <div class="containerIcons">
        <input type="text" placeholder="Search..">
        <a href="#home"><img src="${profileIcon}" id="profileIcon" alt="profile icon"></a>
        <a href="#about"><img src="${shoppingCart}" id="shoppingCart" alt="profile icon"></a>
        <a href="#about" class="navMenu">
          <div class="menu" ">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </a>
      </div>
  </div>
  `;
  navbarWrapper.innerHTML = navbar;

};


export default Navbar;

/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import '../../stylesheets/_navbar.scss';
import GrandiosoVinciText from '../../img/navbar/GrandiosoVinci.svg';
import { getAuthenticatedUser, isAuthenticated } from '../../utils/auths';
import Navigate from '../Router/Navigate';

const main = document.querySelector('main');
/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */
const Navbar = () => {
renderNavbar();

};

function renderNavbar() {
  const user =  getAuthenticatedUser();
  const anonymousUserNavbar = `
  <div class="flex-container">
    <div class="logoDiv">
      <a href="#home  class="logo" ">
      <svg class="logoSVG" data-uri="/" viewBox="0 0 59 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.9121 32.999H34.2041C33.2601 30.5088 31.6813 28.4906 29.4678 26.9443C27.2705 25.3818 24.6989 24.6006 21.7529 24.6006C19.4743 24.6006 17.5781 25.0889 16.0645 26.0654C14.5508 27.042 13.3708 28.3441 12.5244 29.9717C11.6943 31.583 11.1165 33.3327 10.791 35.2207C10.4655 37.1087 10.3027 39.1025 10.3027 41.2021C10.3027 46.4105 11.3363 50.4144 13.4033 53.2139C15.4867 55.9971 18.2861 57.3887 21.8018 57.3887C24.3245 57.3887 25.9033 57.0143 26.5381 56.2656C27.1729 55.5169 27.4902 54.4102 27.4902 52.9453V48.7949C27.4902 47.9648 27.4251 47.2324 27.2949 46.5977C27.1647 45.9629 26.8229 45.3851 26.2695 44.8643C25.7324 44.3271 24.9105 44.026 23.8037 43.9609V43.2041H38.7939V43.9609C36.5967 44.2539 35.498 45.5967 35.498 47.9893V56.7539C31.6569 58.5117 27.3112 59.3906 22.4609 59.3906C20.5078 59.3906 18.7337 59.2604 17.1387 59C15.5599 58.7233 14.152 58.349 12.915 57.877C11.6781 57.3887 10.6364 56.8678 9.79004 56.3145C8.94368 55.7448 8.14616 55.11 7.39746 54.4102C6.37207 53.4336 5.45247 52.3105 4.63867 51.041C3.84115 49.7715 3.18197 48.2985 2.66113 46.6221C2.15658 44.9294 1.9043 43.0739 1.9043 41.0557C1.9043 38.3376 2.38444 35.8555 3.34473 33.6094C4.32129 31.3633 5.69661 29.4183 7.4707 27.7744C9.24479 26.1143 11.2712 24.8529 13.5498 23.9902C15.8447 23.1276 18.2617 22.6963 20.8008 22.6963C22.2331 22.6963 23.4701 22.7939 24.5117 22.9893C25.5534 23.1846 27.3031 23.6077 29.7607 24.2588C30.542 24.5192 31.3883 24.6494 32.2998 24.6494C33.2601 24.6494 33.8949 24.0146 34.2041 22.7451H34.9121V32.999Z M57.3037 7.03809V7.74609C55.9854 7.94141 54.846 8.4541 53.8857 9.28418C52.9417 10.098 51.9652 11.9372 50.9561 14.8018L40.751 43.3906H39.7988L27.543 12.5068C26.957 10.9443 26.2327 9.78874 25.3701 9.04004C24.5238 8.29134 23.2868 7.86003 21.6592 7.74609V7.03809H38.0898V7.74609C37.276 7.79492 36.6169 7.93327 36.1123 8.16113C35.6077 8.37272 35.3555 8.91797 35.3555 9.79688C35.3555 10.4154 35.5671 11.2536 35.9902 12.3115L42.9971 30.0605L48.5879 14.3379C49.0599 13.0846 49.2959 11.9535 49.2959 10.9443C49.2959 10.3747 49.0762 9.73991 48.6367 9.04004C48.1973 8.34017 47.2044 7.90885 45.6582 7.74609V7.03809H57.3037Z" fill="black"/>
      </svg>
      </a>
    </div>
    <div class="logoTextDiv">
      <img src="${GrandiosoVinciText}" data-uri="/"  id="shoppingCart" alt="profile icon">
    </div>
    <div class="containerIcons"> 
      <div >
        <input type="text" placeholder="Search.." class="icon" id="researchBar">
      </div>
      <div data-uri="/login" class="iconDiv"  >
        <a href="#home" class="icon" id="profileIcon" >
          <svg data-uri="/login"  class="profileIcon"  viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path data-uri="/login" class="profileIcon" d="M6.66669 30C6.66669 28.2319 7.36907 26.5362 8.61931 25.2859C9.86955 24.0357 11.5652 23.3333 13.3334 23.3333H26.6667C28.4348 23.3333 30.1305 24.0357 31.3807 25.2859C32.631 26.5362 33.3334 28.2319 33.3334 30C33.3334 30.884 32.9822 31.7319 32.357 32.357C31.7319 32.9821 30.8841 33.3333 30 33.3333H10C9.11597 33.3333 8.26812 32.9821 7.643 32.357C7.01788 31.7319 6.66669 30.884 6.66669 30Z M20 16.6667C22.7614 16.6667 25 14.4281 25 11.6667C25 8.90523 22.7614 6.66666 20 6.66666C17.2386 6.66666 15 8.90523 15 11.6667C15 14.4281 17.2386 16.6667 20 16.6667Z" stroke="black" stroke-width="2.5" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
      <div  data-uri="/shoppingCart" class="iconDiv" id="shoppingCartDiv"  >
        <a  class="icon" >
          <svg  id="shoppingCart" class="profileIcon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path  d="M11.6667 36.6667C10.75 36.6667 9.96499 36.34 9.31166 35.6867C8.65832 35.0333 8.33221 34.2489 8.33332 33.3333C8.33332 32.4167 8.65999 31.6317 9.31332 30.9783C9.96666 30.325 10.7511 29.9989 11.6667 30C12.5833 30 13.3683 30.3267 14.0217 30.98C14.675 31.6333 15.0011 32.4178 15 33.3333C15 34.25 14.6733 35.035 14.02 35.6883C13.3667 36.3417 12.5822 36.6678 11.6667 36.6667ZM28.3333 36.6667C27.4167 36.6667 26.6317 36.34 25.9783 35.6867C25.325 35.0333 24.9989 34.2489 25 33.3333C25 32.4167 25.3267 31.6317 25.98 30.9783C26.6333 30.325 27.4178 29.9989 28.3333 30C29.25 30 30.035 30.3267 30.6883 30.98C31.3417 31.6333 31.6678 32.4178 31.6667 33.3333C31.6667 34.25 31.34 35.035 30.6867 35.6883C30.0333 36.3417 29.2489 36.6678 28.3333 36.6667ZM10.25 10L14.25 18.3333H25.9167L30.5 10H10.25ZM8.66666 6.66668H33.25C33.8889 6.66668 34.375 6.95168 34.7083 7.52168C35.0417 8.09168 35.0555 8.66779 34.75 9.25001L28.8333 19.9167C28.5278 20.4722 28.1178 20.9028 27.6033 21.2083C27.0889 21.5139 26.5267 21.6667 25.9167 21.6667H13.5L11.6667 25H31.6667V28.3333H11.6667C10.4167 28.3333 9.47221 27.7845 8.83332 26.6867C8.19443 25.5889 8.16666 24.4989 8.74999 23.4167L11 19.3333L4.99999 6.66668H1.66666V3.33334H7.08332L8.66666 6.66668Z" data-uri="/shoppingCart" />
          </svg>
        </a>
      </div>
      <a href="#about" class="navMenu" id="menuOpenModal" role="button" data-target="#costumModal1" data-toggle="modal"  >
        <div class="menu" data-toggle="modal" >
          <div class="menu__container">
            <div class="menu__inner"></div>
            <div class="menu__hidden"></div>
          </div>
         </div>
      </a>
    </div>
  </div>
  `;
  const authenticatedUserNavbar = `
  <div class="flex-container">
    <div class="logoDiv">
      <a href="#home  class="logo" ">
      <svg class="logoSVG" data-uri="/" viewBox="0 0 59 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.9121 32.999H34.2041C33.2601 30.5088 31.6813 28.4906 29.4678 26.9443C27.2705 25.3818 24.6989 24.6006 21.7529 24.6006C19.4743 24.6006 17.5781 25.0889 16.0645 26.0654C14.5508 27.042 13.3708 28.3441 12.5244 29.9717C11.6943 31.583 11.1165 33.3327 10.791 35.2207C10.4655 37.1087 10.3027 39.1025 10.3027 41.2021C10.3027 46.4105 11.3363 50.4144 13.4033 53.2139C15.4867 55.9971 18.2861 57.3887 21.8018 57.3887C24.3245 57.3887 25.9033 57.0143 26.5381 56.2656C27.1729 55.5169 27.4902 54.4102 27.4902 52.9453V48.7949C27.4902 47.9648 27.4251 47.2324 27.2949 46.5977C27.1647 45.9629 26.8229 45.3851 26.2695 44.8643C25.7324 44.3271 24.9105 44.026 23.8037 43.9609V43.2041H38.7939V43.9609C36.5967 44.2539 35.498 45.5967 35.498 47.9893V56.7539C31.6569 58.5117 27.3112 59.3906 22.4609 59.3906C20.5078 59.3906 18.7337 59.2604 17.1387 59C15.5599 58.7233 14.152 58.349 12.915 57.877C11.6781 57.3887 10.6364 56.8678 9.79004 56.3145C8.94368 55.7448 8.14616 55.11 7.39746 54.4102C6.37207 53.4336 5.45247 52.3105 4.63867 51.041C3.84115 49.7715 3.18197 48.2985 2.66113 46.6221C2.15658 44.9294 1.9043 43.0739 1.9043 41.0557C1.9043 38.3376 2.38444 35.8555 3.34473 33.6094C4.32129 31.3633 5.69661 29.4183 7.4707 27.7744C9.24479 26.1143 11.2712 24.8529 13.5498 23.9902C15.8447 23.1276 18.2617 22.6963 20.8008 22.6963C22.2331 22.6963 23.4701 22.7939 24.5117 22.9893C25.5534 23.1846 27.3031 23.6077 29.7607 24.2588C30.542 24.5192 31.3883 24.6494 32.2998 24.6494C33.2601 24.6494 33.8949 24.0146 34.2041 22.7451H34.9121V32.999Z M57.3037 7.03809V7.74609C55.9854 7.94141 54.846 8.4541 53.8857 9.28418C52.9417 10.098 51.9652 11.9372 50.9561 14.8018L40.751 43.3906H39.7988L27.543 12.5068C26.957 10.9443 26.2327 9.78874 25.3701 9.04004C24.5238 8.29134 23.2868 7.86003 21.6592 7.74609V7.03809H38.0898V7.74609C37.276 7.79492 36.6169 7.93327 36.1123 8.16113C35.6077 8.37272 35.3555 8.91797 35.3555 9.79688C35.3555 10.4154 35.5671 11.2536 35.9902 12.3115L42.9971 30.0605L48.5879 14.3379C49.0599 13.0846 49.2959 11.9535 49.2959 10.9443C49.2959 10.3747 49.0762 9.73991 48.6367 9.04004C48.1973 8.34017 47.2044 7.90885 45.6582 7.74609V7.03809H57.3037Z" fill="black"/>
      </svg>
      </a>
    </div>
    <div class="logoTextDiv">
      <img src="${GrandiosoVinciText}" data-uri="/"  id="shoppingCart" alt="profile icon">
    </div>
    <div class="containerIcons"> 
      <div >
        <input type="text" placeholder="Search.." class="icon" id="researchBar">
      </div>
      <div data-uri="/user" class="iconDiv" id="user" >
        <a href="#home" class="icon" id="profileIcon" >
          <svg data-uri="/user/${user?.id}"  class="profileIcon"  viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path data-uri="/login" class="profileIcon" d="M6.66669 30C6.66669 28.2319 7.36907 26.5362 8.61931 25.2859C9.86955 24.0357 11.5652 23.3333 13.3334 23.3333H26.6667C28.4348 23.3333 30.1305 24.0357 31.3807 25.2859C32.631 26.5362 33.3334 28.2319 33.3334 30C33.3334 30.884 32.9822 31.7319 32.357 32.357C31.7319 32.9821 30.8841 33.3333 30 33.3333H10C9.11597 33.3333 8.26812 32.9821 7.643 32.357C7.01788 31.7319 6.66669 30.884 6.66669 30Z M20 16.6667C22.7614 16.6667 25 14.4281 25 11.6667C25 8.90523 22.7614 6.66666 20 6.66666C17.2386 6.66666 15 8.90523 15 11.6667C15 14.4281 17.2386 16.6667 20 16.6667Z" stroke="black" stroke-width="2.5" stroke-linejoin="round"/>
          </svg>
        </a>
        <span >${user?.firstname}</span>
      </div>


      <div  data-uri="/shoppingCart" class="iconDiv" id="shoppingCartDiv"  >
        <a  class="icon" >
          <svg  id="shoppingCart" class="profileIcon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path  d="M11.6667 36.6667C10.75 36.6667 9.96499 36.34 9.31166 35.6867C8.65832 35.0333 8.33221 34.2489 8.33332 33.3333C8.33332 32.4167 8.65999 31.6317 9.31332 30.9783C9.96666 30.325 10.7511 29.9989 11.6667 30C12.5833 30 13.3683 30.3267 14.0217 30.98C14.675 31.6333 15.0011 32.4178 15 33.3333C15 34.25 14.6733 35.035 14.02 35.6883C13.3667 36.3417 12.5822 36.6678 11.6667 36.6667ZM28.3333 36.6667C27.4167 36.6667 26.6317 36.34 25.9783 35.6867C25.325 35.0333 24.9989 34.2489 25 33.3333C25 32.4167 25.3267 31.6317 25.98 30.9783C26.6333 30.325 27.4178 29.9989 28.3333 30C29.25 30 30.035 30.3267 30.6883 30.98C31.3417 31.6333 31.6678 32.4178 31.6667 33.3333C31.6667 34.25 31.34 35.035 30.6867 35.6883C30.0333 36.3417 29.2489 36.6678 28.3333 36.6667ZM10.25 10L14.25 18.3333H25.9167L30.5 10H10.25ZM8.66666 6.66668H33.25C33.8889 6.66668 34.375 6.95168 34.7083 7.52168C35.0417 8.09168 35.0555 8.66779 34.75 9.25001L28.8333 19.9167C28.5278 20.4722 28.1178 20.9028 27.6033 21.2083C27.0889 21.5139 26.5267 21.6667 25.9167 21.6667H13.5L11.6667 25H31.6667V28.3333H11.6667C10.4167 28.3333 9.47221 27.7845 8.83332 26.6867C8.19443 25.5889 8.16666 24.4989 8.74999 23.4167L11 19.3333L4.99999 6.66668H1.66666V3.33334H7.08332L8.66666 6.66668Z" data-uri="/shoppingCart" />
          </svg>
          <span id="numberOfArticles">0</span>
        </a>
      </div>
      <a href="#about" class="navMenu" role="button" data-target="#costumModal1" data-toggle="modal" >
        <div class="menu" >
          <div class="menu__container">
            <div class="menu__inner"></div>
            <div class="menu__hidden"></div>
          </div>
         </div>
      </a>
    </div>
  </div>
  `;


  const modal = ` <a href="#costumModal1"  class="btn btn-default" >
  fadeIn
</a>
<div id="costumModal1" class="modal" data-easein="fadeIn" tabindex="-1" role="dialog" aria-labelledby="costumModalLabel" aria-hidden="false">
  <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                  ×
              </button>
              <h4 class="modal-title" id="costumModalLabel">
                  Modal Header
              </h4>
          </div>
          <div class="modal-body">
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
          </div>
          <div class="modal-footer">
              <button class="btn btn-default" data-dismiss="modal" aria-hidden="true">
                  Close
              </button>
              <button class="btn btn-primary">
                  Save changes
              </button>
          </div>
      </div>
  </div>
</div>`;

  
 
  const navbar = document.querySelector('#navbarWrapper');
  navbar.innerHTML = isAuthenticated() ? authenticatedUserNavbar : anonymousUserNavbar;
  const btnUser = document.getElementById('user');
  const userEmail =  user.email;
  console.log(userEmail)
  btnUser.addEventListener('click' , async (e) =>{
    e.preventDefault();
    console.log('btnUser email = ' , userEmail)
    Navigate('/user?email=' , userEmail )
  })
}


export default Navbar;

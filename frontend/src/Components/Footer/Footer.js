import GrandiosoVinciText from '../../img/navbar/GrandiosoVinciWhite.svg';
import '../../stylesheets/_footer.scss';

const Footer = () => {
  const footerWrapper = document.querySelector('#footerWrapper');
  const footer = ` 
   <footer class="footer-container">
      <div class="footer-content">
        <span class="left-text">Shop in: BE</span>
        <img src="${GrandiosoVinciText}" alt="Grandioso Vinci" class="centered-image">
        <div class="right-text">
          <span>Legal & Privacy</span>
          <span>Cookies</span>
        </div>
      </div>
   </footer>`;

   footerWrapper.innerHTML = footer;
};

export default Footer;

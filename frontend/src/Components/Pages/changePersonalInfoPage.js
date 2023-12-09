import '../../stylesheets/_changePersonalInfoPage.scss';
import UserLibrary from '../../Domain/UserLibrary';
import { clearPage } from '../../utils/render';



const changePersonalInfoPage = async () => {
    clearPage();
    renderRegisterForm();
  };

  async function renderRegisterForm() {



  const url = window.location.search;
  const id = url.split('=');
  console.log('id : ', id[1]);
  /*
  const userEmail = getAuthenticatedUser();
  const url = `email=${userEmail.email}`
  */

  const user = await getUserFromid(id[1]);

  async function getUserFromid(url_) {
    console.log(url_);
    const userFound = await UserLibrary.getUserFromId(url_);
    return userFound;
  }


    const main = document.querySelector('main');
    const form = document.createElement('form');
    main.appendChild(form); 
    form.innerHTML= `
    <section class="background">


    <div class="col-md-6">
    <div class="form-group last mb-3">
      <input type="text" id="firstname" class="form-control" placeholder="${user.firstname}" required=true />
      <label class="form-label" for="firstname"></label>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-group last mb-3">
      <input type="text" id="lastname" class="form-control" placeholder="${user.lastname}" required=true />
      <label class="form-label" for="lastname"></label>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-md-12">
    <div class="form-group last mb-3">
      <input type="email" id="registerUsername" class="form-control" placeholder="${user.email}" required=true />
      <label class="form-label" for="registerUsername"></label>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-md-6">
    <div class="form-group last mb-2">
      <input type="text" class="form-control" placeholder="${user.street}" id="streetName" required=true />
      <label class="form-label" for="Street"></label>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-group last mb-2">
      <input type="text" class="form-control" placeholder="${user.city}" id="cityName" required=true />
      <label class="form-label" for="City"></label>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-md-6">
    <div class="form-group last mb-2">
      <input type="text" class="form-control" placeholder="${user.zipcode}" id="zipCode" required=true />
      <label class="form-label" for="Zipcode"></label>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-group last mb-2">
      <input type="text" class="form-control" placeholder="${user.country}" id="countryName" required=true />
      <label class="form-label" for="Country"></label>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-md-6">
    <div class="form-group last mb-3">
      <input type="password" class="form-control" placeholder="${user.password}" id="registerPassword" required=true />
      <label class="form-label" for="Password"></label>
    </div>
  </div>
  <div class="col-md-6">
    <div class="form-group last mb-3">
      <input type="password" class="form-control" placeholder="${user.password}" id="registerConfPassword" required=true />
      <label class="form-label" for="registerConfPassword"></label>
    </div>
  </div>
</div>
</div>

<div class="d-flex mb-5 mt-4 align-items-center">
  <input type="submit" class="btn btn-outline-light btn-lg px-5" style="font:1em CenturyGothic" value="Confirm Change" />
</div>

    </section>

    `;

    form.addEventListener('submit', UserLibrary.prototype.onRegister());
  }


export default changePersonalInfoPage;
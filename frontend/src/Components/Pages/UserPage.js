// import { getAuthenticatedUser } from "../../utils/auths";
import UserLibrary from '../../Domain/UserLibrary';
import '../../stylesheets/_userPage.scss';

function popupChangeInfo(userId) {
  const modifyInfoBtn = document.querySelector('#modifyInfoBtn');
  modifyInfoBtn.addEventListener('click', () => openPopup(userId));
}

function openPopup(userId) {
  // Specify the URL of the page you want to load in the pop-up window
  const popupUrl = `/changePersonalInfoPage?id=${userId}`; // Replace with your actual URL

  // Specify the dimensions of the pop-up window
  const popupWidth = 800;
  const popupHeight = 600;

  // Calculate the position to center the pop-up window on the screen
  const left = (window.innerWidth - popupWidth) / 2;
  const top = (window.innerHeight - popupHeight) / 2;

  // Open the pop-up window
  const popupWindow = window.open(
    popupUrl,
    '_blank',
    `width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`,
  );

  // Focus on the pop-up window (optional)
  if (popupWindow) {
    popupWindow.focus();
  }
}

const UserPage = async () => {
  // eslint-disable-next-line no-unused-vars
  const url = window.location.search;
  const email = url.split('=');
  console.log('email : ', email[1]);
  /*
  const userEmail = getAuthenticatedUser();
  const url = `email=${userEmail.email}`
  */

  const user = await getUserFromUsername(email[1]);

  async function getUserFromUsername(url_) {
    console.log(url_);
    const userFound = await UserLibrary.getUserFromUsername(url_);
    return userFound;
  }

  const html = `
  <section class="background">
  <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12">
              <div class="backgroundForm
              " style="border-radius: 15px;">
                  <div class="card-body p-0">
                      <div class="row g-0">
                          <div class="col-lg-8">
                              <div class="p-5">
                                  <div class="d-flex justify-content-between align-items-center mb-5">
                                      <h1 class="fw-bold mb-0 text-black">Personal Information</h1>
                                  </div>
                                  <hr class="my-4">
  
                                  <ul class="list-group mb-4">
                                      <li class="list-group-item">
                                          <strong>Firstname:</strong> ${user.firstname}
                                      </li>
                                      <li class="list-group-item">
                                          <strong>Lastname:</strong> ${user.lastname}
                                      </li>
                                      <li class="list-group-item">
                                      <strong>Email:</strong> ${user.email}
                                      </li>

                                      <li class="list-group-item">
                                          <strong>street:</strong> ${user.street}
                                      </li>

                                      <li class="list-group-item">
                                      <strong>city:</strong> ${user.city}
                                      </li>

                                      <li class="list-group-item">
                                      <strong>zipcode:</strong> ${user.zipcode}
                                      </li>

                                      <li class="list-group-item">
                                      <strong>country:</strong> ${user.country}
                                      </li>

                                      <li class="list-group-item">
                                          <strong>birth date:</strong> ${user.birthdate}
                                      </li>

                                      <li class="list-group-item" type="password">
                                          <strong>password:</strong> ${user.password}
                                      </li>
                                      
                                  </ul>
  
                                  <button type="button" id="modifyInfoBtn" class="btn btn-outline-dark" data-toggle="modal"
                                      data-target="#modifyPersonalInfoModal">Modify Personal Information</button>

                                      <a href="/logout" class="btn btn-outline-dark">Logout</a>
  
                                 
                              </div>
                          </div>
                          <div class="col-lg-4 bg-grey">
                              <div class="p-5">
                                  <h3 class="fw-bold mb-5 mt-2 pt-1">Past Orders</h3>
                                  <hr class="my-4">
  
                                  <ul class="list-group mb-4">
                                      <li class="list-group-item d-flex justify-content-between align-items-center">
                                          Order #123
                                          <span class="badge bg-primary">€ 44.00</span>
                                      </li>
                                      <li class="list-group-item d-flex justify-content-between align-items-center">
                                          Order #456
                                          <span class="badge bg-primary">€ 65.00</span>
                                      </li>
                                  </ul>
  
                                  <hr class="my-4">
  
                                  
                                  <a href="/" class="btn btn-outline-dark">Place New Order</a>
  
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
  popupChangeInfo(user.id);
};

export default UserPage;

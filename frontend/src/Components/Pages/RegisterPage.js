/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import { getRememberMe, setRememberMe } from '../../utils/auths';
import { clearPage, renderPageTitle } from '../../utils/render';
import UserLibrary from '../../Domain/UserLibrary';

const RegisterPage = () => {
  clearPage();
  renderPageTitle();
  renderRegisterForm();
  renderLoginForm();
};

function renderRegisterForm() {
  /*  student form  */
  const main = document.querySelector('main');
  const container = document.createElement('container');
  const maDiv = document.createElement('div');
  maDiv.className='row justify-content-around';
  maDiv.id = 'maDiv'
  const maDiv2 = document.createElement('div');
  maDiv2.className= 'col-5';
  const form = document.createElement('form');
  form.className='registerForm'
  const rememberme = document.createElement('input');
  const remembered = getRememberMe();
  rememberme.checked = remembered;
  rememberme.addEventListener('click', onCheckboxClicked);
  maDiv2.appendChild(form);
  maDiv.appendChild(maDiv2);
  container.appendChild(maDiv);
  main.appendChild(container); 

  form.innerHTML=
  ` 
  <div class="container-fluid py-3 h-100">
    <div class="row d-flex  align-items-center h-100">
      <div class="col-12 ">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body px-5 py-2 text-center">

            <div class="mb-md-5 mt-md-4 pb-1">

              <h2 class="fw-bold mb-2 text-uppercase">Register</h2>
              <p class="text-white-50 mb-5">Enter your username and your password!</p>

              <div class="form-outline form-white mb-2">
                <input type="text" id="registerUsername" class="form-control form-control-lg" placeholder = "username" required = true/>
                <label class="form-label" for="registerUsername"></label>
              </div>

              <div class="form-outline form-white mb-2">
                <input type="password" id="registerPassword" class="form-control form-control-lg" placeholder = "password" required = true/>
                <label class="form-label" for="registerPassword"></label>
              </div>

            <div class="form-outline form-white mb-2">
              <input type="password" id="registerConfPassword" class="form-control form-control-lg" placeholder = "confirm your password" required = true/>
              <label class="form-label" for="registerConfPassword"></label>
            </div>

             
           
              <div class="mb-3 form-check">
                 <input type="checkbox" id="rememberme" class="form-check-input" checked="${getRememberMe()}"/>
              <label class="form-check-label" for="rememberme">Remember me</label>
              </div>

              <input type="submit" class="btn btn-outline-light btn-lg px-5" value="Register" />
            
            </div>

          </div>
        </div>
      </div>
      </div>
  </div>
`
  form.addEventListener('submit', UserLibrary.prototype.onRegister);
 
}

// eslint-disable-next-line no-unused-vars
function onCheckboxClicked(e) {
  setRememberMe(e.target.checked);
}


function renderLoginForm() {
  const maDiv = document.getElementById('maDiv');
  const maDiv2 = document.createElement('div');
  maDiv2.className= 'col-5';
  const loginForm = document.createElement('form');
  loginForm.className='loginform';
  maDiv2.appendChild(loginForm);
  maDiv.appendChild(maDiv2);
  loginForm.addEventListener('submit', UserLibrary.prototype.onLogin);

  loginForm.innerHTML=
  ` 
  <div class="container-fluid py-3 h-100">
    <div class="row d-flex align-items-center h-100">
      <div class="col-12">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body px-5 py-3 text-center">

            <div class="mb-md-5 mt-md-4 pb-1 ">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Enter your username and your password !</p>

              <div class="form-outline form-white mb-4">
                <input type="text" id="loginUsername" class="form-control form-control-lg" placeholder = "username" />
                <label class="form-label" for="loginUsername"></label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="loginPassword" class="form-control form-control-lg" placeholder = "password" />
                <label class="form-label" for="loginPassword"></label>
              </div>

              <input type="submit" class="btn btn-outline-light btn-lg px-5" value="Login" />

            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
 ` 
}

export default RegisterPage;

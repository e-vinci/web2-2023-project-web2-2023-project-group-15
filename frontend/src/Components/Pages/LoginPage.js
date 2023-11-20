/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */

import UserLibrary from '../../Domain/UserLibrary';

const LoginPage = () => {
    renderLoginForm();

};

function renderLoginForm() {
    const main = document.querySelector('main');
    const container = document.createElement('container');
    const maDiv = document.createElement('div');
    maDiv.className='row justify-content-around';
    maDiv.id = 'maDiv'
    const maDiv2 = document.createElement('div');
    maDiv2.className= 'col-5';
    const form = document.createElement('form');
    form.className='LoginForm'
    maDiv2.appendChild(form);
    maDiv.appendChild(maDiv2);
    container.appendChild(maDiv);
    main.appendChild(container); 

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
  
                <div class="form-outline form-white mb-4">
                  <input type="text" id="loginUsername" class="form-control form-control-lg" placeholder = "EMAIL" />
                  <label class="form-label" for="loginUsername"></label>
                </div>
  
                <div class="form-outline form-white mb-4">
                  <input type="password" id="loginPassword" class="form-control form-control-lg" placeholder = "PASSWORD" />
                  <label class="form-label" for="loginPassword"></label>
                </div>
  
                <input type="submit" class="btn btn-outline-light btn-lg px-5" value="LOGIN" />
  
              </div>
  
            </div>
          </div>
        </div>
      </div>
      </div>
   ` 
  }
  
  export default LoginPage;
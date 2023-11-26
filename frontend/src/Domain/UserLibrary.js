/* eslint-disable class-methods-use-this */
import Navbar from "../Components/Navbar/Navbar";
import Navigate from "../Components/Router/Navigate";
import {  setAuthenticatedUser } from '../utils/auths';

const calculateAge = (birthdate) => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
  }
  return age;
}

class UserLibrary{
    async onRegister(e) {

        e.preventDefault();
        const firstname = document.querySelector('#firstname').value;
        const lastname = document.querySelector('#lastname').value;
        const mail = document.querySelector('#registerUsername').value;
        const registerPassword = document.querySelector('#registerPassword').value;
        const registerConfPassword = document.querySelector('#registerConfPassword').value;
        const address = document.querySelector('#address').value
        const birthdate = document.querySelector('#birthdate').value

        const age = calculateAge(birthdate);
        if (age < 6) {
            alert("Vous devez avoir au moins 6 ans pour vous inscrire.");
            return;
        }
      
        if(registerPassword !== registerConfPassword) {
          throw new Error(`The password is not the same`);
        }
      
        const options = {
          method: 'POST',
          body: JSON.stringify({
            "firstname": firstname,
            "lastname": lastname,
            "email": mail,
            "password": registerPassword,
            "address": address,
            "birthdate":birthdate
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        };
      
        const response = await fetch(`${process.env.API_BASE_URL}/auths/register`, options);
        const authenticatedUser = await response.json();
      
        try{
          if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      
          setAuthenticatedUser(authenticatedUser);
          Navbar();
          Navigate('/');
        }catch(error){
          alert(authenticatedUser);
        }  
    }

      async onLogin(e) { 
        
        e.preventDefault();
      
        const mail = document.querySelector('#loginUsername').value;
        const password = document.querySelector('#loginPassword').value;
      
        const options = {
          method: 'POST',
          body: JSON.stringify({
            "email": mail,
            "password": password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        };
            
        try {
          const response = await fetch(`${process.env.API_BASE_URL}/auths/login`, options);
      
          if (!response.ok) {
            throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
          }
      
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const authenticatedUser = await response.json();
            setAuthenticatedUser(authenticatedUser);
            Navbar();     
            Navigate('/');
          } else {
            alert('Login failed: Server response is not in JSON format.');
          }
        } catch (error) {
        
          alert(error.message);
        }
    }
      

}
export default UserLibrary;
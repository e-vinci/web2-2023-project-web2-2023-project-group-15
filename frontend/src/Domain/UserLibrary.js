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
        const birthdate = document.querySelector('#birthdate').value;
        const countryName = document.querySelector('#countryName').value;
        const zipCode = document.querySelector('#zipCode').value;
        const cityName = document.querySelector('#cityName').value;
        const streetName = document.querySelector('#streetName').value;
       


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
            "street" : streetName,
            "city" : cityName,
            "zipcode" : zipCode,
            "country" : countryName,
            "birthdate":birthdate,
            "password": registerPassword
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        };
        console.log(options);
        const response = await fetch(`${process.env.API_BASE_URL}/auths/register`, options);
        console.log(response)
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

    static async getUserFromUsername(email){
      let  user='';
      const url =`${process.env.API_BASE_URL}/user?email=`
      try {
          const reponse = await fetch(url+email);
    
          if (!reponse.ok) {
            throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
          }
          user =  await reponse.json();
        } catch (err) {
          console.error('error: ', err);
        }
      return user;
    }

  
  static async getUserFromId(id){
    let  user='';
    const url =`${process.env.API_BASE_URL}/user/`
    try {
        const reponse = await fetch(url+id);
        console.log("résultat reponse " , reponse)
  
        if (!reponse.ok) {
          throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
        }
        user =  await reponse.json();
      } catch (err) {
        console.error('error: ', err);
      }
      return user;
}


 async onChangeInfo(id){

        const firstname = document.querySelector('#firstname_').value;
        const lastname = document.querySelector('#lastname_').value;
        const mail = document.querySelector('#Username_').value;
        const registerPassword = document.querySelector('#registerPassword_').value;
        const registerConfPassword = document.querySelector('#registerConfPassword_').value;
        const countryName = document.querySelector('#countryName_').value;
        const zipCode = document.querySelector('#zipCode_').value;
        const cityName = document.querySelector('#cityName_').value;
        const streetName = document.querySelector('#streetName_').value;

        if(registerPassword !== registerConfPassword) {
          throw new Error(`The password is not the same`);
        }

        const options = {
          method: 'PATCH',
          body: JSON.stringify({
            "firstname": firstname,
            "lastname": lastname,
            "email": mail,
            "street" : streetName,
            "city" : cityName,
            "zipcode" : zipCode,
            "country" : countryName,
            "password": registerPassword
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        };
       
        const response = await fetch(`${process.env.API_BASE_URL}/user/onChange/${id}`, options);
        
        if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);

    }

    
  

}
export default UserLibrary;
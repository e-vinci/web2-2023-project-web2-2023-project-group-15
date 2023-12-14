/* eslint-disable class-methods-use-this */
import { getAuthenticatedUser } from "../utils/auths";
// import {getCartTotal} from "../utils/shoppingCart";
// import Navigate from "../Components/Router/Navigate";

class OrderLibrary{

   
     async createOrder(){

        const user = getAuthenticatedUser();
        const firstName = user.firstname;
        const lastName = user.lastname;
        const totalPrice =  document.getElementById('totalPrice').value;
        let payementMethod;

        const paypal = document.getElementById('paypal').checked;
        const credit = document.getElementById('credit').checked;
        const debit = document.getElementById('debit').checked;

        if(paypal === true){
          payementMethod = 'payal';
        }
        if(credit === true){
          payementMethod = 'credit';
        }
        if(debit === true) {
          payementMethod = 'debit';
        }
        
        let order;
        try {
            const options = {
                method: 'POST',
                body: JSON.stringify({
                  "firstName": firstName,
                  "lastName" : lastName,
                  "payementMethod":payementMethod,
                  "totalPrice" : totalPrice,
                }),
                headers: {
                  'Content-Type': 'application/json',
                },
              };
            console.log(" ORDERLIBRARY TEST2 ");

            // const reponse = await fetch(`${process.env.API_BASE_URL}/order/addOrder`, options);
            const reponse = await fetch(`${process.env.API_BASE_URL}/order/addOrder`, options);
            console.log("résultat reponse " , reponse)
      
            if (!reponse.ok) {
              throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
            }
            
            order =  reponse.json();
          } catch (err) {
            console.error('error: ', err);
          }

          
          console.log(" ORDERLIBRARY TEST3 ");
          return order;
    
    }

    async getAllOrder(){
      let  allOrders;
      try {
          const reponse = await fetch(`${process.env.API_BASE_URL}/order/`);
          console.log("résultat reponse " , reponse)
    
          if (!reponse.ok) {
            throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
          }
          allOrders =  await reponse.json();
        } catch (err) {
          console.error('error: ', err);
        }
        return allOrders;
    }

}
export default OrderLibrary;
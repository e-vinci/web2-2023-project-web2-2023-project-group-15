/* eslint-disable class-methods-use-this */
import { getAuthenticatedUser } from "../utils/auths";
// import {getCartTotal} from "../utils/shoppingCart";
// import Navigate from "../Components/Router/Navigate";

class OrderLibrary{

   
     async createOrder(){

        console.log(" ORDERLIBRARY TEST1 ");
        const user = getAuthenticatedUser();
        const userName = user.username;
        // const totalPrice =  getCartTotal();
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
                  "userName": userName,
                  "payementMethod":payementMethod,
                }),
                headers: {
                  'Content-Type': 'application/json',
                },
              };
            console.log(" ORDERLIBRARY TEST2 ");

            const reponse = await fetch(`/api/order/addOrder`, options);
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

}
export default OrderLibrary;
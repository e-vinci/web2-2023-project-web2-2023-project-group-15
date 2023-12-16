/* eslint-disable class-methods-use-this */
import { getAuthenticatedUser } from "../utils/auths";
import {getCartTotal} from "../utils/shoppingCart";
// import Navigate from "../Components/Router/Navigate";

class OrderLibrary{

   
     async createOrder(){

        const user = getAuthenticatedUser();
        const {id} = user;
        const firstName = user.firstname;
        const lastName = user.lastname;
        const totalPrice =  getCartTotal();
                
        const date= new Date();

        
        const year = date.getFullYear();
        const month = date.getMonth() + 1; 
        const day = date.getDate();

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
                  "buyerId" : id,
                  "firstName": firstName,
                  "lastName" : lastName,
                  "totalPrice" : totalPrice,
                  "payementMethod":payementMethod,
                  "day" : day,
                  "month" : month,
                  "year" : year,
                  
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

    static async getOrdersFromUserId(id){
      let  orders='';
      const url =`${process.env.API_BASE_URL}/order/getOrdersOfUser/`
      try {
          const reponse = await fetch(url+id);
          console.log("résultat reponse " , reponse)
    
          if (!reponse.ok) {
            throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
          }
          orders =  await reponse.json();
        } catch (err) {
          console.error('error: ', err);
        }
        return orders;
  }

}
export default OrderLibrary;
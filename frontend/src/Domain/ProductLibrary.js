/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import Navigate from "../Components/Router/Navigate";

class ProductLibrary{
    
    static async getAllProducts(props){
        let  allProducts='';
        const url ='/api/product?';
        try {
            const reponse = await fetch(url+props);
            console.log("résultat reponse " , reponse)
      
            if (!reponse.ok) {
              throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
            }
            allProducts =  await reponse.json();
          } catch (err) {
            console.error('error: ', err);
          }
          return allProducts;
    }

    async getProductById(id){
      let  product='';
        const url = '/api/product/getProduct'
        try {
            const reponse = await fetch(url+id);
            console.log("résultat reponse " , reponse)
      
            if (!reponse.ok) {
              throw new Error(`fetch error : ${reponse.status}${reponse.statusText}`);
            }
            product =  await reponse.json();
          } catch (err) {
            console.error('error: ', err);
          }
          return product;
    }
}
export default ProductLibrary;

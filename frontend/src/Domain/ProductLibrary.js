/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import Navigate from "../Components/Router/Navigate";

class ProductLibrary{
    
    static async getAllProducts(props){
        let  allProducts='';
        const url ='/api/products?';
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

    static async renderAllProductsByCategory(param){
      let productByCatgeries ='';
      const url = `api/products?category=${param}`
        try{
          const response = await fetch(url)

          if (!response.ok) {
            throw new Error(`fetch error : ${response.status}${response.statusText}`);
          }
          productByCatgeries = response.json();
        }catch (err) {
          console.error('error: ', err);
        }
        return productByCatgeries;
    }

    static async getProductByName(param){
      let product = '';
      const url = 'api/products?name='
      try{
        const response = await fetch(url+param);
      
        if (!response.ok) {
          throw new Error(`fetch error : ${response.status}${response.statusText}`);
        }
        product = response.json();
        console.log(product);
      }catch (err) {
        console.error('error: ', err);
      }

      return product[0];
    }

}
export default ProductLibrary;

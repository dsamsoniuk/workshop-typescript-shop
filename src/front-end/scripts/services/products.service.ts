import { ProductList } from "../../../share/interfaces/product-list.interface";
import { makeRequest } from "../../../make-request";
import { RequestError } from "../common/request-error";

const productsUrl = 'http://localhost:4000/products';

class ProductsService {
    async getProducts() {
        try {
            // debugger;
            return await makeRequest<ProductList>(productsUrl);
        } catch(err) {
            console.log(err.name);
            throw new RequestError(500);
            return [];Error
        }
        
    }
   
}

export const Products = new ProductsService();
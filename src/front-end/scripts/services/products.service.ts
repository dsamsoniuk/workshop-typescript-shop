import { ProductList } from "../interfaces/product-list.interface";
import { makeRequest } from "../../../make-request";
import { RequestError } from "../common/request-error";

const productsUrl = 'http://my-json-server.typicode.com/piecioshka/fakes/products';

class ProductsService {
    async getProducts() {
        try {
            return await makeRequest<ProductList>(productsUrl);
        } catch(err) {
            console.log(err.name);
            throw new RequestError(500);
            return [];Error
        }
        
    }
   
}

export const Products = new ProductsService();
import { ProductList } from "../interfaces/product-list.interface";
import { makeRequest } from "../../../make-request";

const productsUrl = 'http://my-json-server.typicode.com/piecioshka/fakes/products';

class ProductsService {
    async getProducts() {
        return makeRequest<ProductList>(productsUrl);
    }
   
}

export const Products = new ProductsService();
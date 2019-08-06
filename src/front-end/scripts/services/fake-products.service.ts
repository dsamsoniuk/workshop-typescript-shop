import products from '../../fakes/products.json';
import { ProductList } from '../interfaces/product-list.interface.js';

class FakeProductsService {
    async getProducts(): Promise<ProductList>{
        return products;
    }
}

export const Products = new FakeProductsService();
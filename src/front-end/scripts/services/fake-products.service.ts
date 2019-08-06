import products from '../../../share/fakes/products.json';
import { ProductList } from '../../../share/interfaces/product-list.interface.js';

class FakeProductsService {
    async getProducts(): Promise<ProductList>{
        return products;
    }
}

export const Products = new FakeProductsService();
import { ProductList } from "../interfaces/product-list.interface"
const productsUrl = '/products';

class ProductsService {
    async getProducts() {
        return await this.makeRequest<ProductList>(productsUrl);
    }
    async makeRequest<T>(url: string): Promise<T> {
        const response = await fetch(url);
        return await response.json();
    }
}

export const Products = new ProductsService();
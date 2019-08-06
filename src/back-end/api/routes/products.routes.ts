import express from 'express';
import { ProductList } from "../../../share/interfaces/product-list.interface";
import fakeProducts from '../../../share/fakes/products.json';

const router = express.Router();
const products: ProductList = [].concat(fakeProducts);

router.get('/products', (req: Express.Request, res: express.Response) => {
    res.json( products );
});

export function setupProductsRoutes(app: express.Application) {
    app.use(router);
}
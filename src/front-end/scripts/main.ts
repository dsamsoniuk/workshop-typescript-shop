import '../index.html';
import '../style/main.css';
import { Products } from './services/fake-products.service';
import { ProductComponent } from './components/product.component';

async function main() {
    const $target = document.querySelector<HTMLDivElement>('.products-container');
    const products = await Products.getProducts();
    products.forEach((product) => {
        const p = new ProductComponent(product);
        p.render($target);
    });

}

main();
import '../index.html';
import '../style/main.css';
import { Products } from './services/products.service';
// port { Products } from './services/fake-products.service';
import { ProductComponent } from './components/product.component';

async function main() {

    const $target = document.querySelector<HTMLDivElement>('.products-container');
    const products = await Products.getProducts();

    products.forEach((product) => {
        const p = new ProductComponent(product);
        p.render($target);
    });

}

main()
    .then(() => {
        //success
        console.log("Jest git");
    })
    .catch(() => {
        //error
        console.log("Jakis blad w catch jestem");
        
    })
    .finally(() => {
        console.log('aplikacja jedzie');
        
    })
    ;
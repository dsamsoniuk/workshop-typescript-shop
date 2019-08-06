import { Product } from "../interfaces/product.interface";

export class ProductComponent {
    constructor (public product: Product) {}
    render ($target: HTMLElement): void {
        const $template = document.querySelector<HTMLTemplateElement>('#product-template');
        const $element = $template.content.cloneNode(true) as HTMLTemplateElement;
        $element.querySelector<HTMLImageElement>('.product-image').src = this.product.imageUrl;
        $element.querySelector('.product-title').textContent = this.product.name;
        $element.querySelector('.product-description').textContent = this.product.description;

        $target.append($element);
    }
}

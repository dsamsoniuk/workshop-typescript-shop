import { Product } from "../../../share/interfaces/product.interface";
import { Component } from "./component";

export class ProductComponent extends Component{
    constructor (public product: Product) {
        super();
    }
    render ($target: HTMLElement): void {
        const $element = this.getTemplate<HTMLDivElement>('#product-template');
        // const $template = document.querySelector<HTMLTemplateElement>('#product-template');
        // const $element = $template.content.cloneNode(true) as HTMLTemplateElement;
        $element.querySelector<HTMLImageElement>('.product-image').src = this.product.imageUrl;
        $element.querySelector('.product-title').textContent = this.product.name;
        $element.querySelector('.product-description').textContent = this.product.description;

        $target.append($element);
    }
}

export abstract class Component {
    protected getTemplate<T extends Node>(selector: string): T {
        const $template = document.querySelector<HTMLTemplateElement>('#product-template');
        // const $element = $template.content.cloneNode(true) as HTMLTemplateElement;
        return $template.content.cloneNode(true) as T;
    }
}
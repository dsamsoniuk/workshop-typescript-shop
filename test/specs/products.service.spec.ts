import {Products} from '../../src/front-end/scripts/services/products.service';


type Matchers = {
    toEqual(itm: any):void;
}
declare function describe(name: string, handler: Function): void;
declare function it(name: string, handler: Function): void;
declare function expect(elm:any): Matchers;

describe('Products', () => {
    describe("getProduct", () => {
        
        it("should be funct", () => {
            expect(typeof Products.getProducts).toEqual("function");
        });
        
        it("should be object", () => {
            expect(typeof Products).toEqual("object");
        });

    });
});
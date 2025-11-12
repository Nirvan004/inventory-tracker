export declare class Product {
    sku: string;
    name: string;
    price: number;
    constructor(sku: string, name: string, price: number);
    displayDetails(): string;
    getPriceWithTax(): number;
}
export interface DiscountableProduct {
    applyDiscount(percentage: number): number;
}
//# sourceMappingURL=Product.d.ts.map
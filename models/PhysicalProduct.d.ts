import { Product } from './Product';
export declare class PhysicalProduct extends Product {
    weight: number;
    constructor(sku: string, name: string, price: number, weight: number);
    getPriceWithTax(): number;
    get formattedWeight(): string;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map
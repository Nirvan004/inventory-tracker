import { Product } from './Product';
import type { DiscountableProduct } from './Product';
export declare class PhysicalProduct extends Product implements DiscountableProduct {
    weight: number;
    constructor(sku: string, name: string, price: number, weight: number);
    getPriceWithTax(): number;
    get formattedWeight(): string;
    applyDiscount(percentage: number): number;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map
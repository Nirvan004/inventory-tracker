import { Product } from './Product';
import { calculateTax } from '../utils/taxCalculator';
export class PhysicalProduct extends Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    getPriceWithTax() {
        return calculateTax(this);
    }
    get formattedWeight() {
        return `${this.weight.toFixed(2)} kg`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map
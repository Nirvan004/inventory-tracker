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
    applyDiscount(percentage) {
        if (percentage < 0 || percentage > 1) {
            throw new Error('Discount percentage must be between 0 and 1');
        }
        this.price = this.price * (1 - percentage);
        return this.price;
    }
    applyBulkDiscount(minWeight, bulkDiscount) {
        if (bulkDiscount < 0 || bulkDiscount > 1) {
            throw new Error('Bulk discount percentage must be between 0 and 1');
        }
        if (this.weight >= minWeight) {
            this.price = this.price * (1 - bulkDiscount);
        }
        return this.price;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map
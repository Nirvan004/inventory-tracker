import { Product } from './Product';
import type { DiscountableProduct } from './Product';
import { calculateTax } from '../utils/taxCalculator';

export class PhysicalProduct extends Product implements DiscountableProduct {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }
    override getPriceWithTax(): number {
        return calculateTax(this);
    }
    get formattedWeight(): string {
        return `${this.weight.toFixed(2)} kg`;
    }

    applyDiscount(percentage: number): number {
        if (percentage < 0 || percentage > 1) {
            throw new Error('Discount percentage must be between 0 and 1');
        }
        this.price = this.price * (1 - percentage);
        return this.price;
    }

    applyBulkDiscount(minWeight: number, bulkDiscount: number): number {
        if (bulkDiscount < 0 || bulkDiscount > 1) {
            throw new Error('Bulk discount percentage must be between 0 and 1');
        }

        if (this.weight >= minWeight) {
            this.price = this.price * (1 - bulkDiscount);
        }

        return this.price;
    }
}


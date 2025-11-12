import { Product } from './Product';
import { calculateTax } from '../utils/taxCalculator';

export class PhysicalProduct extends Product {
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
}
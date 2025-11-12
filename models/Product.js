import { calculateTax } from '../utils/taxCalculator';
export class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `Product SKU: ${this.sku}\nName: ${this.name}\nPrice: $${this.price.toFixed(2)}`;
    }
    getPriceWithTax() {
        return calculateTax(this);
    }
}
//# sourceMappingURL=Product.js.map
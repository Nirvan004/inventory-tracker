import { Product } from '../models/Product';
export function calculateTax(product) {
    const taxRate = 0.1;
    const priceWithTax = product.price * (1 + taxRate);
    return priceWithTax;
}
//# sourceMappingURL=taxCalculator.js.map
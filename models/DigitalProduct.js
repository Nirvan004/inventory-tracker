import { Product } from './Product';
export class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        return this.price;
    }
    get formattedFileSize() {
        return `${this.fileSize.toFixed(2)} MB`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map
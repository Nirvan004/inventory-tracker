import { Product } from './Product';
export declare class DigitalProduct extends Product {
    fileSize: number;
    constructor(sku: string, name: string, price: number, fileSize: number);
    getPriceWithTax(): number;
    get formattedFileSize(): string;
}
//# sourceMappingURL=DigitalProduct.d.ts.map
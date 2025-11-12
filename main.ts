import { PhysicalProduct } from './models/PhysicalProduct';
import { DigitalProduct } from './models/DigitalProduct';
import { Product } from './models/Product';

const products: Product[] = [
    new PhysicalProduct('GPU-9060', 'AMD Radeon RX 9060 16GB', 649.99, 1.2),
    new DigitalProduct('VG-0001', 'Silksong (PC Digital Download)', 39.99, 12.5),
];

for (const product of products) {
    console.log(product.displayDetails());

    if (product instanceof PhysicalProduct) {
        console.log(`Weight: ${product.formattedWeight}`);
    } else if (product instanceof DigitalProduct) {
        console.log(`File Size: ${product.formattedFileSize}`);
    }
    console.log(`Final Price (with tax): $${product.getPriceWithTax().toFixed(2)}`);
}


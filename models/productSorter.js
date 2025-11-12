import { Product } from '../models/Product';
export function sortProducts(products, key = 'name', order = 'asc') {
    const sorted = [...products].sort((a, b) => {
        if (key === 'price') {
            return a.price - b.price;
        }
        else if (key === 'name') {
            return a.name.localeCompare(b.name);
        }
        else {
            return 0;
        }
    });
    if (order === 'desc') {
        return sorted.reverse();
    }
    return sorted;
}
//# sourceMappingURL=productSorter.js.map
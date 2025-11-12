import { Product } from '../models/Product';
export type SortKey = 'price' | 'name';
export type SortOrder = 'asc' | 'desc';
export declare function sortProducts(products: Product[], key?: SortKey, order?: SortOrder): Product[];
//# sourceMappingURL=productSorter.d.ts.map
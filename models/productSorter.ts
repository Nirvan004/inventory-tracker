import { Product } from '../models/Product';

export type SortKey = 'price' | 'name';
export type SortOrder = 'asc' | 'desc';

export function sortProducts(
  products: Product[],
  key: SortKey = 'name',
  order: SortOrder = 'asc'
): Product[] {
  const sorted = [...products].sort((a, b) => {
    if (key === 'price') {
      return a.price - b.price;
    } else if (key === 'name') {
      return a.name.localeCompare(b.name);
    } else {
      return 0;
    }
  });

  if (order === 'desc') {
    return sorted.reverse();
  }

  return sorted;
}
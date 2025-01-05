// Implement a function which takes an array of Product and returns unique products sorted by price

type Product = {
  name: string;
  price: number;
};

function filterAndSortProducts(products: Product[]): Product[] {
  // Your code goes here
  const uniqueArr = Array.from(new Set(products));
  const sortedArr = uniqueArr.sort((a, b) => a.price - b.price);
  return sortedArr;
}

module.exports = { filterAndSortProducts };

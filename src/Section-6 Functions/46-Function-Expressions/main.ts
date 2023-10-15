console.log(`*** Function Expressions`);

let fn = function holidaySales(
  product: string,
  sales: number,
  tax: number,
  discount: number
): Sales {
  console.log(`*** Product: ${product}`);
  console.log(`*** Discount: ${discount}`);
  return { sales: sales, count: tax };
};

const ans: Sales = fn("Product", 123, 321, 0);
console.log(`*** ${ans.sales}, ${ans.count}`);

console.log(``);

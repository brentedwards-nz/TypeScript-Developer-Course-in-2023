console.log(`*** Function Declarations`);

function holidaySales(
  product: string,
  sales: number,
  tax: number,
  discount: number
): Sales {
  if (product) console.log(`*** Product: ${product}`);
  if (product) console.log(`*** Tax: ${tax}`);
  return { sales: sales, count: discount };
}

const value: Sales = holidaySales("Holiday", 1, 2, 3);
console.log(`*** ${value.sales}, ${value.count}`);

console.log(``);

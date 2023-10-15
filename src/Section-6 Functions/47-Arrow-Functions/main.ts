console.log(`*** Arrow Functions`);

let arrowFn = (
  product: string,
  sales: number,
  tax: number,
  discount: number
): Sales => {
  console.log(`*** Product: ${product}`);
  console.log(`*** Discount: ${discount}`);
  return { sales: sales, count: tax };
};

const arrowAns: Sales = arrowFn("Arrow Function", 123, 321, 0);
console.log(`*** ${arrowAns.sales}, ${arrowAns.count}`);

console.log(``);

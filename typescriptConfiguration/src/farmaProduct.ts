interface Product {
  name: string;
  price: number;
}

const printProduct = (product: Product): void => {
  console.log(`${product.name}: $${product.price}`);
};

console.log("hello world");

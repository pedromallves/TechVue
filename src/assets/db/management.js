//temporary
import products from "./products.json";

export function getProduct(id) {
  return products.find((p) => p.id === id);
}

export function getProducts(qtt) {
  return products.slice(0, qtt);
}

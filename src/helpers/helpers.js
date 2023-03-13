export function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function addToCart(product) {
  const cart = $cookies.get("cart");
  if (cart) {
    if (!cart.some((p) => p.id === product.id)) {
      cart.push(product);
      $cookies.set("cart", cart);
    }
  } else {
    $cookies.set("cart", [product]);
  }
}

export function getCart() {
  return $cookies.get("cart");
}

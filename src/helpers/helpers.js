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
      product.amount = 1;
      cart.push(product);
      $cookies.set("cart", cart);
      return true;
    } else {
      const index = cart.findIndex((prod) => prod.id === product.id);
      cart[index].amount++;
      $cookies.set("cart", cart);
    }
  } else {
    product.amount = 1;
    $cookies.set("cart", [product]);
    return true;
  }
}

export function getCart() {
  return $cookies.get("cart");
}

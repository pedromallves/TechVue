<template>
  <main>
    <section class="cart" :key="update">
      <div class="container">
        <div class="cart-head">
          <h2 class="title">Produtos adicionados</h2>
          <button class="btn" @click="removeAll">Remover todos</button>
        </div>
        <div class="cart-products">
          <ul class="list" v-if="cart">
            <CartProduct
              v-for="product in cart"
              :product="product"
              @remove="
                total - product.price >= 0
                  ? (total -= product.price)
                  : (total = 0)
              "
              @add="total += product.price"
              @delete="prodDel"
            />
          </ul>
        </div>
      </div>
    </section>
    <section class="payment">
      <div class="container" v-if="cart.length > 0">
        <div class="price">
          <h2 class="title">Resumo</h2>
          <div class="space-between">
            <h3 class="desc">Valor dos produtos:</h3>
            <h3 class="price">{{ values.total }}</h3>
          </div>
          <div class="space-between">
            <h3 class="desc">Valor parcelado:</h3>
            <h3 class="price">10x de {{ values.parcels }}</h3>
          </div>
        </div>
        <div class="purchase">
          <h3 class="desc">valor a vista:</h3>
          <h2 class="price">{{ values.totalWithDiscount }}</h2>
          <button class="btn" @click="buy">Finalizar compra</button>
          <router-link :to="{ name: 'products' }" class="btn"
            >Continuar comprando</router-link
          >
        </div>
      </div>
      <div v-else class="container">
        <h2 class="title">Nenhum Produto adicionado até o momento!</h2>
      </div>
    </section>
  </main>
  <article class="more">
    <MoreProducts @new="reload" />
    <!--event called when adding new product -->
  </article>
</template>

<script setup>
import { ref, reactive } from "vue";
import { formatCurrency } from "../helpers/helpers";
import CartProduct from "../components/CartProduct.vue";
import { computed } from "@vue/reactivity";

/**
 * update action for component if cart is empty or don't have a product that was added
 */
const update = ref(0);
function reload(e) {
  e ? window.location.reload() : update.value++;
}

const cart = reactive($cookies.get("cart") || []);
/** Total value of products */
const total = ref(
  cart.reduce((acc, prod) => acc + prod.price * prod.amount, 0)
);

/**
 * Values formated for currency
 */
const values = computed(() => {
  const parcels = total.value / 10;
  const totalWithDiscount = total.value * 0.9;
  return {
    total: formatCurrency(total.value),
    parcels: formatCurrency(parcels),
    totalWithDiscount: formatCurrency(totalWithDiscount),
  };
});

/**
 * Remove all products from cart
 */
function removeAll() {
  $cookies.remove("cart");
  window.location.reload();
}

/**
 * Simulates the purchase of products
 */
function buy() {
  alert("Compra realizada com sucesso!");
  $cookies.remove("cart");
  window.location.reload();
}

/**
 * Update the total value of the cart when a product is delleted
 */
function prodDel(val) {
  total.value - val >= 0 ? (total.value -= val) : (total.value = 0);
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/cart-view.scss";
</style>

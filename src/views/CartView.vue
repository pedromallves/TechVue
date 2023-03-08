<template>
  <main>
    <section class="cart">
      <div class="container">
        <div class="cart-head">
          <h2 class="title">Produtos adicionados</h2>
          <button class="btn" @click="removeAll">Remover todos</button>
        </div>
        <div class="cart-products">
          <ul class="list">
            <CartProduct
              v-if="product.amount > 0"
              :product="product"
              @add="() => product.amount++"
              @remove="
                () =>
                  product.amount > 1 ? product.amount-- : (product.amount = 1)
              "
              @delete="del(id)"
            />
          </ul>
        </div>
      </div>
    </section>
    <section class="payment">
      <div class="container">
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
    </section>
  </main>
  <article class="more">
    <MoreProducts />
  </article>
</template>

<script setup>
import { reactive } from "vue";
import { formatCurrency } from "../helpers/helpers";
import CartProduct from "../components/CartProduct.vue";
import { computed } from "@vue/reactivity";

const product = reactive({
  id: 1,
  brand: "Nike",
  name: "Nike Air Max 270 React",
  price: 1000,
  amount: 1,
});
const values = computed(() => {
  const total = product.price * product.amount;
  const parcels = total / 10;
  const totalWithDiscount = total * 0.9;
  return {
    total: formatCurrency(total),
    parcels: formatCurrency(parcels),
    totalWithDiscount: formatCurrency(totalWithDiscount),
  };
});
function del(id) {
  product.amount = 0;
}
function removeAll() {
  product.amount = 0;
}
function buy() {
  alert("Compra realizada com sucesso!");
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/cart-view.scss";
</style>

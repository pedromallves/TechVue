<template>
  <li class="product">
    <router-link class="product-content" :to="comp.path">
      <img class="product-image" :src="comp.src" alt="imagem de produto" />
      <h2 class="product-name">{{ props.product.name }}</h2>
      <h2 class="product-price">{{ comp.price }}</h2>
      <p class="product-installments">10x de {{ comp.Installments }}</p>
    </router-link>
    <button class="btn" @click="addToCart">Comprar</button>
  </li>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { formatCurrency } from "../helpers/helpers.js";

const props = defineProps({
  product: {
    id: Number,
    name: String,
    price: Number,
  },
});
const comp = computed(() => {
  const parcels = props.product.price / 10;
  return {
    src: `/src/assets/images/product/product-${props.product.id}.svg`,
    Installments: formatCurrency(parcels),
    price: formatCurrency(props.product.price),
    path: `/products/${props.product.id}`,
  };
});

const addToCart = () => {
  // todo: add to cart
  console.log("adicionado ao carrinho");
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/product.scss";
</style>

<template>
  <li class="product">
    <router-link class="product-content" :to="comp.path">
      <img class="product-image" :src="comp.src" alt="imagem de produto" />
      <h2 class="product-name">{{ props.product.name }}</h2>
      <h2 class="product-price">{{ comp.price }}</h2>
      <p class="product-installments">10x de {{ comp.Installments }}</p>
    </router-link>
    <button v-if="product.availability == 'available'" class="btn" @click="add">
      Comprar
    </button>
  </li>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { formatCurrency, addToCart } from "../helpers/helpers.js";

const emit = defineEmits(["new"]);

const props = defineProps({
  product: {
    id: Number,
    brand: String,
    name: String,
    price: Number,
  },
});

/**
 * Computed component containing the formatted prices and the image path
 */
const comp = computed(() => {
  const parcels = props.product.price / 10;
  return {
    src: `/src/assets/images/product/${props.product.id}/prod-${props.product.id}1.svg`,
    Installments: formatCurrency(parcels),
    price: formatCurrency(props.product.price),
    path: `/products/${props.product.id}`,
  };
});

/**
 * Function to add a product to the cart
 * (it is also used to update the cart)
 */
function add() {
  const test = addToCart(props.product);
  test ? emit("new", true) : emit("new", false);
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/product.scss";
</style>

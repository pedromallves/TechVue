<template>
  <li class="product">
    <router-link class="product-content" to="#">
      <img class="product-image" :src="comp.src" alt="imagem de produto" />
      <h2 class="product-name">{{ props.product.name }}</h2>
      <h2 class="product-value">R$ {{ props.product.value }}</h2>
      <p class="product-installments">
        10x de R$ {{ comp.productInstallments }}
      </p>
    </router-link>
    <button class="product-btn">Comprar</button>
  </li>
</template>

<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  product: {
    id: Number,
    name: String,
    value: Number,
  },
});
const comp = computed(() => {
  return {
    src: `/src/assets/images/product/product-${props.product.id}.svg`,
    productInstallments: props.product.value / 10,
  };
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/product.scss";
</style>

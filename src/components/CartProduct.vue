<template>
  <li class="resume">
    <img class="miniature" :src="comp.src" alt="imagem do produto" />
    <div class="info">
      <h3 class="brand">{{ props.product.brand }}</h3>
      <h2 class="name">{{ props.product.name }}</h2>
    </div>
    <div class="amount">
      <p class="description">Quantidade</p>
      <div class="change-amount">
        <button @click="$emit('remove')" class="amount-btn">&#60;</button>
        <p class="current-amount">{{ props.product.amount }}</p>
        <button @click="$emit('add')" class="amount-btn">&#62;</button>
      </div>
      <button @click="$emit('delete', props.product.id)" class="delete">
        Remover
      </button>
    </div>
    <div class="price">
      <p class="text">Valor total do produto</p>
      <h3 class="current-price">{{ comp.total }}</h3>
    </div>
  </li>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { formatCurrency } from "../helpers/helpers";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const comp = computed(() => {
  return {
    src: `/src/assets/images/product/product-${props.product.id}.svg`,
    total: formatCurrency(props.product.price * props.product.amount),
  };
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/cart-product.scss";
</style>

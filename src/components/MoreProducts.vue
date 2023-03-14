<template>
  <div class="products">
    <div class="products-nav">
      <h2 class="products-title">Outros produtos</h2>
      <router-link :to="{ name: 'products' }" class="btn">
        Ver todos
      </router-link>
    </div>
    <div class="products-section">
      <Product
        v-for="product in products"
        class="product"
        :product="product"
        @new="$emit('new', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import Product from "../components/Product.vue";
import { getProducts } from "../assets/db/management.js";

/**
 * This component is used to get a specific amount of products
 */
const products = reactive(getProducts(3));
</script>

<style lang="scss" scoped>
@use "../assets/styles/more-products.scss";
</style>

<template>
  <main>
    <ul class="products">
      <Product v-for="product in products" :product="product" />
    </ul>
    <div></div>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import Product from "../components/Product.vue";
import { getAllProducts } from "../assets/db/management";

/**
 * This component is used to get all the products
 */
const products = reactive(getAllProducts());
</script>

<style lang="scss" scoped>
@use "../assets/styles/products-view.scss";
</style>
